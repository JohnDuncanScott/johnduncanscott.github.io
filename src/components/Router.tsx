import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Contact } from "../views/Contact";
import { ThemeDemo } from "../views/ThemeDemo";
import { ExternalLinkValue, ExternalRedirects } from "../views/ExternalRedirects";
//import { useEffect } from "react";
//import ReactGA from "react-ga4";

function Router() {
    /**
     * https://medium.com/@vergil333/google-analytics-4-in-react-a250005c2455 - there's conflicting information between this and the ones below
     * 
     * https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react
     * https://www.sheshbabu.com/posts/automatic-pageview-tracking-using-react-router/
     * https://stackoverflow.com/questions/70646421/how-to-listen-for-route-change-in-react-router-dom-v6
     */
    // const location = useLocation();

    // useEffect(() => {
    //     console.log("Path: " + location.pathname);
    //     ReactGA.set({  });
    //     ReactGA.send({ hitType: "pageview", page: location.pathname });

    //     // trackPageView(); // To track the first pageview upon load
    //     // navigate.listen(trackPageView); // To track the subsequent pageviews
    // }, [location]);

    // // function trackPageView() {
    // //     ga("set", "page", window.location.pathname);
    // //     ga("send", "pageview");
    // // }

    return (
        // https://dev.to/calebmccoy04/switch-vs-routes-in-react-v5-vs-v6-2be
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Special "hidden" page that makes it easier to test everything looks fine */}
            <Route path="/themedemo" element={<ThemeDemo />} />
            {/* External redirects */}
            <Route path="/tip" element={<ExternalRedirects externalLinkValue={ExternalLinkValue.Tip} />} />
            {/* Redirect no matches to Home by forcing URL to be index */}
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default Router;
