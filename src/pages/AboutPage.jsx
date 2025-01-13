import "../components/AboutUs/AboutPage.css";
import { PageContainer, BannerImage, Text } from "../components";
import PageHeading from "../components/BookNow/PageHeading";
const AboutPage = (props) => {
  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 content-about">
          <PageHeading title="من نحن" />
          <Text />
          <button className="mt-3 mx-2 about-button btn">تواصل معنا</button>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3 mb-5">
          <BannerImage />
        </div>
      </div>
    </PageContainer>
  );
};
export default AboutPage;
