import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Loading from './components/Loading';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Loading />} />
        </Routes>
    </BrowserRouter>
);

export default App;
