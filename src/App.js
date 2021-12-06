import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import UserListing from "./containers/UserListing";
import UserDetails from "./containers/UserDetails";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Login} />          
          <Route path="/users" component={UserListing} />
          <Route path="/user/:userId" component={UserDetails} />
          <Route>404 Error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
