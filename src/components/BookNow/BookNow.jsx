import "../BookNow/BookNow.css";
const BookNow = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 box-book mb-5">
      <div className="box-heading">ملخص</div>
      <div className="border-white"></div>
      <div className="one mt-3 mx-1">
        <p>الخدمة</p>
        <h6>تنظيف المنازل</h6>
      </div>
      <div className="two mt-3 mx-1">
        <p>العناصر المختارة</p>
        <li>تنظيف المنازل (1)</li>
      </div>
      <div className="three mt-3 mx-1">
        <p>اجمالي السعر</p>
        <h6>55$</h6>
      </div>
    </div>
  );
};
export default BookNow;
