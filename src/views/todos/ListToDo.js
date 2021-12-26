import React from 'react';
import './listToDo.scss';
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Phat trien ung dung web' },
            { id: 'todo2', title: 'Tri tue nhan tao' },
            { id: 'todo3', title: 'He quan tri co so du lieu' },
            { id: 'todo4', title: 'Thu thap va phan tich yeu cau' },
        ],
        editTodo: {}
    }

    addNew = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        });
        toast.success('Them thanh cong!');
    }

    deleteTodo = (todo) => {
        let curList = this.state.listTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: curList
        });
        toast.warn('Xoa thanh cong!');
    }

    editTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        if (!isEmpty && editTodo.id === todo.id) {
            // let listCopy = [...listTodo];
            // let index = listCopy.findIndex(item => item.id === todo.id);
            // listCopy[index].title = editTodo.title;
            let listCopy = listTodo.map(item => {
                if (item.id === todo.id) {
                    item.title = editTodo.title;
                }
                return item;
            })
            this.setState({
                listTodo: listCopy,
                editTodo: {}
            });
            toast.success('change success!');
            return;
        }
        this.setState({
            editTodo: todo
        });
    }
    changeTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        });
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        console.log(isEmpty);
        return (
            <>
                <p>
                    Todo simple app with react
                </p>
                <div className='container'>
                    <AddToDo addNew={this.addNew} />

                    <div className='content'>
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className='child' key={item.id}>
                                        {isEmpty ?
                                            <span>{index + 1}. {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1}.
                                                        <input value={editTodo.title} onChange={this.changeTodo} />
                                                    </span>
                                                    : <span>{index + 1}. {item.title} </span>
                                                }
                                            </>

                                        }
                                        <button onClick={() => { this.deleteTodo(item) }}>Delete</button>
                                        <button onClick={() => { this.editTodo(item) }}>
                                            {!isEmpty && item.id === editTodo.id ? 'save' : 'edit'}
                                        </button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        );
    }
}
export default ListToDo;