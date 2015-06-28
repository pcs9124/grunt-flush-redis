# grunt-flush-redis

A super simple task to flush a Redis database before running tests.
This is a fork from the original and not merged so if you want the enhanecd features, you will need to pull the tasks directory where your Gruntfile.js is.

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js]

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadTasks('tasks');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
options supported : 
host : defaults to 'localhost'
port : defaults to '6379'

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
Pradip Shah : forked from original
Mukund Lakshman : original

## License
Copyright (c) 2012 Mukund Lakshman  
Licensed under the MIT license.
