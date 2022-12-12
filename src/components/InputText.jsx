export default function InputText({ LabelDescription, type, id, action, value, autoFocus='false' }) {
  const handleAction = ({ currentTarget }) => {
    if (action) {
      const getValue = currentTarget.value;
      const type = currentTarget.type;
      action(getValue, type);
    }
  };
  return (
    <div className='flex flex-col my-4 justify-center px-4 rounded items-center'>
      <label className='text-xs mb-1' htmlFor={id}>
        {LabelDescription}
        </label>
        <input
          className='text-black w-[21rem] caret-emerald-500 border focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-1 rounded-sm text-xs'
          id={id}
          type={type}
          value={value}
          autoFocus={autoFocus}
          onChange={handleAction}
        />
    </div>
  );
};
