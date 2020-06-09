import * as ActionType from "./Actions/Actions";

const initialstate = {
  TodoArray: [],
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_ARRAY:
      return {
        ...state,
        TodoArray: state.TodoArray.concat({
          id: Math.random(),
          value: action.payload,
          completed: false,
          counter: 0,
        }),
        
      };
    case ActionType.DELETE_ITEM_FROM_ARRAY:
      const NewArray = state.TodoArray.filter(
        (eachvalue) => eachvalue.id !== action.payload
      );
      return {
        ...state,
        TodoArray: NewArray,
      };

    case ActionType.TOGGLE_COMPLETE_OR_NOT:
      const newArray = state.TodoArray.map((eachvalue) =>
        eachvalue.id === action.payload
          ? { ...eachvalue, completed: !eachvalue.completed }
          : eachvalue
      );
      return {
        ...state,
        TodoArray: newArray,
      };

      case ActionType.INCRIMENT_1:
          const NEwArray = state.TodoArray.map((eachvalue) =>
        eachvalue.id === action.payload.id
          ? { ...eachvalue, counter : eachvalue.counter + action.payload.num  }
          : eachvalue
      );
 console.log(NEwArray)
      return {
        ...state,
        TodoArray: NEwArray,
      };
      case ActionType.DECRIMENT_1:
        const NEWArray = state.TodoArray.map((eachvalue) =>
      eachvalue.id === action.payload.id
        ? { ...eachvalue, counter : eachvalue.counter - action.payload.num  }
        : eachvalue
    );

    return {
      ...state,
      TodoArray: NEWArray,
    };
     
  }
  return state;
};

export default Reducer;
