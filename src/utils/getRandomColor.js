const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let res = '#';
  for (let i = 0; i < 6; i++) {
    res += letters[Math.floor(Math.random() * 16)];
  }
  return res;
};

export default getRandomColor;
