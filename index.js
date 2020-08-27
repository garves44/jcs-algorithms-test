const Benchmark = require("benchmark");
const { mostDuplicates } = require("./dupes");

const numbers = [];
for (let i = 0; i < 20000; i++) {
  numbers.push(Math.floor(Math.random() * 20000) + 1);
}

const suite = new Benchmark.Suite();

suite
  .add("duplicates test", function () {
    mostDuplicates(numbers);
  })
  .on("complete", function () {
    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();
