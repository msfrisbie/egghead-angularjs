# egghead-angularjs

This project is an application/directory of all the [egghead.io](http://www.egghead.io/) AngularJS
tutorial videos. Since the source code is not currently published, and there is some guesswork and
inaccuracies in some of the videos, the correct, completely functional solutions are presented
here. Testing is also implemented within the framework.

I am working on the equivalent of the [RailsCasts](railscasts.com) ASCIIcasts for each of the
videos, stay tuned!

The application is build on top of the angular-seed stack, and setup is identical:


## How to use angular-seed

Clone the angular-seed repository and start hacking...


### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files

## Contact

For more information on AngularJS please check out http://angularjs.org/
