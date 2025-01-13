import { mask } from "../../assets/images/index";
import "./ServiceCard.css";
const ServiceCard = () => {
  return (
    <div className="col-md-3 col-lg-3 col-sm-12 mb-4">
      <div className="card card-body">
        <div className="card-title">
          <img src={mask} alt="Service_Card " className="" />
          <span>غرفة النوم </span>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
