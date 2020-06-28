import React, { Component } from 'react';
import Card from '../components/card/Card';
import CountryPicker from '../components/CountryPicker';
import { fetchDate, fetchLocalCountry } from '../api';
import Disclaimer from '../components/disclaimer';

class Home extends Component {
  state = { data: {}, localData: {}, country: '', flag: '' };

  async componentDidMount() {
    try {
      const data = await fetchDate();
      const localData = await fetchLocalCountry();
      this.setState({ data, localData });
    } catch (err) {
      console.log(err);
    }
  }
  handleCountryChange = async (country) => {
    const localData = await fetchLocalCountry(country);
    console.log(localData);
    this.setState({ localData });
  };
  render() {
    const { data, localData } = this.state;
    return (
      <React.Fragment>
        <Disclaimer />
        <Card data={data} />
        <div className="container">
          <CountryPicker
            localData={localData}
            handleCountryChange={this.handleCountryChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
