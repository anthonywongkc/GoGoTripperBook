# GoGoTripperBook
## How to start app?
- For first time only: `npm install` to install all node packages
- then, go terminal and type: `npm start` to start app
- go to: http://localhost:3000 in browser or using `curl`


## Useful Tools
- atom
  - minimap
  - ternjs (code intellegence/autocomplete)
  - atom-jade (jade syntax highlighting)
  - indent-guide-improved
  - markdown preview (pre-installed) (ctrl-shift-M)

## Structure
- app.js: routing URL to functions
  - step1: define route source file
  - step2: HTTP method(GET/POST), path, the handler

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
