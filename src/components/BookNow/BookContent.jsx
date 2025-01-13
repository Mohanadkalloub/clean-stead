import "../BookNow/BookContent.css";
const BookContent = () => {
  return (
    <div className="d-flex align-items-center jsutify-content between my-3">
      <div className="col">
        <button className="number-one rounded-pill mx-1">1</button>
        <span className="text-one">اختر الخدمات</span>
        <div className="one-line d-md-block d-none"></div>
      </div>
      <div className="col">
        <button className="number-two rounded-pill mx-1">2</button>
        <span className="data">التاريخ والوقت</span>
        <div className="two-line d-md-block d-none"></div>
      </div>
      <div className="col">
        <button className="number-three rounded-pill mx-1">3</button>
        <span className="data">معلوماتك</span>
      </div>
    </div>
  );
};
export default BookContent;
