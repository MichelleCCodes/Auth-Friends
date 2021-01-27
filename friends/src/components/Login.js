import React from "react";
import axios from 'axios'; 

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

login = e => {
e.preventDefault();
axios.post('http://localhost:5000/api/login', this.state.credentials)
.then(res=> {
  localStorage.setItem('token', res.data.payload);
  this.props.history.push('/friends');
  console.log(res)
})
.catch(err => {
  console.log(err)
})
}

  render() {
    return (
      <div>
        <h1>Log in to see your friends!</h1>
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
