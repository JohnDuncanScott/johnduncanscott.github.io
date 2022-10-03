import { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Layout = ({ children }: PropsWithChildren<Record<never, never>>) => {
    return (
        <Container>
            <Row>
                <Col />
                <Col xs={10} md={8} lg={6}>
                    { children }
                </Col>
                <Col />
            </Row>
        </Container>
    );
};