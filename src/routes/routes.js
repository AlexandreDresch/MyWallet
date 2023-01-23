import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { NewEntry } from "../pages/NewEntry";
import { NewWithdraw } from "../pages/NewWithdraw";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route element={<SignIn/>} path="/" />
          <Route element={<SignUp/>} path="/cadastro" />
          <Route element={<Home/>} path="/home" />
          <Route element={<NewEntry/>} path="/nova-entrada" />
          <Route element={<NewWithdraw/>} path="/nova-saida" />
        </Switch>
      </BrowserRouter>
    );
  }