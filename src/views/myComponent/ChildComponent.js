// import React from 'react';
// import '../style.scss';
// class ChildComponent extends React.Component {
//     state = {
//         showJob: false
//     }

//     handleShowHide = (e) => {
//         this.setState({
//             showJob: !this.state.showJob
//         });
//     }
//     handleDelete = (job) => {
//         this.props.deleteJob(job);
//     }

//     render() {
//         let { a } = this.props;
//         let { showJob } = this.state;
//         return (
//             <>
//                 {!showJob ?
//                     <div>
//                         <button className='btn-show' onClick={this.handleShowHide}>SHOW</button>
//                     </div>
//                     :
//                     <>
//                         <div className='childList'>
//                             {
//                                 a.map((child, index) => {
//                                     return (
//                                         <div key={index}>
//                                             {child.job} - {child.salary}
//                                             <span><button onClick={() => this.handleDelete(child)}>Xóa</button></span>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div><button onClick={this.handleShowHide}>HIDE</button></div>
//                     </>
//                 }

//             </>

//         )
//     }
// }
// export default ChildComponent;

import React from "react";
class ChildComponent extends React.Component {
    state = {
        isShow: false
    }
    show = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }
    removeJob = (work) => {
        this.props.deleteJob(work);
    }
    render() {
        let { works } = this.props;
        return (
            <>
                {this.state.isShow ?
                    <>
                        <div className="Works">
                            {
                                works.map((work, index) => {
                                    return (
                                        <div key={index}>
                                            {work.job} + {work.salary}
                                            <button onClick={() => { this.removeJob(work) }}>Remove</button>
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div onClick={this.show}>
                            <button>HIDE</button>
                        </div>
                    </>
                    :
                    <div onClick={this.show}>
                        <button>SHOW</button>
                    </div>
                }
            </>
        )
    }
}

export default ChildComponent;