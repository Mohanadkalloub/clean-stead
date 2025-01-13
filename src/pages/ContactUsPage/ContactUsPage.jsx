import { imageTwo } from "../../assets/images/index";
import { PageContainer } from "../../components";
import PageHeading from "../../components/BookNow/PageHeading";
import Form from "./components/Form/Form";
let ContactUsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <div className="section mt-5">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
              <PageHeading title="تواصل معنا" />
              <Form />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 mt-3 mb-5">
              <div className="img">
                <img
                  src={imageTwo}
                  alt=""
                  className=" rounded-4 img-fluid mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactUsPage;
