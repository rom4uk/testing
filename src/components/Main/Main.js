import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import Card from './Card/Card';
import './Main.scss';

const Main = ({requestData, requestError, loadingData}) => {

  return (
    <main>
      <div className="container">
        <div className="row">
          {loadingData ? <Loader /> : requestError ? <h2 style={{
            color: '#fff',
            width: '100%',
            textAlign: 'center'
          }}>{requestError}</h2> : !requestData.length ? <h2 style={{
            color: '#fff',
            width: '100%',
            textAlign: 'center'
          }}>Nothing found</h2> : requestData.map((elem, idx) => <Card elem={elem} key={idx} />)}
        </div>
      </div>
    </main>
  )
}

Main.propTypes = {
  requestData: PropTypes.array,
  requestError: PropTypes.string,
  loadingData: PropTypes.bool
};

export default Main;