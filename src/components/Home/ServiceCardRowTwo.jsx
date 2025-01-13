import Heading from "../Heading/Heading";
import { boxFour, boxFive, boxSex } from "../../assets/images/index";
const ServiceCardRowTwo = (props) => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card-hous p-4 mb-4">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-circle" src={boxFour} alt="" />
            </div>
            <Heading title="تنظيف النوافذ" />
          </div>
          <p className="hint h5 mt-4 pe-3 pt-1">
            ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها
            تحتاج..
          </p>
          <div className="d-flex align-item-center b-color">
            <button className="btn bg-transparent cb ">
              رؤية المزيد
              <span className="fa fa-angle-left"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card-hous p-4 mb-4">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-circle" src={boxFive} alt="" />
            </div>
            <Heading title="تنظيف السيارات" />
          </div>
          <p className="hint h5 mt-4 pe-3 pt-1">
            ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها
            تحتاج..
          </p>
          <div className="d-flex align-item-center b-color">
            <button className="btn bg-transparent cb ">
              رؤية المزيد
              <span className="fa fa-angle-left"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card-hous p-4 mb-4">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-circle" src={boxSex} alt="" />
            </div>
            <Heading title="تنظيف بعد البناء" />
          </div>
          <p className="hint h5 mt-4 pe-3 pt-1">
            ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها
            تحتاج..
          </p>
          <div className="d-flex align-item-center b-color">
            <button className="btn  bg-transparent cb">
              رؤية المزيد
              <span className="fa fa-angle-left"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCardRowTwo;
