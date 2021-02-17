import React from 'react';
import propTypes from 'prop-types';
import {
  Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, Table,
} from '@material-ui/core';
import '../stylesheets/ResourcesDetails.css';

const ResourcesDetails = ({
  customerSelected, electricityPrice, waterPrice, gasPrice,
}) => {
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  return (
    <Paper className="w-100 resources-summary">
      <TableContainer component={Paper} className="resources-table">
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell className="font-weight-bold">Mois</TableCell>
              <TableCell className="font-weight-bold" align="right">Electricité</TableCell>
              <TableCell className="font-weight-bold" align="right">Eau</TableCell>
              <TableCell className="font-weight-bold" align="right">Gaz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {months.map((o, i) => (
              <TableRow key={o}>
                <TableCell>
                  {o}
                </TableCell>
                <TableCell align="right">
                  {customerSelected.electricity[i]}
                              &nbsp;(
                  {(customerSelected.electricity[i] * electricityPrice).toFixed(2)}
                  )
                </TableCell>
                <TableCell align="right">
                  {customerSelected.water[i]}
                              &nbsp;(
                  {(customerSelected.water[i] * waterPrice).toFixed(2)}
                  )
                </TableCell>
                <TableCell align="right">
                  {customerSelected.gas[i]}
                              &nbsp;(
                  {(customerSelected.gas[i] * gasPrice).toFixed(2)}
                  )
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};


ResourcesDetails.propTypes = {
  customerSelected: propTypes.shape({
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    electricity: propTypes.arrayOf(propTypes.number).isRequired,
    water: propTypes.arrayOf(propTypes.number).isRequired,
    gas: propTypes.arrayOf(propTypes.number).isRequired,
  }).isRequired,
  electricityPrice: propTypes.string.isRequired,
  waterPrice: propTypes.string.isRequired,
  gasPrice: propTypes.string.isRequired,
};

ResourcesDetails.defaultProps = {

};

export default ResourcesDetails;
