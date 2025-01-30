import profilePic from "../../../assets/profile-pic-blur.png";
import "./IntroSection.css";
function IntroSectionComponent() {
  const birthDate = new Date("1996-04-08");
  const today = new Date();

  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  return (
    <div className="container d-flex align-items-center flex-wrap justify-content-center">
      <section style={{ maxWidth: "600px" }} className="m-5 mt-0">
        <h2>
          Hi<span className="wave">👋</span>
        </h2>
        <p>Welcome to my little domain, feel at home.</p>
        <p>
          My name is Alvin and I'm {age} years old. Working as a system
          developer.
          <br />
          <br /> I mainly work backend, passion for building robust systems.
          <br />
          <br /> Contact:&nbsp;
          <a href="mailto: alvin.strandberg@proton.me">
            alvin.strandberg@proton.me
          </a>
          <br /> <br />
          <a href="www.linkedin.com/in/alvin-strandberg-612954253">
            linkedin.com/in/alvin-strandberg
          </a>
        </p>
      </section>

      <img
        src={profilePic}
        alt="picture of Alvin Strandberg"
        style={{ maxHeight: "200px" }}
        className="img-fluid rounded-circle m2"
      />
    </div>
  );
}
export default IntroSectionComponent;
