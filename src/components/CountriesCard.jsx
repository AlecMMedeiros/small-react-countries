export default function CountriesCard({
  country,
  setFavorite,
  favotiteCountries,
}) { 
  const { name, nativeName, capital, population, flag, area } = country;
  
  const handleFavorite = ({ currentTarget }) => {
    setFavorite(currentTarget.value);
  };
  return (
    <div className='flex flex-col max-w-sm rounded-md overflow-hidden shadow-lg hover:hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-500 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-slate-300 transition ease-in-out duration-100'>
      <img className='w-40 max-h-20 mx-1' src={flag} alt={`Flaf of ${name}`} />
      <p className='font-bold text-xl mb-2 mx-1'>{name}</p>
      <span className='text-sm mb-2 mx-1'>
        <strong>Capital: </strong>
        {capital || 'No capital'}
      </span>
      <span className='text-sm mb-2 mx-1'>
        <strong>Native Name: </strong>
        {nativeName || 'No capital'}
      </span>
      <span className='text-sm mb-2 mx-1'>
        <strong>Population: </strong>
        {Intl.NumberFormat('en-US').format(population)}
      </span>
      <span className='text-sm mb-2 mx-1'>
        <strong>Area: </strong>
        {Intl.NumberFormat('en-US').format(area)}
      </span>
      <button
        className={`${
          favotiteCountries.includes(name) === true ? 'bg-emerald-500' : 'bg-[#5B9DCC]'
        } self-center italic px-2 my-1 rounded hover:bg-emerald-400`}
        value={name}
        onClick={handleFavorite}
      >
        Favorite
      </button>
    </div>
  );
}
