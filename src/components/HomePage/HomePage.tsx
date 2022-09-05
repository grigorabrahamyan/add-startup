 //import React from 'react';
// import ReactDOM from 'react-dom';
//import { SocialIcon } from 'react-social-icons';
// import { ReactComponent as Facebook} from '..svg/facebook.svg';
// import { ReactComponent as Insta } from '..svg/insta.svg';
 import  Telegram  from "../Telegram/telegram";
 import  Facebook  from "../Facebook/facebook";
 import  Instagram  from "../Instagram/instagram";
 //import Works from "../Works";
 //import "../../HomePage.scss";

const HomePage = () => {
    return <><div className='home'>
        <h1 >START YOUR JOURNEY TO THE GALAXY WITH US</h1>
        <button className='strtbtn'>Start</button>
        </div>
        <div className='icons'><section><Facebook />
        <Instagram />
         <Telegram /></section></div> 
         <div style={{marginTop:"100px"}}><h1 style={{width:"250px", textTransform:"uppercase"}}>explore our services</h1>
       <h3 style={{width:"350px",marginTop:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ipsum vitae urna, egestas quisque nunc eget.</h3>
        <button style={{marginTop:"50px", fontStyle:"normal",fontFamily:"Lato", fontSize:"17px", 
        textAlign:"center" , border:"none"}}>View all</button>
        <div className="homediv">web development</div>
        <div className="homediv2">mobile app development</div>
       </div>
       <div style={{marginLeft:"350px", marginTop:"90px"}}><h1 style={{textTransform:"uppercase"}}>our projects</h1>
       <h4 style={{marginLeft:"-110px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
       </div>
       {/* <div style={{borderRadius:"100px", backgroundColor:"black" , height:"200px", width:"200px"}}></div> */}
       <div className="works">
        <div><h2 className="worksHead">Project Name </h2>
        <div><h3 className="worksText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Id mauris aenean proin vulputate aliquet. Sed id eu massa vitae 
            pellentesque sit urna, cras. Cursus est quis a sem. Volutpat habitasse
             nisi. Felis eu ut morbi amet, sed ut ornare consequat dui.</h3></div>
             <button className='readmorebtn'>Read more</button>
        
    </div>
    
    </div>
    <button style={{marginTop:"50px", marginLeft:"400px", fontStyle:"normal",fontFamily:"Lato", fontSize:"17px", 
        textAlign:"center" , border:"none"}}>View all</button>
    <div style={{marginLeft:"330px",marginTop:"50px"}}><h1>How we work</h1></div>
    <div style={{marginTop:"50px"}}><h3>Our Process</h3>
    <h3 style={{marginLeft:"200px" ,marginTop:"-40px"}}>Technologies</h3>
    </div>
    <div>
        <div style={{width:"158px" , height:"5px", background:"#4575C9"}}></div>
        <div style={{width:"790px" , border:"1px solid #4575C9", height:"0px", background:"#4575C9",
         marginLeft:"155px", marginTop:"-2px"}}></div>
    </div>
    <div style={{background:"#FFFFFF" , boxShadow:'0px 0px 35px rgba(0, 0, 0, 0.25)' , 
    width:"950px", height:"551px", marginTop:"50px", borderRadius:"0px 22px 0px 0px"}}></div>
         </>
        
   
};

export default HomePage;