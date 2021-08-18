import React from "react";

function Main() {
  return (
    <div className="main">
      <h5>0</h5>
      <div className="control">
        <div className="increase">
          <p className="clickText">Увеличить</p>
        </div>
        <div className="decrease">
          {" "}
          <p className="clickText">Уменьшить</p>
        </div>
        <div className="discharge">
          <p className="clickText">Cброс</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
