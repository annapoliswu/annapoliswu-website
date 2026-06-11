import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import VideoFrame from '../../components/videoFrame';
import ZoomImg from '../../components/zoomImg';
import InfoHighlight from '../../components/infoHighlight';

function Soundboard(props) {
    let data = ProjectData.get("soundboard");
        
    return (
        <div>
            <Project {...data}>
                <h6 className='subheading'>Overview</h6>
                <h1>SoundBoard - Share Your Sounds</h1>
                <p>SoundBoard is an app created for sound designers and audio enthusiasts alike. Developed as a capstone project for Dartmouth College's Android Programming Course, my team spent 3 intensive weeks bringing this app to life.</p>
                
                <VideoFrame
                    videoUrl="https://www.youtube.com/embed/3UTdcA6CpkI?rel=0"
                    title="Soundboard App Demo"
                ></VideoFrame>

                <p>We developed this app in Android Studio, using Kotlin and a Firebase backend. I programmed the application flow + navigation bar, login screens, and backend user management.</p>
                
                <hr/>
                <h6 className='subheading'>The Problem</h6>
                <h2>A Gap in the Market</h2>

                <p>Visual designers have no shortage of platforms to find inspiration. Pinterest, Behance, and Dribbble provide rich, databases of content to inform their work. </p>
                <ZoomImg imgSrc={"img/sb-market-research.jpg"}></ZoomImg>
                <p>My team identified a clear gap: no equivalent mobile app exists for sound designers, who need the same easy access to large libraries of audio samples. We set out to create an app to fill this need.</p>
                <ZoomImg imgSrc={"img/sb-introduction.jpg"}></ZoomImg>

                <InfoHighlight 
                    infoHighlightItems={[
                    { label:"The problem", description:"How might we improve the process of finding sound samples and musical inspiration for sound designers?"},]}>
                </InfoHighlight>

                
                <hr/>

                <h2>App Development</h2>

                <p>Due to the short timeframe of project, we scope out core features for a MVP product. A couple of nice-to-haves that we wanted to implement, were cut for time. </p>
                
                <ZoomImg imgSrc={"img/sb-features.jpg"}></ZoomImg>
                
                <h2>Core Features</h2>
                <ul>
                    <li>Home Page - A feed of soundbytes created by other users.</li>
                    <li>Discover Page - Explore and search soundbytes by tag, title, or uploader.</li>
                    <li>Post & Save - Users can upload their own soundbytes and save sounds to reference later.</li>
                    <li>Profile Page - Edit your profile and saved soundboards.</li>
                    <li>User Authentication - Management and validation for user registration and login. </li>
                </ul>

                <h2>Nice to Haves</h2>
                <ul>
                    <li>Uploading custom profile images</li>
                    <li>Following other users profiles</li>
                    <li>Multi-search and advanced filtering</li>
                </ul>



            </Project>
        </div>
    );
};

export default Soundboard;