**Music Library as OOP
This exercise will be similar to the Music Library - Part 2 exercise from Week 1. With your new found OOP skills, you should create a new version as a new project / repository.

In this version, you will be making use of Constructor function, Prototype and new so as to practice using them.

Work incrementally but by the end of it you should have defined multiple prototype functions:

Library
Playlist
Track
This one will be slightly different from the Week 1 in that it will have the following functionality:

A Library has a name and a creator (both strings)
These are the only things required in order to create a music library
A Library has many playlists (starts as an empty array)
Playlist objects can be added to an instance of a library
Each Playlist has a name which is required upon creation
A Playlist also has many tracks
A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.

Tip: Use this as your sandbox and feel free to add new features and requirements for practice.