/*
brute force solution:
1. Loop throught each list of artists and find all pairs. Create a map using the artists pairs as keys and the count of each pair as corresponding values.
2. After going through the whole file and creating the map, find the artists pair with the count of at least 50. These artists pairs are our result 

Time complexity: O(n^2*m)  n = numbers of artists in each list; m = numbers of lists;
For each list, finding all pairs takes run time n^2. There are m lists, thus, n^2*m.

Space complexity: O(n(n-1)/2*m) n = numbers of artists in each list;  m = numbers of lists
There are n(n-1)/2 unique pairs from each list and m lists to create the map.
*/

const fs = require("fs");

//read the artists.txt file as input
function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);
  return arr;
}

//create the csv file as output file
function toCSV(res, outFile) {
  let csv = "";
  for (let pair of res) {
    csv += pair + "\r\n";
  }
  fs.writeFileSync(outFile, csv);
  console.log("The CVS file was writtern successfully!");
}

//create a map to store artist pairs and their counts
function countPairs(input) {
  let map = {};
  //loop through all lists and find all artist pairs; use artist pairs as keys and their count as values in the map
  for (let list of input) {
    let artists = list.split(",");
    //make sure that the artists are unique
    artists = new Set(artists);
    for (let artist1 of artists) {
      for (let artist2 of artists) {
        if (artist1 === artist2) continue;
        if (!([artist1, artist2] in map)) {
          map[[artist1, artist2]] = 0;
        }
        map[[artist1, artist2]] += 1;
      }
    }
  }
  return map;
}

//if an artist pair appeared at least 50 times, add the pair to the result
function findArtistPairs(map, numOccurrences) {
  let res = [];
  //get all the pairs from the map
  let artistPairs = Object.keys(map);
  //check the count of each pair
  for (let pair of artistPairs) {
    if (map[pair] >= numOccurrences) {
      res.push(pair);
    }
  }
  return res;
}

const fileName = "artists.txt";
const outFile = "artistPairs-solution2.csv";
const numOccurrences = 50;

const input = syncReadFile(fileName);
const map = countPairs(input);
const res = findArtistPairs(map, numOccurrences);
toCSV(res, outFile);

module.exports = { countPairs, findArtistPairs };
