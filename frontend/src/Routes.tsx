import { Router, Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
// import MovieDetails from "./pages/MovieDetails";
import history from "./util/history";
import Auth from "./pages/Auth";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

const Routes = () => {
    return(
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Auth />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId" >
            <MovieDetails />
          </Route>
          <Redirect from="/reviews/:movieId" to="/" exact />
          <Route path="/reviews/:movieId" >
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    );
}
export default Routes;