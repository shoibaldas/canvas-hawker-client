import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Provider from "../context/user";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <NavBar></NavBar>
        <Component {...pageProps} />
        <Toaster />
      </Provider>
    </>
  );
}
