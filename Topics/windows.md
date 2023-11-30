# The Window Object

| Property              | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| Window.innerHeight    | Height of the BOM                                          |
| Window.innerWidth     | Width of the BOM                                           |
| Window.pageXOffset    | Distance scrolled horizontally                             |
| Window.pageYOffset    | Distance scrolled vertically                               |
| Window.screenX        | X-coordinate relative to the top-left corner               |
| Window.screenY        | Y-coordinate relative to the top-left corner of the screen |
| Window.location       | Current URL of the window object                           |
| window.document       | Reference to the DOM                                       |
| window.history        | Reference to the history object for the browser window     |
| window.history.length | Length of the browser's history                            |
| window.screen         | Reference to the screen object                             |
| window.screen.width   | Width of the screen                                        |
| window.screen.height  | Height of the screen                                       |

# Window Object Methods

| Method                                      | Description                                                        |
| ------------------------------------------- | ------------------------------------------------------------------ |
| `window.alert(message)`                     | Display an alert dialog box with the specified message.            |
| `window.confirm(message)`                   | Display a confirmation dialog box with OK and Cancel buttons.      |
| `window.prompt(message, defaultValue)`      | Prompt the user to enter some text with an optional default value. |
| `window.open(url, target)`                  | Open a new browser window with the specified URL and target.       |
| `window.close()`                            | Close the current browser window.                                  |
| `window.focus()`                            | Set focus to the current window.                                   |
| `window.blur()`                             | Remove focus from the current window.                              |
| `window.scrollTo(x, y)`                     | Scroll the content to the specified coordinates.                   |
| `window.resizeTo(width, height)`            | Resize the current window to the specified width and height.       |
| `window.location.reload()`                  | Reload the current page.                                           |
| `window.print()`                            | Open the print dialog to print the current page.                   |
| `window.open().document.write()`            | Write HTML content to a new window.                                |
| `window.location.href = "path/to/file.pdf"` | Trigger download of a file.                                        |
