import { Button } from "react-bootstrap";

export const ThemeDemo = () => {
    return (
        <>
            <div className="container py-2">
                <div className="row">
                    <div className="col">
                        <h2>Bootstrap 5 Dark Theme</h2>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                        <Button variant="link" href="https://example.com/">Link button</Button>
                        <Button variant="link" href="https://example.com/" disabled>Disabled Link button</Button>
                        <br />
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                        <Button variant="link" href="https://example.com/">Link button</Button>
                        <Button variant="link" href="https://example.com/" disabled>Disabled Link button</Button>
                        <p>Default text (text-off-white)</p>
                        <p><a href="https://example.com/">Default link</a></p>
                        <p className="text-primary">text-primary some more text</p>
                        <p className="text-off-white">text-off-white some more text</p>
                        <p className="text-light">text-light some more text</p>
                        <p className="text-lighter">text-lighter some more text</p>
                        <p className="text-secondary">text-secondary some more text</p>
                        <p className="text-dark">text-dark some more text</p>
                        <div className="bg-primary text-dark p-3 rounded-1">bg-primary rounded-1</div>
                        <div className="bg-off-white text-dark p-3 rounded-2">bg-off-white rounded-2</div>
                        <div className="bg-light p-3 rounded-3">bg-light rounded-3</div>
                        <div className="bg-lighter p-3">bg-lighter</div>
                        <div className="bg-secondary p-3">bg-secondary</div>
                        <div className="bg-dark p-3">bg-dark</div>
                    </div>
                </div>
            </div>
        </>
    );
};

