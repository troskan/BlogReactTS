import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PortfolioView.css";
import MicrosoftImg from "../../assets/microsoft.png";
import SqlServerImg from "../../assets/sql-server.png";
import AzureImg from "../../assets/azure.png";
// import ZebraImg from "../../assets/zebra.png";
import IdentityImg from "../../assets/two-factor-authentication.png";
import CSharpImg from "../../assets/c-sharp.png";
import GitImg from "../../assets/git.png";
import ReactImg from "../../assets/atom.png";

import AuthenticationContext from "../../Contexts/AuthenticationContext";
import NavigationContext from "../../Contexts/NavigationContext";

const PortfolioView: React.FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { setCurrentNavigation } = useContext(NavigationContext);
  const handleNavClick = (navigation: string) => {
    setCurrentNavigation(navigation);
    console.log(navigation);
    console.log("Click!");
  };

  return (
    <div className="container mt-5 text-center">
      {" "}
      <h1 className="">
        <span className="blue-color">&lt; </span>Full Stack Developer
        <span className="blue-color"> /&gt;</span>
      </h1>
      <h5 className="">
        <span className="blue-color">&lt; </span>.Net Web Development
        <span className="blue-color"> /&gt;</span>
      </h5>
      <div className="text-start mt-5 ms-5">
        <h2>
          <span className="green-color">&lt; </span>Areas of Competence
          <span className="green-color"> /&gt;</span>
        </h2>
        <ul>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Database Development</li>
          <li>Cloud Development</li>
        </ul>
      </div>
      <div className="text-start ms-5">
        <h2>
          <span className="green-color">&lt; </span>Unique Skills
          <span className="green-color"> /&gt;</span>
        </h2>
        <ul>
          <li>
            CIAM & IAM - Customer identity access management both B2B and B2C
          </li>
          <li>Microsoft Entra - External Identities / Microsoft Graph API</li>
          <li>Authentication & Authorization Concepts</li>

          <li>Logistics Flow</li>
          <li>Zebra Programming Language</li>
          <li>Azure Enviorment</li>
        </ul>
      </div>
      <div className="text-start ms-5">
        <h2>
          <span className="green-color">&lt; </span>Tech Stack
          <span className="green-color"> /&gt;</span>
        </h2>
        <ul>
          <li>.Net</li>
          <li>C#</li>
          <li>React / Vite / TypeScript</li>
          <li>Javascript / HTML / CSS</li>
          <li>MSSQL</li>
          <li>Zebra Programming Language</li>
          <li>Azure</li>
          <li>Git</li>
        </ul>
      </div>
      <div>
        <div className="mt-5">
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={MicrosoftImg}
            alt=""
          />
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={ReactImg}
            alt=""
          />
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={AzureImg}
            alt=""
          />
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={GitImg}
            alt=""
          />
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={IdentityImg}
            alt=""
          />
          <img
            className="contact-img img-fluid flex-shrink-1"
            src={SqlServerImg}
            alt=""
          />

          <img
            className="contact-img img-fluid flex-shrink-1"
            src={CSharpImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
