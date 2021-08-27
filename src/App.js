import { BrowserRouter, Route } from 'react-router-dom';
import AddComment from './components/AddComment/AddComment';
import Comments from './components/Comments/Comments';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:city">
          <Weather />
        </Route>
        <Route exact path="/:city/comments">
          <Comments />
          <AddComment />
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
