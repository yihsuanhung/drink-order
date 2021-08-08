export default function Card({ order, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-text">姓名：{order.name}</p>
        <p className="card-text">飲料：{order.drink}</p>
        <p className="card-text">甜度冰塊：{order.option}</p>
        <div className=" d-md-flex">
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete && onDelete()}
            type="button"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
}
