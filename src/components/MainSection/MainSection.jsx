import "./MainSection.css";
import {
  IcOutlineLocationOn,
  IcOutlineFacebook,
  IcTwotoneGroups,
  
  
} from "../../assets/icon";
import {Card} from "../Card/Card"

export function MainSection() {
  return (
    <div className="main-section-container">
      <div className="main-section-wrapper">
        <div className="city-image-container">
          <div className="city-image-wrapper">
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />

              <span className="city-name">Delhi</span>
            </div>

            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Gurugram</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Noida</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Kolkata</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Mumbai</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Pune</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Hyderabad</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Banglore</span>
            </div>
            <div className="single-image-container">
              <img
                className="city-single-image"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
              <span className="city-name">Chennai</span>
            </div>
          </div>
        </div>
        <div className="city-description-container">
          <div className="city-description-wrapper">
            <div className="city-description-img">
              <img
                className="description-img"
                src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/city_description/delhi_1.png"
                alt="place"
              />
            </div>
            <div className="city-content-container">
              <header className="city-content-wrapper">
                <div className="city-content-wrap">
                  <span className="city-content-name">Delhi</span>
                  <IcOutlineLocationOn className="city-content-loc-icon" />
                </div>
                <div className="city-content-fb-container">
                  <button className="city-content-button">
                    <IcOutlineFacebook className="city-content-fb-icon" />
                    Join our facebook group
                  </button>
                </div>
              </header>
              <main>
                <p className="city-content-text">
                  Delhi-NCR has always been India’s most influential and
                  prominent real estate markets. The region boasts the presence
                  of big corporations, excellent connectivity, world-class
                  infrastructure, and huge job opportunities. Despite pandemic
                  shocks, the residential real estate market here registered
                  immense resilience and achieved growth. By offering high
                  returns over investments and future security, the region
                  bolstered its position as the most rewarding investment
                  destination. Also, increased awareness among the homebuyers
                  and investors around real estate assets as stable and secured
                  investment choices in uncertain times also fuelled demand. The
                  growth momentum is likely to continue and the Delhi-NCR market
                  is set to reach stratospheric heights in 2022.
                </p>
              </main>
              <footer>
                <div className="city-content-footer">
                  <IcTwotoneGroups className="city-content-group-icon" />
                  <span className="city-content-count">67844</span>
                  <span className="city-content-group">Group Members</span>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="city-list-container">
          <div className="city-list-wrapper">
            <div className="city-list-count">
              <span className="city-count">9604+</span>
              <span className="city-text">Total Listing</span>
            </div>
            <div className="city-list-count">
              <span className="city-count">447+</span>
              <span className="city-text">New Listing</span>
            </div>
            <div className="city-list-count">
              <span className="city-count">88705+</span>
              <span className="city-text">Searches</span>
            </div>
            <div className="city-list-count city-list-count-addon">
              <span className="city-count">756+</span>
              <span className="city-text">Featured</span>
            </div>
          </div>
        </div>

        <div className="flat-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div> 
      </div>
    </div>
  );
}
