# Top Artists

Welcome to the **Top Artists App** Project.
The project is split into folders, named appropriately for the client and server. Follow the installation instructions below.

## Installation
Top Artists App requires [Node.js](https://nodejs.org/) v4+ to run.

### Server (API)
Simply fire up a terminal window and run the following commands from the project root.
```sh
$ cd server
$ npm install & npm start
```
The Server should now be running on Port 3000. To test this, fire up Postman (or your browser) and navigate to: http://localhost:3000/topArtists


### Client
Once again, fire up a terminal window and run the following commands from the project root.
```sh
$ cd client
$ npm install & npm start
```
The client should not be running, and should've opened up a tab in your browser, but if not, you can navigate to http://localhost:3001


### Docker

The server app has a Dockerfile included, and you can build a docker container using docker-machine and docker-build locally.

### Testing
There are some basic tests set-up for the server API project, to access just run the following commands from the root.

Note: Using some 3rd party libraries including: Mocha, Chai and Async.

Once again, fire up a terminal window and run the following commands from the project root.
```sh
$ cd server
$ npm test
```


### Notes

Whilst using the Last FM API, I have noticed some odd behaviours at times with the `limit` and `page` params. For example, consider these URL.
If you hit this URL, you will receive more than 5 results, however the attributes shows the `perPage` attribute as 5, although it's not respecting it.

http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=david bowie&format=json&limit=5&page=4&api_key=d3f706c99f731811d7da46348c32bcc2

If you hit another page (e.g. on either side of this, page 3 or 5), then it *will* respect it. 

http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=david bowie&format=json&limit=5&page=5&api_key=d3f706c99f731811d7da46348c32bcc2
