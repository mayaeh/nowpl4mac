// for debug (Safari Web inspector)
//debugger

app = Application.currentApplication();
app.includeStandardAdditions = true;

const itunes = Application('Music');
const track = itunes.currentTrack;

const mastodon_server = 'taruntarun.net';
const mastodon_access_token - 'Your access token paste here';

let text = '#nowplaying '
  + track.name()
  + ' - ' + track.artist();


let param = "curl -F 'status="
  + text.replace(/\'/g, "'\\''").replace(/\"/g, '\"').replace(/\//g, '\\/')
  + "' -sS https://"
  + mastodon_server
  + "/api/v1/statuses"
  + "  --header 'Authorization: Bearer "
  + mastodon_access_token
  + "'";

try {

  app.doShellScript(param);

} catch (e) {

  console.log(e);
}

