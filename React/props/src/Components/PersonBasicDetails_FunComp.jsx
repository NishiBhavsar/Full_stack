import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
  return (
    <>
      <h2>My full name is { props.personData.firstName +" "+props.personData.lastName }</h2>;
    </>
  );
}

function PersonBasicDetails() {
  const personInfo = { firstName: "Nishi", lastName: "Bhavsar" };
  return (
    <>
	    <Person personData={personInfo} />
    </>
  );
}
ReactDOM.render(<PersonBasicDetails />, document.getElementById('root'));

export default PersonBasicDetails