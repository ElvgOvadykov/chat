import {Route} from "react-router-dom";

import Auth from './components/Auth';
import Home from "./components/Home";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/login" component={Auth}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/im" component={Home}/>
    </div>
  );
}

export default App;
