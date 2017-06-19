import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class CarAdd extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('Got submit:', e);
    e.preventDefault();
    const form = document.forms.carAdd;
    this.props.addCar({ color: form.color.value, name: form.name.value,
                      status: 'Stocking', priority: 'P1' });
    form.color.value = ''; form.name.value = '';
  }

  render() {
    console.log('Rendering CarAdd');
    return (
      <Panel header="Add Car">
        <form name="carAdd">
          <FormGroup>
            <ControlLabel>Car Name</ControlLabel>
            <FormControl type="text" name="name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Color</ControlLabel>
            <FormControl type="text" name="color" label="Color" />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Add</Button>
        </form>
      </Panel>
    );
  }
}

CarAdd.propTypes = {
  addCar: React.PropTypes.func.isRequired,
};
