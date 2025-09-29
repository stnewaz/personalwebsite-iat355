// Spotify Embed
const spotifyPlayer = document.getElementById('spotifyPlayer');

// Replace with your own Spotify track URL
const trackId = '6rdkCkjk6D12xRpdMXy0I2'; 

const iframe = document.createElement('iframe');
iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
iframe.width = "300";
iframe.height = "80";
iframe.frameBorder = "0";
iframe.allowTransparency = "true";
iframe.allow = "encrypted-media";

spotifyPlayer.appendChild(iframe);
