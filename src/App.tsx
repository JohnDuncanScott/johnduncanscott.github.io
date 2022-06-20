import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

function App() {
    return (
        <>
            <NavigationBar />

            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
