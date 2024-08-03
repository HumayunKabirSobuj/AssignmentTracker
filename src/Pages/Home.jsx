import Accordian from "../Components/Accordian";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import PopularSection from "../Components/PopularSection";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <PopularSection></PopularSection>
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    );
};

export default Home;