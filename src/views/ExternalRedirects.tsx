import { Layout } from "../components/Layout";

export enum ExternalLinkValue {
    // Used for tips / donations
    Tip = "https://ko-fi.com/duncanscott"
}

export interface ExternalRedirectsProps {
    externalLinkValue: ExternalLinkValue;
}

// https://reactgo.com/react-redirect-to-external-url/
// Slightly over-engineered but seems a bit more idiomatic and was fun to play with props
export const ExternalRedirects = ({ externalLinkValue }: ExternalRedirectsProps) => {
    window.location.replace(externalLinkValue);

    return (
        <Layout>
            <h2>Redirecting to tip provider...</h2>
        </Layout>
    );
};
