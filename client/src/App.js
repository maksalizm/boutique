import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/topics">
            <Topics/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}


function Topics() {
  let match = useRouteMatch();
  
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/12345`}>
            12345
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let {topicId} = useParams();
  return <h3>Requested topic ID: {topicId}</h3>
}

export default App;