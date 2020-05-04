import React from 'react';
import unsplash from './../api/unsplash';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchBar from './search/SearchBar';
import BlogPost from './blog/BlogPost';
import Card from './blog/Card';
import ImageList from './search/ImageList';
import Home from './home/Home';
import About from './about/About';
import './style.css';

// const SearchBar = lazy(() => import('./SearchBar'));
// const BlogPost = lazy(() => import('./blog/BlogPost'));

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

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
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/SearchBar">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
              </Route>
              <Route path="/BlogPost">
                <Card>
                  <BlogPost />
                </Card>
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/About">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
