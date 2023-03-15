import React, {useState} from "react";

export const  useCounter = ()=> {
   const [count , setCount]  =  useState(0);
   const increment = () => {
    setCount(count+1);
   };

   const decrement = () => {
    setCount(count-1)
   };

   const restart = () => {
    setCount(0);
   };


   return {count, increment, decrement, restart};
}