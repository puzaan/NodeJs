
import './App.css';
import  Home  from './component/pages/home/Home';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from './component/pages/UserForm/UserForm';
import User from './component/pages/User/User';
import SingleUser from './component/pages/singleUser/SingleUser';

function App() {
  return (
<Router>
 <Topbar />
 <div className="container">
 <Sidebar />
 <Switch>
   <Route exact path="/">
   <Home />
   </Route>
   <Route path="/usersform">
   <UserForm />
   </Route>
   <Route path="/users">
   <User />
   </Route>
   <Route path="/user/:id">
   <SingleUser />
   </Route>
 </Switch>

 </div>
 </Router>
  );
}


export default App;
