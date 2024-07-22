 import React  from "react";

 class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // count1 : 1,
            // count2 : 2
            name : "Asad",
            login : "Mpl"
        }

        // console.log("Child constructor");
    }

    async componentDidMount() {
        // console.log("Child component did mount");
        let data = await fetch("https://api.github.com/users/MohammedArshad25");
        let json = await data.json();

        this.setState(json);
        // console.log(json)
        // this.setState()
    }

    componentWillUnmount () {
        // console.log("component will unmount");
    }

    render() {
        // console.log("Child render");

        console.log(this.state);
        // const { name, role, location} = this.state;
        return (
            <div className="user-wrapper">
            <h2>{this.state.name}</h2>
            <h3>{this.state.login}</h3>
            {/* <p>count1 : {this.state.count1}</p>
            <p>count2 : {this.state.count2}</p> */}
            {/* <button onClick= {()=> {
                this.setState({
                    count1: this.state.count1 + 1,
                })
            }}>update count1</button> */}
        </div>
        );
    }
 }

 export default UserClass;
