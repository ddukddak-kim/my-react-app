import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetUp</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
