import './App.css';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
     
     <Router>
     <Header></Header>
      <Switch>
        <Route exact path="/"
         component={Home}
        />
        <Route path="/home"
        component= {Home}
        />
        <Route exact path="/about"
          component= {About}
        />
        <Route exact path="/about/culture"
          component= {Culture}
        />
        <Route path="/friends"
          component= {Friends}
        />
        <Route path="/post/:postId"
          component= {PostDetail}
        />
        <Route path="/friend/:friendId"
          component= {FriendDetail}
        />
        <Route path="*"
          component= {NotFound}
        />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
