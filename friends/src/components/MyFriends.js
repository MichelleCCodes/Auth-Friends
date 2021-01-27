import React from "react";
import { axiosWithAuth } from './../utils/axiosWithAuth';
import FriendList from './FriendForm'
class MyFriends extends React.Component {
state = {
    friends: []
};

componentDidMount(){
    this.getFriends()
};

getFriends = () => {
    axiosWithAuth()
    .get('/friends')
    .then(res=> {
        this.setState({
            friends: res.data
        })
        console.log(res.data)
    })
    .catch(err => {
        console.log('error from myfriends')
    })
};

  render () {
      return (
    <>
    <div className="myFriends">
      <h1>A list of my friends:</h1>
      <div>
      {this.state.friends.map((friend => {
          return(
            <div className='friend-card' key={friend.id}>
            <p>{friend.name} is {friend.age} years old today!</p>
            <p>Send a message to them at: {friend.email}</p>
        </div>
        )
      }))}
      </div>
    </div>
    <FriendList friends={this.state.friends}/>
    </>
  );
};
}

export default MyFriends;
