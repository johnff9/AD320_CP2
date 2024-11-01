const client_id = 'b9562b5e82584ab795597da970805681';
const client_secret = 'df6276ebac6b417ea947edf834747dc6';
let access_token = 'your-access-token'; // Ideally obtained through OAuth 2.0 and refreshed as needed
//Having issues of getting a permanent access token to display on my currently playing information rather
//than a user logging into the webpage for their spotify information
async function fetchCurrentTrack() {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    displayTrack(data);
  } else {
    console.error("Could not fetch track", response.status);
  }
}

function displayTrack(trackData) {
  const trackName = trackData.item.name;
  const artistName = trackData.item.artists.map(artist => artist.name).join(", ");
  const albumImage = trackData.item.album.images[0].url;

  document.getElementById("track-name").innerText = trackName;
  document.getElementById("artist-name").innerText = artistName;
  document.getElementById("album-image").src = albumImage;
}

window.addEventListener('load', fetchCurrentTrack);
