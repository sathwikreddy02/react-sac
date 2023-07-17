import './our-crew.css';
import Footer from './Footer'
import Header from './Header'
import Crew1 from './Images/Crew/KoneruSatyanarayana.png';
import Crew2 from './Images/Crew/Vice-President.webp';
import Crew3 from './Images/Crew/photo_2023-02-23_15-41-21.jpg';
import Crew4 from './Images/Crew/IMG_1398.JPG';
import Crew5 from './Images/Crew/director-sac-1256x1884.jpeg';
import Crew6 from './Images/Crew/PremSir.jpg';

function OurCrew() {
    return (
        <>
            <Header />
            <div class="section-1">
                <h2>Our Crew</h2>
                <div class="crew-container">
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew1} />
                        </div>
                        <div class="crew-content">
                            <p>Er. Koneru Satyanarayana</p>
                            <span>President, KLEF</span>
                        </div>
                    </div>
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew2} />
                        </div>
                        <div class="crew-content">
                            <p>Er. Koneru Lakshman Havish</p>
                            <span>Vice President, KLEF</span>
                        </div>
                    </div>
                </div>
                <div class="crew-container">
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew3} />
                        </div>
                        <div class="crew-content">
                            <p>Dr. L Koteswara Rao</p>
                            <span>Principal, KLEF Bowrampet Campus</span>
                        </div>
                    </div>
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew4} />
                        </div>
                        <div class="crew-content">
                            <p>Dr. A RamaKrishna</p>
                            <span>Principal, KLEF Aziznagar Campus</span>
                        </div>
                    </div>
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew5} />
                        </div>
                        <div class="crew-content">
                            <p>Er. P Sai Vijay</p>
                            <span>Director-SAC, KLEF</span>
                        </div>
                    </div>
                    <div class="crew-box">
                        <div class="crew-imgbox">
                            <img src={Crew6} />
                        </div>
                        <div class="crew-content">
                            <p>Er. G Prem Satish Kumar</p>
                            <span>Incharge-SAC, KLEF</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OurCrew;
