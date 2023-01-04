import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
  const [signIn, setSignIn] = useState(true);
  const [session, setSession] = useState({});

  useEffect(() => {
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    if (user) {
      setSession(user); 
    }
  }, [signIn]);

  const logOut = async() => {
    localStorage.removeItem("user");
    setSession(!session)
    setSignIn(false)
    router.push("/");
  };

  const exposed = {session, signIn, logOut, setSignIn};

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
