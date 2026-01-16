import React from "react";

const ChildComponent =React.memo(
    (props)=> {
    console.log("udfkszubfgvdksi")
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
})

export default ChildComponent;






// import React from "react";

// function ChildComponent(props) {
//   console.log("udfkszubfgvdksi");
//   return (
//     <div>
//       <button>{props.name}</button>
//     </div>
//   );
// }

// export default React.memo(ChildComponent);
