
import  Telegram  from "../Telegram/telegram";
import  Facebook  from "../Facebook/facebook";
import  Instagram  from "../Instagram/instagram";
import Footer from "../Footer"



const AboutUs = () => {
    return <>
    <div className='home'>
        <h1 >ABOUT US</h1>
        
        </div>
        <div>
        <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Scelerisque lectus phasellus scelerisque duis elit quam ipsum sed. Proin mi auctor 
            dignissim eu diam lacus tortor sed. Adipiscing quis interdum ridiculus ipsum metus 
            adipiscing sem. Mattis lobortis aliquam malesuada blandit. Integer pellentesque nisl, 
            quam rhoncus sem. Integer odio consectetur leo risus pulvinar aliquam tincidunt tempor. 
            Et sed purus orci tristique mi, habitasse mattis vitae. Feugiat faucibus nunc scelerisque
             ut viverra mattis eget id sed. Lorem tincidunt eget nullam bibendum amet. Commodo 
             pretium nisl sit nisi. Mauris fringilla tellus ullamcorper donec pellentesque dignissim 
             blandit suspendisse felis.
A cras ut proin nulla sed sollicitudin dui eget. Sed ut vestibulum, mollis diam, sed. Diam sed nec, 
pharetra montes, suscipit elementum etiam. Sit nisl vel dignissim pellentesque viverra faucibus 
netus dolor. Turpis faucibus scelerisque eu, in turpis.</span></div>
<div className="home">

    <h1>Write in to us!</h1>
    
    
    <h4 style={{marginTop:"100px"}}>Createmystartup@gmail.com </h4>
    
        <h4>+1 666 666 666</h4>
        </div>
        <div style={{marginTop:"470px", marginLeft:"50px", height:"200px"}}><Facebook />
        <Instagram />
         <Telegram /></div>
        <div className="rect">
           <h3 className="recthead">Tell us how we can help you.</h3>
           <h4 style={{marginLeft:"50px", marginTop:"70px"}}>*Name</h4>
           <h4 style={{height:"0px", border: "1px solid #375C7E",width:"450px", marginLeft:"50px" }}></h4>
           <h4 style={{marginLeft:"50px", marginTop:"70px"}}>*Email</h4>
           <div style={{height:"0px", border: "1px solid #375C7E",width:"450px", marginLeft:"50px" }}></div>
           <h4 style={{marginLeft:"50px", marginTop:"70px"}}>*Phone</h4>
           <div style={{height:"0px", border: "1px solid #375C7E",width:"450px", marginLeft:"50px" }}></div>
           <h4 style={{marginLeft:"50px", marginTop:"70px"}}>*Industry</h4>
           <div style={{height:"0px", border: "1px solid #375C7E",width:"450px", marginLeft:"50px" }}></div>
           <h4 style={{marginLeft:"50px", marginTop:"70px"}}>*Message</h4>
           <div style={{height:"0px", border: "1px solid #375C7E",width:"450px", marginLeft:"50px" }}></div>
           <button className="sendBtn" >Send</button>
         
            </div>
            
            <Footer />    
            


</>
     
   
};

export default AboutUs;