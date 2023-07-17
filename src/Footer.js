import React from "react";
import './footer.css';


function Footer() {
    return (
        <>
            <footer>
                <div class="footer">
                    <div class="footer-section">
                        <div class="visitor-counter">
                            <h3>Visitor Count</h3>
                            <table>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                            </table>
                        </div>
                        <div class="social-links">
                            <h3 class="social-head">Follow US</h3>
                            <div class="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100090414907116&mibextid=ZbWKwL">
                                    <div hover="this.style.backgroundColor='#1B74E4'" color="this.style.backgroundColor='#6e6b6f60'" class="social-icon">
                                        <i class="fa-brands fa-facebook"></i>
                                        <h3>@klh.sac</h3>
                                    </div>
                                </a>
                                <a href="https://twitter.com/klh_sac">
                                    <div hover="this.style.backgroundColor='#3498DB'" color="this.style.backgroundColor='#6e6b6f60'" class="social-icon">
                                        <i class="fa-brands fa-twitter"></i>
                                        <h3>@klh_sac</h3>
                                    </div>
                                </a>
                                <a class="" href="https://www.instagram.com/klh.sac/">
                                    <div class="social-icon insta">
                                        <i class="fa-brands fa-instagram"></i>
                                        <h3>@klh.sac</h3>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/klh-sac-8a5322266/">
                                    <div hover="this.style.backgroundColor='#0A66C2'" color="this.style.backgroundColor='#6e6b6f60'" class="social-icon">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        <h3>@klh-sac</h3>
                                    </div>
                                </a>
                                <a href="https://youtube.com/@kluhsac">
                                    <div hover="this.style.backgroundColor='#FF0000'" color="this.style.backgroundColor='#6e6b6f60'" class="social-icon">
                                        <i class="fa-brands fa-youtube"></i>
                                        <h3>@kluhsac</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="other-links">
                            <h3>Other Links</h3>
                            <div class="links">
                                <a href="https://klh.edu.in/aziznagar/" class="other">K L University Aziznagar Campus</a><br />
                                <a href="https://gbs.klh.edu.in/" class="other">K L University Kondapur Campus</a><br />
                                <a href="https://klh.edu.in/bowrampet/" class="other">K L University Bowrampet Campus</a><br />
                                <a href="http://safelife.ap.gov.in/" class="other1">Safe Life</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-2">
                        <h3>&copy; 2023 Koneru Lakshmaiah Education Foundation - Student Activity Center </h3>
                        <hr />
                        <h3>Designed & Developed by <a href="https://www.linkedin.com/in/kallu-sathwik-reddy-a02145227">K Sathwik Reddy</a></h3>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
