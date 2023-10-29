import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import linkedinLogo from "../assets/logos/linkedin.svg";
import githubLogo from "../assets/logos/github.svg";
import jagexLogo from "../assets/logos/jagex.jpg";
import microsoftLogo from "../assets/logos/microsoft.jpg";
import amazonLogo from "../assets/logos/amazon.jpg";
import { config } from "../config/config";

export const Home = () => {
    return (
        /**
         * Don't use h-100 otherwise navbar causes scrollbar to appear, instead use fill
         * (however, parent elements must all use h-100 to make this work)
         * https://stackoverflow.com/questions/15641142/bootstrap-fill-fluid-container-between-header-and-footer
         * div + container-fluid or Container + fluid sets width to 100% width all the time
         * flex-fill forces element to take up whole space
         */
        <Container className="flex-fill position-relative bg-dark bg-gradient" fluid>
            {/*
                Centre element.
                At low widths, keep "Principal" and "Software" together so the layout shape looks a bit
                nicer
            */}
            <div className="position-absolute top-50 start-50 translate-middle rounded bg-secondary p-4 border border-lighter">
                <h1 className="text-center text-primary">{config.displayName}</h1>
                <h4 className="text-center text-primary">Principal&nbsp;Software Engineer</h4>
                <p className="text-center">
                    {/*
                        align-text-bottom is mostly fine for both mobile and desktop. Could be tweaked further, but looks nice enough.
                        Space characters are used to format the code more nicely while preserving spaces.
                        Spans are used to keep logos with their respective companies.
                    */}
                    Currently at&nbsp;
                    <span className="d-inline-block"><Image width="23px" height="23px" src={jagexLogo} className="align-text-bottom border border-lighter" /> Jagex.&nbsp;</span>
                    <span className="d-inline-block"><Image width="23px" height="23px" src={microsoftLogo} className="align-text-bottom border border-lighter" /> Ex-Microsoft,&nbsp;</span>
                    <span className="d-inline-block"><Image width="23px" height="23px" src={amazonLogo} className="align-text-bottom border border-lighter" /> ex-Amazon.</span>
                </p>
                {/*
                    Align items on both x and y axis (default is start left and stretch vertically).
                    https://getbootstrap.com/docs/5.0/utilities/spacing/#gap adds spacing between buttons
                */}
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <a href={config.linkedInLink}>
                        <Button variant="primary py-1 px-2"><Image width="20px" height="27px" src={linkedinLogo} /></Button>
                    </a>
                    <a href={config.gitHubLink}>
                        <Button variant="primary p-1"><Image width="27px" height="27px" src={githubLogo} /></Button>
                    </a>
                    <a href="#/projects">
                        <Button variant="primary">Projects</Button>
                    </a>
                </div>
            </div>
        </Container>
    );
};
