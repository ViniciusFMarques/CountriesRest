import { Link } from 'react-router-dom';
import { Container, CountryDetailsHeader } from './styles';
import arrowback from '../../assets/icons/arrow-back-outline.svg';
import CountryDetailsMain from './components/CountryDetailsMain';

export default function CountryDetails() {
  return (
    <Container>
      <CountryDetailsHeader>
        <Link to="/">
          <div className="buttonContainer">
            <img src={arrowback} alt="arrow" />
            <button type="button">Back</button>

          </div>
        </Link>
      </CountryDetailsHeader>
      <CountryDetailsMain />
    </Container>

  );
}
