# contextmenu

A context menu (right click menu) jQuery plug-in.

```javascript
// Context Menu
$(document).contextmenu({
  menu: {
    'Console Log': function(){ console.log('!'); },
    'Homepage': 'http://superfamicom.org/',
    'Go Back': function(){ history.go(-1); },
    'Do Work': work()
  }
});
```

This fork was created to fix some issues I had with the original:

 - Cleaned up JSHint Warnings
 - Corrected Sizing Bug using odd Box Model
 - Support For Inline Function Calls
 - SCSS Stylesheet
 - Minified JS/CSS

Tested Under:
 - Internet Explorer 8.0.6001.18702
 - Internet Explorer 9.0.8112.16421
 - Google Chrome 23.0.1255.0 dev
 - Firefox 4.0
 - Firefox 15.0
 - Safari 6.0 (8536.25)

Original by [goker.cebeci](http://gokercebeci.com/dev/contextmenu) under the MIT License.
