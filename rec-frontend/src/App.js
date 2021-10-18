import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        <Switch>
          <Route exact path ="/">
        <Login/> 
          </Route>
          <Route exact path ="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
