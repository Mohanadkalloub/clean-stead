import { NavLink } from "react-router-dom";
import {
  PageContainer,
  BookNow,
  PageHeading,
  HeadingBookNow,
  BookContent,
} from "../components";
import "../components/BookNow/BookPage.css";
const BookPageOne = (props) => {
  return (
    <PageContainer>
      <PageHeading title="احجز الآن" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 shdow mb-5">
            <BookContent />
            <div className="d-flex align-items-center justify-content-between line-two"></div>
            <div className="p-3 mb-5">
              <HeadingBookNow description="اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده" />
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example">
                <option selected>تنظيف المنازل</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example">
                <option selected>التنظيف التجاري</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example">
                <option selected>تنظيف النوافذ</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example">
                <option selected>تنظيف السجاد</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="d-flex align-items-center justify-content-between line-two mt-4"></div>
              <div className="select-button d-flex align-items-center justify-content-between mt-3">
                <NavLink
                  to="/"
                  className={props.isActive ? "active" : "in-active"}
                  end>
                  <button type="submit" className="mx-3 back">
                    الرجوع
                  </button>
                </NavLink>
                <NavLink
                  to="/اختر الخدمات"
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
export default BookPageOne;
