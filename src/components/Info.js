import React, { Component } from 'react'
import O from '../images/0.png'
import X from '../images/1.png'
class Info extends Component {
  render() {
    return (
      <div className="center">
        <div className="form-row">
          <div className="form-group col-md-6 niceFont">
            <div className="">
              <label>
                Player One:
                <img className="icon" src={X} alt="icon"></img>
              </label>
              <input type="text" class="form-control"></input>
            </div>
          </div>
          <div className="form-group col-md-6 niceFont">
            <div className="">
              <label>
                Player Two:
                <img className="icon" src={O} alt="icon"></img>
              </label>
              <input type="text" class="form-control"></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-dark niceFont">
          Start game
        </button>
      </div>
    )
  }
}

export default Info
