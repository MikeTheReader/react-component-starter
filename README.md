# React Component Starter

This is a simple starter for building a react component. I wanted to have something that I could use that was light-weight but that I fully understood. It is not meant to be a replacement for things such as [Create React App](https://github.com/facebookincubator/create-react-app), but as an experiment on my own for putting together a starter project working with Webpack, React and Jest.

I also mean it to be a starter project for a component only, not for a full-fledged application.

## Using the starter

1. Clone the repository
2. Delete the `.git` folder to detach
3. Update `package.json` to fill in your component-specific details (name, description, etc.)
4. Run `yarn install` to install dependencies
5. Put component files in `src` directory
6. Put test files in `src/__test__` directory
7. Put example usage files in `example` directory

## Running the example

`yarn start`

This will run a webpack-dev-server instance running on port 3000. Navigating to http://localhost:3000/example will take you to the example application that makes use of the component.

## Building the component

`yarn run build`

This builds the application. (Currently, there is no a production-level build -- that is my next step.)

## Testing

`yarn test`

This runs the tests in the application.

## Formatting

`yarn run format`

This runs prettier (https://github.com/prettier/prettier) against all the JavaScript files under the src directory.
