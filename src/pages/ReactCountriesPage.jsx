import { useState } from 'react';
import BarFixed from '../components/BarFixed';
import CountriesCard from '../components/CountriesCard';
import Header from '../components/Header';
import Main from '../components/Main';
import countryTable from '../database/countries.json';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [renderCountries, setRenderCountries] = useState(countryTable);
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [showFavorite, setShowrFavorite] = useState(false);

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
    if (favoriteCountries.includes(newFavorite)) {
      const newSetCountries = favoriteCountries.filter(
        (country) => country !== newFavorite
      );
      setFavoriteCountries(newSetCountries);
    } else {
      setFavoriteCountries((currentfavotiteCountries) => [
        ...currentfavotiteCountries,
        newFavorite,
      ]);
    }
  };

  const renderFavorite = ({ currentTarget }) => {
    setShowrFavorite(currentTarget.checked);
  };

  return (
    <>
      <Header />
        <BarFixed
          renderCountries={renderCountries}
          favoriteCountries={favoriteCountries}
          handleCountryFilter={handleCountryFilter}
          countryFilter={countryFilter}
          renderFavorite={renderFavorite}
        />       
      <Main>
        <section className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {showFavorite
            ? renderCountries
                .filter((ele) => favoriteCountries.includes(ele.name))
                .map((data) => (
                  <CountriesCard
                    key={data.name}
                    country={data}
                    setFavorite={setFavorite}
                    favotiteCountries={favoriteCountries}
                  />
                ))
            : renderCountries.map((data) => (
                <CountriesCard
                  key={data.name}
                  country={data}
                  setFavorite={setFavorite}
                  favotiteCountries={favoriteCountries}
                />
              ))}
        </section>
      </Main>
    </>
  );
}
