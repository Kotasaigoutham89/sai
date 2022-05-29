import "./App.css"
import Carouselslider from "./components/Carousel";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Ourteaching from "./components/Ourteaching";
import TutoringSubjects from "./components/TutoringSubjects";
import Modal from "./components/Modal"
function Home() {
  return (
    <div style={{position:"relative"}}>
      <Modal/>
      <Navbar />
      <div style={{ backgroundColor: "#E5E7EB" }}>
        <Carouselslider />
        <TutoringSubjects />
        <Ourteaching />
        <CustomerReviews />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
