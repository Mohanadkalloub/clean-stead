import "./SelectService.css";
const SelectService = () => {
  return (
    <div className="select-service mt-3">
      <div className="d-flex align-items-center justify-content-between">
        <span className="mx-5 mt-2 mb-2">تنظيف المنازل (1)</span>
        <button className="mt-2 mb-2">اخفاء الخدمات</button>
      </div>
      <div className="d-flex align-item-center justify-content-between line-service mb-5"></div>
    </div>
  );
};
export default SelectService;
