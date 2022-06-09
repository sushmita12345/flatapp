import {IcRoundSearch} from "../../assets/icon";
import "./Filter.css";

export function Filter(){
    return (
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
    )
}