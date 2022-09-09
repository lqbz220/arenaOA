const { countPairs, findArtistPairs } = require("./bruteForce");

const arr = ["Björk,The Cure", "Björk,The Cure,Placebo", "アリス九號."];

//test the map created from the countPairs function
test("testing countPairs function from brute force solution", () => {
  const output = {
    "Björk,The Cure": 2,
    "The Cure,Björk": 2,
    "Björk,Placebo": 1,
    "Placebo,Björk": 1,
    "The Cure,Placebo": 1,
    "Placebo,The Cure": 1,
  };
  const map = countPairs(arr);
  const keys = Object.keys(output).sort();
  const mapKeys = Object.keys(map).sort();
  for (let key of keys) {
    let value1 = map[key];
    let value2 = output[key];
    expect(value1).toBe(value2);
  }
  expect(keys.join(",")).toBe(mapKeys.join(","));
  console.log("map is created correctly from brute froce solution");
});
//test the result from the findAristisPairs function
test("testing findArtistPairs function from brute force solution", () => {
  const output = ["Björk,The Cure", "The Cure,Björk"];
  const map = countPairs(arr);
  const result = findArtistPairs(map, 2);
  let value1 = output.sort().join(",");
  let value2 = result.sort().join(",");
  expect(value1).toBe(value2);
  console.log("results are created correctly from brute froce solution");
});
