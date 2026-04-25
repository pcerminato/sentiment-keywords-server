import { Lists } from "../types";

/* Makes a map which has the original word as the key and as the value has the list of enhanced words. */
export function makePartitionList(original: Lists, enhanced: Lists) {
  return {
    accepted: toJson(original.accepted, enhanced.accepted),
    denied: toJson(original.denied, enhanced.denied),
  };
}

function toJson(originalList: string[], enhancedList: string[]) {
  return Object.fromEntries(makeMap(originalList, enhancedList).entries());
}

function makeMap(originalList: string[], enhancedList: string[]) {
  const map = new Map<string, string[]>(originalList.map((v) => [v, []]));
  let i = 0;
  let key = originalList[i] as string;

  for (let j = 0; j < enhancedList.length; j++) {
    const enhancedWord = enhancedList[j] as string;
    if (map.has(enhancedWord)) {
      key = enhancedWord;
      continue;
    }
    map.set(key, [...(map.get(key) || []), enhancedWord]);
  }
  return map;
}
