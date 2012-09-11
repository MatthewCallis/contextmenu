# contextmenu

A context menu (right click menu) jQuery plug-in.

```javascript
// Context Menu
$(document).contextmenu({
	style: 'osx',
  menu: [
    { 'title': 'Copy Clip URL', 'id': 'copy-url', 'callback': function(){
      clip.setText('Copy Me Using ZeroClipboard');
    } },
    { 'title': 'Visit Hark', 'callback': 'http://www.hark.com/' }
  ]
});
```

This fork was created to fix some issues I had with the original:

 - Cleaned up JSHint Warnings
 - Corrected Sizing Bug using odd Box Model
 - Support For Inline Function Calls
 - SCSS Stylesheet
 - Minified JS/CSS
 - Setting Attributes on Menu Items
 - Menu Can Appear Near the Right and Bottom Edges
 - Mac OS X System Style Menu

Tested Under:
 - Internet Explorer 8.0.6001.18702
 - Internet Explorer 9.0.8112.16421
 - Google Chrome 23.0.1255.0 dev
 - Firefox 4.0
 - Firefox 12.0
 - Firefox 15.0
 - Safari 6.0 (8536.25)

Original by [goker.cebeci](http://gokercebeci.com/dev/contextmenu) under the MIT License.
