import React from "react";
import './register.css';
import registerlogo from '../Images/Logos/logo.png';


function Register() {
    return (
        <>
            <div class="section-1">
                <div class="register-component">
                    <div class="navbar">
                        <div class="logo-container">
                            <a href="https://sac.klh.edu.in/" class="logo-container">
                                <img src={registerlogo} alt="Student Activity Center"/>
                            </a>
                        </div>
                    </div>
                    <div class="register-container">
                        <h2>Student-Registeration</h2>
                        <form method="post" enctype="multipart/form-data">
                            <div class="register-form">
                                <div class="col-1">
                                    <div class="user-box">
                                        <input type="text" name="student_name" required/>
                                            <label>FullName as per SSC</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="student_id" required/>
                                            <label>University ID</label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <select id="student_campus" name="student_campus" onchange="populateclub()">
                                            <option value="">Select Campus</option>
                                            <option value="Aziznagar">Aziznagar</option>
                                            <option value="Kondapur">Kondapur</option>
                                            <option value="Bowrampet">Bowrampet</option>
                                        </select>
                                    </div>
                                    <div class="user-box">
                                        <select id="student_department" name="student_department" onchange="populateclub()">
                                            <option value="">Select Department</option>
                                            <option value="CSE">Computer Science Engineering(CSE)</option>
                                            <option value="ECE">Electronics and Communication Engineering(ECE)</option>
                                            <option value="AI-DS">Artificial Intelligence & Data Science(AI-DS)</option>
                                            <option value="EE">Electronic Engineering(EE)</option>
                                            <option value="BCA">Bachelor of Computer Application(BCA)</option>
                                            <option value="BBA">Bachelor of Business Administration(BBA)</option>
                                            <option value="MBA">Masters in Business Administration(MBA)</option>
                                            <option value="BSC-animation">BSC-Animation</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <select name="student_academicyear">
                                            <option  value="">Select Academic Year</option>
                                            <option value="Y23">Y23</option>
                                            <option value="Y22">Y22</option>
                                            <option value="Y21">Y21</option>
                                        </select>
                                    </div>
                                    <div class="user-box">
                                        <input type="date" name="student_dob" required/>
                                            <label >Date-of-Birth</label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <input type="mail" name="student_mail" required/>
                                            <label>University Mail ID</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="student_number" required/>
                                            <label>Mobile Number</label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <select name="student_gender">
                                            <option  value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div class="user-box">
                                        <select name="wing1" id="wing1">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <select name="wing2" id="wing2">
                                            <option value="">Select from Liberal Arts</option>
                                            <option value="Photography & Editing">Photography & Editing</option>
                                            <option value="Film Making">Film Making</option>
                                            <option value="Dance">Dance</option>
                                            <option value="Music">Music</option>
                                            <option value="Literature">Literature</option>
                                            <option value="Muse Arts">Muse Arts</option>
                                            <option value="Events">Events</option>
                                            <option value="Sports">Sports</option>
                                        </select>
                                    </div>
                                    <div class="user-box">
                                        <select name="wing3" id="wing3">
                                            <option  value="">Select from Social Activity</option>
                                            <option value="SVR">SVR</option>
                                            <option value="Social Equity">Social Equity</option>
                                            <option value="Safe Life">Safe Life</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <select name="wing4" id="wing4">
                                            <option  value="">Select from Sports</option>
                                            <option value="club1">club1</option>
                                            <option value="club2">club2</option>
                                        </select>
                                    </div>
                                    <div class="user-box">
                                        <select name="student_residence">
                                            <option  value="">Residence</option>
                                            <option value="College Hostel">College Hostel</option>
                                            <option value="Day-Scholar">Day-Scholar</option>
                                            <option value="Private Hostel">Private Hostel</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="user-box">
                                        <label for="exampleInputFile">Profile Photo </label>
                                        <input name="Student_profile" type="file" required/>
                                    </div>
                                </div>
                                <div class="submit-btn">
                                    <button type="submit" class="submit" name="submit">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
