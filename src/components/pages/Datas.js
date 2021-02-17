import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
  Card, Typography, Paper, CardContent, TextField, InputAdornment, CardActions, Button,
} from '@material-ui/core';
import * as RessourceService from '../../services/ResourcesServices';
import '../../stylesheets/Datas.css';
import CustomerDatas from '../CustomerDatas';

class Datas extends Component {
    constructor() {
      super();

      this.state = {
        electricityPrice: '', //On stock nos chiffre sous forme de string car c'est plus facile a gerer pour le front 
        electricityPriceChanged: '',
        electricityId: '',
        waterPrice: '',
        waterPriceChanged: '',
        waterId: '',
        gasPrice: '',
        gasPriceChanged: '',
        gasId: '',
      };
    }
  
    
    async componentDidMount() {
      const resources = await RessourceService.getResources(); //on recuper toutes les ressources
      this.setState({
        electricityPrice: String(resources.filter((o) => o.name === 'électricité')[0].price),
        electricityPriceChanged: String(resources.filter((o) => o.name === 'électricité')[0].price),
        electricityId: resources.filter((o) => o.name === 'électricité')[0]._id,
        waterPrice: String(resources.filter((o) => o.name === 'eau')[0].price),
        waterPriceChanged: String(resources.filter((o) => o.name === 'eau')[0].price),
        waterId: resources.filter((o) => o.name === 'eau')[0]._id,
        gasPrice: String(resources.filter((o) => o.name === 'gaz')[0].price),
        gasPriceChanged: String(resources.filter((o) => o.name === 'gaz')[0].price),
        gasId: resources.filter((o) => o.name === 'gaz')[0]._id,
      });
    }

    /*
    * Fonction pour mettre à jour les prix dans la base de données
    */
    async changePrices() {
      const {
        electricityPrice,
        electricityPriceChanged,
        electricityId,
        waterPrice,
        waterPriceChanged,
        waterId,
        gasPrice,
        gasPriceChanged,
        gasId,
      } = this.state; //destructuration
      if (electricityPrice !== electricityPriceChanged) {
        await RessourceService.changeResource(electricityId, electricityPriceChanged);
      }
      if (waterPrice !== waterPriceChanged) {
        await RessourceService.changeResource(waterId, waterPriceChanged);
      }
      if (gasPrice !== gasPriceChanged) {
        await RessourceService.changeResource(gasId, gasPriceChanged);
      }

      this.setState({ // Mise à jour des état selon ceux qui ont été changé
          electricityPrice: electricityPrice !== electricityPriceChanged ? electricityPriceChanged : electricityPrice, // IF ternaire
          waterPrice: waterPrice !== waterPriceChanged ? waterPriceChanged : waterPrice,
          gasPrice: gasPrice !== gasPriceChanged ? gasPriceChanged : gasPrice,
      });
    }

    render() {
      const {
          electricityPrice,
          electricityPriceChanged,
          waterPrice,
          waterPriceChanged,
          gasPrice,
          gasPriceChanged,
        } = this.state; //destructuration

      return(
        <div className="resource-page d-flex flex-column h-100">
          <Card className="card-root m-3">
            <Typography className="text-center" color="primary" variant="h4"> 
            Prix des ressources
            </Typography>
            <CardContent className="d-flex flex-row flex-wrap justify-content-center">
              <Paper className="resource-price-container electricity-price p-2 m-2">
                <Typography className="resource-title" variant="h5" color="primary">
                  <i className="fas fa-bolt mr-3" />
                  <span className="resource-title">Electricité</span>
                  <TextField label= "Coût uniaire" 
                  value= {electricityPriceChanged} 
                  onChange={(e) => this.setState({ electricityPriceChanged: e.target.value })}
                  InputProps={{ endAdornment: <InputAdornment position="end">€</InputAdornment>,}}
                  />
                </Typography>
              </Paper>
              <Paper className="resource-price-container water-price p-2 m-2">
                <Typography className="resource-title" variant="h5" color="primary">
                  <i className="fas fa-tint mr-3" />
                  <span className="resource-title">Eau</span>
                </Typography>
                <TextField
                  label="Coût unitaire"
                  value={waterPriceChanged}
                  onChange={(e) => this.setState({ waterPriceChanged: e.target.value })}
                  InputProps={{endAdornment: <InputAdornment position="end">€</InputAdornment>,}}
                  />
              </Paper>
              <Paper className="resource-price-container gas-price p-2 m-2">
                <Typography className="resource-title" variant="h5" color="primary">
                  <i className="fas fa-fire mr-3" />
                  <span className="resource-title">Gaz</span>
                </Typography>
                <TextField
                  label="Coût unitaire"
                  value={gasPriceChanged}
                  onChange={(e) => this.setState({ gasPriceChanged: e.target.value })}
                  InputProps={{endAdornment: <InputAdornment position="end">€</InputAdornment>,}}
                  />
              </Paper>
            </CardContent>
            <CardActions className="d-flex justify-content-center">
              <Button variant="contained" color="primary" onClick={() => this.changePrices(electricityPrice, waterPrice, gasPrice)}>
                Editer
              </Button>
            </CardActions>
          </Card>
          <CustomerDatas
            electricityPrice={electricityPrice}
            waterPrice={waterPrice}
            gasPrice={gasPrice}
          />
        </div>
      )
    }
} 
  Datas.propTypes = {
  
  };
  
  Datas.defaultProps = {
  
  };
  
  export default Datas;
  