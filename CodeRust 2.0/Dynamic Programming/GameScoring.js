/*

Game Scoring: Find number of ways a player can score 'n' runs
Imagine a game (like baseball) where a player can score 1, 2 or 4 runs. Given a score "n", find the total number of ways score "n" can be reached.

*/
function gameScoresMemo (runs, memo = []) {
  // Check if its the memo
  if (memo[runs]) return memo[runs];
  // Base Cases
  if (runs === 0) return 1;
  if (runs < 0) return 0;

  let ways = 0;
  // 1 runs
  ways += gameScoresMemo(runs - 1, memo);
  // 2 runs
  ways += gameScoresMemo(runs - 2, memo);
  // 4 runs
  ways += gameScoresMemo(runs - 4, memo);

  memo[runs] = ways;
  return ways;
}

function gameScores(runs) {
  if (runs <= 0) return 0;
  return gameScoresMemo(runs);
}

gameScores(5);
