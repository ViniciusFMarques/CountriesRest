/* eslint-disable class-methods-use-this */
import { data } from '../mock/data';

class CountriesService {
  getCountries() {
    const countries = data;
    return countries;
  }

  getCountriesByRegion(region) {
    let countries;
    if (region === 'All') {
      countries = data;
      return countries;
    }
    countries = data.filter((country) => country.region === region);

    return countries;
  }

  getCountryByName(name) {
    const country = data.filter((indexCountry) => indexCountry.name === name);

    return country;
  }

  getCountriesByAlphaCode(codeList) {
    const countries = data.filter((country) => {
      let code = '';
      for (let i = 0; i < codeList.length; i += 1) {
        if (codeList[i] === country.alpha3Code) {
          code = codeList[i];
        }
      }
      return country.alpha3Code === code;
    });

    return countries;
  }
}

export default new CountriesService();
