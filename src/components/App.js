import React, {Suspense, lazy} from "react";
import SearchBar from "./SearchBar";
import "./style.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const App = () => {
  return (
    <div className="ui container">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/" component={About}/>
        </Switch>
      </Suspense>
    </Router>
      <SearchBar />
    </div>
  );
};

export default App;
