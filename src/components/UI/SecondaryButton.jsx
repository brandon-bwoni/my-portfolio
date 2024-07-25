function Button(props) {
  return (
    <div className="button-container">
      <button className=" ease-in-out duration-300 sm:text-nowrap bg-orange-600 px-3 py-2 font-medium rounded-2xl text-sm text-slate-700 hover:text-white shadow-md"
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;