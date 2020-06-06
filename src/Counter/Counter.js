import React, { Component } from "react";
import { connect } from "react-redux";
import * as ActionType from '../Redux/Actions/Actions'

class Counter extends Component {
  state = {
    incriment: "",
    decriment: "",
  };


  render() {
    return (
      <div>
        <div>
          <h2 className="bg-danger text-center py-1">
            Current Counter:{this.props.Countervalue}
          </h2>
          <div className="row text-center py-2">
            <div className="col-12">
              <button
                className="btn btn-info  mx-5 my-2"
                onClick={this.props.Onincriment1}
              >
                Incriment 1
              </button>
              <button
                className="btn btn-primary  mx-5 my-2"
                onClick={this.props.Ondecriment1}
              >
                Decriment 1
              </button>
              <button
                className="btn btn-secondary  mx-5 my-2"
                onClick={this.props.Onincriment5}
              >
                Incriment 5
              </button>
              <button
                className="btn btn-success mx-5 my-2"
                onClick={this.props.Ondecriment5}
              >
                Decriment 5
              </button>
              <button
                className="btn btn-secondary mx-5 my-2"
                onClick={this.props.Onincriment10}
              >
                Incriment 10
              </button>
              <button
                className="btn btn-danger mx-5 my-2"
                onClick={this.props.Ondecriment10}
              >
                Decriment 10
              </button>
            </div>
          </div>
          <div className="row pt-3 pl-5 pr-5">
            <div className="col-12 pl-5 pr-5">
              <h3 className="text-center bg-warning py-2">
                Add Input Yourself
              </h3>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Number To Incriment"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => this.setState({ incriment: e.target.value })}
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={() => this.props.Onincrimentinput(this.state.incriment)}
                  >
                    Incriment
                  </button>
                </div>
              </div>
              <div class="input-group mb-3 ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Number To Decriment"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => this.setState({decriment : e.target.value })}
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-danger"
                    type="button"
                    onClick={()=> this.props.Ondecrimentinput(this.state.decriment)}
                    
                  >
                    Decriment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 pt-3 ">
            <div className="row px-2">
              <div className="col-12 px-2 text-center">
                <button
                  class="btn btn-info mb-2 "
                  type="button"
                  onClick={() => this.props.OnStoreResult(this.props.count)}
                >
                  Store Counter
                </button>
                <button
                  class="btn btn-danger mb-2  ml-5"
                  type="button"
                  onClick={this.props.OnResetingCounter}
                >
                  Reset Counter
                </button>
                <button
                  class="btn btn-danger mb-2  ml-5"
                  type="button"
                  onClick={this.props.OnResetingStore}
                >
                  Reset Store
                </button>
                <button
                  class="btn btn-info mb-2  ml-5"
                  type="button"
                  onClick={this.props.OnResetingBoth}
                >
                  Reset Counter + STORE
                </button>
              </div>
            </div>
          </div>

          <ul style={{ listStyleType: "none" }}>
            {this.props.StoreResult.map((eachitem) => (
              <li key={eachitem.id} className="pb-1">
                <div className="row px-5 pt-3">
                  <div className="col-6 text-center ">
                    <h4>{eachitem.value}</h4>
                  </div>
                  <div className="col-6 text-center">
                    <button
                      class="btn btn-dark"
                      type="button"
                      onClick={()=>this.props.OnDeleteResult(eachitem.id)}
                    >
                      Delete Result
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapstatetoprops = (state) => {
  return {
    Countervalue: state.counter,
    StoreResult: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Onincriment1: () => dispatch({ type: ActionType.INCRIMENT_1, payload: 1 }),
    Ondecriment1: () => dispatch({ type: ActionType.DECRIMENT_1, payload: 1 }),
    Onincriment5: () => dispatch({ type: ActionType.INCRIMENT_5, payload: 5 }),
    Ondecriment5: () => dispatch({ type: ActionType.DECRIMENT_5, payload: 5 }),
    Onincriment10: () => dispatch({ type: ActionType.INCRIMENT_10, payload: 10 }),
    Ondecriment10: () => dispatch({ type: ActionType.DECRIMENT_10, payload: 10 }),
    Onincrimentinput:  ( incriment ) =>
      dispatch({ type: ActionType.INCRIMENT_INPUT, payload: incriment }),
    Ondecrimentinput: ( decriment ) =>
      dispatch({ type: ActionType.DECRIMENT_INPUT, payload: decriment }),
    OnStoreResult: ( result ) => dispatch({ type: ActionType.STORE_RESULT,result : result }),
    OnResetingCounter: () => dispatch({ type: ActionType.RESET_COUNTER }),
    OnResetingStore: () => dispatch({ type: ActionType.RESET_STORE }),
    OnResetingBoth: () => dispatch({ type: ActionType.RESET_BOTH }),
    OnDeleteResult: (id) => dispatch({ type: ActionType.DELETE_RESULT,payload_id :id })
  };
};

export default connect(mapstatetoprops, mapDispatchToProps)(Counter);
