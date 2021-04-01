import React from "react";
import TodoItem from "./TodoItem";

// ItemList Function Class StateLess
const ItemList = (props) =>{
    return (
      <div>
        {/* arrof function ile dizide dolaşma ve TodoItem veri yollamak. */}
          {props.itemListele.map((itemList, index) => (
            <TodoItem key={index} List={itemList} deleteItem={props.deleteItem} />
          ))}
        
      </div>
    );
  }
export default ItemList;