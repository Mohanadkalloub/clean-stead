import { BookContent, PageContainer } from "../components";
import BookNow from "../components/BookNow/BookNow";
import PageHeading from "../components/BookNow/PageHeading";
import "../components/BookNow/BookPage.css";
import { NavLink } from "react-router-dom";
const BookPageThree = (props) => {
  return (
    <PageContainer>
      <PageHeading title="احجز الآن" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 shdow mb-5">
            <BookContent />
            <div className="d-flex align-items-center justify-content-between line-two"></div>{" "}
            <div className="shadow-box">
              <div className="when-book mt-4">
                <span className="mx-4">اختر موعد الحجز</span>
              </div>
              <div className="mt-3">
                <span className="mx-4 repate-service-heading">
                  تكرار الخدمة
                </span>
                <div className="btn-group d-flex m-2">
                  <button className="repate-service mx-2">
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value=""
                      aria-label="..."
                    />
                    مره واحده
                  </button>
                  <button className="repate-service mx-2">
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value=""
                      aria-label="..."
                    />
                    يوميا
                  </button>
                  <button className="repate-service mx-2">
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value=""
                      aria-label="..."
                    />
                    اسبوعيا
                  </button>
                  <button className="repate-service mx-2">
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value=""
                      aria-label="..."
                    />
                    شهريا
                  </button>
                </div>
                <div className="mt-3">
                  <span className="mx-4 mt-3 date-heading">التاريخ والوقت</span>
                  <div className="form-group mt-3 mx-3">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="التاريخ والوقت"
                        className="form-control"
                      />
                      <div className="calendar">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="line-2 mx-2 d-flex align-items-center justify-content-center mt-5"></span>
                <div className="select-button d-flex align-items-center justify-content-between mt-3 mb-5">
                  <NavLink
                    to="/"
                    className={props.isActive ? "active" : "in-active"}
                    end>
                    <button type="submit" className="mx-3 mb-3 back">
                      الرجوع
                    </button>
                  </NavLink>
                  <NavLink
                    to="/ادخل معلوماتك"
                    className={(props) =>
                      props.isActive ? "active" : "in-active"
                    }
                    end>
                    <button className="btn btn-primary mb-3" type="submit">
                      استمرار
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <BookNow />
        </div>
      </div>
    </PageContainer>
  );
};
export default BookPageThree;
