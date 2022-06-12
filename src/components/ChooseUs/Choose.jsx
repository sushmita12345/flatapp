import "./ChooseUs.css";

export function ChooseUs() {
  return (
    <div className="choose-us-container">
      <div className="choose-us-wrapper">
        <div className="choose-us-sub-wrapper">
          <div className="choose-us-content">Why Choose Us?</div>
          <div className="choose-us-card-container">
            <div className="choose-us-card-wrapper">
              <div className="choose-us-image-conatiner">
                <img
                  className="choose-us-card-img"
                  src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/why_choose_us/Verified.png"
                  alt="icon"
                />
                <span className="choose-us-card-heading">
                  Verified Properties
                </span>
                <p className="choose-us-card-para">
                  Our team is dedicated towards helping you find the perfect
                  place for yourself. We make sure that whatever listings you
                  see on the website are 100% genuine and are in good and
                  healthy condition
                </p>
              </div>
            </div>

            <div className="choose-us-card-wrapper">
              <div className="choose-us-image-conatiner">
                <img
                  className="choose-us-card-img"
                  src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/why_choose_us/Free.png"
                  alt="icon"
                />
                <span className="choose-us-card-heading">Free listing</span>
                <p className="choose-us-card-para">
                  In Addition to a marketplace, we also give a section of
                  “create your own listings” where you can upload your own
                  properties, room etc. for rent, connect with the buyer online
                  without any risks
                </p>
              </div>
            </div>

            <div className="choose-us-card-wrapper">
              <div className="choose-us-image-conatiner">
                <img
                  className="choose-us-card-img"
                  src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/why_choose_us/Filters.png"
                  alt="icon"
                />
                <span className="choose-us-card-heading">Advanced filters</span>
                <p className="choose-us-card-para">
                  We want you to have the flat of your dreams. Therefore, we
                  work towards providing you a place within your budget, in your
                  preferable location, which has your taste and choice of
                  interiors
                </p>
              </div>
            </div>

            <div className="choose-us-card-wrapper">
              <div className="choose-us-image-conatiner">
                <img
                  className="choose-us-card-img"
                  src="https://flats-and-flatmates-bucket.s3.amazonaws.com/home_page/images/why_choose_us/No_Brokarage.png"
                  alt="icon"
                />
                <span className="choose-us-card-heading">No brokerage</span>
                <p className="choose-us-card-para">
                  We directly connect you with the verified owner of the
                  property who himself will address your queries. No middleman
                  fee that will fall on your pocket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
