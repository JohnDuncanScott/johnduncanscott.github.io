import { PropsWithChildren } from "react";

export interface ExternalLinkProps {
    href: string;
}

// Removes a bit of copy / pasting
export const ExternalLink = ({ href, children }: PropsWithChildren<ExternalLinkProps>) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    );
};