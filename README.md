# are-pubs-open

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

To make the API calls the drinks-vote-api project must be running locally. 
The endpint for this is set in .env.development and is set at `localhost:3000` by default. 

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Deployment
This will push the new files to an S3 bucket and clear the CloudFront cache
```
npm run deploy
```
