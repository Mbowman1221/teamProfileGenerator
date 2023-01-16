const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern}
