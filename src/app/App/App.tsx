import { Header } from "@widgets/Header/Header";
import "@styles/nullstyle.css";
import "@styles/global.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from "@app/router";

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
