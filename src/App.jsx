import { Header } from "./components/Header";
import { FeedPage } from "./pages/Feed";
import { GlobalStyle } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostsProvider } from "./hooks/usePosts";

export function App() {
  return (
    <PostsProvider>
      <GlobalStyle />

      <Header />
      <FeedPage />

      <ToastContainer />
    </PostsProvider>
  );
}
