
// let access_token = 'your-access-token'; // Ideally obtained through OAuth 2.0 and refreshed as needed
// Having issues of getting a permanent access token to display on my currently playing information rather
// than a user logging into the webpage for their spotify information

const clientId = 'b9562b5e82584ab795597da970805681';
const redirectUri = 'http://127.0.0.1:5500/jazz.html';
const scopes = 'user-read-recently-played';

function authorize() {
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location = url;
}

function getAccessTokenFromUrl() {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    return params.get('access_token');
}

let accessToken = 'BQBtJlmWhrnGS1cfScnhvBrs38ysSysYk7h4bF9YpVbWy2QZ1Xylh7gq-UdwKeGNbJCoVDuvUOsomMT3YEW1Ez7HGWq6_eqriouRqTq-LecjQV3gbJpbjvDNvyjHIxC5tuD69HAGIB1juMvM__sbPNN62XlQMk5hMeNy3h9AbxxizU0fUpWeVWZo6qRqAmqRgTC-RnU55Fxj_n29';
if (!accessToken) {
    authorize();
}

async function fetchLastPlayed() {
    if (!accessToken) return;

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (response.status === 401) {
        // Token expired or unauthorized, re-authorize
        authorize();
    } else if (response.ok) {
        try {
            const data = await response.json();
            displayTrack(data);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
}

function displayTrack(data) {
    const lastTrack = data.items && data.items[0] && data.items[0].track;
    if (!lastTrack) {
        console.log("No recently played track available.");
        document.getElementById("track-name").innerText = "No recently played track";
        document.getElementById("artist-name").innerText = "";
        document.getElementById("album-image").src = "";
        return;
    }

    const trackName = lastTrack.name;
    const artistName = lastTrack.artists.map(artist => artist.name).join(", ");
    const albumImage = lastTrack.album.images[0].url;

    document.getElementById("track-name").innerText = trackName;
    document.getElementById("artist-name").innerText = artistName;
    document.getElementById("album-image").src = albumImage;
}

window.addEventListener('load', fetchLastPlayed);
