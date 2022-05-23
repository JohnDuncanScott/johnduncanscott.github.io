import { PropsWithChildren } from "react"
import { Container } from "react-bootstrap"

export const Layout = ({ children }: PropsWithChildren<{}>) => (
    <Container>
        { children }
    </Container>
)