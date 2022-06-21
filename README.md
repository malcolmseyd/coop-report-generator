# Co-Op Report Generator

Generate UVic Co-Op Work Term Reports - A tool built with [GPT-3](https://beta.openai.com/)

## Description

The Co-Op Report Generator helps you write your UVic co-op work term reports.

Using GPT-3, we are able to help you write your co-op reports by generating essential draft sections. All you need to do is provide the necessary information and we will do the rest.

A frontend react web application is used as the user interface. Users enter the necessary information that will then be used to generate the report. The report in theory should be readable and should obtain a passing grade.

A backend written in TypeScript is used to interact with GTP-3 and generate the report. A PDF is then sent back to the frontend react web application. Users can then download the report.

**DISCLAIMER**: Users are submitting generated reports at their own risk. The developers of this project are not responsible for any actions taken by users. We do not condone any violations of academic integrity.

## Install Instructions

The following is the installation instructions for the Co-Op Report Generator.

To run the application locally, you will need to install the following:

- Docker Desktop: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

Use the following command to install Docker and Docker Compose on MacOSX with Brew:

```bash
brew install docker docker-compose
```

Follow the instructions provided by the brew install to complete the installation of Docker and Docker Compose.

## Getting Started

To run the application locally you will need to obtain an OPEN AI API key. You can obtain one from here by joining the beta: [https://beta.openai.com/](https://beta.openai.com/). Once an API key has been obtained you will need to add it to the `.env` file.

Copy the contents on the `.env.example` file to `.env` and add your API key.

Next you will need to have Desktop Docker running.

Once you have added your API key to the `.env` file and Desktop Docker is running, you can run the application by running the following command:

```bash
./go.sh
```

You can run the following command to enable development mode:

```bash
./go.sh -e dev
```

You can now navigate to [http://localhost:3000](http://localhost:3000) to view the application.

The backend is running on port 8080. You can navigate to [http://localhost:8080](http://localhost:8080) to view the backend.

## Known Issues

The development mode does not currently work. It fails at creating the `.pdf`.

## Future Development

The following is a list of future development plans for the Co-Op Report Generator.

1. Add a feature to create an Overleaf LaTeX project from the generated report. (Create a `.zip` to be able to upload to Overleaf with their API. ([https://www.overleaf.com/devs](https://www.overleaf.com/devs))).
1. Add a feature to allow editing.
1. Implement: References, Tables, Appendixes, Figures, Weighted objective Chart, Glossary, etc..
1. Allow Dark Mode.
1. Allow for `n` number of solutions.
1. Create a better user experience. (Forms, etc.).
1. Implement mermaid.js.
1. Add dialog warning when server returns 500. Inform users to try again later.
