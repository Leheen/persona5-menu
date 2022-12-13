import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Loading from './components/Loading';

const App = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Loading />} />
        </Routes>
    </HashRouter>
);

export default App;
