import React, { Component } from 'react'

export default class Contact extends Component {
    constructor () {
        super();
        this.state ={
            adress:"Sunspear-Dorne",
            email:"JusticeforElia@LannistersSuck.com"
        }
    }
  render() {
    return (
      <div>
        <h2>Oberyn's Contact Info</h2>
        <ul>
            <li>Address: {this.state.adress}</li>
            <li>email: {this.state.email}</li>
        </ul>
      </div>
    )
  }
}
