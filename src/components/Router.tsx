import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../views/Home";
import { About } from "../views/About";
import { Contact } from "../views/Contact";
import { ThemeDemo } from "../views/ThemeDemo";
import { ExternalRedirects } from "../views/ExternalRedirects";
import { config } from "../config/config";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Router() {
    /**
     * https://developers.google.com/analytics/devguides/collection/ga4/views?client_type=gtag
     * https://www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/ - although GA4 does auto-track page views using history,
     * it doesn't keep the fragments (bits after #), so you still need to fire page views yourself
     * https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react
     * https://www.sheshbabu.com/posts/automatic-pageview-tracking-using-react-router/
     * https://stackoverflow.com/questions/70646421/how-to-listen-for-route-change-in-react-router-dom-v6
     */
    const location = useLocation();

    useEffect(() => {
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#page
        ReactGA.set({ page: location.pathname });
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitType
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return (
        // https://dev.to/calebmccoy04/switch-vs-routes-in-react-v5-vs-v6-2be
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Special "hidden" page that makes it easier to test everything looks fine */}
            <Route path="/themedemo" element={<ThemeDemo />} />
            {/* External redirects */}
            <Route path="/tip" element={<ExternalRedirects externalLinkValue={config.tipLink} />} />
            {/* Redirect no matches to Home by forcing URL to be index */}
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default Router;
