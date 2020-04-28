import React, {Suspense, lazy} from "react";
import SearchBar from "./SearchBar";
import BlogPost from "./blog/BlogPost";
import "./style.css";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// const SearchBar = lazy(() => import('./SearchBar'));
// const BlogPost = lazy(() => import('./blog/BlogPost'));

const App = () => {
  return (
    <div className="ui container">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/SearchBar">Search Bar</Link>
            </li>
            <li>
              <Link to="/BlogPost">Blog Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/SearchBar">
            <SearchBar />
          </Route>
          <Route path="/BlogPost">
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
};

export default App;
