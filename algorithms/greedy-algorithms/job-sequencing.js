/**
 * Job Sequencing problem implementation in JavaScript.
 *
 * The Job Sequencing problem is a problem of scheduling jobs to maximize the total profit
 * given deadlines and profits associated with each job.
 *
 * This function finds the maximum profit that can be achieved by scheduling the jobs within their deadlines.
 *
 * @param {Array} jobs - An array of objects representing the jobs, each with a deadline and profit.
 * @returns {number} - The maximum profit that can be achieved.
 */
function jobSequencing(jobs) {
  // Sort jobs in descending order of profit
  jobs.sort((a, b) => b.profit - a.profit);

  // Find the maximum deadline
  const maxDeadline = Math.max(...jobs.map(job => job.deadline));

  // Create an array to store the result (sequence of jobs) and initialize it with -1
  const result = Array(maxDeadline).fill(-1);

  let maxProfit = 0;

  // Iterate through all given jobs
  for (let i = 0; i < jobs.length; i++) {
    // Find a free slot for this job (starting from the last possible slot)
    for (let j = Math.min(maxDeadline, jobs[i].deadline) - 1; j >= 0; j--) {
      // Free slot found
      if (result[j] === -1) {
        result[j] = i;
        maxProfit += jobs[i].profit;
        break;
      }
    }
  }

  return maxProfit;
}

// Example usage:
const jobs = [
  { id: 1, deadline: 4, profit: 20 },
  { id: 2, deadline: 1, profit: 10 },
  { id: 3, deadline: 1, profit: 40 },
  { id: 4, deadline: 1, profit: 30 },
];

const maxProfit = jobSequencing(jobs);
console.log("Maximum profit:", maxProfit);  // Output: Maximum profit: 60