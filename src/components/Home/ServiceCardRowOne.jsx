import Heading from "../Heading/Heading";
import { boxOne, boxTwo, boxThree } from "../../assets/images/index";
const ServiceCardRowOne = (props) => {
  return (
    <div className="row card-service">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card-hous p-4 mb-4">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-circle" src={boxOne} alt="" />
            </div>
            <div className="col-6">
              <p className="text-end h5">تنظيف المنازل</p>
            </div>
          </div>
          <p className="hint h5 mt-4 pe-3 pt-1">
            ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها
            تحتاج..
          </p>
          <div className="d-flex align-item-center b-color">
            <button className="btn bg-transparent cb">
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
              <img className="img-fluid rounded-circle" src={boxTwo} alt="" />
            </div>
            <Heading title="التنظيف التجاري" />
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
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card-hous p-4 mb-4">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-circle" src={boxThree} alt="" />
            </div>
            <Heading title="تنظيف السجاد" />
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
    </div>
  );
};
export default ServiceCardRowOne;
