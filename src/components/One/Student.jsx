import { useState } from "react";

const Student = (props) => {
  const live = props.live;
  const name = props.name;

  return (
    <div className="box">
      <p>name:{name}</p>
      <p>live:{live}</p>
    </div>
  );
};
export default Student;
