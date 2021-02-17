import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import CustomersList from './CustomersList';
import ResourcesDetails from './ResourcesDetails';
import * as CustomersService from '../services/CustomersService';

class CustomerDatas extends Component {
    constructor() {
      super();
  
      this.state = {
        customers: [],
        customerSelected: null,
      };
  
      this.changeCustomerSelected = this.changeCustomerSelected.bind(this);
    }
  
    async componentDidMount() {
      const customers = await CustomersService.getCustomers();
  
      this.setState({
        customers,
      });
    }
  
    changeCustomerSelected(customerSelected) {
      this.setState({ customerSelected });
    }
  
    render() {
      const {
        customers, customerSelected,
      } = this.state;
      const { electricityPrice, waterPrice, gasPrice } = this.props;
      const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      const data = {
        labels: months,
        datasets: [
          {
            label: 'Electricité',
            backgroundColor: 'rgba(245, 206, 70, 0.6)',
            borderColor: 'rgba(245, 206, 70, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(245, 206, 70, 0.4)',
            hoverBorderColor: 'rgba(245, 206, 70, 1)',
            data: customerSelected
              ? [...customerSelected.electricity].map((o) => (o * electricityPrice).toFixed(2))
              : null,
          },
          {
            label: 'Eau',
            backgroundColor: 'rgba(0, 152, 247, 0.6)',
            borderColor: 'rgba(0, 152, 247, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 152, 247, 0.4)',
            hoverBorderColor: 'rgba(0, 152, 247, 1)',
            data: customerSelected
              ? [...customerSelected.water].map((o) => (o * waterPrice).toFixed(2))
              : null,
          },
          {
            label: 'Gaz',
            backgroundColor: 'rgba(224, 64, 6, 0.6)',
            borderColor: 'rgba(224, 64, 6, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(224, 64, 6, 0.4)',
            hoverBorderColor: 'rgba(224, 64, 6, 1)',
            data: customerSelected
              ? [...customerSelected.gas].map((o) => (o * gasPrice).toFixed(2))
              : null,
          },
        ],
      };
      return (
        <Card className="card-root m-3">
          <Typography className="text-center" color="primary" variant="h4">
            Données utilisateur
          </Typography>
          <CardContent className="customers-datas d-flex flex-column align-items-center">
            <CustomersList
              customers={customers}
              changeCustomerSelected={this.changeCustomerSelected}
              electricityPrice={electricityPrice}
              waterPrice={waterPrice}
              gasPrice={gasPrice}
            />
            { customerSelected && (
            <div className="mt-3 d-flex flex-wrap justify-content-around w-100">
              <ResourcesDetails
                customerSelected={customerSelected}
                electricityPrice={electricityPrice}
                waterPrice={waterPrice}
                gasPrice={gasPrice}
              />
              <div className="resources-chart">
                <Bar
                  data={data}
                  width={600}
                  height={400}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                        },
                      }],
                    },
                  }}
                />
              </div>
            </div>
            )}
          </CardContent>
        </Card>
      );
    }
  }
  
  CustomerDatas.propTypes = {
    electricityPrice: propTypes.string.isRequired,
    waterPrice: propTypes.string.isRequired,
    gasPrice: propTypes.string.isRequired,
  };
  
  CustomerDatas.defaultProps = {
  
  };
  
  export default CustomerDatas;