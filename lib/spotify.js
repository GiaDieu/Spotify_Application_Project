import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-email',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
].join(',');

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

/** LOGIN_URL
'scope=user-read-email%2Cplaylist-read-private%2Cplaylist-read-collaborative%2Cuser-read-email%2Cstreaming%2Cuser-read-private%2Cuser-library-read%2Cuser-top-read%2Cuser-read-playback-state%2Cuser-modify-playback-state%2Cuser-read-currently-playing%2Cuser-read-recently-played%2Cuser-follow-read'
*/
const LOGIN_URL = `https://account.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
