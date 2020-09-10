import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios.post("/users/add", user).then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h5 className="text-xs text-white py-2">Create New User</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="text-xs text-white py-2">Username : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="bg-gradient-to-r from-teal-400 to-blue-800 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded"
            />
          </div>
        </form>
      </div>
    );
  }
}
