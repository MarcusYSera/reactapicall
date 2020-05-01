import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import BlogPost from './blog/BlogPost';
import Home from './Home';
import './style.css';

// const SearchBar = lazy(() => import('./SearchBar'));
// const BlogPost = lazy(() => import('./blog/BlogPost'));

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID -NdQzxuQDJguGVhl5A16dsGK4FwNANDdEpe3NYQ2-PY',
      },
    });
  }

  render() {
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
                <li>
                  <Link to="./Home">Home</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/SearchBar">
                <SearchBar onSubmit={this.onSearchSubmit} />
              </Route>
              <Route path="/BlogPost">
                <BlogPost />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
