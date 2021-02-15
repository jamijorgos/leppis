import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainSection from './components/main-section/MainSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/forms/Login'
import './styles/styles.css';
import ScrollToTop from './components/utensils/ScrollToTop'

const App = () => {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/login" component={Login}/>
          </Switch>
            <div className="page-container">
              <Fragment>
                <Sidebar />
                <MainSection />
              </Fragment>
            </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
