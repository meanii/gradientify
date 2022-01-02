import colors from "tailwindcss/colors";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const isNotAllowed = (color) => {
  if (!color.match(/^[a-z]+$/)) return true;
  const unallowed = [
    "black",
    "white",
    "rose",
    "lime",
    "inherit",
    "violet",
    "emerald",
    "fuchsia",
    "orange",
    "cyan",
    "amber",
    "teal",
  ];
  if (unallowed.includes(color)) return true;

  return false;
};

export const getRandomColor = (prevColor = "") => {
  const allColors = Object.keys(colors);
  const color = getRandomItem(allColors);
  return isNotAllowed(color) || prevColor === color
    ? getRandomColor(prevColor)
    : color;
};

export const getGradient = (
  firstColor,
  secondColor,
  intensity = 500,
  direction = "r"
) => {
  return `bg-gradient-to-${direction} from-${firstColor}-${intensity} to-${secondColor}-${intensity}`;
};

export const getRandomGradient = () => {
  const firstColor = getRandomColor();
  const secondColor = getRandomColor(firstColor);
  const gradient = getGradient(firstColor, secondColor);
  return gradient;
};

export const getGradientArray = (length) => {
  var gradients = [];
  for (let i = 0; i < length; i++) {
    const gradient = getRandomGradient();
    gradients.push(gradient);
  }
  return gradients;
};
