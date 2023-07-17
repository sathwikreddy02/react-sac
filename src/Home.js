import React from 'react';
import './home.css';
import Footer from './Footer'
import Header from './Header'
import bghome from './Videos/Campus-video.mp4'
import aboutimg from './Images/Home/1S1A6522 copy1.png'
import homeeventimg from './Images/Menu/Achivements.jpg'
import homeeventlogo from './Images/Logos/Untitled design.png'
import collab1 from './Images/collobrations/logo CC.png'
import collab2 from './Images/collobrations/images (4).png'
import collab3 from './Images/collobrations/ts-logo.png'
import collab8 from './Images/collobrations/AP Govt logo.png'
import collab4 from './Images/collobrations/uniceff.png'
import collab5 from './Images/collobrations/safe-life-logo-1-600x359.png'
import collab6 from './Images/collobrations/aptdc-logo.png'
import collab7 from './Images/collobrations/voice4girls.jpg'
import testmo1 from './Images/Testimonials/1243383713A.Likhitha.jpg'



const Home = () => {
    

    return (

        <>
            <Header />
            <div className="home">
                <div class="section-1">
                    <video autoPlay loop muted id="bgvideo">
                        <source src={bghome} />
                    </video>
                    <div class="bg-hover">
                        <div class="bg-hover-grid">
                            <a href="/Menu/Register" class="area-of-study--blue">
                                <div class="chevron-link1">
                                    <span>Student Registration</span>
                                    <span class="chevron1"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./Menu/Dashboard.php" class="area-of-study--blue">
                                <div class="chevron-link2">
                                    <span>Dashboard</span>
                                    <span class="chevron2"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./Menu/CompletedEvents.php" class="area-of-study--blue">
                                <div class="chevron-link2">
                                    <span>Completed Events</span>
                                    <span class="chevron2"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./view-all-events.php" class="area-of-study--blue">
                                <div class="chevron-link1">
                                    <span>Upcoming Events</span>
                                    <span class="chevron1"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./Menu/IndividualStudentProgression.php" class="area-of-study--blue">
                                <div class="chevron-link3">
                                    <span>Individual Student Progression</span>
                                    <span class="chevron3"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./Menu/Media-Feed" class="area-of-study--blue">
                                <div class="chevron-link4">
                                    <span>Social Media Feed</span>
                                    <span class="chevron4"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="./Menu/Council" class="area-of-study--blue">
                                <div class="chevron-link4">
                                    <span>Student Council</span>
                                    <span class="chevron4"></span>
                                </div>
                            </a>
                        </div>
                        <div class="bg-hover-grid">
                            <a href="" class="area-of-study--blue">
                                <div class="chevron-link3">
                                    <span>Achievements</span>
                                    <span class="chevron3"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="section-2">
                    <div class="about-img-container">
                        <div class="about-img">
                            <img src={aboutimg} alt="" />
                        </div>
                    </div>
                    <div class="about-descrip">
                        <h1>A Hub for Creativity</h1>
                        <p>The Student Activity Center at KLH Deemed to be University, Hyderabad is a vibrant hub of extracurricular activities, catering to diverse interests and talents. It offers cultural, sports, technical, literary, and social initiatives. Students can participate in dance, music, theater, and art clubs, showcasing their talents and attending workshops. The center provides exceptional sports facilities for various indoor and outdoor sports, organizing tournaments and coaching programs. Technical clubs host hackathons, coding competitions, and workshops to enhance students' technical skills. Literary and debating societies promote intellectual discourse and communication skills. Students also engage in social responsibility through community service and outreach programs. The center cultivates well-rounded individuals, preparing them for future challenges.</p>
                    </div>
                </div>
                <div class="section-3">
                    <h2>Events & New's</h2>
                    <div class="event-content">
                        <div class="event-img-container">
                            <div class="event-img">
                                <a href=""><img src={homeeventimg} alt="" /></a>
                            </div>
                        </div>
                        <div class="event-descrip">
                            <img src={homeeventlogo} alt="" />
                            <h1><a href="">Title</a></h1>
                            <p><b>From: </b>02-11-2023 - <b>To: </b>02-11-2023</p>
                            <br /><br /><br />
                            <a href="" class="view-all">View all news</a>
                        </div>
                    </div>
                </div>
                <div class="section-4">
                    <h2>Testmonial's</h2>
                    <div class="testmonial-cursorial">
                        <div class="mySlides">
                            <div class="mySlides-2">
                                <div class="testmonial-content">
                                    <q>Joining the student activity center has provided me with opportunities for personal growth, skill development, and meaningful connections. I have explored my interests, discovered new passions, and gained valuable experiences through clubs and organizations. The inclusive atmosphere has allowed me to form great bonds with like-minded individuals from diverse backgrounds, expanding my horizons and appreciate different perspectives.</q>
                                </div>
                                <div class="testmonial-user">
                                    <div class="testmonial-user-img">
                                        <img src={testmo1} />
                                    </div>
                                    <p>~ A.Likhitha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-5">
                    <h2>Our Collaborations</h2>
                    <div id="container1">
                        <div id="image-container1">
                            <img class="image" src={collab1} alt="" />
                            <img class="image" src={collab2} alt="" />
                            <img class="image" src={collab3} alt="" />
                            <img class="image" src={collab4} alt="" />
                            <img class="image" src={collab5} alt="" />
                            <img class="image" src={collab6} alt="" />
                            <img class="image" src={collab7} alt="" />
                            <img class="image" src={collab8} alt="" />
                            <img class="image" src={collab1} alt="" />
                            <img class="image" src={collab2} alt="" />
                            <img class="image" src={collab3} alt="" />
                            <img class="image" src={collab4} alt="" />
                            <img class="image" src={collab5} alt="" />
                            <img class="image" src={collab6} alt="" />
                            <img class="image" src={collab7} alt="" />
                            <img class="image" src={collab8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
