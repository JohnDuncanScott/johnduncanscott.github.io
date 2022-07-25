import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { ThemeDemo } from "./views/ThemeDemo";

function App() {
    return (
        <>
            <NavigationBar />

            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Special "hidden" page that makes it easier to test everything looks fine */}
                    <Route path="/themedemo" element={<ThemeDemo />} />
                    {/* Redirect no matches to Home by forcing URL to be index */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
