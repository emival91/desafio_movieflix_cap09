import { ReactComponent as LoginImage } from "../../assets/images/login.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

import "./styles.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do filme</p>
        <LoginImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Auth;
