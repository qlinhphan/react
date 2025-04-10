import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "a", age: 11, },
            { id: 2, name: "c", age: 17, },
            { id: 3, name: "d", age: 19, }
        ]
    }


    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        )
    }
}

export default MyComponent