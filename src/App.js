import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
