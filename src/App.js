import { useState } from "react";
import Student from "./components/One/Student";
import Form from "./components/One/Form";

const App = () => {
  //students is the variable that gather students info in array

  const [students, setStudents] = useState([]);
  //We use useState so we can ‌add new students info dynamically

  // addNewMember is the function defined in the Parent file

  const addNewMember = (memInfo) => {
    setStudents([...students, memInfo]);

    //memInfo is the student info sent from the child Form file
  };

  let contentSection = <p>No Member</p>;

  if (students.length > 0) {
    contentSection = students.map((student) => (
      <Student name={student.name} live={student.live} key={student.name} />
    ));
  }

  return (
    <div>
      <section>{contentSection}</section>
      <Form addNewMember={addNewMember} />
    </div>
  );
};

export default App;
