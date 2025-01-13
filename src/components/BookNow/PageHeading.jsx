import { group4 } from "../../assets/images/index";
import "./PageHeading.css";
const PageHeading = (props) => {
  return (
    <div className="mt-2 mb-3">
      <span className="page-heading">{props.title}</span>
      <img src={group4} alt="" className="border-image" />
    </div>
  );
};
export default PageHeading;
