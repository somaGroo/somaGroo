export default function debounce(callback, delay) {
  let timer;
  return function (arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(arg), delay);
  };
}
