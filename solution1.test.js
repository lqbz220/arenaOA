const { countPairs, findArtistPairs } = require("./solution1");

const arr = ["Björk,The Cure", "Björk,The Cure,Placebo", "アリス九號."];
//test the map created from the countPairs function
test("testing countPairs function from solution1", () => {
  let set1 = new Set([1, 2]);
  let set2 = new Set([1, 2]);
  const output = { Björk: set1, "The Cure": set2 };
  const map = countPairs(arr, 2);
  const keys = Object.keys(output).sort();
  const mapKeys = Object.keys(map).sort();
  for (let key of keys) {
    let value1 = map[key];
    let value2 = output[key];
    let outcome = false;
    if (
      value1.size === value2.size &&
      [...value1].every((e) => value2.has(e))
    ) {
      outcome = true;
    }
    expect(outcome).toBe(true);
  }
  expect(keys.join(",")).toBe(mapKeys.join(","));
});

//test the result from the findAristisPairs function
test("testing findArtistPairs function from solution1", () => {
  const output = ["Björk,The Cure"];
  const map = countPairs(arr, 2);
  const result = findArtistPairs(map, 2);
  let value1 = output.sort().join(",");
  let value2 = result.sort().join(",");
  expect(value1).toBe(value2);
});
