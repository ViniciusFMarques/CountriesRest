/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, ImageContainer, SubTextContainer, TextContainer,
} from './styles';

export default function CountryCard({
  imageData, countryName, countryPopulation, countryRegion, countryCapital,
}) {
  return (
    <Link to={`/details/${countryName}`}>
      <Container>
        <ImageContainer
          style={{
            backgroundImage: `url(${imageData})`,
          }}
        />
        <TextContainer>
          <h1>
            {countryName}
          </h1>
          <SubTextContainer>
            <p><strong>Population: </strong> <span>{countryPopulation}</span></p>
            <p><strong>Region: </strong> <span>{countryRegion}</span></p>
            {countryCapital && <p><strong>Capital: </strong> <span>{countryCapital}</span></p>}
          </SubTextContainer>
        </TextContainer>
      </Container>
    </Link>

  );
}

CountryCard.propTypes = {
  imageData: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  countryPopulation: PropTypes.number.isRequired,
  countryRegion: PropTypes.string.isRequired,
  countryCapital: PropTypes.string,
};

CountryCard.defaultProps = {
  countryCapital: '',
};
