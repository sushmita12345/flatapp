import "./ChooseUs.css";
import ChooseData from "../../assets/ChooseUs.json";

export function ChooseUs() {
  return (
    <div className="choose-us-container">
      <div className="choose-us-wrapper">
        <div className="choose-us-sub-wrapper">
          <div className="choose-us-content">Why Choose Us?</div>
          <div className="choose-us-card-container">
            {
                ChooseData.map((data) => (
                    <div className="choose-us-card-wrapper">
                        <div className="choose-us-image-conatiner">
                            <img
                            className="choose-us-card-img"
                            src={data.image}
                            alt="icon"
                            />
                            <span className="choose-us-card-heading">
                            {data.title}
                            </span>
                            <p className="choose-us-card-para">
                            {data.description}
                            </p>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
