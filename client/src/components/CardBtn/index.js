import React from "react";


 function CardBtn(props) {
    return (
      <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-primary">
        {props.children}
      </button>
    );
  }
  export default CardBtn

