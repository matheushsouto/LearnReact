import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entrar" element={<Login />}></Route>
        <Route path="/pagina-inicial" element={<Dashboard />}></Route>
        <Route
          path="*"
          element={<Navigate to="/pagina-inicial"></Navigate>}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};
