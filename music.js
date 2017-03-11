const library = function () {
  this.name = '';
  this.creator = '';
  this.prelist = [];
};

const tracks = function (trackTitle, trackRating, trackLength) {
  this.title = trackTitle;
  this.rating = trackRating;
  this.length = trackLength;
};

const playlists = function (playlistName) {
  this.name = playlistName;
  this.tracks = [];
  this.OverallRating = function () {
    let sum = 0;
    for (item in this.tracks) {
      sum += item.rating;
    }
    return sum;
  };
  this.totalDuration = function () {
    let sum = 0;
    for (item in this.tracks) {
      sum += item.length;
    }
    return sum;
  };
};

const Library = new library();
Library.name = 'Code Monkey';
Library.creator = 'Jonathan Coulton';

const play1 = new playlists('Thing a Week Three');
Library.plist.push(play1);

const track1 = tracks('abcd', 6, 4);

play1.tracks.push(track1);