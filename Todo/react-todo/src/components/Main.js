import Todo from "./Todo";
import UsememoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';
import styled, {css} from "styled-components";
import { useState } from "react";
import Child from "./Child";



function Main() {

  const Button = styled.button`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const GreenButton = styled(Button)`
background: green;
  color: white;
  border: green 2px solid;
`

const Wrapper = styled.div`
  align-items: center;
  margin-top : 48px;
  padding-bottom : 48px;
  border-bottom : 2px solid black
`


const [name, setName] = useState("intial");

  return (
    <div className="App">
      <Wrapper>
      <Todo />
      </Wrapper>


      <Wrapper>

      <p style={{display: 'block'}}>this is an example of child changing parent from child</p>
      <p >this is "{name}"</p>
      <Child  handleClick={(value)=> setName(value)}/>
      </Wrapper>


      <Wrapper>
      <UsememoHook />
      </Wrapper>

      <Wrapper>
      <UseRefHook />
      </Wrapper>

      <Wrapper>

        <p>example of styled components</p>
        <Button>I am a button</Button>
        <Button $primary>I am a primary button</Button>
        <GreenButton >I am a green button extending  button</GreenButton>
      </Wrapper>



     </div>
  );
}


export default Main;
