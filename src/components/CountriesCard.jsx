export default function CountriesCard({ country }) {
  return (
    <div className='flex flex-col max-w-sm rounded-md overflow-hidden shadow-lg hover:hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-500 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-slate-300 transition ease-in-out duration-100'>
      <img
        className='w-40 max-h-20 mx-1'
        src={country.flag}
        alt={`Flaf of ${country.name}`}
      />
      <p className='font-bold text-xl mb-2 mx-1'>{country.name}</p>
      <span className='text-sm mb-2 mx-1'>
        Capital: {country.capital || 'No capital'}
      </span>
      <span className='text-sm mb-2 mx-1'>
        Population: {Intl.NumberFormat('en-US').format(country.population)}
      </span>
    </div>
  );
}
