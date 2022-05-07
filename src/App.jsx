import { Header } from "./components/Header";
import { TextArea } from "./components/TextArea";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <div style={{ width: "50%" }}>
        <TextArea />
      </div>
    </>
  );
}
