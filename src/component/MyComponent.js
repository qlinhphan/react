import React, { useEffect, useState } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: 1, name: "a", age: 11, },
//             { id: 2, name: "c", age: 17, },
//             { id: 3, name: "d", age: 19, }
//         ]
//     }

//     onsubmit = (event) => {
//         event.preventDefault()
//         const nameIn = event.target.elements.trang.value
//         alert("are you sure??")
//         let data_clone = this.state.listUser
//         let id_clone_max = 0;
//         data_clone.forEach(element => {
//             if (element.id > id_clone_max) id_clone_max = element.id
//         });
//         console.log("id max: ", id_clone_max)
//         console.log(data_clone)
//         data_clone.push({ id: id_clone_max + 1, name: nameIn, age: Math.floor((Math.random() * 100) + 1) })
//         this.setState({
//             listUser: data_clone
//         })
//     }

//     deleteUser = (event) => {
//         event.preventDefault()
//         alert("delete User: ")
//         let ids = +event.target.id
//         console.log(event.target, ids)
//         let user_clone = this.state.listUser.filter(item => item.id !== ids)
//         this.setState({
//             listUser: user_clone
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <UserInfor onsubmit={this.onsubmit}></UserInfor>
//                 <DisplayInfor listUser={this.state.listUser} deleteUser={this.deleteUser}></DisplayInfor>
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {

    const [state, setState] = useState({
        listUser: [
            { id: 1, name: "a", age: 11, },
            { id: 2, name: "c", age: 17, },
            { id: 3, name: "d", age: 19, }
        ]
    })

    let onsubmit = (event) => {
        event.preventDefault()
        const nameIn = event.target.elements.trang.value
        alert("are you sure??")
        let data_clone = state.listUser
        let id_clone_max = 0;
        data_clone.forEach(element => {
            if (element.id > id_clone_max) id_clone_max = element.id
        });
        console.log("id max: ", id_clone_max)
        console.log(data_clone)
        data_clone.push({ id: id_clone_max + 1, name: nameIn, age: Math.floor((Math.random() * 100) + 1) })
        // this.setState({
        //     listUser: data_clone
        // })
        setState({ listUser: data_clone })
    }

    let deleteUser = (event) => {
        event.preventDefault()
        alert("delete User: ")
        let ids = +event.target.id
        console.log(event.target, ids)
        let user_clone = state.listUser.filter(item => item.id !== ids)
        // this.setState({
        //     listUser: user_clone
        // })
        setState({ listUser: user_clone })
    }

    useEffect(() => {
        setTimeout(() => { document.title = "Phan QL" }, 3000)
        if (state.listUser.length == 5) {
            alert("you have 5 users !!")
        }
    })
    return (
        <div>
            <UserInfor onsubmit={onsubmit}></UserInfor>
            <DisplayInfor listUser={state.listUser} deleteUser={deleteUser}></DisplayInfor>
        </div>
    )
}

export default MyComponent