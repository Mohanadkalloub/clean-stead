import { NavLink } from "react-router-dom";

const ButtonBookPage = (props) => {
  return (
    <div className="select-button d-flex align-items-center justify-content-between mt-3 mb-5">
      <button type="submit" className="mx-3 mb-3">
        الرجوع
      </button>
      <NavLink
        to="/اختر الخدمات"
        className={(props) => (props.isActive ? "active" : "in-active")}
        end>
        <button className="btn btn-primary mb-3" type="submit">
          {props.button}
        </button>
      </NavLink>
    </div>
  );
};
export default ButtonBookPage;
