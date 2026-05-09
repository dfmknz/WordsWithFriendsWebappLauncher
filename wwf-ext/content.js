const waitFor = (selector, cb) => {
  const el = document.querySelector(selector);
  if (el) return cb(el);
  setTimeout(() => waitFor(selector, cb), 100);
};

console.log('wwf-ext loaded');
waitFor('button.play-now-btn', btn => {
  console.log('found button, clicking');
  btn.click();
});
