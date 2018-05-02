import React from 'react';
import Header from "./Header";
import { Link } from "react-router-dom"
import Course from "./Course";
import Company from "./Company";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "LoveRain"
        }
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return(
            <div>
                <h1>HELLO LOVERAIN</h1>
                {this.props.children}
                <Link to="courses">Course </Link>
                <Link to="companies"> Company</Link>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Course/>
                <Company/>
            </div>
        )
    }
}