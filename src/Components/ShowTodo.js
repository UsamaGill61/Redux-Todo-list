import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import * as ActionType from "../Redux/Actions/Actions";

class ShowTodo extends Component {
  state = {
    incriment: "",
    decriment: "",
  };

  render() {
  
    return (
      <div>
        <div className="container py-3">
          <div className="row">
            <div className="col-12">
              <div className="input-group  ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Todo Item"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) =>
                    this.setState({ inputvalue: e.target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={() =>
                      this.props.AddItemToArray(this.state.inputvalue)
                    }
                  >
                    Add Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {this.props.Showvalue.map(eachitem => (
         
          <ul key={eachitem.id} style={{ listStyleType: "none" }}>
            <li  className="pb-1">
              <div className="row px-5 pt-3">
                <div className="col-2">
                  <h6>Mark As Checked item</h6>
                </div>
                <div className="col-1">
                  <input
                    onClick={() => this.props.OntoggleComplete(eachitem.id)}
                    className="form-check-input"
                    type="checkbox"
                  />
                </div>
                <div className="col-3 text-center ">
                  <h4 className={eachitem.completed ? "completed" : ""}>
                    {eachitem.value}
                  </h4>
                </div>
                <div className="col-2 text-center ">
                  <button className="btn btn-success" style={{border:"1px solid black"}} onClick={() =>this.props.Onincriment1(eachitem.id)}>+</button>
        <button className="btn btn-warning">{eachitem.counter}</button>
                  <button className="btn btn-danger "style={{border:"1px solid black"}} onClick={() =>this.props.Ondecriment1(eachitem.id)}>-</button>

                </div>
                <div className="col-4 text-center">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => this.props.OnDeleteResult(eachitem.id)}
                  >
                    Delete Todo
                  </button>
                  <button
                    className="btn btn-dark"
                    type="button"
                    // onClick={() => this.props.OnDeleteResult(eachitem.id)}
                  >
                    Edit Todo
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapstatetoprops = (state) => {
  return {
    Showvalue: state.TodoArray,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddItemToArray: (inputvalue) =>
      dispatch({ type: ActionType.ADD_ITEM_TO_ARRAY, payload: inputvalue }),
    OnDeleteResult: (id) =>
      dispatch({ type: ActionType.DELETE_ITEM_FROM_ARRAY, payload: id }),
    OntoggleComplete: (id) =>
      dispatch({ type: ActionType.TOGGLE_COMPLETE_OR_NOT, payload: id }),
      Onincriment1: (id) => dispatch({ type: ActionType.INCRIMENT_1, payload: {id:id ,num:1} }),
      Ondecriment1: (id) => dispatch({ type: ActionType.DECRIMENT_1, payload: {id:id ,num:1} }),
  };
};

export default connect(mapstatetoprops, mapDispatchToProps)(ShowTodo);
