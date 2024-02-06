import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import { Show } from "./pages/Show";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home></Home>}></Route>
        <Route path={routes.show} element={<Show></Show>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
