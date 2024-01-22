import React from "react";
import { Link } from "react-router-dom";
import './link.scss';

function LinkReact({ title, ...rest }) {
  return <div>
    <Link className="link" {...rest}>{title}</Link>
  </div>;
}

export default LinkReact;
