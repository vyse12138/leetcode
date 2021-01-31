/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */

//TLE
var restoreArray = function (adjacentPairs) {
  const result = [];
  result.push(...adjacentPairs.pop());
  let length = adjacentPairs + 1;
  while (adjacentPairs.length !== 0) {
    for (let i = 0; i < adjacentPairs.length; i++) {

      if (adjacentPairs[i][0] === result[0]) {
        result.unshift(adjacentPairs[i][1]);
        adjacentPairs.splice(i, 1);
        continue;
      }
      else if (adjacentPairs[i][1] === result[0]) {
        result.unshift(adjacentPairs[i][0]);
        adjacentPairs.splice(i, 1);
        continue;
      }

      if (adjacentPairs[i][0] === result[result.length - 1]) {
        result.push(adjacentPairs[i][1]);
        adjacentPairs.splice(i, 1);
        continue;
      }
      else if (adjacentPairs[i][1] === result[result.length - 1]) {
        result.push(adjacentPairs[i][0]);
        adjacentPairs.splice(i, 1);
        continue;
      }
    }
  }
  return result;
};

//
var restoreArray = function (adjacentPairs) {
  const map = new Map(), result = [], set = new Set();
  for  (let temp of adjacentPairs) {
    
    if (map.has(temp[0])) {
      map.set(temp[0], [map.get(temp[0])[0], temp[1]]);
    }
    else {
      map.set(temp[0], [temp[1]]);
    }

    if (map.has(temp[1])) {
      map.set(temp[1], [map.get(temp[1])[0], temp[0]]);
    }
    else {
      map.set(temp[1], [temp[0]]);
    }
  }

  for (let [key,value] of map) {
    if (value===1) {
      result.push(key);
      set.add(key);
      break;
    }
  }
  let length = adjacentPairs.length
  while(length--) {
    let f = map.get(a1);
    if(f.length === 1) {
        set.add(f[0]);
        res.push(f[0]);
        a1 = f[0];
        continue;
    }
    let next = set.has(f[0])?f[1]:f[0];
    res.push(next);
    set.add(next);
    a1 = next;
}

  return result;

};
