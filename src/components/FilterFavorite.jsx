export default function FilterFavorite({LabelDescription, id, onClick }) {
  return (
    <div className='flex flex-col w-fit mb-1 px-4 rounded'>
      <label className='text-sm mb-1' htmlFor={id}>
        {LabelDescription}
      </label>
      <input
        className='caret-emerald-500 border focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-1 rounded-sm'
        id={id}
        type='checkbox'
        onClick={onClick}
      />
    </div>
  );
}
