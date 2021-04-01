import React from "react";

const TodoItem = (props) => {
    return(
      <div>
          <li className="list-group-item my-3 border border-danger font-weight-bold font-italic rounded">
            {props.List}
            <button className="btn btn-danger btn-sm float-right " onClick={() => {props.deleteItem(props.List)}}>x</button>
            </li>
      </div>
    );
  }

export default TodoItem;