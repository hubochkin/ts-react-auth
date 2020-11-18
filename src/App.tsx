//Finally in App.tsx
import React, { useEffect } from "react";
import "./App.css";
import {  Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Index from "./components/index";
import GuestRoute from "./utils/GuestRoute";
import PrivateRoute from "./utils/PrivateRoute";
//redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { CheckAuthentication } from "./utils/CheckAuthentication";
const App: React.FC = () => {
  useEffect(() => {
    CheckAuthentication();
  }, []);
  return (
    <div className="App">
   
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              
              <GuestRoute exact path="/login" component={Login} />
              <PrivateRoute  path="/" component={Index} />
            </Switch>
          </BrowserRouter>
        </Provider>
     
    </div>
  );
};
export default App;
