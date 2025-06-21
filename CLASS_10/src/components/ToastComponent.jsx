import React, { Fragment } from "react";

const ToastComponent = () => {
  return (
    <Fragment>
      <div className="toast toast-start toast-middle">
        <div className="alert alert-success">
          <span>User registration successful.</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ToastComponent;
