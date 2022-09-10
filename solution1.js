/*
Solution1:
1. Loop through each list and record the list index where the artist appears. Create a map: key is the artist name, value is a set with the indices of the lists.
2. The size of the set represents how many times the artist appeared,we only want to save the ones with a size over 50.(this step help to decrease the size of map and run time).
3. We need to compare every two sets in the map. The intersect of twe sets is the overlapping lists of two artists appeared together. So if the size of the intersect is at least 50, we found our result.

Time complexity: O(N^2*m)  N = total numbers of artists; m = numbers of lists;
There are total N artists in the map. Finding pairs takes run time N^2 and comparing two sets takes run time m.

Space complexity: O(N)  N = total numbers of artists;
The worst case,creating the hash map uses space 
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

//creat a map: key is each artist, value is a set of list indices if the artist showed up in the list
function countPairs(input, numOccurrences) {
  let map = {};
  let index = 1;
  //loop through the artists and record which list he/she appeared
  for (let list of input) {
    let artists = list.split(",");
    artists = new Set(artists);
    for (let artist of artists) {
      if (!(artist in map)) {
        map[artist] = new Set();
      }
      map[artist].add(index);
    }
    index += 1;
  }
  //if an artist appeared less than 50 times, we can ignore he/her
  let newMap = {};
  Object.keys(map).forEach((artist) => {
    if (map[artist].size >= numOccurrences) {
      newMap[artist] = map[artist];
    }
  });
  return newMap;
}

//compare two sets from two artists from the map: get the intersect of two sets, if the size of the intersect is at least 50,we found a pair
function findArtistPairs(newMap, numOccurrences) {
  let res = [];
  let artists = Object.keys(newMap);
  //loop through all artists in newMap
  for (let artist1 of artists) {
    for (let artist2 of artists) {
      //if same artists,ignore
      if (artist1 === artist2) continue;
      //get the set for each artist
      let set1 = newMap[artist1];
      let set2 = newMap[artist2];
      //calculate the intersect
      let intersect = new Set([...set1].filter((i) => set2.has(i)));
      //if two artists appeared togeting in the same list for at least 50 time, put it to the result
      if (intersect.size >= numOccurrences) {
        if (res.includes([artist1, artist2])) continue;
        res.push([artist1, artist2]);
      }
    }
  }
  return res;
}

const fileName = "artists.txt";
const outFile = "artistPairs-solution1.csv";
const numOccurrences = 50;

const input = syncReadFile(fileName);
const map = countPairs(input, numOccurrences);
const res = findArtistPairs(map, numOccurrences);
toCSV(res, outFile);

module.exports = { countPairs, findArtistPairs };
