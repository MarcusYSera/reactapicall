import React from 'react';
import unsplash from './../api/unsplash';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchBar from './searchbar/SearchBar';
import BlogPost from './blog/BlogPost';
import Card from './blog/Card';
import ImageList from './search/ImageList';
import Home from './home/Home';
import About from './about/About';
import Video from './video/Video';
import './style.css';

// const SearchBar = lazy(() => import('./SearchBar'));
// const BlogPost = lazy(() => import('./blog/BlogPost'));

class App extends React.Component {
  state = { images: [], label: null };

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
                  <Link to="/SearchBar">Image</Link>
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
                <li>
                  <Link to="/Video">Video</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/SearchBar">
                <SearchBar onSubmit={this.onSearchSubmit} labelForText="Image" />
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
              <Route path="/Video">
                <Video />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
