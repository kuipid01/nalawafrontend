/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";

const Dahboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(1);
  const [productForm, setProductForm] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);
  const { userLoggedIn } = useContext(UserContext);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Faruq muhammaad",
      email: "faruqmuhammaad@gmail.com",
      image:
        "https://images.unsplash.com/photo-1616880859986-096ccc4dd26f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "SSagzy",
      email: "sagzy4u@gmail.com ",
      image:
        "https://images.unsplash.com/photo-1594564190328-0bed16a89837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      name: "Kuipid Adegoke",
      email: "kuipid@gmail.com",
      image:
        "https://images.unsplash.com/photo-1584713945776-55f3daca7a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnZXJpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const [usersLoaded, setUsersLoaded] = useState([]);
  const [loginValues, setLoginValues] = useState({
    username: "",
    token: "",
    expiration: 0,
  });
  //  FETCHINGCATEGORIES
  const queryClient = useQueryClient();
  const fetchCats = async () => {
    const response = await axios.get("http://kuipid.eu-4.evennode.com/api/categories/");
    return response.data;
  };
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["cats"],
    queryFn: fetchCats,
  });

  useEffect(() => {
    // Fetch users from the server-side API
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUsersLoaded(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  // END FETCHING CATEGORIES
  //Fetching Products
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://kuipid.pythonanywhere.com/api/products/"
    );
    return response.data;
  };
  const {
    data: Products,
    isFetching: isFetchingProducts,
    isLoading: isLoadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //end fetching products
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://kuipid.pythonanywhere.com/api/products/",
          {
            name: name,
            price: price,
            description: description,
            category: category,
            quantity: quantity,
            image: image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
      toast.success("Product Created succesfully");
      setProductForm(false);
      setDescription("");
      setName("");
      setPrice("");
      setQuantity("");
      setImage(null);
    } catch (err) {
      console.log(err);
    }
  };

  //for adminLogin beginning
  useEffect(() => {
    const storedLoginValues = JSON.parse(localStorage.getItem("loginValues"));
    if (storedLoginValues && Date.now() < storedLoginValues.expiration) {
      setLoginValues(storedLoginValues);
      setAdminLogged(true);
    }
  }, []);

  // Update login values and store in localStorage
  const handleLogin = (username, token) => {
    if (
      (username === "samad" && token === "samad") ||
      (username === "manager" && token === "manager")
    ) {
      const expiration = Date.now() + 900000; // 15 minutes in milliseconds
      const updatedLoginValues = { username, token, expiration };
      setLoginValues(updatedLoginValues);
      localStorage.setItem("loginValues", JSON.stringify(updatedLoginValues));
      setAdminLogged(true);
    } else {
      alert(
        "Check values entered or go to login button because you might not be an admin or manager"
      );
    }
  };
  // Clear login values from state and localStorage
  const handleLogout = () => {
    setLoginValues({ username: "", token: "", expiration: 0 });
    localStorage.removeItem("loginValues");
  };

  const handleDel = async (id) => {
    try {
      axios
        .delete(`https://kuipid.pythonanywhere.com/api/products/${id}`)
        .then((response) => {
          console.log(response);
          // handle response
        });
      toast.success(`Product ${id} Deleted succesfully`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!adminLogged)
    return (
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-blue-500">
        <h1 className=" capitalize text-gray-300 text-2xl mb-3">
          Please Login to access farm owner page
        </h1>
        <div className="flex w-full sm:w-1/2 justify-center items-center p-3">
          <div className="flex w-full sm:w-2/3 border border-green-300 p-2 sm:p-5 flex-col">
            <div className="flex mb-3 flex-col text-gray-800">
              <input
                className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 "
                onChange={(e) =>
                  setLoginValues({ ...loginValues, username: e.target.value })
                }
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="flex relative flex-col">
              <input
                className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 mb-4"
                name="password"
                placeholder="Enter password"
                id="password"
                onChange={(e) =>
                  setLoginValues({ ...loginValues, token: e.target.value })
                }
              />
            </div>
            <button
              onClick={() =>
                handleLogin(loginValues.username, loginValues.token)
              }
              className=" bg-green-500 w-full py-3 text-white uppercase"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="h-fit relative flex flex-col ">
      <ToastContainer />
      <h1 className="px-10">
        Welcome {loginValues.username === "samad" ? "Mr Samad (Admin) " : ""}{" "}
      </h1>
      <div className="flex w-full h-fit px-4 sm:px-10 ">
        {" "}
        <button
          className="p-2 border-gray-500 text-white bg-green-600 filter mt-5 border "
          onClick={() => setProductForm(!productForm)}
        >
          Add Product{" "}
        </button>{" "}
      </div>

      <div className="w-full px-8 relative flex flex-col  h-fit min-h-screen sm:flex-row pt-5 justify-start items-start">
        {productForm && (
          <form
            className="w-full   left-10  z-30 bg-gray-300 p-5 sm:w-[70%]"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium text-sm text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control border p-2 border-gray-200 w-full"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block font-medium text-sm text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control p-2 border border-gray-200 w-full"
                placeholder="Enter product price"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block font-medium text-sm text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control p-2  border border-gray-200 w-full"
                placeholder="Enter product quantity"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block font-medium text-sm text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="form-control border p-2 border-gray-200 w-full"
              />
            </div>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {" "}
              {data?.map((btn) => (
                <option key={btn.name} value={btn.id}>
                  {" "}
                  {btn.name}{" "}
                </option>
              ))}
            </select>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block font-medium text-sm text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control p-2 border border-gray-200 w-full"
                rows="4"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-white h-[40px]  "
            >
              Submit
            </button>
          </form>
        )}

        {isLoadingProducts && (
          <div className="mt-10 w-full min-h-[60vh] flex justify-center items-center ">
            <div className=" w-[60px] h-[60px] rounded-full rotate-180 border-2 border-green-300"></div>
          </div>
        )}
        {Products && (
          <div className="sm:px-10 px-2 flex gap-3 w-full flex-col  justify-evenly items-center ">
            {Products.map((product) => (
              <div
                className="flex border border-gray-600 p-2 items-center  h-[70px] w-full  shadow-lg shadow-grey-500"
                key={product.id}
              >
                <img
                  src={product.image}
                  className="w-[50px] mr-4 h-full"
                  alt=""
                />
                <p>{product.name}</p>
                <button
                  className="py-0 px-2 ml-10 bg-red-500 text-white"
                  onClick={() => handleDel(product.id)}
                >
                  DEL
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {usersLoaded.length !== 0 && (
        <div className="w-full py-3 bg-gray-100 h-fit px-10">
          <h1 className=" text-gray-900 nb-5 text-3xl">
            ( {usersLoaded.length} ) Users List And Informations
          </h1>
          {usersLoaded.map((users) => (
            <div
              className="w-full hover:bg-gray-300 transition-all h-fit  flex min-h-[100px] gap-5  items-center   p-1 px-4 "
              key={users.uid}
            >
              {/* <img
              src={users.image}
              className="h-[70%] rounded w-[60px] object-cover"
              alt=""
            /> */}<div className="w-[30px] h-[3px] bg-green-700"></div>
              <div className="flex flex-col">
                <p className='text-[12px] text-green-700 nb-2 font-bold'>
                  <span>User Id (Visible only to admin)</span>{" "}
                  <small> {users.uid} </small>{" "}
                </p>

                <small>{users.email}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dahboard;
