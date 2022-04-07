import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import Home from "./components/views/Home/Home";
import Trips from "./components/views/Trips/TripsContainer";
import Countries from "./components/views/Countries/CountriesContainer";
import Regions from "./components/views/Regions/RegionsContainer";
import Info from "./components/views/Info/Info";
import Country from "./components/views/Country/CountryContainer";
import Trip from "./components/views/Trip/TripContainer";
import NotFound from "./components/views/NotFound/NotFound";
import styles from "./App.scss";

import parseTrips from "./utils/parseTrips";
import { setMultipleStates } from "./redux/globalRedux";
import { AnimatedSwitch } from "react-router-transition";

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  };

  constructor(props) {
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trips != this.props.trips) {
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render() {
    return (
      <BrowserRouter basename="/travel-agency/"> 
        <MainLayout>
          <AnimatedSwitch
            location={location}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 1 }}
            atActive={{ opacity: 1 }}
            className={styles.switchWrapper}
          >
            <Route exact path="/travel-agency/" component={Home} />
            <Route exact path="/travel-agency/trips" component={Trips} />
            <Route exact path="/travel-agency/countries" component={Countries} />
            <Route exact path="/travel-agency/regions" component={Regions} />
            <Route exact path="/travel-agency/info" component={Info} />
            <Route exact path="/travel-agency/country/:id" component={Country} />
            <Route exact path="/travel-agency/trip/:id" component={Trip} />
            <Route path="*" component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips,
});

const mapDispatchToProps = (dispatch) => ({
  setStates: (newState) => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
