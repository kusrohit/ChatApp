## Understand the command

`npm init -y` <br>
Initialize the node.js project with package.json file and -y for yes for all node prompt while creating node.js project <br>

`npm install nodemon --save-dev` <br>
`npm install nodemon -g` <br>
Here we installing nodemon package to automatically rerun the script.js file when some changes occurs. <br>
so --save-dev means this package install only in project where -g means this package install globally (os like a software in windows c drive)
`openssl rand -base64 32` Generate random secure unique phrase or key

## Http Method

`GET Method:` (get data) When we want data from server, by default by browser <br>
`POST Method:` (send data) When we want to send and mutate some data in server, by default by form <br>
`PUT Method:` When we want to put some data on server like upload photo<br>
`PATCH Method:` When we want to update or change some existing entry in db on the server like name change<br>
`DELETE Method:` When we want to something on server<br>

## Status Code

A status code is a numeric code returned by a server in response to a client's request made to the server. It provides information about the status of the request.

A status code is a numeric code returned by a server in response to a client's request made to the server. It provides information about the status of the request. There are many status codes, each indicating a different outcome of the request. The most common status code is "200 OK," which indicates that the request has succeeded. Other common status codes include "404 Not Found," indicating that the requested resource could not be found, and "500 Internal Server Error," indicating that there was an error on the server side. <br>

The status code is typically a three-digit number. The first digit indicates the general category of the response: <br>

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error

Among the HTTP status codes, some of the most commonly encountered : <br>

- 200 OK
- 404 Not Found
- 403 Forbidden
- 500 Internal Server Error
- 302 Found (or 301 Moved Permanently)
- 401 Unauthorized



## How we connect the db with frontend

Just using fetch method and we handle the data with react management and using react store management
We have another method like zustand which also handle react custom hooks to handle fetching data form the server sida and using at client side which is obviously is the correct thing to handle the data