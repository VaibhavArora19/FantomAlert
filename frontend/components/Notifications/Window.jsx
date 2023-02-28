const Window = (props) => {
  return (
    <div>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">{props.description}</div>
      </div>
    </div>
  );
};

export default Window;