import { listenerCount } from "process";
import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  
  function handleLiClick(id) {
    const newFoodArray = foods.filter(food => food.id !== id);
    setFoods(newFoodArray);
  }
  const foodList = foods.map(food => <li key={food.id} onClick={() => handleLiClick(food.id)}>{food.name} | Cuisine: {food.cuisine} | Level: {food.heatLevel}</li>)
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods,newFood];
    setFoods(newFoodArray);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{/* list of spicy foods */}{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
