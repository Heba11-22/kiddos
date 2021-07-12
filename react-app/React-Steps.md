# React/Redux App:

#### 1- Create a simple react project template with npm:
##### a- For App Academy template:
```bash
 npx create-react-app my-app --template @appacademy/react-v17 --use-npm
 ```
##### b- For Normal React App:
```bash
create-react-app
``` 

#### 2- Change directory into my-app and install React Router:
```bash
cd my-app && npm install --save react-router-dom@^5.1.2
```

#### 3- To start the app:
```bash
npm start
```

#### 4- Import BrowserRouter from react-router-dom in your entry file, ```src/index.js```. But I wrapped the app inside ```App.js```:
```bash
import { BrowserRouter } from 'react-router-dom';
```

