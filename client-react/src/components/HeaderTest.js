import  React from 'react';
import  {Link} from 'react-router-dom';
import  {Nav, NavItem} from 'reactstrap'

export default class HeaderTest extends React.Component{

    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <Link to='/'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/courses'>Course</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/companies'>Companies</Link>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}