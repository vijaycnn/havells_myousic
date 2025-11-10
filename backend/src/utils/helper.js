const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const path = require("path");
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
var request = require("request");
const fetch = require("node-fetch"); 


// const opt = { credentials: require('amqplib').credentials.plain('neuro', 'Neuro@1009') };

var https = require('follow-redirects').https;

