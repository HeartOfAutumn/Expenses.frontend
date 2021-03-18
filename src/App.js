import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { userAuthenticated } from './app/authenticationSlice';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token }));
    }
  }, []);

  return <BrowserRouter>
    <Navbar />

    <Switch>
      <Route exact path='/' render={() => (isLoggedIn ? <HomePage /> : <SignUpPage />)} />
      <Route path='/signup' render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
      <Route path='/signin' render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
      <Route component={() => <h2>Page not found!</h2>} />
    </Switch>
  </BrowserRouter>
}

export default App;
