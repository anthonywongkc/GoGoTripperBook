# GoGoTripperBook
## How to start app?
1. Set the API key and secret.
	* UNIX: Type "run activate.sh" in terminal
	* Window: Type "activate.bat" in cmd.exe
2. (For first time only: `npm install` to install all node packages)
3. Go to the terminal and type: `npm start` to start the app
4. go to: http://localhost:3000 in browser or using `curl`


## Useful Tools
* atom
  1. minimap
  2. ternjs (code intellegence/autocomplete)
  3. atom-jade (jade syntax highlighting)
  4. indent-guide-improved
  5. markdown preview (pre-installed) (ctrl-shift-M)

## Structure
* app.js: routing URL to functions
  1. step1: define route source file
  2. step2: HTTP method(GET/POST), path, the handler

  ```javascript
var routes = require('./routes/index');
app.get('/', routes.index);
```
- ./routes/\*.js: all handlers
```javascript
module.exports.index = function (req, res) {
    res.render('jadefile', {object: 'object'});
}
```
- ./views/\*.jade: template
