import Select from './components/Select';
import searchIcon from '../../assets/icons/search-outline.svg';
import CountryCardContainer from './components/CountryCardContainer';
import { HomeHeaderContainer, InputContainer, Container } from './styles';
import useHome from './useHome';

export default function Home() {
  const {
    searchTerm,
    handleChangeSearchTerm,
    handleSetSelectedRegion,
    selectedRegion,
    filteredCountries,
  } = useHome();

  return (
    <Container>
      <HomeHeaderContainer>
        <InputContainer>
          <img src={searchIcon} alt="search icon" />
          <input value={searchTerm} type="text" placeholder="search for a country..." onChange={handleChangeSearchTerm} />
        </InputContainer>
        <Select onSelectChange={handleSetSelectedRegion} selectedRegion={selectedRegion} />
      </HomeHeaderContainer>
      <CountryCardContainer countriesList={filteredCountries} />
    </Container>
  );
}
