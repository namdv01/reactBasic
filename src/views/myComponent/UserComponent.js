import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class UserComponent extends React.Component {
    state = {
        users: []
    }

    async componentDidMount() {
        // axios.get()
        //     .then(res => console.log(res.data))
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({
            users: res ? res.data : []
        });

    }
    viewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }

    render() {
        return (
            <div className="users">
                {this.state.users.map((user, index) => {
                    return <div key={user.id} onClick={() => this.viewDetail(user)}>{user.name}</div>
                })}
            </div>
        );
    }
}

export default withRouter(UserComponent);