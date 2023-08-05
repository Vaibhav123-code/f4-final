// App.js
import React,{useRef} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PostDetail from './Components/PostDetail';
import Home from './Components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={PostDetail} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
