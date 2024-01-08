import React from "react";
import ReactDOM from "react-dom/client";

App.js code

// const heading= React.createElement("h1",{id:"heading", xyz:"abc" },"Hello World from React")
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
    
    
    /* <div id="parent">
    <div id="child1">
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <div id="child2">
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
    </div>
</div> */

// const parent=React.createElement("div",{id:"parent"},[
//         React.createElement("div",{id :"child1"},[
//         React.createElement("h1",{},"I'm a h1 tag"),
//         React.createElement("h2",{},"I'm a h2 tag"),
//     ]),
//         React.createElement("div",{id :"child2"},[
//         React.createElement("h1",{},"I'm a h1 tag"),
//         React.createElement("h2",{},"I'm a h2 tag"),
//     ]),
// ]);
// console.log(parent);//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//JSX is htm or xml like syntax

/*

const heading=React.createElement("h1",{},"Render It");
const root =ReactDOM.createRoot(document.getElementById("root"))
 root.render(heading);
 */

/*
JSX syntax for doing same as above
const jsxheading = <h1 id="heading"> Render </h1>
const root =ReactDOM.createRoot(document.getElementById("root"))
 root.render(jsxheading);
 */
/*
 JSX syntax for doing same as above
 const jsxheading = (<h1 id="heading">
  Render
   </h1>)
 const root =ReactDOM.createRoot(document.getElementById("root"))
  root.render(jsxheading);
  */

  /React Functional component
// const HeadingComponent =()=>
// {
//     return <h1>React Functional Component</h1>;
// }

// const Title = () =>
// (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// )
// //Component Composition
// const HeadingComponent = () =>
// (
//     <div id="container">
//     <Title/>
//     <h1 className="head" tabIndex="5"> React using JSX</h1>
//     </div>
// );

// const root =ReactDOM.createRoot(document.getElementById("root"))
//   root.render(<HeadingComponent/>);
/*
$Header
  -Logo
  -Nav Items

$Body
    -Search
    -RestaurantContainer
    -Restaurant Card


$Footer
-Copyright
-Links
-Address
-Contact
*/