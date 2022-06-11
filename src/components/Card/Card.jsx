import {MdiHeart,
    MdiCurrencyRupee,
    MdiVectorSquare,
    MdiTableFurniture,
    MdiBed} from "../../assets/icon"

export function Card(){
    return (
        <div className="flat-wrapper">
            <div className="flat-wrapper-lower">
              <div className="flat-image-container">
                <img
                  className="flat-image"
                  src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2FRentPropertyImages%2Fimages%2Fdel000004%2F1.jpg&w=3840&q=75"
                  alt="cover"
                />
              </div>
              <div className="flat-header-container">
                <header className="">
                  <div className="flat-header-wrapper">
                    <span class="flat-header-content">2 BHK Builder Floor</span>
                    <button className="flat-header-btn">
                      <MdiHeart className="flat-header-heart" />
                    </button>
                  </div>
                </header>
                <hr />
                <main className="flat-main-container">
                  <span className="flat-main-address">Saket, New Delhi, Delhi, India, Delhi</span>
                  <div className="flat-main-rent-conatiner">
                    <MdiCurrencyRupee className="flat-main-rupee-icon"/>
                    <span className="flat-main-price">30,000</span>
                    <span className="flat-main-month">/month</span>
                  </div>
                  <div className="flat-main-building">
                    <span className="flat-main-building-content">2 BHK</span>
                    <span className="flat-main-building-content">Builder Floor</span>
                  </div>
                </main>
                <hr />
                <footer className="flat-footer-container">
                  <div className="flat-footer-wrapper">
                    <MdiVectorSquare className="flat-footer-square-icon"/>
                    <span className="flat-footer-size">1200 Sqft</span>
                  </div>
                  <div className="flat-footer-wrapper">
                    <MdiTableFurniture className="flat-footer-furniture-icon"/>
                    <span className="flat-footer-size">Fully Furnished</span>
                  </div>
                  <div className="flat-footer-wrapper">
                    <MdiBed className="flat-footer-bed-icon"/>
                    <span className="flat-footer-size">2</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>

    )
}