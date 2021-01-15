import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import './content.scss';

const Content = (props) => {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('historyItems')) || []);
  const [loadingData, setLoadingData] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const [requestError, setRequestError] = useState('');
  const URL = 'https://api.github.com/users/';

  const handleHistoryChange = (value) => {
    setLoadingData(prev => true);
    setRequestError('');
    const newHistory = [...history];
    if(newHistory.length === 5) {
      newHistory.splice(0, 1);
      newHistory.push(value);
    } else {
      newHistory.push(value);
    }
    setHistory(newHistory);
    localStorage.setItem('historyItems', JSON.stringify(newHistory));

    axios.get(`${URL}${value}/repos`)
      .then(res => {
        setRequestData(res.data);
        setLoadingData(prev => false);
      })
      .catch(err => {
        setRequestError(err.message);
        setLoadingData(prev => false);
      })
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row">
          <Aside history={history} handleHistoryChange={handleHistoryChange} />
          <Main requestError={requestError} requestData={requestData} loadingData={loadingData} />
        </div>
      </div>
    </section>

  )
}

Content.propTypes = {
  history: PropTypes.array,
  requestData: PropTypes.array,
  loadingData: PropTypes.bool,
  requestError: PropTypes.string,
}

export default Content;