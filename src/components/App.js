import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  withRouter, Link, Route, NavLink,
} from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import Customers from './pages/Customers'
import Datas from './pages/Datas';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { location } = this.props;
    return (
      <div className="full-page d-flex flex-column">
        <Navbar dark className="material-primary" expand="md">
          <NavbarBrand tag={Link} to="/">Projet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/customers" className={classnames('nav-link', location.pathname === '/' ? 'active' : '')} activeClassName="active">
                  Clients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/resources" className="nav-link" activeClassName="active">
                  Ressources
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/" component={Customers} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/resources" component={Datas} />
      </div>
    );
  }
}

App.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
};

App.defaultProps = {

};

export default withRouter(App);
