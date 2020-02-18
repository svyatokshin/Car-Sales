import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/carSalesAction';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {
  console.log("this is the props: ", props)
  const removeFeature = item => {
    props.removeFeature(item);
    // dispatch an action here to remove an item
  };

  const addFeature = item => {
    props.addFeature(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};
export default connect(mapStateToProps, { addFeature, removeFeature })(App);

