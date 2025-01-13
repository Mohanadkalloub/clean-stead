const Rectangle = (props) => {
  return (
    <div className="row">
      <div className="rectangle mb-4">
        <img src={props.img} alt="" className="rectangle-img" />
      </div>
      <div className="col mt-4">
        <span className="rectangle-title">{props.title}</span>
        <p className="rectangle-text">
          ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
        </p>
      </div>
    </div>
  );
};

export default Rectangle;
