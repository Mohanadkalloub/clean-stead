import "../components/Home/HomePage.css";
import {
  group6,
  imageFive,
  elipse1,
  elipse2,
  elipse3,
  group2,
  group1,
  edit,
  date,
  chartAltOne,
  chartAltTwo,
} from "../assets/images/index";
import {
  ServiceCardRowOne,
  ServiceCardRowTwo,
  PageContainer,
  Rectangle,
  SectionHeading,
} from "../components/index";
const HomePage = () => {
  return (
    <PageContainer>
      <div className="container">
        {/* <button
          type="button"
          className="btn btn mt-2 mx-2 log-in"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          دخول
        </button> */}
        <div className="img mt-4">
          <img src={group6} alt="" className="img-fluid w-100" />
        </div>
        <SectionHeading title="الخدمات التي نقدمها" />
        <ServiceCardRowOne />
        <ServiceCardRowTwo />
        <div className="row">
          <SectionHeading title="لماذا تختارنا" />
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="img mb-5">
              <img src={imageFive} alt="" className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 mt-4 mb-3">
            <Rectangle title="الموثقية" img={edit} />
            <Rectangle title="الحجز اونلاين" img={date} />
            <Rectangle title="خصومات دائمة" img={chartAltOne} />
            <Rectangle title="دعم متواصل" img={chartAltTwo} />
          </div>
        </div>
        <SectionHeading title="ماذا يقولون عملائنا" />
        <div className="row card-reviews">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card-hous p-4 mb-4">
              <div className="row">
                <div className="col-7 text-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={elipse1}
                    alt=""
                  />
                </div>
                <div className="review">
                  <div className="review-top">
                    <img src={group2} alt="" />
                  </div>
                  <div className="review-bottom">
                    <img src={group1} alt="" />
                  </div>
                </div>
              </div>
              <div className="card-heading text-center text-dark">
                <span> ندرك صعوبة القيام بتنظيف </span>
                <br />
                <span> السجاد من قبل النساء</span>
              </div>
              <div className="text-center mt-3 card-name">
                <span>محمد أحمد</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card-hous p-4 mb-4">
              <div className="row">
                <div className="col-7 text-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={elipse2}
                    alt=""
                  />
                </div>
                <div className="review">
                  <div className="review-top">
                    <img src={group2} alt="" />
                  </div>
                  <div className="review-bottom">
                    <img src={group1} alt="" />
                  </div>
                </div>
              </div>
              <div className="card-heading text-center text-dark">
                <span> ندرك صعوبة القيام بتنظيف </span>
                <br />
                <span> السجاد من قبل النساء</span>
              </div>
              <div className="text-center mt-3 card-name">
                <span>محمد أحمد</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card-hous p-4 mb-4">
              <div className="row">
                <div className="col-7 text-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={elipse3}
                    alt=""
                  />
                </div>
                <div className="review">
                  <div className="review-top">
                    <img src={group2} alt="" />
                  </div>
                  <div className="review-bottom">
                    <img src={group1} alt="" />
                  </div>
                </div>
              </div>
              <div className="card-heading text-center text-dark">
                <span> ندرك صعوبة القيام بتنظيف </span>
                <br />
                <span> السجاد من قبل النساء</span>
              </div>
              <div className="text-center mt-3 card-name">
                <span>محمد أحمد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default HomePage;
