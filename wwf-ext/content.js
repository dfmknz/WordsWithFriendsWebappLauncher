const waitFor = (cb) => {
  if (!cb()) setTimeout(() => waitFor(cb), 100);
};

waitFor(() => {
  for (const el of document.querySelectorAll('div')) {
    if (el.textContent.trim() === 'Play Now') {
      (el.closest('button, a') || el).click();
      return true;
    }
  }
});
