import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "./scss/dark.scss";
import ReactGA from "react-ga4";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
// https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react
ReactGA.initialize([{
    trackingId: "G-Z4LLKX4B5Q",
    gtagOptions: {
        // Website uses URL fragments which is lost by GA4 so send page views manually via Router.tsx
        send_page_view: false
    }
}]);

root.render(
    <React.StrictMode>
        {/*
            GitHub pages don't work with BrowserRouter, so use HashRouter
            https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
            https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
            
            References:
            * https://stackoverflow.com/questions/61300429/react-app-hashrouter-not-working-on-localhost-as-well-as-github-user-page
            * BrowserRouter vs. HashRouter - https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react
            * https://blog.bitsrc.io/using-hashed-vs-nonhashed-url-paths-in-single-page-apps-a66234cefc96
        */}
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
