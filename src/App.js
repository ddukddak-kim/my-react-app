import { Route, Switch } from 'react-router-dom';

import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import AllMeetupPage from './pages/AllMeetup';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
