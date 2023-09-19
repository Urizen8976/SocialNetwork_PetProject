import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider  } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';


//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//import UsersContainer from './components/Users/UsersContainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
//import LoginPage from './components/Login/Login';
const LoginPage = React.lazy(() => import('./components/Login/Login'));


export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/profile/:userId?'
                element={<ProfileContainer />}
              />
              <Route path='/dialogs'
                element={<DialogsContainer />}
              />
              <Route path='/users'
                element={<UsersContainer />}
              />
              <Route path='/login'
                element={<LoginPage />}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);


const JSApp = (props) => {
  return <React.StrictMode>
    <HashRouter basename={"/"}> 
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
};


export default JSApp;