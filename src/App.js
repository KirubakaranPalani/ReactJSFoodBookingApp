// import React from "react";
// import ReactDOM from "react-dom/client";

// // creating DOM elements ( tagname, id, children)
// // React element is a object once we render it is converted to html
// const parent = React.createElement("div", { id: "parent"}, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "Im an h1 tag"),
//     ]),
// ]);

// console.log(parent);

// // to render
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // React element
// const head = (
//     <h1>This is react element</h1>
// );
// const body = <h3>This is react element 2 </h3>

// const content = <h3>This is react element 3 {head}{body}</h3>

// // functional component
// const SubComp = () => (
//     <h3>This is sub component and this is called of component composition</h3>
// )

// const SubCompFunc = function (){
//     return (
//     <h3>This is sub component function using function keyword and this is called of component composition</h3>
// )}

// const num = 100+ 300;
// const HeadComp = () =>(
//     <div id="container">
//     <h1 className="heading">This is functional component</h1>
//     <SubComp />
//     <SubCompFunc />
//     {num}
//     {content}
//     {/* React element  */}
//     </div>
// )
// root.render(<HeadComp />);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);