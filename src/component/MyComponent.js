import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "qlinhphan",
        city: "Thanh Hoa",
        age: 21
    }

    onclick = (event) => {
        console.log(event.target)
        this.setState({
            name: "Phan Thi Thuy Trang",
            age: Math.floor((Math.random() * 100) + 1),
            city: "Thai Binh"
        })
    }

    hoverme = () => {
        console.log("hovered me!")
    }

    submitForm = (event) => {
        event.preventDefault()
        alert(this.state.name)
    }

    changeStateInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>Hello: <span>{this.state.name}</span></div>
                <div>city: <span>{this.state.city} </span>  &&  age: <span>{this.state.age}</span></div>
                <button onClick={(event) => { this.onclick(event) }}>Click Me</button>
                <button onMouseOver={this.hoverme}>Hover Me</button>
                <form onSubmit={(event) => { this.submitForm(event) }}>
                    <input type="text" placeholder="enter name..." onChange={(event) => { this.changeStateInput(event) }} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent