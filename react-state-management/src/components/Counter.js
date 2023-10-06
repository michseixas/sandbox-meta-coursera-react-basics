import { useMealsListContext } from "../providers/MealsProvider"; //accessing the context


const Counter = () => {

    const { meals } = useMealsListContext();
    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    );
}

export default Counter;