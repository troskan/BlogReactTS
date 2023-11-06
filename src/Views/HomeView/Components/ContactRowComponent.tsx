import LinkedIn from "../../../assets/linkedin.png";
import GitHub from "../../../assets/GitHub_Logo.png";
import Email from "../../../assets/Graphicloads-100-Flat-2-Email.256.png";
import "./ContactRowComponent.css";

function ContactRowComponent() {
  return (
    <div className="">
      <img className="contact-img img-fluid flex-shrink-1" src={Email} alt="" />
      <img
        className="contact-img img-fluid flex-shrink-1"
        src={GitHub}
        alt=""
      />
      <img
        className="contact-img img-fluid flex-shrink-1"
        src={LinkedIn}
        alt=""
      />
    </div>
  );
}
export default ContactRowComponent;
