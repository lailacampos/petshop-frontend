import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paths from "./paths";
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={Paths.HOME} element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
