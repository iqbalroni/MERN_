import React from "react";
import "./button.scss";

function Button({title, ...rest}) {
  return (
    <div>
      <button className="button-page" {...rest}>
        {title}
      </button>
    </div>
  );
}

export default Button;
