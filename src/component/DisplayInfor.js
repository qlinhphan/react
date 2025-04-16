import React, { useState } from "react";
import './scss/Display.scss'
import logoReact from '../logo.svg'
// class DisplayInfor extends React.Component {

//     state = {
//         stt: true
//     }

//     onclick = () => {
//         // alert("click me")
//         this.setState({
//             stt: !this.state.stt
//         })
//     }



//     render() {
//         const listUser = this.props.listUser
//         console.log(listUser)
//         return (
//             <div className="display-infor">
//                 <img src={logoReact} />
//                 <div onClick={() => { this.onclick() }}>
//                     {
//                         this.state.stt === true ? "Hide" : "Show"
//                     }
//                 </div>
//                 {this.state.stt &&
//                     listUser.map((user) => {
//                         return (
//                             <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
//                                 id: {user.id} && name: {user.name} && age: {user.age}
//                                 <button onClick={(event) => { this.props.deleteUser(event) }} id={user.id}>delete User</button>
//                                 <hr></hr>
//                             </div>
//                         )

//                     }

//                     )
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const listUser = props.listUser

    const [state, setState] = useState(true)

    let changeStt = () => {
        setState({ state: !state })
    }
    return (
        <div>
            <div className="display-infor">

                <img src={logoReact} />
                <div onClick={() => { changeStt() }}>
                    show listUsers
                </div>
                {state &&
                    listUser.map((user) => {
                        return (
                            <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                                id: {user.id} && name: {user.name} && age: {user.age}
                                <button onClick={(event) => { props.deleteUser(event) }} id={user.id}>delete User</button>
                                <hr></hr>
                            </div>
                        )

                    }

                    )
                }
            </div>
        </div>
    )
}

export default DisplayInfor