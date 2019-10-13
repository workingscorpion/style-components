import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  css,
  ThemeProvider
} from "styled-components";
import theme from "./theme";

//styled-components v4부터 injectGlobal 사라지고 GlobalStyle 생김
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

// const awesomeCard = css`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
// `;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
`;

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-color: pink;
//   ${awssomeCard}
// `;

// const Input = styled.input.attrs({
//   required: true
// })`
//   border: none;
//   ${awesomeCard}
// `;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle></GlobalStyle>
          {/* <button className="button button--success">Hello</button>
        <button className="button button--danger">Hello</button> */}
          {/* <Button>Hello</Button>
        <Button danger rotationTime={5}>
          Hello
        </Button>
        <Anchor href="http://google.com">go to google</Anchor> */}
          {/* <Input placeholder="hello"></Input> */}
          <Form></Form>
        </Container>
      </ThemeProvider>
    );
  }
}

// const Button = ({ danger }) => (
//   <button
//     className={danger ? "button button--danger" : "button button--success"}
//   >
//     Hello
//   </button>
// );

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

//styled. 뒤에는 내가 css를 주고 싶은 html요소를 써주면 됨
//만약 div면 styled.div, span이면 styled.span
// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
//   ${props => {
//     if (props.danger) {
//       // return css`
//       //   animation: ${rotation} 2s linear infinite;
//       // `;
//       return css`
//         animation: ${rotation} ${props.rotationTime}s linear infinite;
//       `;
//     }
//   }}
// `;

// const Anchor = styled(Button.withComponent("a"))`
//   text-decoration: none;
// `;

// const rotation = keyframes`
//   from{
//     transform:rotate(0deg);
//   }
//   to{
//     transform:rotate(360deg);
//   }
// `;

export default App;
