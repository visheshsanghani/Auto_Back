import React from 'react';

import { Router, Route } from "react-router-dom";

import history from "./history";

import FirstPage from './components/FirstPage';
import CredentialPage from './components/CredentialsPage';
import Test_Select from './components/Test_Select';
import Common from './components/Common';
import Final_Page from './components/Final_Page';
import RegisterPage from './components/RegisterPage';
import AdminLogin from './components/Admin/AdminLogin';
import AdminHome from './components/Admin/AdminHome';
import AdminAdd from './components/Admin/AdminAdd';

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={FirstPage} />
          <Route path="/credentials" exact component={CredentialPage} />
          <Route path="/test" exact component ={Test_Select} />
          <Route path="/common" exact component = {Common} />
          <Route path="/final" exact component = {Final_Page} />
          <Route path="/register" exact component = {RegisterPage} />
          <Route path="/admin" exact component = {AdminLogin} />
          <Route path="/adminhome" exact component = {AdminHome} />
          <Route path ="/adminadd" exact component = {AdminAdd} />
        </div>
      </Router>
    </div>
  );
}

export default App;
