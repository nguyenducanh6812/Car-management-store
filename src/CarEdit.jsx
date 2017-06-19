import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import { Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert }
  from 'react-bootstrap';

export default class CarEdit extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);

    this.state = { successVisible: false, car: {} };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    console.log('CarEdit: componentDidUpdate', prevProps.params.id, this.props.params.id);
    if (this.props.params.id !== prevProps.params.id) {
      this.loadData();
    }
  }

  onChange(e) {
    /*
     * Since state is immutable, we need a copy. If we modify this.state.car itself and
     * set it as the new state, It will seem to work, but we'll
     * run into problems later, especially when comparing current and new state
     * within Lifecycle methods.
     */
    const changes = {};
    changes[e.target.name] = { $set: e.target.value };
    const modifiedCar = update(this.state.car, changes);
    this.setState({ car: modifiedCar });
  }

  loadData() {
    fetch(`/api/cars/${this.props.params.id}`).then(response => response.json()).then(car => {
      this.setState({ car });    // all the attributes of the car are top level state items
    });
  }

  submit(e) {
    e.preventDefault();
    fetch(`/api/cars/${this.props.params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.car),

    }).then(response => response.json()).then(car => {
      this.setState({ car });
      this.setState({ successVisible: true });
      this.dismissTimer = setTimeout(this.dismissAlert, 5000);
    });
  }

  dismissAlert() {
    this.setState({ successVisible: false });
  }

  render() {
    const success = (
      <Alert bsStyle="success" onDismiss={this.dismissAlert} >
        Car saved to DB successfully.
      </Alert>
    );
    const car = this.state.car;
    return (
      <div style={{ maxWidth: 600 }}>
        <Panel header={`Edit car: ${this.props.params.id}`}>
          <form onSubmit={this.submit}>
            <FormGroup>
              <ControlLabel>Priority</ControlLabel>
              <FormControl componentClass="select" name="priority" value={car.priority}
                onChange={this.onChange}>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Status</ControlLabel>
              <FormControl componentClass="select" name="status" value={car.status}
                onChange={this.onChange}>
                <option>Stocking</option>
                <option>Out of Stock</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text" name="name" value={car.name} onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Color</ControlLabel>
              <FormControl type="text" name="color" value={car.color}
                onChange={this.onChange} />
            </FormGroup>
            <ButtonToolbar>
              <Button type="submit" bsStyle="primary">Submit</Button>
              <Link className="btn btn-link" to="/cars">Back</Link>
            </ButtonToolbar>
          </form>
        </Panel>
        {this.state.successVisible ? success : null}
      </div>
    );
  }
}

CarEdit.propTypes = {
  params: React.PropTypes.object.isRequired,
};

