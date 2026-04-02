import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MainPage from './pages/Main/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PromotionsPage from './pages/PromotionsPage/PromotionsPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import UsefulInfoPage from './pages/UsefulInfoPage/UsefulInfoPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import AddressPage from './pages/AddressPage/AddressPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:category" element={<CategoryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/promotions" element={<PromotionsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/info" element={<UsefulInfoPage />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/info" element={<UsefulInfoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
