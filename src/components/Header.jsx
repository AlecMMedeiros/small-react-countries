import React from 'react';
import FilterFavorite from './FilterFavorite';
import InputText from './InputText';
import Status from './Status';

export default function Header({
  renderCountries,
  favoriteCountries,
  handleCountryFilter,
  countryFilter,
  renderFavorite,
}) {
  return (
    <header className='px-4 w-full fixed top-1'>
      <div className='bg-black mx-auto p-4 justify-center items-center shadow-lg shadow-stone-500 rounded-lg'>
        <h1 className='text-center text-[#EEF1FF] font-semibold text-xl mx-3'>
          Project: Countries
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <FilterFavorite
            LabelDescription='Show favorite only:'
            id='filterFavorite'
            onClick={renderFavorite}
          />
        <InputText
          LabelDescription='Enter the name of the country (at least 03 characters):'
          type='text'
          id='filterCountry'
          action={handleCountryFilter}
          value={countryFilter}
          autoFocus
        />
        <Status
          renderCountries={renderCountries}
          favoriteCountries={favoriteCountries}
        />
        </div>
      </div>
    </header>
  );
}
