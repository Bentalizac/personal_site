export interface Project {
    id: number
    active: boolean
    construction: boolean
    name: string
    description: string
    github_link: string
    deployed_link?: string
}

export const personal_projects: Project[] = [
    {
        id: 0,
        active: true,
        construction: true,
        name: "Personal Website",
        description: "This very website. Written in Typescript using React, and hosted using AWS Amplify",
        github_link: "https://github.com/Bentalizac/personal_site",
        deployed_link: "https://valoren.click"
    },
]

export const school_projects: Project[] = [
    {
        id: 0,
        active: false,
        construction: false,
        name: "JWT Pizza Frontend",
        description: "This was for a DevOps class, I didn't build the original code but I added testing, logging, metrics, and deployed it via a CI pipeline",
        github_link: "https://github.com/Bentalizac/jwt-pizza",
        deployed_link: "https://pizza.valoren.click"
    },
    {
        id: 1,
        active: false,
        construction: false,
        name: "JWT Pizza Backend",
        description: "The backend for the above JWT Pizza Frontend, I hosted this on AWS using a myriad of tools and managed deployment via a CI pipeline.",
        github_link: "https://github.com/Bentalizac/jwt-pizza-service",
        deployed_link: "https://pizza-service.valoren.click"
    }
]