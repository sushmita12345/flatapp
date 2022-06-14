import "./Header.css";
import {Navbar} from "../Navbar/Navbar";
import {Filter} from "../FilterSection/Filter";
import CoverImage from "../../assets/CoverData.json";


export function Header() {

  
  return (
    <header className="header-wrapper">
        <div className="header-container">
            {
              CoverImage.map((img) => (
                <img className="header-cover-img"
                src={img.image}
                alt="coverImage"
            />
              ))
            }
           
            <Navbar />
            <Filter />
        </div>
        
        
       
    </header>
  );
}
