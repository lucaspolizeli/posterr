import { Header } from "./components/Header";
import { FeedPage } from "./pages/Feed";
import { GlobalStyle } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostsProvider } from "./hooks/usePosts";
import { BrowserRouter as Router } from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: "/",
});

export function App() {
  return (
    <Router history={history}>
      <PostsProvider>
        <GlobalStyle />

        <Header />
        <FeedPage />

        <ToastContainer />
      </PostsProvider>
    </Router>
  );
}
