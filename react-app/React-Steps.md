# React/Redux App:

#### 1- Create a simple react project template with npm:
##### a- For App Academy template:
```bash
 npx create-react-app my-app --template @appacademy/react-v17 --use-npm
 ```
##### b- For Normal React App:
```bash
npx create-react-app my-app
``` 

>The Create React App tool created a project for you that uses a tool called Webpack. 
>>Webpack reads a bunch of different types of files, CSS, images, JavaScript, and bundles them up into JavaScript files.

>>Importing CSS files are not supported by default. But, the src/index.js file is not what the browser sees. Instead, Webpack figures out that the file imports the CSS file src/index.css, reads all of that CSS, turns it into JavaScript, and removes that import statement from what it will send to your browser.

#### 2- Change directory into my-app and install React Router:
```bash
cd my-app && npm install --save react-router-dom@^5.1.2
```

#### 3- To start the app:
```bash
npm start
```

#### 4- Import ```{ BrowserRouter }``` from react-router-dom in your entry file, ```src/index.js```. But I wrapped the app inside ```App.js```:
#####  ```BrowserRouter``` makes routing information from React Router available to all its descendent components
```bash
import { BrowserRouter } from 'react-router-dom';
```
```bash
return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
```


