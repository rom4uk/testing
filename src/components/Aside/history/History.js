import React from 'react';
import PropTypes from 'prop-types';

import './History.scss';

const History = ({historyItems}) => {

  return (
    <div className="search-block">
      <h4 style={{fontSize: '24px'}}>Search history:</h4>
      <ul>
      {historyItems.map((item, i) =>  (
          <li key={i}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

History.propTypes = {
  historyItems: PropTypes.array
}

export default History;