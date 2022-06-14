import "./TopLocalities.css";
import Cities from "../../assets/Cities.json";

export function TopLocalities(){
    return (
        <div className="top-locality-container">
            <div className="top-locality-wrapper">
                <div className="top-locality-sub-wrapper">
                    <div className="top-locality-description">Top Localities</div>
                    <div className="top-locality-chip-wrapper">
                        {
                            Cities.map((city) => (
                                <button className="top-locality-btn">{city}</button>
                            ))
                        }
                    </div>
                    <div className="top-locality-list-container">
                        <div className="top-locality-list-wrapper">
                            <button className="top-locality-list-btn">Dwarka</button>
                            <button className="top-locality-list-btn">Mayur Vihar</button>
                            <button className="top-locality-list-btn">Greater Kailash</button>
                            <button className="top-locality-list-btn">Laxminagar</button>
                            <button className="top-locality-list-btn">Janakpuri</button>
                        </div>
                        <div className="top-locality-map-conatiner">
                            <img className="top-locality-map-img" src="https://flats-and-flatmates-bucket.s3.amazonaws.com/map_images/area_1/Screenshot_2022-03-25_at_4.21.37_PM.png" alt="map"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}