import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const Orders = () => {
  const [allOrder,setAllOrder] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/allorder',{withCredentials:true}).then((res)=>{
      setAllOrder(res.data);
    })
  },[])

  return (
    <>
      <h3 className="title">Total Order ({allOrder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrder.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      </>
  );
};

export default Orders;