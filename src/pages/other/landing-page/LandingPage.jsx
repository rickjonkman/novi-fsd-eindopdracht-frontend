import React from 'react';
import './landing-page.css';
import LandingPageNavBar from "../../../components/navigation/landing-page-nav-bar/LandingPageNavBar.jsx";

const LandingPage = () => {
    return (
        <>
            {/* HEADER */}
            <header className="landing-page-header">
                <LandingPageNavBar />
                <section className="landing-page-hero-section">
                    <h2>Jouw boodschappen, recepten & agenda</h2>
                    <h1>Alles in 1</h1>
                </section>
            </header>

            {/* MAIN */}
            <main>

            </main>

            {/* FOOTER */}
            <footer>

            </footer>
        </>
    );
};

export default LandingPage;