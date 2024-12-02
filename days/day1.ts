import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day1() {
  const timer = new Timer();
  timer.start();
  const result = await part1();
  const time = timer.stop();
  printPart1(result, time);
  timer.start();
  const result2 = await part2();
  const time2 = timer.stop();
  printPart2(result2, time2);
}

async function part1() {
  const input = [...(await getInput(1))];
  const leftList: number[] = [];
  const rightList: number[] = [];
  input
    .map((row) => row.split("   ").map((str) => parseInt(str)))
    .forEach(([leftItem, rightItem]) => {
      leftList.push(leftItem);
      rightList.push(rightItem);
    });
  leftList.sort();
  rightList.sort();
  let sum = 0;
  for (let i = 0; i < leftList.length; i++) {
    sum += Math.abs(leftList[i] - rightList[i]);
  }
  return sum;
}

async function part2() {
  const input = [...(await getInput(1))];
  const leftList: number[] = [];
  const rightList: number[] = [];
  input
    .map((row) => row.split("   ").map((str) => parseInt(str)))
    .forEach(([leftItem, rightItem]) => {
      leftList.push(leftItem);
      rightList.push(rightItem);
    });
  leftList.sort();
  rightList.sort();
  let sum = 0;
  leftList.forEach((leftItem) => {
    sum += leftItem * getMatches(leftItem, rightList);
  });

  return sum;
}

function getMatches(num: number, list: number[]) {
  let matches = 0;
  list.forEach((item) => {
    if (item === num) matches++;
  });
  return matches;
}
