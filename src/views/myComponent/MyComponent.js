// import React from 'react';
// import ChildComponent from './ChildComponent';
// import FormComponent from './FormComponent';
// class MyComponent extends React.Component {
//     state = {
//         childList: [
//             {
//                 id: 1,
//                 job: 'captain',
//                 salary: '400'
//             },
//             {
//                 id: 2,
//                 job: 'spider',
//                 salary: '800'
//             },
//             {
//                 id: 3,
//                 job: 'hulk',
//                 salary: '700'
//             }
//         ]
//     }

//     addNewJob = (job) => {
//         this.setState({
//             childList: [...this.state.childList, job]
//         });
//     }

//     deleteJob = (job) => {
//         let currenJobs = this.state.childList;
//         currenJobs = currenJobs.filter((item) => item.id !== job.id);
//         this.setState({
//             childList: currenJobs
//         });
//     }

//     render() {
//         return (
//             <>
//                 <FormComponent addNewJob={this.addNewJob} />

//                 <ChildComponent a={this.state.childList} deleteJob={this.deleteJob} />
//             </>

//         )
//     }
// }
// export default MyComponent;

import React from "react";
import FormComponent from "./FormComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        works: [
            {
                id: 'job1',
                job: 'hulk',
                salary: '500'
            },
            {
                id: 'job2',
                job: 'thor',
                salary: '700'
            },
            {
                id: 'job3',
                job: 'captain',
                salary: '666'
            }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            works: [...this.state.works, job]
        });
    }
    deleteJob = (job) => {
        let newWorks = this.state.works.filter(item => item.id !== job.id);
        this.setState({
            works: newWorks
        });
    }
    render() {
        return (
            <>
                <FormComponent addNewJob={this.addNewJob} />
                <ChildComponent deleteJob={this.deleteJob} works={this.state.works} />
            </>
        );
    }
}
export default MyComponent;