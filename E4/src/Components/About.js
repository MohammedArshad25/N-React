import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <div>About us</div>
//       <User name={"Arshad"} role={"father"} location={"Mpl"}/>
//       <UserClass name={"Asad"} role={"child"} location={"Mpl"}/>
//     </div>
//   )
// };


class About extends React.Component {

  constructor(props) {
      super(props);
      // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }


  render() {
    // console.log("Parent Render");

    return (
      <div>
        <div>About us</div>
        <User name={"Arshad"} role={"father"} location={"Mpl"}/>
        <UserClass name={"Asad"} role={"child"} location={"Mpl"}/>
      </div>
    )
  }
}



export default About;
