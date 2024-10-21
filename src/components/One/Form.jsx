import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");

  const trackName = (event) => {
    setName(event.target.value);
  };
  const trackLive = (event) => {
    setLive(event.target.value);
  };

  const showData = (event) => {
    event.preventDefault();

    const data = {
      name,
      live,
    };

    //we use addNewMember function from the parent file here and sent data in the parameter to Parent file
    props.addNewMember(data);
    setName("");
    setLive("");
    //so we can change that value like this.
  };

  return (
    <form onSubmit={showData}>
      <input
        type="text"
        placeholder="name"
        onChange={trackName}
        value={name}
        //value is the letter we can see in the input box,and defined it's equal to the name variable.
      />
      <input type="text" placeholder="live" onChange={trackLive} value={live} />
      <button type="submit">Add new member</button>
    </form>
  );
};
export default Form;
