import React from 'react';
import FilterFavorite from './FilterFavorite';
import InputText from './InputText';
import Status from './Status';

export default function BarFixed({
  renderCountries,
  favoriteCountries,
  handleCountryFilter,
  countryFilter,
  renderFavorite,
}) {
  return (
    <section className='fixed w-full bg-[#eef1ff] top-20'>
      <Status
        renderCountries={renderCountries}
        favoriteCountries={favoriteCountries}
      />
      <InputText
        LabelDescription='Enter the name of the country (at least 03 characters):'
        type='text'
        id='filterCountry'
        action={handleCountryFilter}
        value={countryFilter}
        autoFocus
      />
      <FilterFavorite
        LabelDescription='Show favorite only:'
        id='filterFavorite'
        onClick={renderFavorite}
      />
    </section>
  );
};
