import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MenuAppBar from "./header/index";
import { logoutUser } from "../redux/actions/userActions";
import SimpleContainer from "./container";
import MainPage from "./pages/main";
import CompanyPage from "./pages/company";
import { Switch, Route } from "react-router-dom";

function Example(props: any) {


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.UI.errors) {
      setErrors(props.UI.errors);
    }
    setLoading(props.UI.loading);
  }, [props.UI]);

  return (
    <div>
      <MenuAppBar user={props.user}></MenuAppBar>
      <SimpleContainer>
        <Switch>
          <Route path="/:id" component={CompanyPage} />
          <Route path="/" component={MainPage} exact />
        </Switch>
      </SimpleContainer>
    </div>
  );
}

const MapStateToProps = (state: any) => {
  return {
    user: state.user,
    UI: state.UI,
  };
};
const MapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser,
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(Example);
