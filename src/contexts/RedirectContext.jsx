import { createContext } from 'react';

const RedirectContext = createContext({
  redirectUrl: null,
  setRedirectUrl: () => {},
});

export default RedirectContext;