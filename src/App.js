import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactLensesList from './features/contactlenses/ContactLensesList.js';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/ContactLensDirectoryPage';
import FindDoctor from './pages/FindDoctor';
import ShopContacts from './pages/ShopContacts';
import FindDrApp from './forms/FindDoctorForm';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            {/* <ContactLensesList  /> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='finddoctor' element={<FindDrApp />} />
                <Route path='shopcontacts' element={<ShopContacts />} />
                {/* <Route path='directory' element={<ContactLensesList />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;