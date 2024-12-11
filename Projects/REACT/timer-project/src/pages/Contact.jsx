import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import { useRef } from "react";

function Contact(){
    const mapRef = useRef(null)

    function goToMap(){
        mapRef.current.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className="container">
            <h2>Contact Us</h2>

            <button onClick={goToMap}className="timerBtn">Go to Map &#9196;</button>
            <p>We'd love to hear from you! Reach out to us through any of the options below.</p>

            <ContactInfo />
            <ContactForm />
            <SocialMedia />

            <section ref={mapRef} className="map">
                <h3>Visit Us</h3>
                <div className="map-placeholder">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16844.26003291177!2d21.474821014750795!3d42.460265494628835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1730149585712!5m2!1sen!2s"
                    width="600"
                    height="450"
                    loading="lazy"
                ></iframe>
                </div>
                <p>Find us at the address above or use the map to locate our office.</p>
            </section>
        </div>
    )
}
export default  Contact