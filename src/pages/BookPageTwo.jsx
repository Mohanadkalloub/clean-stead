import { NavLink } from "react-router-dom";
import {
  PageContainer,
  BookNow,
  PageHeading,
  BookContent,
  HeadingBookNow,
} from "../components";
import "../components/BookNow/BookPage.css";
import SelectService from "../components/SelectService/SelectService";

const BookPageTwo = (props) => {
  return (
    <PageContainer>
      <PageHeading title="احجز الآن" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 shdow mb-5">
            <BookContent />
            <div className="d-flex align-items-center justify-content-between line-two"></div>{" "}
            <div className="select-service p-3 mb-5 mt-3">
              <HeadingBookNow description="اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده  " />
              <SelectService />
              <div className="d-flex align-item-center justify-content-between line-page mt-5 mb-3"></div>
              <div className="d-flex align-item-center justify-content-between">
                <NavLink
                  to="/"
                  className={props.isActive ? "active" : "in-active"}
                  end>
                  <button type="submit" className="mx-3 back">
                    الرجوع
                  </button>
                </NavLink>
                <NavLink
                  to="/ادخل معلوماتك"
                  className={(props) =>
                    props.isActive ? "active" : "in-active"
                  }
                  end>
                  <button className="btn btn-primary" type="submit">
                    استمرار
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <BookNow />
        </div>
      </div>
    </PageContainer>
  );
};
export default BookPageTwo;
