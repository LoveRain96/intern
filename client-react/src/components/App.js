import React, { Component } from 'react';
import './App.css';
//import Layout from "./Layout";
import HeaderTest from "./HeaderTest";
import Main from "./Main";

class App extends Component {

    render() {
        return (
            <div>
                <HeaderTest/>
               {/* <Layout/>*/}
                <Main/>
            </div>
        );
    }
}

export default App;
