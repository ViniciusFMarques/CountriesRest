/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Container } from './styles';
import CountryCard from '../CountryCard';

function CountryCardContainer({ countriesList }) {
  const { length } = countriesList;

  return (
    <Container countryLength={length}>
      {countriesList.map((country) => (
        <CountryCard
          key={uuidv4()}
          imageData={country.flag}
          countryName={country.name}
          countryPopulation={country.population}
          countryRegion={country.region}
          countryCapital={country.capital}
        />
      ))}
    </Container>
  );
}

CountryCardContainer.propTypes = {
  countriesList: PropTypes.arrayOf(shape()).isRequired,
};

export default memo(CountryCardContainer);
