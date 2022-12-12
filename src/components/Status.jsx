export default function Status({ favoriteCountries, renderCountries }) {
  return (
    <section className='px-4 hover:shadow-md rounded'>
      <p className='my-2 bg-[#5B9DCC] font-semibold px-4 rounded'>Status</p>
      <p>{`Total of countries: ${renderCountries.length}`}</p>
      <p>{`Total of favorite countries: ${favoriteCountries.length}`}</p>
    </section>
  );
};

