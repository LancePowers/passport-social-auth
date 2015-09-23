#Blog post

### Boilerplate

```sh
├── client
│   └── public
│       ├── css
│       │   └── main.css
│       └── js
│           └── main.js
├── package.json
└── server
    ├── app.js
    ├── bin
    │   └── www
    ├── routes
    │   └── index.js
    └── views
        ├── error.html
        ├── index.html
        └── layout.html
```

## Passport Setup

Start by installing Passport:

```sh
$ npm install passport -- save
```
Create an 'auth' directory in the "server" and add the following files:

```sh
├── auth
    │   ├── github.js
    │   ├── google.js
    │   ├── linkedin.js
    │   └── twitter.js
```

todo
-config file for keys
-setup mongo 
-install mongoose, setup schema ?
-main route

## Github Auth
## LinkedIn Auth
## Twitter Auth
## Conclusion