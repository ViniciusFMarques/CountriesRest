import {
  useState, useEffect, useCallback, useDeferredValue, useMemo,
} from 'react';
import CountriesService from '../../services/CountriesService';

export default function useHome() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [firstRender, setFirstRender] = useState(true);

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredCountries = useMemo(() => countries.filter((country) => (
    country.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  )), [countries, deferredSearchTerm]);

  useEffect(() => {
    function LoadCountries() {
      setCountries(CountriesService.getCountries());
    }

    LoadCountries();

    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (firstRender) {
      return;
    }
    setCountries(CountriesService.getCountriesByRegion(selectedRegion));
  }, [selectedRegion]);

  const handleChangeSearchTerm = useCallback((event) => {
    setSearchTerm(event.target.value);
  });

  const handleSetSelectedRegion = useCallback((region) => {
    setSelectedRegion(region);
  });

  return {
    filteredCountries,
    handleChangeSearchTerm,
    selectedRegion,
    searchTerm,
    handleSetSelectedRegion,
  };
}
