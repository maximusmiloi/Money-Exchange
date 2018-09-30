// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  const COINS = {H: 50, Q: 25, D: 10, N: 5, P: 1};
  const NAMES = Object.keys(COINS);
  const result = {};
  if ( currency > 10000) {
    const ERROR = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    return ERROR;
  }
    else {
    while(currency !== 0)  { 
      const name = NAMES.find(coinName => COINS[coinName]<=currency);
      result[name] = (result[name] || 0)  + 1;
      currency -= COINS[name];
    }
    return result;
    };
}