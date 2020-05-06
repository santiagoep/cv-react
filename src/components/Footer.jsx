import React from 'react';

import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <>
        <div className="footer">
            <div className="footer__contact">
                <ul>
                    <li>Contact</li>
                    <li><img width="20" height="20px" src="https://img.icons8.com/material-outlined/24/000000/important-mail.png" /><a href="mailto:hola@santiagoep.com" target="_blank">hola@santiagoep.com</a></li>
                    <li><img width="20" height="20px" src="https://img.icons8.com/color/48/000000/whatsapp.png" /><a href="https://wa.me/573508108761">+57 350 8108761</a></li>
                </ul>
            </div>
            <div className="footer__social">
                <ul>
                    <li>Social</li>
                    <li><a href="https://www.github.com/santiagoep" target="_blank"><img width="20" height="20px" src="https://img.icons8.com/ios-filled/24/000000/github.png" />github.com/santiagoep</a></li>
                    <li><a href="https://www.linkedin.com/in/santiagoep" target="_blank"><img width="20" height="20px" src="https://img.icons8.com/color/48/000000/linkedin-circled.png" />linkedin.com/in/santiagoep</a></li>
                    <li><a href="https://www.facebook.com/santiagoepp" target="_blank"><img width="20" height="20px" src="https://img.icons8.com/color/48/000000/facebook.png" />facebook.com/santiagoepp</a></li>
                    <li><a href="https://www.twitter.com/_santiagoep" target="_blank"><img width="20" height="20px" src="https://img.icons8.com/color/48/000000/twitter.png" />twitter.com/_santiagoep</a></li>
                    <li><a href="https://www.instagram.com/_santiagoep" target="_blank"><img width="20" height="20px" src="https://img.icons8.com/color/48/000000/instagram-new.png" />instagram.com/_santiagoep</a></li>
                    <li><a href="https://www.platzi.com/@santiagoep" target="_blank"><img width="20" height="20px" src="https://static.platzi.com/media/favicons/platzi_favicon.png" />platzi.com/@santiagoep</a></li>
                </ul>
            </div>
            <div className="footer__text">
                With love by santiagoep ❤
            </div>
        </div>
    </>
);

export default Footer;