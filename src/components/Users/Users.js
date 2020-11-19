import { Link, Switch, Route } from 'react-router-dom';
import UserOne from './UserOne/UserOne';
import UserTwo from './UserTwo/UserTwo';

const Persons = () => {
  return (
    <section className='home'>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to='/users/userone'>User One</Link>
        </li>
        <li>
          <Link to='/users/usertwo'>User Two</Link>
        </li>
      </ul>

      <Switch>
        <Route path='/users/userone' component={UserOne} />
        <Route path='/users/usertwo' component={UserTwo} />
      </Switch>
    </section>
  );
};
export default Persons;
