import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

/*
 * Todo: convert this to a modal
 */
export default class CarAdd extends React.Component {
  constructor(props) {
    super(props);
    // no auto-binding. This is the recommended way, since it is bound only once per instance.
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('Got submit:', e);
    e.preventDefault();
    // This can't be a stateless since we'll need a ref for inputDomNode
    // Can't do getInputDOMNode using a ref, because there's no way to set the value
    // That's why one should prefer controlled forms.
    const form = document.forms.carAdd;
    this.props.addCar({ color: form.color.value, name: form.name.value,
                      status: 'Stocking', priority: 'P1' });
    // clear the form for the next input
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
