/**
 * Created by admin on 6/12/17.
 */
import React from 'react';
import './ClientSide.css';
import ListCars from './CarListClientSide.jsx';
import ChatBox from './ChatBox.jsx';

export default class ClientSide extends React.Component {
  static get propTypes() {
    return { location: React.PropTypes.object.isRequired };
  }

  constructor() {
    super();
    this.state = { cars: [], emitAddress: 'toServer', onAddress: 'receiveServer' };
  }

  componentDidMount() {
    console.log('CarList: componentDidMount');
    this.loadData();
  }

  loadData(){
    console.log('LoadData was call: ');
    console.log(this.props.location);
    fetch(`/api/cars/${this.props.location.search}`).then(response =>
        response.json()
    ).then(cars => {
      this.setState({ cars });
      console.log(cars);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log('Rendering Client side.');
    return (
      <div>
        <ListCars cars = {this.state.cars} />
        <ChatBox emitAddress = {this.state.emitAddress} onAddress = {this.state.onAddress}
                 user = 'Client: '/>
      </div>
    );
  }
}