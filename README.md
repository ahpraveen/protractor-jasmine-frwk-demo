# protractor-jasmine-frwk-demo

Introduction:
=============
1/ Protractor is a end to end testing framework.

2/ Protractor is a node js program

3/ Protractor supports to automation applications that are built on Angular and non Angular tech stack

4/ Protractor supports various frameworks like jasmine, mocha, cucumber and serenity BDD

5/ Protractor supports to run head and headless mode.


Setup Instructions
==================
Precondition: Java should be installed.

1/ download and  install npm (node package manager)

2/ Install node

3/ install protractor through npm
   npm install -g protractor (globally) -- installs wherever node is installed

4/ run the selenium server ( to run the server, jdk need to be installed)
 webdriver-manager start

5/ npm install protractor-beautiful-reporter ( this package is needed for generating HTML report)

6/ Create a spec (test) .js file and write test (refer the folder under tests); use jasmine api to write expect

7/ Create a config.js file to provide details about configuration e.g where selenium server is running, frameowrk details etc.

8/ run using command line; protractor config.js

9/ Post execution check the result in reports/screenshots folder;

10/ open the report. html for details.


