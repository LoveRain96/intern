import React from "react";
import {Container, Table} from 'reactstrap'
import axios from  'axios'

export  default class Course extends React.Component{
    state = {
        courses : []
    };

    componentDidMount() {
        axios.get('http://localhost:8080/courses')
            .then(res => {
                console.log(res);
                const courses = res.data;
                this.setState({courses});
            }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return(
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td> STT </td>
                        <td> NAME </td>
                        <td> START_DATE </td>
                        <td> END_DATE </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map(course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.duration.startDate}</td>
                            <td>{course.duration.endDate}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        )
    }

}