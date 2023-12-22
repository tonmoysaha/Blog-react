import Home from './pages/home'
import Contact from './pages/contact'
import {BrowserRouter, Link, Outlet, Route, Router, Routes} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact></Contact>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
