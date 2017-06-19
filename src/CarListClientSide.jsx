/**
 * Created by admin on 6/13/17.
 */
import React from 'react';
import './ClientSide.css';

const Car = (props) => {
  console.log('Layout cua item', props.layOut);
  return (
            <div className={props.layOut}>
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            Car Name</h4>
                        <p className="group inner list-group-item-text">
                            {props.car.name}</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">
                                    $21.000</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <a className="btn btn-success" href="http://www.bravebits.co/vi/">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

Car.propTypes = {
  car: React.PropTypes.object.isRequired,
  layOut: React.PropTypes.string.isRequired,
}

export default class CarListClientSide extends React.Component {
  static get propTypes() {
    return {
      cars: React.PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = { layOut: 'item col-xs-4 col-lg-4 grid-group-item' };
    this.grid = 'grid';
    this.list = 'list';
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log('New Props, ', newProps);
  }
  changeLayout(layout) {
    console.log('abs', layout);
    const layoutState = (layout === 'grid') ? 'item col-xs-4 col-lg-4 grid-group-item'
            : 'item col-xs-4 col-lg-4 list-group-item';
    this.setState({ layOut: layoutState });
    console.log('changeLayout clicked: ', this.state.layOut);
  }

  render() {
    console.log('Layout sau khi click: ', this.state.layOut);
    let cars = this.props.cars.map((car, i) =>
          <Car key={i} car={car} layOut={this.state.layOut} />);
    console.log('Day la danh sach cars lay duoc tu server: ', this.props.cars);
    return (
          <div className="container">
              <div className="well well-sm">
                  <strong>Category Title</strong>
                  <div className="btn-group">
                      <button id={this.list} className="btn btn-default btn-sm"
                        onClick={() => this.changeLayout(this.list)}>
                        <span className="glyphicon glyphicon-th-list">
                        </span>
                        List
                      </button>
                      <button id={this.grid} className="btn btn-default btn-sm"
                        onClick={() => this.changeLayout(this.grid)}>
                        <span className="glyphicon glyphicon-th"></span>
                        Grid
                      </button>
                  </div>
              </div>
              <div id="products" className="row list-group">
                  {cars}
              </div>
          </div>
      );
  }
}