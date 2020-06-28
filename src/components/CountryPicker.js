// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { fetchCountryData } from '../api';
import casesImg from '../images/cases.png';
import deathsImg from '../images/deaths-large.png';
import recoveredImg from '../images/recovered.png';
import Select, { components } from 'react-select';
import CountUp from 'react-countup';

const CountryPicker = ({ handleCountryChange, localData }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  let options = [];

  fetchedCountryData.map((data) =>
    options.push({ value: data.code, label: data.country })
  );
  // console.log('fetchedCountryData', fetchedCountryData, 'options', options);
  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };

  return (
    <div>
      <div className="col-md-12 text-center">
        <h1 className="mb-5">Search for Country's Update</h1>
      </div>
      <Select
        closeMenuOnSelect={true}
        components={{ Placeholder }}
        placeholder={'Bangladesh'}
        styles={{
          placeholder: (base) => ({
            ...base,
            fontSize: '1em',
            fontWeight: 400,
            width: '5rem',
          }),
        }}
        onChange={(selected) => handleCountryChange(selected)}
        options={options}
      />
      <div className="row justify-content-between align-items-center p-3">
        <div className="my-3 d-flex align-items-center">
          <h4 className="mb-0">
            {localData?.country ? (
              localData.country
            ) : (
              <small className="text-primary">Loading . . .</small>
            )}
          </h4>
          &nbsp; &nbsp;
          <div>
            {localData?.flag ? (
              <img
                src={localData.flag}
                style={{ width: '35px' }}
                alt={localData.country}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="row local">
        <div className="col-md-4 my-3">
          <div className="row cases shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img src={casesImg} alt="Cases" className="img-fluid logo" />
            </div>
            <div className="col-8">
              <h2 className="text-info">
                {localData?.cases >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.cases}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">Confirmed</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="row deaths shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img src={deathsImg} alt="Deaths" className="img-fluid logo" />
            </div>
            <div className="col-8">
              <h2 className="text-danger">
                {localData?.deaths >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.deaths}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">Deaths</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="row recovered shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img
                src={recoveredImg}
                alt="Recovered"
                className="img-fluid logo"
              />
            </div>
            <div className="col-8">
              <h2 className="text-success">
                {localData?.recovered >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.recovered}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">Recovered</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row local">
        <div className="col-md-12 my-3 py-3 text-left">
          <h3>Today's Last Updates :</h3>
        </div>
        <div className="col-md-4 my-3">
          <div className="row cases shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img src={casesImg} alt="Cases" className="img-fluid logo" />
            </div>
            <div className="col-8">
              <h2 className="text-info">
                {localData?.todayCases >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.todayCases}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">New Cases</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="row deaths shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img src={deathsImg} alt="Deaths" className="img-fluid logo" />
            </div>
            <div className="col-8">
              <h2 className="text-danger">
                {localData?.todayDeaths >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.todayDeaths}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">New Deaths</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="row critical shadow align-items-center justify-content-between no-gutters">
            <div className="col-3">
              <img
                src={deathsImg}
                alt="Recovered"
                className="img-fluid logo svgMinLogo"
                style={{ opacity: 0.7 }}
              />
            </div>
            <div className="col-8">
              <h2 className="text-warning">
                {localData?.critical >= 0 ? (
                  <CountUp
                    start={0}
                    end={localData.critical}
                    duration={2.3}
                    separator={','}
                  />
                ) : (
                  <small className="text-primary">Loading . . .</small>
                )}
              </h2>
              <p className="text-muted">Critical</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
