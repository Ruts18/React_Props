// import React, { useState } from 'react';
// import ChildComp from './ChildComp';
// const ParentComp=()=> {
//   //it define a state variable first
//   const[first,setfirst]=useState("Rutuja");
//   const subject="React Js";
//   const Profession="Engineer";
//   return (
//     <>
//   <ChildComp name={first} subject={subject} Profession={Profession} setName={setfirst}/>
//   </>
//   );
// };
// export default ParentComp;



//2. Pass the vlaue to the child using class componenet

import React from 'react';
import ChildComp from './ChildComp';

class ParentComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        {/* //define */}
        <ChildComp number1={10} number2={20} />
      </div>
    );
  }
}
export default ParentComp;

