import { Route, Switch } from 'react-router-dom';

import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import AllMeetupPage from './pages/AllMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;
