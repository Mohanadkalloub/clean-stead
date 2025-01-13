import { BookContent, PageContainer } from "../components";
import BookNow from "../components/BookNow/BookNow";
import PageHeading from "../components/BookNow/PageHeading";
import "../components/BookNow/BookPage.css";
import { NavLink } from "react-router-dom";

const BookPageFour = (props) => {
  return (
    <PageContainer>
      <PageHeading title="احجز الآن" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 shdow mb-5">
            <BookContent />
            <div className="d-flex align-items-center justify-content-between line-two"></div>
            <div className="shadow-box">
              <div className="d-flex align-items-center">
                <h5 className="mx-3 mt-3">ادخل معلوماتك</h5>
                <span className="mt-2 mx-2 login-page-four">تسجيل الدخول</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="form-group mx-3">
                  <div className="input-group">
                    <label for="name" className="fs-5 mb-1">
                      الاسم
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="الاسم"
                    />
                  </div>
                </div>
                <div className="form-group mx-3">
                  <div className="input-group">
                    <label for="name" className="fs-5 mb-1">
                      رقم الجوال
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="name"
                      placeholder="رقم الجوال"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <div className="form-group mx-3">
                  <div className="input-group">
                    <label for="name" className="fs-5 mb-1">
                      العنوان
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="العنوان"
                    />
                  </div>
                </div>
                <div className="form-group mx-3">
                  <div className="input-group">
                    <label for="name" className="fs-5 mb-1">
                      العنوان التفصيلي
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="العنوان التفصيلي"
                    />
                  </div>
                </div>
              </div>
              <span className="line-2 mx-2 d-flex align-items-center justify-content-center mt-5"></span>
              <div className="select-button d-flex align-items-center justify-content-between mt-3 mb-5">
                <NavLink
                  to="/احجز الآن"
                  className={(props) =>
                    props.isActive ? "active" : "in-active"
                  }
                  end>
                  <button type="submit" className="mx-3 mb-3 back">
                    الرجوع
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={(props) =>
                    props.isActive ? "active" : "in-active"
                  }
                  end>
                  <button className="btn btn-primary mb-3" type="submit">
                    ارسال
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
export default BookPageFour;
