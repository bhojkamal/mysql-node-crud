# crud app with nodeJs mySQL express

convert .env.example to .env

create public/assets/img folder on root for storing images

npm init

npm install --save express body-parser ejs express-fileupload mysql req-flash dotenv

create your acme database on mysql and players table

create database acme;

CREATE TABLE IF NOT EXISTS `players` (
`id` int(5) NOT NULL AUTO_INCREMENT,
`first_name` varchar(255) NOT NULL,
`last_name` varchar(255) NOT NULL,
`position` varchar(255) NOT NULL,
`number` int(11) NOT NULL,
`image` varchar(255) NOT NULL,
`user_name` varchar(20) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

express: used to create handle routing and process requests from the client.
express-fileupload: Simple express file upload middleware that wraps around busboy.
body-parser: used to parse incoming request from the client.
mysql: Node JS driver for MySQL.
ejs: templating engine to render html pages for the app.
req-flash: used to send flash messages to the view
nodemon: Installed globally. It is used to watch for changes to files and automatically restart the server.
