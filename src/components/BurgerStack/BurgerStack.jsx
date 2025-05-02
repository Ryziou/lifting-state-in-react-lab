// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.length > 0 ? props.stack.map((ingredient, index) => {
                return (
                    <li
                        key={index}
                        style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
                    </li>
                )
            }) : (
                <h3>No Ingredients</h3>
            )}
        </ul>
    )
};

export default BurgerStack;
