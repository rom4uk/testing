import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({elem}) => (
  <div className="card">
    <h3 className="card-title">{elem.name}</h3>
    <div className="card-lang">Language: <span>{elem.language}</span></div>
    <div className="card-desc">Description: <span>{elem.description}</span></div>
  </div>
)

Card.propTypes = {
  elem: PropTypes.object
};

export default Card;