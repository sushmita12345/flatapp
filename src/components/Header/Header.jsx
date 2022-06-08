import "./Header.css";
import {Navbar} from "../Navbar/Navbar";
import {IcRoundSearch} from "../../assets/icon"

export function Header() {

  
  return (
    <header className="header-wrapper">
        <div className="header-container">
            <img className="header-cover-img"
                src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2Fhome_page%2Fimages%2Fcover_page_images%2Fhomepage_2.png&w=3840&q=75"
                alt="coverImage"
            />
            <Navbar />
            
            <div className="filter-container">
                <div>
                    <div className="filter-wrapper-upper">
                    
                        <button className="choose-btn">Full House</button>
                        <button className="choose-btn">PG/Hostel</button>
                        <button className="choose-btn">Flatmates</button>
                        <button className="filter-select-container">
                            <select className="filter-select">
                                <option value>Select the property</option>
                                <option>Builder Floor</option>
                                <option>High Rise Apartment</option>
                                <option>Studio</option>
                                <option>Villa</option>
                            </select>
                        </button>
                        <button className="filter-select-container">
                            <select className="filter-select">
                                <option value>Select availability</option>
                                <option>Immediate</option>
                                <option>Within 15 days</option>
                                <option>Within 30 days</option>
                                <option>After 30 days</option>
                            </select>
                        </button>
                        
                        
                    </div>

                    <div className="filter-wrapper-upper lower">
                        
                        <button className="filter-select-container-lower">
                            <select className="filter-select-lower">
                                <option value>Delhi</option>
                                <option>Gurugram</option>
                                <option>Noida</option>
                                <option>Kolkata</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Hyderabad</option>
                                <option>Banglore</option>
                                <option>Chennai</option>
                            </select>
                        </button>
                        <div className="filter-input-container">  
                            <div className="filter-input-wrapper">                         
                                <input type="text" className="filter-input" placeholder="Search your property here..."/>
                            </div>
                            <IcRoundSearch className="filter-search-icon"/>

                        </div>
                        <button className="input-search-btn">Search</button>
                        
                        
                
                    </div>
                </div>
                
            
              
        
        
                
            </div>
        </div>
        
        
       
    </header>
  );
}
