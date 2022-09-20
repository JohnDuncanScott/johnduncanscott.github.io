import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import linkedinLogo from "../assets/logos/linkedin.svg";
import githubLogo from "../assets/logos/github.svg";
import jagexLogo from "../assets/logos/jagex.png";
import microsoftLogo from "../assets/logos/microsoft.svg.png";
import amazonLogo from "../assets/logos/amazon.png";

export const Home = () => {
    return (
        /**
         * Don't use h-100 otherwise navbar causes scrollbar to appear, instead use fill
         * (however, parent elements must all use h-100 to make this work)
         * https://stackoverflow.com/questions/15641142/bootstrap-fill-fluid-container-between-header-and-footer
         * container-fluid sets width to 100% width all the time
         * flex-fill forces element to take up whole space
         */
        <div className="container-fluid flex-fill position-relative bg-dark">
            {/* Centre element */}
            <div className="position-absolute top-50 start-50 translate-middle rounded bg-secondary p-4 border border-lighter">
                <h2 className="text-center text-primary">Principal Software Engineer</h2>
                <p className="text-center">
                    Currently at <Image height="16px" width="16px" src={jagexLogo} className="rounded-0.5" /> Jagex. <Image height="16px" width="16px" src={microsoftLogo} /> Ex-Microsoft, <Image height="18px" width="18px" src={amazonLogo} /> Ex-Amazon.
                </p>
                {/*
                    Align items on both x and y axis (default is start left and stretch vertically).
                    https://getbootstrap.com/docs/5.0/utilities/spacing/#gap adds spacing between buttons
                */}
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <a href="https://www.linkedin.com/in/duncan-scott-ba10324/">
                        <Button variant="primary py-1 px-2"><Image src={linkedinLogo} /></Button>
                    </a>
                    <a href="https://github.com/JohnDuncanScott">
                        <Button variant="primary p-1"><Image src={githubLogo} /></Button>
                    </a>
                    <Button variant="primary">Projects</Button>
                </div>
            </div>
        </div>
    );
};
