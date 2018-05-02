import React from 'react';
import {Switch, Route} from  'react-router-dom'
import Home from "./main/Home";
import Course from "./main/Course";
import Company from "./main/Company";

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