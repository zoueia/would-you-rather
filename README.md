## What You're Getting
```bash
├── webpack.prod.js
├── webpack.dev.js
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore # this file includes all files that shouldn't be uploaded to git repo .
├── .env # enviroment variables .
├── .babelrc # enviroment variables .
├── src
│    ├── client
│    │    └── js
│    │    │    └── formHandler.js
│    │    │    └── mockAPI.js
│    │    │    └── URLChecker.js
│    │    └── styles
│    │    │    └── base.scss
│    │    │    └── footer.scss
│    │    │    └── form.scss
│    │    │    └── header.scss
│    │    │    └── resets.scss
│    │    └── views
│    │    │    └── index.html
│    │    └── index.js
│    │
│    └── server
│        └── index.js # express server.
└── __test__ 
        ├── URLChecker.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
        ├── getData.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
        └── handleSubmit.test.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
```
## Table of Contents

1. [App Start](#install)
2. [Configrations](#introduction)
3. [API calls](#concepts)
4. [Testing](#contributing)

 <h2 align="center">App Start</h2>
 
 <h2 align="center">Configrations</h2>
 
 ### [Plugins](https://webpack.js.org/plugins/)
 
 ### [Loaders](https://webpack.js.org/loaders/)
 
 <h2 align="center">API calls</h2>
 
* [`getData`](#getall)
* [`handleSubmit`](#update)
* [`checkForURL`](#search)

### `getData`

Method Signature:

```js
getData(url)
```

* Returns a Promise which resolves to a JSON object containing article discription.
* Update the DOM with recieved response.

### `handleSubmit`

Method Signature:

```js
handleSubmit(event)
```

* Invoke getData and URLchecker to make api call.

### `checkForURL`

Method Signature:

```js
checkForURL(url)
```

* Returns true if the url attribute is an actual URL `
* Returns false if url is not an actual url.

 <h2 align="center">Testing</h2>
