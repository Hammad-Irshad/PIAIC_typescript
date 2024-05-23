// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums using the function
let album1 = make_album("Taylor Swift", "1989");
let album2 = make_album("Ed Sheeran", "Divide", 12);  // Album with specified number of tracks
let album3 = make_album("Beyoncé", "Lemonade");

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
