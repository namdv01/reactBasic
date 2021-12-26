import React from "react";
import './addToDo.scss';
import { toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        title: '',
    }
    changeInput = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    addToDo = (e) => {
        if (this.state.title) {
            this.props.addNew({
                id: Math.floor(Math.random() * 101),
                title: this.state.title
            })
            this.setState({
                title: ''
            })
        }
        else {
            toast.error('Nhap du thong tin!');
            return;
        }
    }
    render() {
        return (
            <div className='add-todo'>
                <input type='text' onChange={this.changeInput} value={this.state.title} />
                <button onClick={this.addToDo}>Add</button>
            </div>
        );
    }
}
export default AddToDo;