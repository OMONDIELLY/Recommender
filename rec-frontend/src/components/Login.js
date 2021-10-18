import styled from "styled-components"

const Login = (props)=>{
    return(
        <Container>
        <Content>
               <Signup>Sign Up</Signup>
               <Description>
                   Get premium access to Industrial Training Opportunities that match your Profile.
               </Description>

         <BgImage/>
        </Content>
    </Container>
    );
  };
  
  
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
 margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 100vh;
 box-sizing: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px  40px;
 height: 100%;

`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
background-image: url("images/front-image.jpg");
top: 0;
left: 0;
right: 0;
z-index: -1
`;

const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 25%;
letter-spacing: 1.5px;
font-size: 25px;
padding: 19.5px 100;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color :#0483ee;
}
`;

const Description = styled.p`
font-weight: bold;
color: #040714;
font-size: 18px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5;
font-weight: bold;


`; 


export default Login;