import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, ButtonToolbar }
  from 'react-bootstrap';

export default class CarFilter extends React.Component {
  static get propTypes() {
    return {
      initFilter: React.PropTypes.object.isRequired,
      submitHandler: React.PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.initFilter.status,
      name: this.props.initFilter.name,
    };
    this.submit = this.submit.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.initFilter.status === this.state.status
        && newProps.initFilter.name === this.state.name) {
      console.log('CarFilter: componentWillReceiveProps, no change');
      return;
    }
    console.log('CarFilter: componentWillReceiveProps, new filter:', newProps.initFilter);
    this.setState({ status: newProps.initFilter.status, name: newProps.initFilter.name });
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const newFilter = {};
    if (this.state.name) newFilter.name = this.state.name;
    if (this.state.status) newFilter.status = this.state.status;
    this.props.submitHandler(newFilter);
  }

  render() {
    console.log('Rendering CarFilter, state=', this.state);
    return (
      <Panel collapsible defaultExpanded header="Filter">
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <FormGroup>
                <ControlLabel>Car Name</ControlLabel>
                <FormControl type="text" name="name" value = {this.state.name}
                  onChange={this.onChangeName} />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <FormGroup>
                <ControlLabel>Status</ControlLabel>
                <FormControl componentClass="select" value={this.state.status}
                  onChange={this.onChangeStatus}>
                  <option value="">(Any)</option>
                  <option>Stocking</option>
                  <option>Out of Stock</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <FormGroup>
                <ControlLabel>&nbsp;</ControlLabel>
                <ButtonToolbar>
                  <Button type="submit" bsStyle="primary" onClick={this.submit}>Search</Button>
                </ButtonToolbar>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}
