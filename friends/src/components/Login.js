import React from "react";

class Login extends React.Component {
//INITIAL STATE
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

//HELPER FUNCTIONS
handleChange = e => {
    this.setState({
        credentials:{
            ...this.state.credentials, 
            [e.target.name]: e.target.value
        }
    });
};

login = () => {
e.preventDefault();

}

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
        <label>
            Step 1)     
            <input
            type="text"
            name="username"
            placeholder = "enter username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            </label>
            <label>
            Step 2)   
            <input
            type="text"
            name="password"
            placeholder = "enter password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          </ label>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
