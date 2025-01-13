import { imageOne, map } from "../../assets/images/index";
import "./footer.css";
let Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-4">
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
            <span>كلين</span>
            <span className="logo"> ستيد</span>
            <img src={imageOne} alt="" />
            <p className="mt-3">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
            <span>خدماتنا</span>
            <div className="box mt-3">
              <p>تنظيف المنازل</p>
              <p>التنظيف التجاري</p>
              <p>تنظيف السجاد</p>
              <p>تنظيف النوافذ</p>
              <p>تنظيف السيارات</p>
              <p>تنظيف بعد البناء</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
            <span>تواصل معنا</span>
            <div className="box mt-3">
              <div className="number">
                <i className="fa fa-phone"></i> 0592700722
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                eng.mohammadalhabil@gmail.com
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
            <span>تابعنا على</span>
            <div className="box mt-3 icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-google"></i>
            </div>
            <div className="img mt-5">
              <img src={map} alt="" className="w-75" />
            </div>
          </div>
        </div>
      </div>
      <div className="created text-center p-3">
        <span>جميع الحقوق محفوظة © 2022</span>
      </div>
    </div>
  );
};
export default Footer;
