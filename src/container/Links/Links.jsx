import React from 'react'
import { images } from '../../constants'

import './Links.scss';


const Links = () => {

    return (
        <>
            <div class="outer-container">
                <div class="container" >
                    <div class="image-container">
                        <img
                            src={images.profile} alt="Ward Al Borom Avatar" />
                    </div>
                    <br />
                    <h3 style={{marginBottom: 5}}>WARD AL BOROM | Software Engineer</h3>
                    <h2>ورد البرم | مهندس برمجيات</h2>
                    <p class="bio">I'm a software engineer with 2 years of experience skilled 
                        in web and mobile 
                        development with React and React Native.
                        Committed to continuous learning and delivering quality results.</p>
                    <br />
                    <a class="tile" href="https://wa.me/96598544306">
                        <div class="links-icon">
                            <img src={images.whatsapp} alt="whatsapp icon" />
                        </div>
                        <p>Whatsapp</p>
                    </a>
                    <a class="tile" href="mailto:i.leaderx@hotmail.com">
                        <div class="links-icon">
                            <img src={images.mail} alt="email icon" />
                        </div>
                        <p>Personal Email</p>
                    </a>
                    <a class="tile" href="mailto:ward@9iotadev.com">
                        <div class="links-icon">
                            <img src={images.mail} alt="email icon" />
                        </div>
                        <p>Business Email</p>
                    </a>
                    <a class="tile" href="https://www.9iotadev.com">
                        <div class="links-icon">
                            <img src={images.website} alt="website icon" />
                        </div>
                        <p>Website (See Services)</p>
                    </a>
                    <a class="tile" href="https://www.youtube.com/ileaderx">
                        <div class="links-icon">
                            <img src={images.youtube} alt="youtube icon" />
                        </div>
                        <p>YouTube</p>
                    </a>
                    <a class="tile" href="https://www.twitter.com/ileaderx">
                        <div class="links-icon">
                            <img src={images.twitter}  alt="Twitter Icon" />
                        </div>
                        <p>Personal Twitter</p>
                    </a>
                    <a class="tile" href="https://www.twitter.com/9iotadev">
                        <div class="links-icon">
                            <img src={images.twitter} alt="Twitter Icon" />
                        </div>
                        <p>Business Twitter</p>
                    </a>
                    <a class="tile" href="https://www.instagram.com/wb7_">
                        <div class="links-icon">
                            <img src={images.instagram}  alt="Instagram Icon" />
                        </div>
                        <p>Personal Instagram</p>
                    </a>
                    <a class="tile" href="https://www.instagram.com/9iotadev">
                        <div class="links-icon">
                            <img src={images.instagram} alt="Instagram Icon" />
                        </div>
                        <p>Business Instagram</p>
                    </a>
                    <a class="tile" href="https://www.tiktok.com/@ileaderxx">
                        <div class="links-icon">
                            <img src={images.tiktok} alt="tiktok Icon" />
                        </div>
                        <p>Personal TikTok</p>
                    </a>
                    <a class="tile" href="https://www.tiktok.com/@wardinchina">
                        <div class="links-icon">
                            <img src={images.tiktok} alt="tiktok Icon" />
                        </div>
                        <p>Business TikTok Import From China</p>
                    </a>
                    <a class="tile" href="https://www.github.com/ileaderx">
                        <div class="links-icon">
                            <img src={images.github} alt="Github Icon" />
                        </div>
                        <p>Github</p>
                    </a>
                    <a class="tile" href="https://www.linkedin.com/in/ileaderx">
                        <div class="links-icon">
                            <img src={images.linkedin} alt="Instagram Icon" />
                        </div>
                        <p>Linkedin</p>
                    </a>
                    <br />
                    <p>Made With ❤️ By Ward</p>
                </div>
            </div>

        </>
    )
}

export default Links