import { useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { auth, provider, storage } from "../firebase";
import {selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";

const SideBar = (props)=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() =>{
     auth.onAuthStateChanged(async (user) =>{
     if (user) {
         setUser(user);
         history.push("/home");
     }
     });
    }, [userName]);

    const handleAuth = () =>{

        if(!userName) {  
        auth
        .signInWithPopup(provider).then((result) =>{
            setUser(result.user);
        }).catch((error) =>{
            alert(error.message);        
        });
    }else if (userName) {
        auth
        .signOut()
        .then(() =>{
            dispatch(setSignOutState());
            history.push("/");
        })
        .catch((err) =>alert(err.message));
    }
 };
   

const setUser = (user) =>{
    dispatch(
      setUserLoginDetails({
         name: user.displayName,
         email: user.email,
         photo: user.photoURL, 
      })
    );
};
   
  return(
    <Nav>
      <Logo>
    <img src="/images/logo.jpg" alt= "Disney+"/>
    </Logo>

    {!userName?
       <Login onClick={handleAuth}>Login</Login> 
    :
    (
        <> 
    {/* <NavMenu>
        <a href = "/home">
            <img src="/images/home-icon.svg" alt="HOME"/>
            <span>HOME</span>
        </a>

        <a href = "/home">
            <img src="/images/search-icon.svg" alt="HOME"/>
            <span>SEARCH</span>
        </a>

        <a href = "/home">
            <img src="/images/watchlist-icon.svg" alt="HOME"/>
            <span>WATCHLIST</span>
        </a>

        <a href = "/home">
            <img src="/images/movie-icon.svg" alt="HOME"/>
            <span>MOVIES</span>
        </a>

        <a href = "/home">
            <img src="/images/original-icon.svg" alt="HOME"/>
            <span>ORIGINALS</span>
        </a>

        <a href = "/home">
            <img src="/images/series-icon.svg" alt="HOME"/>
            <span>SERIES</span>
        </a>
    </NavMenu> */}
    <SignOut>
    
    <UserImg src={userPhoto} alt={userName} />
    <DropDown onClick={handleAuth}>Sign Out </DropDown>
    </SignOut>
    </>
    )}
    </Nav>
  );
};

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height:70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index:3;

`;


const Logo = styled.a`
padding:0;
width:60px;
margin-top:4px;
max-height:85px;
display: flex;
font-size:0;

img{
    display: block;
    width:100%;
   
}
`;
 
const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    border-radius: 4px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        pointer-events: cursor;
        border-color: transparent;
    }

`;


const UserImg = styled.img`
     height: 100%;
    

     /* min-width: 20px;
     width: 20px; */
`;

const DropDown = styled.div`
   letter-spacing: 3px;
   border-radius: 4px;
   position: absolute;
   top: 48px;
   right: 0px;
   background: rgb(19, 19, 19);
   border: 1px solid rgba(151 ,151, 151, 0.34);
   padding: 10px;
   font-size: 14px;
   width: 100px;
   box-shadow: rbg(0 0 0 / 50px) 0px, 0px, 18px 0px;
   opacity: 0;
`;

const SignOut = styled.main`
     position: relative;
     height: 48px;
     width: 48px;
     display: flex;
     cursor: pointer;
     align-items: center;
     justify-content: center;

     ${UserImg}{
         border-radius: 50%;
         width: 100%;
         height: 100%;
     }

     &:hover{
      ${DropDown}{
          opacity: 1;
          transition-duration: 1s;
      }
     }
`;
export default SideBar;