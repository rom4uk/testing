import PropTypes from 'prop-types';

import History from './history/History';
import SearchInput from './search/Search';

import './Aside.scss';


const Aside = ({history, handleHistoryChange}) => (
  <aside>
    <SearchInput handleHistoryChange={handleHistoryChange} />
    <History historyItems={history} />
  </aside>
);

Aside.propTypes = {
  history: PropTypes.array,
  handleHistoryChange: PropTypes.func
};

export default Aside;