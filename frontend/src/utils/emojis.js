export const funEmojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🦋",
  "🐌",
  "🐛",
  "🐜",
  "🐢",
  "🦎",
  "🐍",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
];

// console.log(emojis);
export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random()*funEmojis.length)];
};
