import "./Header.css";
import {Navbar} from "../Navbar/Navbar";
import {Filter} from "../FilterSection/Filter"


export function Header() {

  
  return (
    <header className="header-wrapper">
        <div className="header-container">
            <img className="header-cover-img"
                src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2Fhome_page%2Fimages%2Fcover_page_images%2Fhomepage_2.png&w=3840&q=75"
                alt="coverImage"
            />
            <Navbar />
            <Filter />
        </div>
        
        
       
    </header>
  );
}
