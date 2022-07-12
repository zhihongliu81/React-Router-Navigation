import { Route, Switch, NavLink, Redirect, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { loggedIn } from "./components/Stocks";

function App() {
  const history = useHistory();
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };

  return (
    <div className="main">
      <h1>App Component</h1>
      <button onClick={handleClick}>Home</button>
      <nav className="comp nav">
        <ul>
          <li>
            <a href="/movies">Anchor</a>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/stocks"
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          {loggedIn ? <Stocks /> : <Redirect to="/not-logged-in" />}
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/not-logged-in">
          <h1>You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
