import { Layout } from "../components/Layout";

export interface ExternalRedirectsProps {
    externalLinkValue: string;
}

// https://reactgo.com/react-redirect-to-external-url/
// Slightly over-engineered but seems a bit more idiomatic and was fun to play with props
export const ExternalRedirects = ({ externalLinkValue }: ExternalRedirectsProps) => {
    window.location.replace(externalLinkValue);

    return (
        <Layout>
            <h2>Redirecting...</h2>
        </Layout>
    );
};
