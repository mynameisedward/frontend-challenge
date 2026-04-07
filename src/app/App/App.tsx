import { Header } from "@widgets/Header/Header";
import "@styles/nullstyle.css";
import "@styles/global.css";
import { BrowserRouter } from "react-router";
import { AppRouter } from "@app/router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
