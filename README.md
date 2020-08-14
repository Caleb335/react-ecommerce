# React Ecommerce
* A ReactJS web-based ecommerce store for cakes and pasteries

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I'd explain how you can navigate through the project below 👇

## Development

- Run `npm install` in your terminal to get all the dependencies of the project.

- To see this app locally on your machine run this in your terminal
```npm 
    npm start
```
it pops open your browser and loads the app at this address `localhost:3000`

- We've installed prettier as a dependency, run the following command to format your codes.
```npm
    npm run format
```

# Contributing...

* The folder we'd be working on, is the ```src``` folder.

- Fork and clone this repository [the forked version] onto your machine.
```git 
    git clone https://github.com/your-username/react-ecommerce.git
``` 
- Make this repository the upstream, so when there is any change you can pull from this reposiory to get the current state of the app.
```git 
    git remote add upstream https://github.com/Caleb335/react-ecommerce.git
```
- Then you can either choose to pull from any of the available branch.
```git
    git pull upstream master || git pull upstream [branch-name]
```
- Create a branch, your branch name should be something related to the feature you'd be working on i.e
```git
    git checkout -b [login-component]
```
- Make your changes and commit them in that branch.git
```git 
    git commit -m "your message"
```
- Push the changes to your current branch, then make a pull request.
```git
    git push origin HEAD || git push origin login-component
```

* # Other scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

* # Happy hacking!