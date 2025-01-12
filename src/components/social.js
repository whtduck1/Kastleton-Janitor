import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/social.css";

const SocialIcons = () => {
    return (
        <div className='social-container'>
            <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" title="Reddit">
                <i className="fab fa-reddit"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" title="Github">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" title="Discord">
                <i className="fab fa-discord"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
