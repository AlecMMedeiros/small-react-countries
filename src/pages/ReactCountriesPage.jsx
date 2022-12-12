import { useState } from 'react';
import CountriesCard from '../components/CountriesCard';
import Header from '../components/Header';
import Input from '../components/Input';
import Main from '../components/Main';
import Status from '../components/Status';
import countryTable from '../database/countries.json';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [renderCountries, setRenderCountries] = useState(countryTable);
  const [favoriteCountries, setFavoriteCountries ] = useState([])

  const handleCountryFilter = (selectedCountry) => {
    setCountryFilter(selectedCountry);
    FilterCountries(selectedCountry);
  };

  const FilterCountries = (countryFilter) => {
    if (countryFilter.length >= 3) {
      const filter = countryTable.filter(({ name }) =>
        name.toLowerCase().includes(countryFilter.toLocaleLowerCase())
      );
      setRenderCountries(filter);
      return countryTable;
    } else {
      setRenderCountries(countryTable);
    }
  };

  const setFavorite = (newFavorite) => {
    if(favoriteCountries.includes(newFavorite)) {
      const newSetCountries = favoriteCountries.filter((country) => country !== newFavorite);
      setFavoriteCountries(newSetCountries);
      
    } else {
      setFavoriteCountries((currentfavotiteCountries) => [...currentfavotiteCountries, newFavorite])
    };
  };  
  return (
    <>
      <Header />
      <Main>
      <Status renderCountries={renderCountries} favoriteCountries={favoriteCountries} />
        <Input
          LabelDescription='Informe o nome do país (ao menos 03 caracters):'
          type='text'
          id='filterCountry'
          action={handleCountryFilter}
          value={countryFilter}
          autoFocus
        />
        <section className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {renderCountries.map((data) => (
            <CountriesCard key={data.name} country={data} setFavorite={setFavorite} favotiteCountries=
            {favoriteCountries} />
          ))}
        </section>
      </Main>
    </>
  );
};
