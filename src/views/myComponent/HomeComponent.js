import React from "react";
import { withRouter } from "react-router";
import logo from "../../assets/images/nam.JPG";
import { connect } from "react-redux";
class HomeComponent extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    deleteUser = (user) => {
        console.log(user);
        this.props.deleteUserRedux(user);
    }
    createUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log(this.props.dataRedux);
        let { dataRedux } = this.props;
        return (
            <>
                <div>Hello im home</div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((data, index) => {
                            return (
                                <div key={data.id}>{index + 1} - {data.name}
                                    <button style={{ 'marginLeft': '20px' }} onClick={() => { this.deleteUser(data) }}>
                                        Remove
                                    </button>

                                </div>
                            )
                        })

                    }
                    <button style={{ 'marginLeft': '20px' }} onClick={this.createUser}>
                        Create
                    </button>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (user) => dispatch({ type: 'delete_user', payload: user }),
        addUserRedux: () => dispatch({ type: 'create_user' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeComponent));