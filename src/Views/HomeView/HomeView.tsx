import ContactRowComponent from "./Components/ContactRowComponent";
import IntroSectionComponent from "./Components/IntroSectionComponent";
import "./test.css";

function HomeView() {
  return (
    <>
      <div className="d-flex">
        <IntroSectionComponent />
        {/* <ContactRowComponent /> */}
        <div className="bottom"></div>
        <div className="top"></div>
      </div>
      {/* <div className="bg-white bottomline"></div> */}
      <div className="top"></div>
      <div className="bottom"></div>
    </>
  );
}
export default HomeView;
