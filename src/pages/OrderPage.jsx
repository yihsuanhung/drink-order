import { useState } from "react";
import Controls from "../components/Controls";
import Card from "../components/Card";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const handelCreate = (o) => {
    setOrders([o, ...orders]);
  };
  return (
    <div className="container">
      <h1 className="mt-3 mb-3">訂飲料神器</h1>
      <Controls onCreate={(o) => handelCreate(o)} />
      {orders.length > 0 ? (
        orders.map((o, i) => {
          return (
            <Card
              key={i}
              order={o}
              onDelete={() => {
                setOrders([...orders.slice(0, i), ...orders.slice(i + 1)]);
              }}
            />
          );
        })
      ) : (
        <div>目前沒有飲料</div>
      )}
    </div>
  );
}
