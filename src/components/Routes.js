import { Switch, Route } from 'react-router-dom';
// import loadable from 'react-loadable';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Persons from '../components/Users/Users';
// const LoadableComponent = loadable(
//   () => import('../components/Loadable/Loadable'),
//   {
//     fallback: <h1>Loading...</h1>,
//   }
// );

const Routes = () => {
  return (
    <Switch>
      {/* <Route path='/loadable' component={LoadableComponentv} /> */}
      <Route path='/about' component={About} />
      <Route path='/users' component={Persons} />
      <Route path='/' component={Home} />
    </Switch>
  );
};

export default Routes;
