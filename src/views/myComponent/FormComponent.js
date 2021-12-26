// import React from "react";

// class FormComponent extends React.Component {
//     state = {
//         job: '',
//         salary: '',
//     }

//     rejob = (e) => {
//         this.setState({
//             job: e.target.value,

//         });
//     }
//     resalary = (e) => {
//         this.setState({
//             salary: e.target.value,

//         });
//     }
//     submit = (e) => {
//         e.preventDefault();
//         if (!this.state.job || !this.state.salary) {
//             alert('nhap du thong tin');
//             return;
//         }
//         console.log('check is data: ', this.state);
//         this.props.addNewJob({
//             id: Math.floor(Math.random() * 1001),
//             job: this.state.job,
//             salary: this.state.salary
//         });

//         this.setState({
//             job: '',
//             salary: ''
//         });
//     }

//     render() {
//         return (
//             <form>
//                 <label htmlFor="fname">Job:</label><br />
//                 <input type="text" value={this.state.job} onChange={this.rejob} /><br />
//                 <label htmlFor="lname">Salary:</label><br />
//                 <input type="text" value={this.state.salary} onChange={this.resalary} /><br /><br />
//                 <input type="submit" onClick={this.submit} />
//             </form>
//         );
//     }
// }

// export default FormComponent;
import React from "react";
class FormComponent extends React.Component {
    state = {
        job: '',
        salary: ''
    }
    setJob = (e) => {
        this.setState({
            job: e.target.value
        });
    }
    setSalary = (e) => {
        this.setState({
            salary: e.target.value
        });
    }
    submitForm = (e) => {
        e.preventDefault();
        if (!this.state.job || !this.state.salary) {
            alert('Nhap du thong tin');
            return;
        }
        console.log(this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            job: this.state.job,
            salary: this.state.salary
        });

        this.setState({
            job: '',
            salary: ''
        });

    }
    render() {
        return (
            <form>
                <label>Job:</label>
                <br />
                <input type="text" value={this.state.job} onChange={this.setJob}></input>
                <br />
                <label>Salary:</label>
                <br />
                <input type="text" value={this.state.salary} onChange={this.setSalary}></input>
                <br />
                <input type="submit" value="Register" onClick={this.submitForm} />
            </form>
        );
    }
}
export default FormComponent;