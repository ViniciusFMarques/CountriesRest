import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { SelectContainer } from './styles';
import arrow from '../../../../assets/icons/chevron-down.svg';

const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function Select({ onSelectChange, selectedRegion }) {
  return (
    <SelectContainer>
      <select value={selectedRegion} onChange={(event) => onSelectChange(event.target.value)}>
        <option value="" disabled>Filter by region</option>
        <option key={uuidv4()} value="All">All Regions</option>
        {options.map((optionName) => (
          <option
            key={uuidv4()}
            value={optionName}
          >
            {optionName}
          </option>
        ))}
      </select>
      <img src={arrow} alt="arrow icon" />
    </SelectContainer>
  );
}

Select.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string,
};

Select.defaultProps = {
  selectedRegion: 'Filter By Region',
};
