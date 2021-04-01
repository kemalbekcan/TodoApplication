import React from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import ExampleTodo from "./ExampleTodo";

// Todo Class
export default class TodoApp extends React.Component {
    render() {
      return (
        <div className="container my-5">
          <Header />
          <ExampleTodo />
          <AddItem />
        </div>
      );
    }
  }