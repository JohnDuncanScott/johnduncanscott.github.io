import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";

export const Layout = ({ children }: PropsWithChildren<Record<never, never>>) => {
    return (
        <Container>
            { children }
        </Container>
    );
};