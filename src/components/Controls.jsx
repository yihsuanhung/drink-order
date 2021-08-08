import { useState } from "react";
export default function Controls({ onCreate }) {
  const defaultOrder = {
    name: "",
    drink: "",
    option: "",
  };
  const [order, setOrder] = useState(defaultOrder);
  const handelNameChange = (e) => {
    setOrder({
      ...order,
      name: e.target.value,
    });
  };
  const handelDrinkChange = (e) => {
    setOrder({
      ...order,
      drink: e.target.value,
    });
  };
  const handelOptionChange = (e) => {
    setOrder({
      ...order,
      option: e.target.value,
    });
  };
  const handelCreate = (e) => {
    e.preventDefault();
    if (onCreate && order.name !== "" && order.drink !== "") {
      onCreate(order);
      setOrder(defaultOrder);
    }
  };
  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={handelNameChange}
          className="form-control"
          placeholder="姓名"
          value={order.name}
        />
        <input
          type="text"
          className="form-control"
          onChange={handelDrinkChange}
          placeholder="飲料"
          value={order.drink}
        />
        <input
          type="text"
          className="form-control"
          onChange={handelOptionChange}
          placeholder="甜度冰塊"
          value={order.option}
        ></input>
        <button className="btn btn-primary" onClick={handelCreate}>
          確定
        </button>
      </div>
    </form>
  );
}
