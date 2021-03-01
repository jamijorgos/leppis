import React from 'react'
import {BrowserRouter as Route, Switch} from 'react-router-dom';

import Tuotteet from './contents/Tuotteet'
import Koti from './contents/Koti'
import Info from './contents/Info'

const MainSection = ({ globalCategory, globalSubCategory }) => {
    return (
        <Switch>
            <Route path="/tuotteet">
                <div className="main-section tuote-section">
                    <Tuotteet globalCategory={globalCategory} globalSubCategory={globalSubCategory}/>
                </div>
            </Route>
            <Route path={["/", "/yhteystiedot"]} exact>
                <div className="main-section modified-section">
                    <Route path="/" exact component={Koti} />
                    <Route path="/yhteystiedot" exact component={Info} />
                </div>
            </Route>
        </Switch>
    )
}

export default MainSection
