import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ModelPage from './pages/ModelPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/projects' element={<ProjectPage />} />
                    <Route path='/models' element={<ModelPage />} />
                    <Route path='/about-me' element={<AboutMePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
