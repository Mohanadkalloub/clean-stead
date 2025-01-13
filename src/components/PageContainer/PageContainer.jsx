import { Header, Footer } from "../../components";
const PageContainer = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
