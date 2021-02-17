import React, { Component } from 'react';
import propTypes from 'prop-types';
import {
  Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import classnames from 'classnames';
import '../stylesheets/CustomersList.css';

class CustomersList extends Component {
  constructor() {
    super();

    this.state = {
      customerSelected: 0,
    };
  }

  render() {
    const { customerSelected } = this.state;
    const {
      customers, changeCustomerSelected, electricityPrice, waterPrice, gasPrice,
    } = this.props;
    return (
      <TableContainer component={Paper} className="customers-table">
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell className="font-weight-bold">Nom</TableCell>
              <TableCell className="font-weight-bold" align="right">Electricité</TableCell>
              <TableCell className="font-weight-bold" align="right">Eau</TableCell>
              <TableCell className="font-weight-bold" align="right">Gaz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer._id}
                onClick={() => {
                  this.setState({ customerSelected: customer });
                  changeCustomerSelected(customer);
                }}
                className={classnames('customer-line', customer._id === customerSelected._id ? 'active' : '')}
              >
                <TableCell>
                  {customer.name}
                </TableCell>
                <TableCell align="right">
                  {(customer.electricity.reduce((a, b) => a + b) * electricityPrice).toFixed(2)}
                        &nbsp;€
                </TableCell>
                <TableCell align="right">
                  {(customer.water.reduce((a, b) => a + b) * waterPrice).toFixed(2)}
                        &nbsp;€
                </TableCell>
                <TableCell align="right">
                  {(customer.gas.reduce((a, b) => a + b) * gasPrice).toFixed(2)}
                        &nbsp;€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

CustomersList.propTypes = {
  customers: propTypes.arrayOf(propTypes.object).isRequired,
  changeCustomerSelected: propTypes.func.isRequired,
  electricityPrice: propTypes.string.isRequired,
  waterPrice: propTypes.string.isRequired,
  gasPrice: propTypes.string.isRequired,
};

CustomersList.defaultProps = {

};

export default CustomersList;
