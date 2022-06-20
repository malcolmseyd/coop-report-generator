# Co-Op Report Assistant

## Description

Co-Op Report Assistant helps you write co-op reports. Using the GPT-3 AI, we are able to help you write co-op reports by generating draft sections.
A frontend website is used as the user interface
Users enter info for a variety of fields, that are used to generate a readable report, that in theory should receive a passing grade.
Disclaimer: Users are submitting generated reports at their own risk.

## Install Instructions

LaTeX Dependencies:

1. Install TexLive
2. Access latex folder in terminal
3. run ./install.sh

To start the front end:

1. Access the front end folder in terminal
2. run npm install
3. run npm start to run the front end

To start the backend

1. Access the backend folder in terminal
2. Run npm install
3. Run npm start

## Bugs

Our Docker container does not work yet

## Future Development

1. Get the Docker Container to work
2. Provide the user with the required .tex (LaTeX) files, so they can modify their report. This will be in a .zip folder to allow use with Overleaf
3. Create a edit feature on the front end website to allow users to directly edit their generated report before downloading
4. Reference Generation
5. Tables
6. Appendiceies
7. Figures
8. Weighted Objective Chart
9. Glossary that finds jargon in the generated report and matches it with definitions

## References

GPT-3: https://gpt3.website/
