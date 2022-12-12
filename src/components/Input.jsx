export default function Input({ LabelDescription, type, id, action, value, autoFocus='false' }) {
  const handleAction = ({ currentTarget }) => {
    if (action) {
      const getValue = currentTarget.value;
      const type = currentTarget.type;
      action(getValue, type);
    }
  };
  return (
    <div className='flex flex-col my-4 justify-center'>
      <label className='text-sm mb-1' htmlFor={id}>
        {LabelDescription}
        </label>
        <input
          className='caret-emerald-500 border focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-1 rounded-sm'
          id={id}
          type={type}
          value={value}
          autoFocus={autoFocus}
          onChange={handleAction}
        />
    </div>
  );
}
