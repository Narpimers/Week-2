function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < sampleSize; i++ ) {
      const num = Math.floor(Math.random() * 6) + 1;
      if (num === 1) {
        valueCounts[0]++;
      } else if (num === 2) {
        valueCounts[1]++;
      } else if (num === 3) {
        valueCounts[2]++;
      } else if (num === 4) {
        valueCounts[3]++;
      } else if (num === 5) {
        valueCounts[4]++;
      } else {
        valueCounts[5]++;
      }
    }
    // valueCounts[0]/sampleSize*100
    const results = [];

    for (let value of valueCounts) {
        const percent = value/sampleSize*100;
        results.push(percent.toFixed(2));
    }
  
    return results;
  }
  
  function main() {
    const sampleSizes = [100, 1000, 1000000];
    for (let x of sampleSizes) {
        console.log(runExperiment(x))
    }
  }
  
  main();

      // The expected output could look like this:
    //
    // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
    // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
    // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000