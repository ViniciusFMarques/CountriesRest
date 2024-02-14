import { useParams } from 'react-router-dom';
import CountriesService from '../../../../services/CountriesService';
import { Container } from './styles';
import CountryDetailsContent from '../CountryDetailsContent';

export default function CountryDetailsMain() {
  const { name } = useParams();
  const countryData = CountriesService.getCountryByName(name)[0];

  return (
    <Container>
      <img src={countryData.flag} alt="country flag" />
      <CountryDetailsContent countryData={countryData} />
    </Container>
  );
}
