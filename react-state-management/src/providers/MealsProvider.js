import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => { //accepts the children's value. This value holds everything that we wrapped into the meals provider component when it gets rendered inside the app component

  const [meals, setMealsList] = React.useState(todaysMeals);

  return ( //Value attributes gets assigned the meals object, which is the value sent to the use of state variable earlier
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
