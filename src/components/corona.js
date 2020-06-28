import React from 'react';

function corona() {
  return (
    <div className="container">
      <div className="row p-b-40 ">
        <div className="col-md-12">
          <h1>What you need to know about COVID-19</h1>
          <p>
            COVID-19 is a respiratory illness caused by SARS-CoV-2, a new virus
            from the corona family. Common symptoms include fever, dry cough
            and, in severe cases, shortness of breath. COVID-19 spreads from
            person to person, but can survive on hard surfaces for up to 3 days.
            Hand-washing, social distancing and cleaning frequently touched
            surfaces can prevent the spread of the virus.
          </p>
        </div>
      </div>

      <div className="panel panel-transparent">
        <div>
          <div className="row p-l-20 p-r-20 p-b-20 p-t-5 xs-no-padding">
            <div className="col-md-11">
              <div className="tab-pane active">
                <h5 className="font-montserrat text-uppercase fs-14 hint-text">
                  Facts about COVID-19
                </h5>
                <h2>What is COVID-19?</h2>
                <p className="fs-15 font-open-sans">
                  <a
                    href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    COVID-19
                  </a>{' '}
                  is a novel infectious disease based on the SARS-CoV-2 virus
                  that originated from Wuhan, China in late 2019. WHO
                  classNameified COVID-19 as a pandemic on March 11, 2020.
                  <strong>
                    Often mistakenly likened to the flu, COVID-19 is much more
                    severe.
                  </strong>{' '}
                  As many potentially dangerous diseases, COVID-19 starts with
                  flu like symptoms. Fever, dry cough, sore throat and
                  eventually shortness of breath are most common ones, with
                  fever often being the determining factor when self diagnosing.
                </p>

                <p>
                  If your body temperature is 37.5°C or 99.5°F you have a mild
                  fever, which is the most common symptom of COVID-19, though it
                  does not necessarily mean you've contracted the disease. If
                  you have traveled to Wuhan or Italy in the last 14 days, you
                  should call your doctor. It's important to call your doctor
                  instead of going to the hospital, to prevent spreading the
                  virus if you're infected or catching it you're not.
                </p>

                <iframe
                  title="My Daily Marathon Tracker"
                  src="https://ourworldindata.org/grapher/daily-cases-covid-19-who"
                  style={{ width: '100%', height: '600px', border: '0px none' }}
                ></iframe>

                <p className="fs-15 font-open-sans">
                  <a
                    href="https://ourworldindata.org/coronavirus"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    Data source
                  </a>
                </p>

                <p className="fs-15 font-open-sans">
                  Preventive measures like social distancing and good hygiene
                  put in place to slow down the spread of the virus have been
                  shown to work in China, while combating the first wave of the
                  outbreak. We will see fewer global infections once similar
                  measures are implemented in other high-risk countries.
                </p>

                <h2>What can you do to stop COVID-19 from spreading?</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="block-title">DO</h6>
                    <p className="hint-text">
                      <strong>✓ Wash your hands.</strong> Washing your hands for
                      at least 20 seconds protects you from getting sick.
                    </p>
                    <p className="hint-text">
                      <strong>✓ Stay home.</strong> Social distancing slows the
                      spread of the virus from person to person.
                    </p>
                    <p className="hint-text">
                      <strong>✓ Take this seriously.</strong> This is not the
                      flu. This is a global pandemic that's pushing healthcare
                      to its limits.
                    </p>
                    <p className="hint-text">
                      <strong>✓ Wear a mask if you're sick.</strong> Wearing a
                      mask does little to prevent you from getting sick, but it
                      does prevent you from infecting others.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="block-title">DON'T</h6>
                    <p className="hint-text">
                      <strong>☓ Panic buy.</strong> When shopping think about
                      the next person. Don't buy more than you need.
                    </p>
                    <p className="hint-text">
                      <strong>☓ Touch your face.</strong> Touching your mouth,
                      nose or eyes is how the virus gets in your system.
                    </p>
                    <p className="hint-text">
                      <strong>☓ Spread misinformation.</strong> Before sharing
                      information on social media, do a quick fact check.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default corona;
