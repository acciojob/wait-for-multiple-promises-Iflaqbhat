//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Add the initial Loading row
  const loadingRow = document.createElement("tr");
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  output.appendChild(loadingRow);

  // Function to create a promise that resolves in a random time between 1 and 3 seconds
  function createPromise(name) {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name, time: time.toFixed(3) }), time * 1000);
    });
  }

  // Create an array of 3 promises
  const promises = [
    createPromise("Promise 1"),
    createPromise("Promise 2"),
    createPromise("Promise 3"),
  ];

  const startTime = performance.now();

  Promise.all(promises).then((results) => {
    // Calculate total time
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

    // Remove the loading row
    output.innerHTML = "";

    // Populate the table with the results
    results.forEach((result, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    // Add the total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
});
