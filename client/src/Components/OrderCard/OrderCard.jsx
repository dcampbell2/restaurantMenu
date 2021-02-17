import React from "react";
import "../OrderCard/OrderCard.css";

const OrderCard = ({ title, price, desc, details, _id, addOns }) => {
  return (
    <div className="card-content orders-card-wrapper">
      {title.map((newTitle) => {
        return (
          <React.Fragment key={newTitle}>
            <div key={newTitle}>
              <span className="card-title orders-title">
                {newTitle}
              </span>
              <span className="card-title orders-title">
                Add On: {addOns}
              </span>
              <strong className="card-title orders-text">Customer Details: {details} </strong>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OrderCard;
