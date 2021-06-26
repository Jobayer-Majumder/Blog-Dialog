import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import DetailsBlog from './pages/DetailsBlog/DetailsBlog';
import Auth from './pages/Auth/Auth';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Auth />
        </Route>
        <Route path='/blogDetails/:id'>
          <DetailsBlog />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <h1>Page note found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
