# nowpl4mac

  "nowplaying" を iTunes mac から Mastodon に投稿するスクリプト

**English version is [here](README.md)**

## Usage

1. mac でスクリプトエディタを開く。
2. [nowplaying_for_mac.js](nowplaying_for_mac.js) の内容をスクリプトエディタに貼り付ける。
3. 投稿に使いたい Mastodon WebUI の設定ページを開く。
4. 「開発」-「アプリ」を開き、「新規アプリ」をクリックする。
5. 適当な名前をつけ、アクセス権は最低でも "write: statuses" だけにチェックをつける。
6. 「送信」ボタンを押し、今作成したアプリ名をクリックし「アクセストークン」欄の文字列をコピーする。
7. スクリプトエディタに戻り、"mastodon_access_token" 欄に貼り付ける。
8. "mastodon_server" 欄には投稿したい Mastodon サーバーのアドレスを入力する。
9. 「保存」か「書き出す」を選び、"アプリケーション" フォーマットで保存する。
10. 書き出したアプリを実行する。

## Author

[Maya Minatsuki](https://github.com/mayaeh)  
Mastodon account: [mayaeh](https://taruntarun.net/@mayaeh)

間違いなどありましたら教えていただけると幸いです。

## Thanks

<https://github.com/JXA-Cookbook/JXA-Cookbook/wiki>  
<https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/iTunes>  
<https://blog.8tak4.com/post/163793077435/tweet-nowplaying-using-javascript>  
<http://kanzmemo.cocolog-nifty.com/blog/2018/02/javascript-fo-3.html>
