import "./Footer.css";

export function Footer() {
    return (
        <div>
            <div className="footer-main-container">
            
                <div className="footer-main-wrapper">
                    <div className="footer-main-sub-wrapper">
                        <div className="footer-main-img-container">
                            <img className="footer-main-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f4d561e9.png&w=256&q=75" alt="logo" />
                        </div>
                        <div className="footer-main-social-container">
                            <h1 className="footer-main-social-heading">Flat and Flatmates</h1>
                            <span className="footer-main-social-copy">@ Copyright FlatandFlatmates</span>
                            <div className="footer-main-social-wrapper">
                                <img className="footer-main-social-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffb.fad838b1.png&w=96&q=75" alt="facebook" />
                                <img className="footer-main-social-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fig.9a42823b.png&w=96&q=75" alt="instagram" />
                                <img className="footer-main-social-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.e72ffa0a.png&w=96&q=75" alt="twitter" />
                                <img className="footer-main-social-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flinkedin.ad3bcfa9.png&w=96&q=75" alt="linkedin" /> 
                            </div>
                        </div>
                    </div>
            

                    <div className="footer-main-about-container">
                        <div >
                            <h1 className="footer-main-about-head">Company</h1>
                            <ul className="footer-main-about-ul">
                                <li className="footer-main-about-list">About Us</li>
                                <li className="footer-main-about-list">Contact Us</li>
                                <li className="footer-main-about-list">Careers</li>
                                <li className="footer-main-about-list">Report a problem</li>
                                <li className="footer-main-about-list">FnF Coiving</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="footer-main-about-head">
                                Policies
                            </h1>
                            <ul className="footer-main-about-ul">
                                <li className="footer-main-about-list">Privacy Policies</li>
                                <li className="footer-main-about-list">Terms & Conditions</li>
                                <li className="footer-main-about-list">FAQS</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="footer-main-about-head">Help</h1>
                            <ul className="footer-main-about-ul">
                                <li className="footer-main-about-list">List Your Property</li>
                                <li className="footer-main-about-list">Talk to our expert</li>
                            </ul>
                        </div>
                    </div>


                </div>
                
            </div>
            
            <div className="footer-lower-container">
           
                <div className="footer-lower-wrapper">
                {/* <hr /> */}
                    <span className="footer-lower-text">Mail Us : <b>help@flatandflatmates.com</b></span>
                    <span className="footer-lower-text">Address : <b>U41/5 DLF Phase 3 Gurgaon.</b></span>
                </div>
            </div>
        </div>
        
    )
}