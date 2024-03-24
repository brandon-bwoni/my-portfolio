function PrimaryButton(props) {
  return (
    <div className="button-container">
      <button className="border-2 ease-in-out duration-300  sm:text-nowrap border-orange-600 px-3 py-1.5 font-medium rounded-2xl text-sm hover:bg-orange-600 text-slate-700 hover:text-white shadow-md"
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
}

export default PrimaryButton;