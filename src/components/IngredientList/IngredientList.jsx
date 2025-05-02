// src/components/IngredientList/IngredientList.jsx

import { useState } from "react";

const IngredientList = (props) => {

    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => {
                return (
                    <li
                        key={index}
                        style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button onClick={() => props.addToBurger(ingredient)}>+</button>
                    </li>
                )

            })}
        </ul>
    )
};

export default IngredientList;
