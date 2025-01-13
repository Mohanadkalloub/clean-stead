import { Route, Routes } from "react-router-dom";
// import {FormSignUp , FormLogin} from "../components/index"
import {
  HomePage,
  AboutPage,
  ContactUsPage,
  ServicePage,
  //   LoginAdmin,
  BookPageTwo,
  BookPageOne,
  BookPageThree,
  BookPageFour,
} from "../pages/index";
const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginAdmin />}/> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/الرئيسية" element={<HomePage />} />
      <Route path="/الخدمات" element={<ServicePage />} />
      <Route path="/من نحن" element={<AboutPage />} />
      <Route path="/اتصل بنا" element={<ContactUsPage />} />
      {/* <Route path ="/انشاء حساب"element={<FormSignUp />}/>
            <Route path="/تسجيل دخول" element={<FormLogin />}/> */}
      <Route path="/احجز الآن" element={<BookPageOne />} />
      <Route path="/اختر الخدمات" element={<BookPageTwo />} />
      <Route path="/اختر الخدمات" element={<BookPageThree />} />
      <Route path="/ادخل معلوماتك" element={<BookPageFour />} />
    </Routes>
  );
};
export default AppRoutes;
