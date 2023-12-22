import React from "react";
import ReactDOM from "react-dom/client";
// //  Using JS
// const root = document.getElementById("root");
// root.innerHTML = "<h1> Hello World from JS<h1>";




// //Using React

// const element = React.createElement("h1", {}, "Hello World from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element);

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "something" }, "Whatever"),
        React.createElement("h2", { id: "something2" }, "Whatever2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "something3" }, "Whatever3"),
        React.createElement("h2", { id: "something4" }, "Whatever5")
    ])
]);

//console.log(parent);
// heading is react element i.e js objects
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);