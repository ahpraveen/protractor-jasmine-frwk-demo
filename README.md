# protractor-jasmine-frwk-demo

Introduction:
=============
1/ Protractor is a node js program

2/ Protractor supports to automation applications that are built on Angular and non Angular tech stack

3/ Protractor supports various frameworks like jasmine, mocha, cucumber and serenity BDD

4/ Protractor supports to run head and headless mode.


Setup Instructions
==================
Precondition: Java should be installed.

1/ download and  install npm (node package manager)

2/ Install node

2/ install protractor through npm
   npm install -g protractor (globally) -- installs wherever node is installed

3/ run the selenium server ( to run the server, jdk need to be installed)
 webdriver-manager start

4/ Create a spec (test) .js file and write test (refer the folder under tests); use jasmine api to write expect

5/ Create a config.js file to provide details about configuration e.g where selenium server is running, frameowrk details etc.
