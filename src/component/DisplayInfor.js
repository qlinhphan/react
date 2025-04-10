import React from "react";

class DisplayInfor extends React.Component {

    render() {
        const listUser = this.props.listUser
        console.log(listUser)
        return (
            <div>
                {
                    listUser.map((user) => {
                        return (
                            <div key={user.id}>
                                id: {user.id} && name: {user.name} && age: {user.age}
                                <hr></hr>
                            </div>
                        )

                    }

                    )
                }
            </div>
        )
    }
}

export default DisplayInfor