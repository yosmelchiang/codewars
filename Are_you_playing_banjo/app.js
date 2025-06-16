// source: codewars

function areYouPlayingBanjo(name) {
  return name.toLowerCase().startsWith('r') ? `${name} play banjo` : `${name} does not play banjo`;
};

console.log(areYouPlayingBanjo('Rolf'));
console.log(areYouPlayingBanjo('Martin'));

