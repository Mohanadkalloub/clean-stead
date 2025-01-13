import { group3, group4 } from "../../assets/images/index";
const SectionHeading = (props) => {
  return (
    <div className="d-flex justify-content-center align-center-center mt-5 mb-5">
      <img src={group3} alt="" className="heading-img" />
      <h1>{props.title}</h1>
      <img src={group4} alt="" className="heading-img" />
    </div>
  );
};
export default SectionHeading;
