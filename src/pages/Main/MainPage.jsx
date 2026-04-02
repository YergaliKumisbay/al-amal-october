import React from 'react';
import Header from '../../components/Header/Header.jsx';
import SearchBar from "../../components/common/SearchBar/SearchBar.jsx";
import MantySection from '../../components/MenuSections/MantySection.jsx';
import PelmenSection from "../../components/MenuSections/PelmeniSection.jsx";
import './MainPage.css';


const MainPage = () => {
    return (
        <main className="main-page">
            <Header />
            <SearchBar  />
            <MantySection />
            <PelmenSection/>
        </main>
    );
};

export default MainPage;
