import React from "react";

class DisplayInfor extends React.Component {

    state = {
        stt: true
    }

    onclick = () => {
        // alert("click me")
        this.setState({
            stt: !this.state.stt
        })
    }



    render() {
        const listUser = this.props.listUser
        console.log(listUser)
        return (
            <div>
                <div onClick={() => { this.onclick() }}>
                    {
                        this.state.stt === true ? "Hide" : "Show"
                    }
                </div>
                {this.state.stt &&
                    listUser.map((user) => {
                        return (
                            <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                                id: {user.id} && name: {user.name} && age: {user.age}
                                <button onClick={(event) => { this.props.deleteUser(event) }} id={user.id}>delete User</button>
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