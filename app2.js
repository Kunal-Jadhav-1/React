import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// // React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

// const heading = React.createElement("h1", { id: "something2" }, "whatever");

// console.log(heading);

// JSX ==> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const element = (
     <h1 id="something">
         Element
     </h1>
     );




// React Component
     // 1) Class Based Component - Old Way
     // 2) Functional Component- New Way

// React Functional Component => nothing but a js function that returns a React Element

const Title = () => (
     <h1 id="something">
         Title
     </h1>
     );

const n=23;

const HeadingComponent = () => {
     return <div id="something3">
          <Title/>  
          <h1>
               {n*69}
          </h1>
          {element}


          <h1 id="something2">React Functional Component</h1>
     </div>;  
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
