import * as ActionType from './Actions/Actions'

const initialstate = {
  counter: 0,
  results: [],
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.INCRIMENT_1:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ActionType.DECRIMENT_1:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case ActionType.INCRIMENT_5:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ActionType.DECRIMENT_5:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case ActionType.INCRIMENT_10:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ActionType.DECRIMENT_10:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case ActionType.INCRIMENT_INPUT:
      console.log(action.payload)
      return {
        ...state,
        counter: action.payload 
        
      };
      
    case ActionType.DECRIMENT_INPUT:
      console.log(action.payload)
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case ActionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: Math.random(),
          value: state.counter,
        }),
      };
    case ActionType.RESET_COUNTER:
      return {
        ...state,
        counter: 0,
      };
    case ActionType.RESET_STORE:
      return {
        ...state,
        results:[]
      };
    case ActionType.RESET_BOTH:
      return {
        ...state,
        counter: 0,
        results: [],
      };
      case ActionType.DELETE_RESULT:
        const NewArray = state.results.filter(eachvalue => eachvalue.id !== action.payload_id)
        return {
             ...state,
             results : NewArray
        };
  }
  return state;
};
export default Reducer;
