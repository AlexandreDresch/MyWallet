import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route element={<SignIn/>} path="/" />
          <Route element={<SignUp/>} path="/cadastro" />
          
        </Switch>
      </BrowserRouter>
    );
  }