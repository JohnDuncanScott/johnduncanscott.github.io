import { Layout } from "../components/Layout";
import Image from "react-bootstrap/Image";
import profileImage from "../assets/profile.png";
import { ExternalLink } from "../components/ExternalLink";
import { config } from "../config/config";

export const About = () => {
    return (
        <Layout>
            <h2>About</h2>
            <main>
                {/* Set width and height explicitly to mitigate content layout shifts */}
                <p><Image src={profileImage} width="200px" height="200px" alt="Profile picture" /></p>
                <p>Ex-<b>Microsoft</b> & ex-<b>Amazon</b>. I have enabled my team to deliver high quality products on schedule, in difficult environments. I enjoy learning about new languages and frameworks, and also sharing knowledge with my team.</p>
                <p>
                    <ul>
                        <li><b>Jagex</b> (Aug 2021 - Present) - <i>Principal Engineer</i> - <ExternalLink href="https://www.jagex.com/en-GB/launcher">Jagex Launcher</ExternalLink> (<ExternalLink href="https://www.youtube.com/watch?v=ExxFdfGwY5Y">multi-account support</ExternalLink>) (TypeScript, Java, Python)</li>
                        <li><b>Amazon</b> (~5 years) - <i>Senior Engineer</i> - <ExternalLink href="https://www.youtube.com/watch?v=kEmo9CmFshQ">Alexa Shopping</ExternalLink> (&quot;alexa, find the best headphones&quot;) (Java, Python, Machine Learning)</li>
                        <li><b>Microsoft</b> (~4 years)</li>
                        <ul>
                            <li><i>Senior Engineer</i> - Chat Bots (C#, PowerShell, Machine Learning), <ExternalLink href="https://www.microsoft.com/en-gb/surface/business/surface-hub-2">Surface Hub</ExternalLink> (C#, C++)</li>
                            <li><i>SDET 2</i> - <ExternalLink href="https://www.youtube.com/watch?v=vkvYExY1rXk">Skype for Xbox</ExternalLink> (C#, JavaScript, PowerShell)</li>
                        </ul>
                        <li><b>Experian</b> (~8 years) - <i>Test Automation Specialist</i> - Various testing tools (C#)</li>
                    </ul>
                </p>
                <p>See <ExternalLink href={config.linkedInLink}>LinkedIn</ExternalLink> for more details.</p>
            </main>
        </Layout>
    );
};
