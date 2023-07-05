// import React from 'react';

// const ChildComp=(props)=> {
//   //it cheacking prop that we recieve 
//   // console.log(props);
//   return (
//     <>
//     <p> Child {props.name} {props.subject} {props.Profession}</p>
//     {/* The button element has an onClick event handler that triggers the setName prop function */}
//     <button onClick={()=>props.setName("Pharande")}>Click me</button> 
//     </>
//   )
// }
// export default ChildComp;



//2.  recive the vlaue from the parent using class componenet

import React from 'react';

class ChildComp extends React.Component {
  render() {
    const { number1, number2 } = this.props; //refers to a specific object , access properties of the components
    const sum = number1 + number2;
    return (
      <div>
        <h2>Child</h2>  
        <p>Number 1: {number1}</p>
        <p>Number 2: {number2}</p>
        <p>Sum: {sum}</p>
      </div>
    );
  }
}
export default ChildComp;

