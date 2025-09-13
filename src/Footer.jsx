import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LuLinkedin } from "react-icons/lu"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <div className="footer-info">
                <p>Contact: (737) 646-1026</p>
                <p>Email: kkwhitect6@gmail.com</p>
                <p>Location: Detroit, MI</p>
                </div>
                
            </div>
            <div className="footer-div">
                <div className="footer-social">
                      <FaFacebook className="facebook" style={{color: "white"}}/> 
                <FaInstagram className="instagram"/>
                <LuLinkedin className="linkedin"/>
                </div>
              </div>
        </footer>
         
    )
}