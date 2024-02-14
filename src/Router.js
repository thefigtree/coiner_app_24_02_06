import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import { Show } from "./pages/Show";
import { Header } from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path={routes.home} element={<Home></Home>}></Route>
        <Route path={routes.show} element={<Show></Show>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
