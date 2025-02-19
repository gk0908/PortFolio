import  { useEffect } from 'react';
import GON from '../assets/gon.jpg'
import './Profile.css';

const Profile = () => {
    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.pageYOffset;
            const image = document.querySelector('.hero_background-image');
            image.style.transform = `translate3d(0, ${yOffset * 0.5}px, 0)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero-section">
            <img 
                src={GON} 
                alt="gon" 
                className="hero_background-image"
            />
            <div className="hero-content">
                <h1 className="hero-title">Hey, I'm Gopi</h1>
                <div className="hero-subtitle">
                    <p>Learning</p>
                    <p>Exploring</p>
                    <p>Creating</p>
                    <p>Growing</p>
                </div>
                <div className="hero-contact">
                    <p>Get in touch - <a href="mailto:gopi@example.com">gopi@example.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;