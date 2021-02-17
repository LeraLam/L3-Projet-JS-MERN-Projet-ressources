import React, {Component} from 'react';
import { Chip, TextField, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography  from '@material-ui/core/Typography';
import '../../stylesheets/Customers.css'
import * as CustomersService from '../../services/CustomersService'

class Customers extends Component {
    constructor() {
      super();

        this.addCustomer = this.addCustomer.bind(this);

        this.state = {
          customers: [],
          customerName: ''
        }
      };
    
    async componentDidMount() {
      const customers = await CustomersService.getCustomers(); //On recupre la liste de tous les clients
      this.setState({ customers }); // On les stock dans les states
    }
    
    /*
    * Fonction pour mettre à jour les states apres la suppressions d'un client
    */
    async handleDelete(deletedCustomer) {
      let { customers } = this.state;
      await CustomersService.deleteCustomer(deletedCustomer._id)
      customers = customers.filter((customer) => customer._id !== deletedCustomer._id);
      this.setState({ customers });
    }

    /*
    * Fonction pour ajouter un Client
    */
    async addCustomer() {
      const { customerName, customers } = this.state; // Destructuration
      if (customerName.trim()) { //enleve les espaces inutiles
        const newCustomer = {
          name: customerName,
          electricity: Array.from({ length : 12}, () => Math.floor(Math.random() * (16 - 4) + 4)), //CF Programmation fonctionelle
          gas: Array.from({ length : 12}, () => Math.floor(Math.random() * (16 - 4) + 4)),
          water: Array.from({ length : 12}, () => Math.floor(Math.random() * (16 - 4) + 4)),
        };
        const customer = await CustomersService.addCustomer(newCustomer);
        customers.push(customer); //on rajoute le nouveau client au tableau de clients
        this.setState({ customerName: '', customers }); //on mets a jour les states pour mettre en jour la page
      } 
    }

    render() {
      const { customers, customerName } = this.state; // Destructuration 

        return(
          <div className="customer-page d-flex flex-column h-100">
            <Card className="card-root m-3">
              <Typography className="text-center" color="primary" variant="h4">
                    Gestion des clients
              </Typography>
              <CardContent className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <div className="d-flex align-items-baseline"> 
                  <TextField label="" value={customerName} onChange={(e) => this.setState({ customerName: e.target.value })} />
                  <Button className="ml-3" variant="contained" color="primary" onClick={this.addCustomer}>
                    Ajouter
                  </Button>
                </div>
                <div className="mt-3">
                    {
                      customers.map((customer) => (<Chip key={customer._id} className="m-1" label={customer.name} onDelete={() => this.handleDelete(customer)} color="primary" />)) //CF Material Ui => CHIP
                    }
                </div>
              </CardContent>
            </Card>
          </div>

        )
    }
}
  Customers.propTypes = {
  
  };
  
  Customers.defaultProps = {
  
  };
  
  export default Customers;
  