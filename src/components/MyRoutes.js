import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Persons from './Users/Users';

const MyRoutes = () => {
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/users' component={Persons} />
      <Route path='/' component={Home} />
    </Switch>
  );
};

export default MyRoutes;
