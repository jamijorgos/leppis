import React, { Fragment, useEffect, useState } from 'react';
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
  const [globalCategory, setGlobalCategory] = useState();
  const [globalSubCategory, setGlobalSubCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [])

  return (
      <Router>
        <div className="container">
          <Navbar setGlobalCategory={setGlobalCategory} setGlobalSubCategory={setGlobalSubCategory}/>
          <ScrollToTop /> 
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/adminpanel" component={AdminPanel}/>
            <Route path="/">
              <div className="page-container">
                <Fragment>
                  <Sidebar setGlobalCategory={setGlobalCategory} setGlobalSubCategory={setGlobalSubCategory}/>
                  <MainSection globalCategory={globalCategory} globalSubCategory={globalSubCategory}/>
                </Fragment>
              </div>
            </Route>
          </Switch>
          <Footer setGlobalCategory={setGlobalCategory} setGlobalSubCategory={setGlobalSubCategory}/>
        </div>
      </Router>
  );
}

export default App;
