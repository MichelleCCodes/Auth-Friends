import React from "react";
import { axiosWithAuth} from '../utils/axiosWithAuth';

class FriendForm extends React.Component {

    state = {
        body: {
          name: '',
          age: '', 
          email: ''
        }
      };


    handleChange = e => {
        this.setState({
            body: {
                ...this.state.body, 
                [e.target.name]: e.target.value
            }
        })
    };

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state.body)
        .then(res => {
            console.log(res)
        })
    }

    render() {
    return (
<div>
    <h1>Know another friend?</h1>
    <p>Add them to the list!</p>
    <form onSubmit={this.addFriend}>
        <input
        type="text"
        name="name"
        placeholder="friend's name"
        onChange={this.handleChange}
        />
        <input
         type="text"
         name="age"
        placeholder="friend's age"      
        onChange={this.handleChange}  
        />
        <input
        type="email"
        name="email"
        placeholder="friend's email"
        onChange={this.handleChange}
        />
        <button>Add My Friend</button>
    </form>
</div>
    );
  }
}

export default FriendForm;
