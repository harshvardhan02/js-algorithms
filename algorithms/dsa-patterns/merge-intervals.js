/**
 * Merge Intervals implementation in JavaScript.
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * @param {number[][]} intervals - The array of intervals.
 * @returns {number[][]} - The array of merged intervals.
 */
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Sort the intervals by their start times
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currentStart, currentEnd] = intervals[0];

  for (const [start, end] of intervals) {
    if (start <= currentEnd) {
      // Overlapping intervals, move the end if needed
      currentEnd = Math.max(currentEnd, end);
    } else {
      // Non-overlapping interval, push the current interval and update
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [start, end];
    }
  }

  // Push the last interval
  merged.push([currentStart, currentEnd]);

  return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log("Merged Intervals:", mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]