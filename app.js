
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

let accessToken = 'BQCCimi8Plde_LrJPzXiGmzT8_eoW2OScHhCFc38nBm8_Te1nOyevW23Zs5Myd45MwUN3dLpFY0C6tSZ8On24s9gY7AnqLtTUUTCCbkcN7W2UMYy1iJpQcyZbzwN0yg6mjKwMuoGFVYZOaSNl1lAc_YRCate-1_5KBWDVCBuyyGDRIfvK6tSa7EotJAvsIvt_EgXLd9BppGD9_zD';
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
