import "../components/Service/Service.css";
import {
  Text,
  BannerImage,
  PageContainer,
  PageHeading,
  ServiceCard,
} from "../components";
const ServicePage = (props) => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 content-service">
          <PageHeading title="تنظيف المنازل" />
          <Text />
          <button className="mt-2 mx-2 mt-3 btn">احجز الآن</button>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3 mb-5">
          <BannerImage />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
          <h1>الخدمات المتوفرة في تنظيف المنازل</h1>
        </div>
      </div>
      <div className="row mb-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <div className="d-flex align-items-center justify-content-between show-more mt-3"></div>
        <div className="d-flex align-items-center justify-content-center icon-show-more">
          <span>رؤية المزيد</span>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </PageContainer>
  );
};
export default ServicePage;
