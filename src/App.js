import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Admin from './pages/Admin/Admin';



const App = () => {
  return (
    <Router>
      <Switch>
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
