const setupListenerCreate = () => document.getElementById('createbutton').addEventListener('click', createCustomer);
window.addEventListener('DOMContentLoaded', setupListenerCreate);

const setupListenerDelete = () => document.getElementById('deletebutton').addEventListener('click', deleteCustomer);
window.addEventListener('DOMContentLoaded', setupListenerDelete);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const fillArrayRessources = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomInt(4, 15);
  }
}

const createCustomer = () => {
  let arrElectricity = new Array(12);
  let arrWater = new Array(12);
  let arrGas = new Array(12);
  fillArrayRessources(arrElectricity)
  fillArrayRessources(arrWater);
  fillArrayRessources(arrGas);

  let newCustomer = {name : nameCustomer.value , electricity : arrElectricity, gas : arrGas, water : arrWater};
  let body = JSON.stringify(newCustomer);
  let requestOptions = { method :'POST', headers : { "Content-Type": "application/json" }, body : body };
  fetch('http://127.0.0.1:3000/api/customers/', requestOptions)
  .then (  response => response.json().then( json => ( { ok : response.ok, json : json} ) ) )
  .then ( response => {
      if (response.ok)
        { return response.json; }
      else { throw new Error(` creation failed  : ${response.json.message}` ); }
    })
  .then( customer => result.textContent = `customer with id ${customer._id} created` ) 
  .then( () => clearField() )
  .then(window.location.reload())
  .catch( error => result.textContent = `error : ${error.message}` );        
}

const deleteCustomer = () => {
  let id = document.getElementById('deletebutton').value;
  console.log(id);
  let requestOptions = { method :'DELETE', headers : { "Content-Type": "application/json" }};
  fetch('http://127.0.0.1:3000/api/customers/' + id, requestOptions)
  .then (  response => response.json().then( json => ( { ok : response.ok, json : json} ) ) )
  .then ( response => {
      if (response.ok)
        { return response.json; }
      else { throw new Error(` creation failed  : ${response.json.message}` ); }
    })
  .then( customer => result.textContent = `customer with id ${customer._id} created` ) 
  .then( () => clearField() )
  .then(window.location.reload())
  .catch( error => result.textContent = `error : ${error.message}` );        
}

// utility function
/** clear all input fields */
const clearField = () => {
  nameCustomer.value = "";
}
