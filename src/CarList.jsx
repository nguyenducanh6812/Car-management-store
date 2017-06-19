import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import CarFilter from './CarFilter.jsx';
import CarAdd from './CarAdd.jsx';
import ChatBox from './ChatBox.jsx';

const CarRow = (props) => {
  const handleOnClick = () => {
    console.log('Delete car was called');
    const carRemove = props.car;
    props.removeCar(carRemove);
  };
  return (
        <tr>
          <td>
            <Link to={`/cars/${props.car._id}`}>{props.car._id}</Link>
          </td>
          <td>{props.car.name}</td>
          <td>{props.car.color}</td>
          <td>{props.car.status}</td>
          <td><button onClick={handleOnClick}>Delete</button></td>
        </tr>
    );
};

CarRow.propTypes = {
  car: React.PropTypes.object.isRequired,
  removeCar: React.PropTypes.func.isRequired,
};

function CarTable(props) {
  // console.log("Rendering car table, num items:", props.cars.length);
  let carRows = props.cars.map((car, i) =>
      <CarRow key={i} car={car} removeCar = {props.removeCar} />);
  return (
    <table className="table table-striped table-bordered table-condensed">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Color</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{carRows}</tbody>
    </table>
  );
}

CarTable.propTypes = {
  cars: React.PropTypes.array.isRequired,
  removeCar: React.PropTypes.func.isRequired,
};

export default class CarList extends React.Component {
  static get contextTypes() {
    return { router: React.PropTypes.object.isRequired };
  }

  static get propTypes() {
    return { location: React.PropTypes.object.isRequired };
  }

  constructor() {
    super();
    this.state = { cars: [], onAddress: 'receiveClient' , emitAddress: 'toClient'};
    this.addCar = this.addCar.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.removeCar = this.removeCar.bind(this);
  }

  componentDidMount() {
    console.log('CarList: componentDidMount');
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;
    // todo: comparing shallow objects -- better way?
    // todo: when do we get called even when there's no change?
    if (oldQuery.name === newQuery.name &&
        oldQuery.status === newQuery.status) {
      console.log('CarList: componentDidUpdate, no change in filter, not updating');
      return;
    }
    console.log('CarList: componentDidUpdate, loading data with new filter');
    this.loadData();
  }

  loadData() {
    console.log('LoadData was call: ');
    console.log(this.props.location);
    fetch(`/api/cars/${this.props.location.search}`).then(response =>
      response.json()
    ).then(cars => {
      this.setState({ cars });
    }).catch(err => {
      console.log(err);
    });
  }

  // loadMessage() {
  //   console.log('Load message was call');
  //   fetch(`api/message`).then(response =>
  //     response.json()
  //   ).then(message => {
  //     this.setState({ messages: message });
  //     console.log('List Messages from carlist.jsx');
  //     console.log(this.state.messages);
  //     if(message[0].server_read===true){
  //       console.log('tin nhan server da doc: ', message);
  //     }
  //     else console.log('Tin nhan chua duoc doc');
  //   }).catch(err => {
  //     console.log(err);
  //     });
  // }

  changeFilter(newFilter) {
    const search = Object.keys(newFilter)
      .filter(k => newFilter[k] !== '')
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(newFilter[k])}`)
      .join('&');
    console.log('Search: ', search);
    console.log('This context router: ', this.context.router);
    this.context.router.push({ search: `?${search}` });
  }

  addCar(newCar) {
    console.log('Adding car:', newCar);
    fetch('/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCar),

    }).then(res => res.json()).then(car => {
      const modifiedCars = update(this.state.cars, { $push: [car] });
      this.setState({ cars: modifiedCars });

    }).catch(err => {
      console.log('Error adding car:', err);
    });
  }

  removeCar(carRemoved) {
    console.log('Delete car was called');
    fetch(`/api/cars/ ${carRemoved._id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carRemoved),
    }).then(res => res.json()).then(car => {
      console.log('Delete success: ', car);
      this.loadData();
    }).catch(err => {
      console.log('Error delete car:', err);
    });
  }

  render() {
    console.log('Rendering CarList, num items:', this.state.cars.length);
    return (
      <div>
        <h1>Cars Store</h1>
        <CarFilter submitHandler={this.changeFilter} initFilter={this.props.location.query} />
        <CarTable cars={this.state.cars} removeCar={this.removeCar} />
        <CarAdd addCar={this.addCar} />
        <ChatBox onAddress = 'receiveClient' emitAddress = {this.state.emitAddress}
                 user = 'Admin: '/>
      </div>
    );
  }
}

