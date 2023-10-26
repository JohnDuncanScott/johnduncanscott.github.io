import { ExternalLink } from "../components/ExternalLink";
import { Layout } from "../components/Layout";
import { config } from "../config/config";

export const Projects = () => {
    return (
        <Layout>
            <h2>Projects</h2>
            <main>
                <ul>
                    <li><ExternalLink href="https://itch.io/profile/duncanscott">Games</ExternalLink></li>
                    <li><ExternalLink href={config.gitHubLink}>GitHub</ExternalLink></li>
                </ul>
            </main>
        </Layout>
    );
};
