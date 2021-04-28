import {Route, useHistory, useLocation} from "react-router-dom";

import Auth from './components/Auth';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/login">
        <Auth/>
      </Route>
      <Route exact path="/sign-up">
        <SignUp/>
      </Route>
    </div>
  );
}

export default App;
