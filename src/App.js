import React, {useState} from "react";
import Adduser from "./components/users/Adduser";
import Userlist from "./components/users/Userlist";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName,uAge) => { 
    setUserList((prevUserList)=> {
      return [...prevUserList,{name:uName,age:uAge, id:Math.random().toString()}]
    })
   };

  return (
    <div className="container">
      <Adduser onAddUser={addUserHandler} />
      <Userlist users={userList}/>
    </div>
  );
}

export default App;
