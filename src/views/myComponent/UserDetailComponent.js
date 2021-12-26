import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class UserDetailComponent extends React.Component {
    state = {
        name: '',
        email: ''
    }
    async componentDidMount() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`);
        console.log(res.data);
        this.setState({
            name: res && res.data ? res.data.name : '',
            email: res && res.data ? res.data.email : ''
        })
    }
    back = () => {
        this.props.history.push('/user');
    }

    render() {
        return (
            <>
                <h1>Ten : {this.state.name}</h1>
                <h2>Email: {this.state.email}</h2>
                <button onClick={this.back}>Back</button>
            </>
        );
    }
}

export default withRouter(UserDetailComponent);