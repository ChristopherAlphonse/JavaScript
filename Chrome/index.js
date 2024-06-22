new PerformanceObserver((list) => console.log(list.getEntries())).observe({
  type: "paint",
  buffered: true,
});

new PerformanceObserver((list) => console.log(list.getEntries())).observe({
  type: "largest-contentful-paint",
  buffered: true,
});
