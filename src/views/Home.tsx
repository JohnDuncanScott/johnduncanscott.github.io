import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import linkedinLogo from "../assets/logos/linkedin.svg";
import githubLogo from "../assets/logos/github.svg";
import jagexLogo from "../assets/logos/jagex.jpg";
import microsoftLogo from "../assets/logos/microsoft.jpg";
import amazonLogo from "../assets/logos/amazon.jpg";

export const Home = () => {
    return (
        /**
         * Don't use h-100 otherwise navbar causes scrollbar to appear, instead use fill
         * (however, parent elements must all use h-100 to make this work)
         * https://stackoverflow.com/questions/15641142/bootstrap-fill-fluid-container-between-header-and-footer
         * container-fluid sets width to 100% width all the time
         * flex-fill forces element to take up whole space
         */
        <div className="container-fluid flex-fill position-relative bg-dark bg-gradient">
            {/* Centre element */}
            <div className="position-absolute top-50 start-50 translate-middle rounded bg-secondary p-4 border border-lighter">
                <h2 className="text-center text-primary">Principal Software Engineer</h2>
                <p className="text-center">
                    {/*
                        align-text-bottom ensures the logos are exactly centred with the text.
                        Space characters are used to format the code more nicely while preserving spaces.
                    */}
                    Currently at&nbsp;
                    <span className="d-inline-block"><Image width="20px" height="20px" src={jagexLogo} className="align-text-bottom" /> Jagex.&nbsp;</span>
                    <span className="d-inline-block"><Image width="20px" height="20px" src={microsoftLogo} className="align-text-bottom" /> Ex-Microsoft,&nbsp;</span>
                    <span className="d-inline-block"><Image width="20px" height="20px" src={amazonLogo} className="align-text-bottom" /> Ex-Amazon.</span>
                </p>
                {/*
                    Align items on both x and y axis (default is start left and stretch vertically).
                    https://getbootstrap.com/docs/5.0/utilities/spacing/#gap adds spacing between buttons
                */}
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <a href="https://www.linkedin.com/in/duncan-scott-ba10324/">
                        <Button variant="primary py-1 px-2"><Image width="20px" height="27px" src={linkedinLogo} /></Button>
                    </a>
                    <a href="https://github.com/JohnDuncanScott">
                        <Button variant="primary p-1"><Image width="27px" height="27px" src={githubLogo} /></Button>
                    </a>
                    <Button variant="primary">Projects</Button>
                </div>
            </div>
        </div>
    );
};
