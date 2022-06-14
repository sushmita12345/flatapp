import "./ImageSection.css";

export function ImageSection() {
    return (
        <div className="image-section-container">
            <div className="image-section-wrapper">
                <div className="image-section-a">
                    <div className="image-section-heading">List Your Property</div>
                    <p className="image-section-para">Listing your property online without the hassle of middlemen or brokerage was never so simple. Register with us in a quick under 2-minutes registration process and get queries immediately. More the information that you provide, greater the chances of your property getting great rent offers. So, register and login now for an ease-of-use like never before.</p>
                    <span className="image-section-span">#SayNoToBrokerage</span>
                    <button className="image-section-button">List Your Property Here</button>
                </div>
                <div className="image-section-b">
                    <img className="image-section-main-img" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Famico.9cdd9517.png&w=3840&q=100" alt="cover" />
                </div>
            </div>
        </div>
    )
}