/**
 * Activity Selection problem implementation in JavaScript.
 *
 * The Activity Selection problem is a problem of selecting the maximum number of activities that don't overlap,
 * given start and end times of activities.
 *
 * This function finds the maximum number of non-overlapping activities that can be selected.
 *
 * @param {number[]} startTimes - An array of start times for the activities.
 * @param {number[]} endTimes - An array of end times for the activities.
 * @returns {number} - The maximum number of non-overlapping activities that can be selected.
 */
function activitySelection(startTimes, endTimes) {
  const activities = startTimes.map((start, index) => ({
    start: start,
    end: endTimes[index],
  }));

  // Sort activities by their end times
  activities.sort((a, b) => a.end - b.end);

  let count = 0;
  let lastEndTime = -1;

  for (const activity of activities) {
    if (activity.start >= lastEndTime) {
      count++;
      lastEndTime = activity.end;
    }
  }

  return count;
}

// Example usage:
const startTimes = [1, 3, 0, 5, 8, 5];
const endTimes = [2, 4, 6, 7, 9, 9];
const maxActivities = activitySelection(startTimes, endTimes);
console.log(maxActivities);  // Output: 4