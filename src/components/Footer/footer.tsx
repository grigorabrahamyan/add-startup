import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";


const Footer = ()=>{

    return <div className="footer">
        <h1 className="logofooter">Logo</h1>
        <table className="table"><tr>
        <td><Link className="footLink" to = "/aboutus">About Us</Link></td>
        <td><Link  className="footLink" to = "/services">Services</Link></td>
        <td>UI UX design</td>
        </tr>
        <tr>
        <td><Link  className="footLink"  to = "/contactus" >Contacts</Link></td>
        <td>Web Development</td>
        </tr>
        <tr>
        <td>Careers</td> 
        <td>Mobile Development</td> 
        </tr>
        </table>
    </div>

}


export default Footer;