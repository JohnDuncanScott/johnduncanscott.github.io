const REACT_APP_PREFIX = "REACT_APP_";

function getEnvironmentVariable(environmentVariable: string) {
    if (!environmentVariable.startsWith(REACT_APP_PREFIX)) {
        throw new Error(`Invalid environment variable: ${environmentVariable}. In React, environment variables must start with ${REACT_APP_PREFIX}`);
    }

    const potentialValue = process.env[environmentVariable];

    if (!potentialValue) {
        throw new Error(
            `Environment variable not defined: ${environmentVariable}. Please ensure it exists in the .env file and is prefixed with "REACT_APP_". If this is the case, try re-running "npm run start"`
        );
    } else {
        return potentialValue;
    }
}

export const config = {
    displayName: getEnvironmentVariable("REACT_APP_DISPLAY_NAME"),
    gitHubLink: getEnvironmentVariable("REACT_APP_GITHUB_LINK"),
    linkedInLink: getEnvironmentVariable("REACT_APP_LINKEDIN_LINK"),
    tipLink: getEnvironmentVariable("REACT_APP_TIP_LINK")
};