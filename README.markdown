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

Original by [goker.cebeci](http://gokercebeci.com/dev/contextmenu) under the MIT License.
