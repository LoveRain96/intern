import React from 'react';
import {Switch, Route} from  'react-router-dom'
import Home from "./Home";
import Course from "./Course";
import Company from "./Company";

export default  class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/courses' component={Course}/>
                    <Route path='/companies' component={Company}/>
                </Switch>
            </main>
        )
    }
}