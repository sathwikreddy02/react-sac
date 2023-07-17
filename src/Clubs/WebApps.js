import './Webapps.css';
import Footer from '../Footer'
import Header from '../Header'
import clubvideo from '../Videos/Clubs/videoplayback.mp4';
import ourpartner from '../Images/collobrations/safe-life-logo-1-600x359.png';
import handbook from '../Images/Clubs/Handbook for website.png';

function WebApps() {
    return (
        <>
            <Header />
            <div class="home">
                <div class="section-1">
                    <video autoPlay loop muted id="bgvideo">
                        <source src={clubvideo} />
                    </video>
                    <div class="club-name-box">
                        <h1>Web Apps</h1>
                    </div>
                </div>
                <div class="section-2">
                    <div class="objective">
                        <h2><u>Vision &amp; Mission:</u></h2>
                        <h4><u>Vision:</u></h4>
                        <p>The vision for web and app development is to create user-friendly and efficient platforms that
                            seamlessly integrate with modern technologies, making information accessible and easily
                            navigable for all users. This includes utilizing advancements in artificial intelligence, machine
                            learning, and the Internet of Things (IoT) to enhance the user experience and improve the
                            performance and security of web and mobile applications. The goal is to create dynamic and
                            accessible digital solutions that can effectively meet the diverse needs of businesses and
                            individuals in an increasingly connected world.
                        </p>
                        <h4><u>Mission:</u></h4>
                        <p>Web and app development aims to design and build digital platforms that provide a seamless
                            and satisfying user experience while achieving specific business or personal goals. <br />
                            The major objectives of the proposed mission are to:<br />
                            ❖ <b>Improving accessibility:</b> Developing websites and apps that are accessible to users with disabilities.<br />
                            ❖ <b>Enhancing functionality:</b> Building platforms that have all the necessary features and tools to achieve the intended goals.<br />
                            ❖ <b>Improving performance:</b> Optimizing websites and apps to load quickly and perform efficiently, improving the user experience and engagement.<br />
                            ❖ <b>Providing security:</b> Ensuring that sensitive user data and transactions are secure and protected from cyber threats.<br />
                            ❖ <b>Meeting business needs:</b> Building websites and apps that meet the specific needs of businesses and organizations, helping them to achieve their goals.<br />
                            ❖ <b>Creating engaging user experience:</b> Designing interfaces that are intuitive, visually appealing, and easy to navigate, encouraging users to engage with the platform.<br />
                        </p>
                    </div>
                    <div class="handout">
                        <div class="our-partners">
                            <h3>Our Partner</h3>
                            <img src={ourpartner} alt="" />
                        </div>
                        <a href="../pdfs/web and app development.pdf" target="_blank" title="Read PDF"><img src={handbook} alt="" /></a>
                    </div>
                </div>
            </div>
            <br/>
            <Footer />
        </>
    );
}

export default WebApps;
