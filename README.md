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
    ├── client
        └── js
            └── formHandler.js
            └── mockAPI.js
            └── URLChecker.js
        └── styles
            └── base.scss
            └── footer.scss
            └── form.scss
            └── header.scss
            └── resets.scss
        └── views
            └── index.html
        └── index.js
  
    └── server
        ├── index.js # express server.
├── __test__ 
        ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
```
## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Concepts](#concepts)
4. [Contributing](#contributing)

 <h2 align="center">Concepts</h2>
 
 <h2 align="center">Concepts</h2>
 
 ### [Plugins](https://webpack.js.org/plugins/)
 
 ### [Loaders](https://webpack.js.org/loaders/)
 
 <h2 align="center">Concepts</h2>
 
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

 <h2 align="center">Concepts</h2>
