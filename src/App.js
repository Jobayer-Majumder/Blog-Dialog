import Home from './pages/home/Home'
import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import DetailsBlog from './pages/DetailsBlog/DetailsBlog';
import Auth from './pages/Auth/Auth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




export const UserContext = createContext()

const App = () => {
  const [loggedInUser, setLoggedInUser] = React.useState([])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path='/blogDetails/:id'>
            <DetailsBlog />
          </Route>
          <PrivateRoute path='/admin'>
              <Admin />
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <h1>Page note found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
