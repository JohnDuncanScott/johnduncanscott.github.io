import { ExternalLink } from "../components/ExternalLink";
import { Layout } from "../components/Layout";
import { config } from "../config/config";

export const Contact = () => {
    return (
        <Layout>
            <h2>Contact</h2>
            <main>
                <p>Please use <ExternalLink href={config.linkedInLink}>LinkedIn</ExternalLink> to contact me.</p>
            </main>
        </Layout>
    );
};
