## Available Scripts

To see the challenge in action, in the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Technology Choices

### `React/Typescript`

Fabulous front-end framework with typing built in that I use everyday.

### `Emotion CSS`

I wanted to use a CSS-in-JS solution that was performant and close to what I use everyday (I use MUI and their styling solution which is based off of emotion and styled components).

CSS-in-JS gives me the dual advantage of being familiar enough to rapidly prototype AND not having to worry too much about CSS classes in a different file for little tradeoff in this particular scenario.

### `React-Testing-Library`

I chose to use RTL as my testing solution over something like Enzyme because RTL has been the de-facto way of testing react components in recent times. It's an up-to-date library whose testing philosophy I buy into.\
[Author of RTL talking about not testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
