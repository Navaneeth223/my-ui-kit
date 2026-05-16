// A simple reusable button utility
export const createButton = (label, onClick) => {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  return btn;
};

export const colors = {
  primary: '#6200ee',
  secondary: '#03dac6',
};

