/**
 * Created by admin on 6/12/17.
 */
import React from 'react';
import './ClientSide.css';
import ListCars from './CarListClientSide.jsx';
import ChatBox from './ChatBox.jsx';
import { FormControl, InputGroup, Button} from 'react-bootstrap';

export default class ClientSide extends React.Component {
  static get propTypes() {
    return { location: React.PropTypes.object.isRequired };
  }

  constructor() {
    super();
    this.state = { cars: [], emitAddress: 'toServer', onAddress: 'receiveServer', email: '' };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
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

  onChangeEmail(event){
    console.log('On change email');
    this.setState({email: event.target.value});
    console.log(this.state.email)
  }

  changeEmail(){
    console.log('change email address');
  }

  render() {
    console.log('Rendering Client side.');
    return (
      <div>
        <ListCars cars = {this.state.cars} />
        <InputGroup>
          <FormControl type = "text" bsSize = "large" validationState = "success" value = {this.state.email}
                       onChange = {this.onChangeEmail} />
          <InputGroup.Button>
            <Button onClick={() => { this.changeEmail();}}>Accept</Button>
          </InputGroup.Button>
        </InputGroup>
        <ChatBox emitAddress = {this.state.emitAddress} onAddress = {this.state.onAddress}
                 user = {this.state.email}/>
      </div>
    );
  }
}