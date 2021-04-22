import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Invoice from "./components/Invoice/Invoice";

function App() {
  return (
    <Router>
      <div className="App"></div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/invoice/:id" component={Invoice} />
      </Switch>
    </Router>
  );
}

export default App;
