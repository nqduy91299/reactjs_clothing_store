import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./components/commons/PageNotFound";
import Home from "./components/client/Home";
import Detail from "./components/client/Detail";
import Purchase from "./components/client/Purchase";
import TrackingOrder from "./components/client/TrackingOrder";

function App() {
  return (
    <Router>

      <Switch>
        {/* <Route path="/admin" component={ContainerAdmin} /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/:idItem/detail" component={Detail} />
        <Route exact path="/purchase" component={Purchase} />
        <Route exact path="/tracking" component={TrackingOrder} />

        <Route exact path="/opp" component={PageNotFound} />
        <Route >
          <Redirect to="opp" />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
