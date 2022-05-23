import React from "react";

function User(props) {
    const {name, handle} = props.userData
  console.log(props);
  return (
    <span className="user">
      <span className="name"> {name}</span>
      <span className="handle">@ {handle}</span>
    </span>
  );
}

export default User;