import {MdiArrowRight} from "../../assets/icon";
import "./Category.css";

export function Cateogry() {
    return (
        <div className="category-container">
            <div className="category-wrapper">
                <div className="category-card-wrapper">
                    <div className="category-img-container">
                        <img className="category-image-wrapper" src="https://www.flatandflatmates.com/_next/image/?url=%2Fassets%2Fimages%2Frent-illustration.svg&w=640&q=75" alt="cateogry" />
                        <span className="category-image-rent">RENT</span>
                    </div>
                    <div className="category-description-container">
                        <p className="category-description">We are here to help you find the perfect place for yourselfhich suits your budget</p>
                        <MdiArrowRight className="category-description-arrow-icon"/>
                    </div>
                    
                </div>

                <div className="category-card-wrapper">
                    <div className="category-img-container">
                        <img className="category-image-wrapper" src="https://www.flatandflatmates.com/_next/image/?url=%2Fassets%2Fimages%2Fhostel-illustration.svg&w=640&q=75" alt="cateogry" />
                        <span className="category-image-rent">PG/HOSTEL</span>
                    </div>
                    <div className="category-description-container">
                        <p className="category-description">Search for the most affordable and well maintained PG around you</p>
                        <MdiArrowRight className="category-description-arrow-icon"/>
                    </div>
                    
                </div>

                <div className="category-card-wrapper">
                    <div className="category-img-container">
                        <img className="category-image-wrapper" src="https://www.flatandflatmates.com/_next/image/?url=%2Fassets%2Fimages%2Fflatmates-illustration.svg&w=640&q=75" alt="cateogry" />
                        <span className="category-image-rent">FLATMATES</span>
                    </div>
                    <div className="category-description-container">
                        <p className="category-description">Make your flatmate your homie who matches your vibe & style</p>
                        <MdiArrowRight className="category-description-arrow-icon"/>
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}