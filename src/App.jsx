import { Header } from "./components/Header";
import { FeedPage } from "./pages/Feed";
import { GlobalStyle } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <FeedPage />

      <ToastContainer />
    </>
  );
}
