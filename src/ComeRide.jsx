
import comeRide from "./assets/comeRide-img.jpg"

export default function ComeRide() {
    return (
        <section className="comeRide-section">
            <div className="div-overlay"></div>
            <div className="image-div">
                <img className="images" src={comeRide} alt="" />
            </div>
            <h3>Why Choose Us</h3>
            <p>WhiteWalls Transportation is committed to delivering exceptional customer service, 
                ensuring every ride is a comfortable and memorable experience. 
                Reserve your ride with us today.</p>
            
        </section>
    )
}