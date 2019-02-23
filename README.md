# nowpl4mac

  "nowplaying" post to Mastodon via iTunes for mac

**Japanese version is [here](README_ja.md)**

## Usage

1. Open the Script Editor.
2. Copy [nowplaying_for_mac.js](nowplaying_for_mac.js) 's text to Script Editor.
3. Open the Mastodon WebUI settings used for posting.
4. Open "Your applications" of "Development" and press "NEW APPLICATION".
5. Add appropriate application name and "Scopes" checks at least "write: statuses" only.
6. Press "SUBMIT" and press the name of the application you just created and copy the strings in the column "Your access token".
7. Return to the Script Editor and paste the access token into the "mastodon_access_token" field.
8. In the "mastodon_server" field, enter the server address you want to post.
9. Save or export as file format "application".
10. Execute the exported application.

## Author

[Maya Minatsuki](https://github.com/mayaeh)  
Mastodon account: [mayaeh](https://taruntarun.net/@mayaeh)

I'm glad that you can tell me if there are any mistakes.

## Thanks

<https://github.com/JXA-Cookbook/JXA-Cookbook/wiki>  
<https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/iTunes>  
<https://blog.8tak4.com/post/163793077435/tweet-nowplaying-using-javascript>  
<http://kanzmemo.cocolog-nifty.com/blog/2018/02/javascript-fo-3.html>
