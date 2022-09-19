import React from "react";
import { useState, useRef } from "react";

const Count = () => {
    const[count, SetCount] = useState(0);
    const increment = () =>{
      SetCount(count + 1);
    };
    const decrement = () =>{
      SetCount(count - 1);
    }
    return(
      <>
      <h1>現在の値は{count}です</h1>
      <table>
      <tr>
      <td><button onClick={increment}>+</button></td>
      <td><button onClick={decrement}>-</button></td>
      </tr>
      </table>
      </>
    );
  };

export default Count;