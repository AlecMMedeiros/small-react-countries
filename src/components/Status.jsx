export default function Status({ favoriteCountries, renderCountries }) {
  return (
    <section className='px-4 rounded text-xs'>
      <p>{`Total of countries: ${renderCountries.length}`}</p>
      <p>{`Total of favorite countries: ${favoriteCountries.length}`}</p>
    </section>
  );
};

