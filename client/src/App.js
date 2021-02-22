import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from './actions/productActions';

import MainSection from './components/main-section/MainSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/forms/Login'
import AdminPanel from './components/forms/AdminPanel'
import './styles/styles.css';
import ScrollToTop from './components/utensils/ScrollToTop'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [])

  return (
      <Router>
        <div className="container">
          <Navbar />
          <ScrollToTop /> 
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/adminpanel" component={AdminPanel}/>
            <div className="page-container">
              <Fragment>
                <Sidebar />
                <MainSection />
              </Fragment>
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
