import { Button } from "react-bootstrap";

export const ThemeDemo = () => {
    return (
        <>
            <div className="container py-2">
                <div className="row">
                    <div className="col">
                        <h2>Bootstrap 5 <span className="text-capitalize" id="darkTheme">dark</span> Theme</h2>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="link" disabled={true}>Disabled Link</Button>
                        <br />
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="link" disabled={true}>Disabled Link</Button>
                        <p>Default text</p>
                        <p className="text-primary">text-primary</p>
                        <p className="text-secondary">text-secondary</p>
                        <p className="text-light">text-light</p>
                        <p className="text-dark">text-dark</p>
                        <div className="bg-primary text-dark p-3">bg-primary</div>
                        <div className="bg-secondary p-3">bg-secondary</div>
                        <div className="bg-light p-3">bg-light</div>
                        <div className="bg-dark p-3">bg-dark</div>
                    </div>
                </div>
            </div>
        </>
    );
};

