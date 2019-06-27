// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(TIME) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    if (TIME > 4999) reject(Error('This time is too much !'));
    setInterval(() => {
      const endTime = Date.now();
      const delayTime = endTime - startTime;
      if (delayTime < delayTime + 100 || delayTime > delayTime - 100) {
        resolve(delayTime);
      }
    }, TIME);
  });
}

export function asyncDelay(TIME) {
  return delay(TIME);
}
