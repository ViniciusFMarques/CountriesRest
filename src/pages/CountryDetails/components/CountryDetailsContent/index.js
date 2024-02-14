import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { BottomContainer, Container, MidContainer } from './styles';
import CountriesService from '../../../../services/CountriesService';

export default function CountryDetailsContent({ countryData }) {
  let alphaCodeCountries = [];
  if (countryData.borders) {
    alphaCodeCountries = CountriesService.getCountriesByAlphaCode(countryData.borders);
  }

  return (
    <Container>
      <h1>{countryData.name}</h1>
      <MidContainer>
        <p>
          <strong>Native name: </strong>
          {countryData.nativeName}
        </p>
        <p>
          <strong>Population: </strong>
          {countryData.population}
        </p>
        <p>
          <strong>Region: </strong>
          {countryData.region}
        </p>
        {countryData.subRegion && (
        <p>
          <strong>Sub region: </strong>
          {countryData.subRegion}
        </p>
        )}
        {countryData.capital && (
        <p>
          <strong>Capital: </strong>
          {countryData.capital}
        </p>
        )}
        {countryData.topLevelDomain && (
        <p>
          <strong>Top Level Domain: </strong>
          {countryData.topLevelDomain}
        </p>
        )}
        {countryData.currencies && (
        <p>
          <strong>Currencies: </strong>
          {countryData.currencies.length > 1 ? (
            countryData.currencies.map((currency) => `${currency.name}, `)
          ) : countryData.currencies[0].name}
        </p>
        )}
        {countryData.languages && (
        <p>
          <strong>languages: </strong>
          {countryData.languages.length > 1 ? (
            countryData.languages.map((language) => `${language.name}, `)
          ) : countryData.languages[0].name}
        </p>
        )}

      </MidContainer>

      {countryData.borders && (
      <BottomContainer>
        <h3>Border Countries: </h3>
        <div className="borderCountries">
          {alphaCodeCountries.map((country) => <span key={uuidv4()}>{country.name}</span>)}
        </div>
      </BottomContainer>
      )}

    </Container>

  );
}

CountryDetailsContent.propTypes = {
  countryData: PropTypes.shape().isRequired,
};
