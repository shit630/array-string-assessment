let task = ["sleeping", "playing", "eating", "learning", "reading"];

task.shift();
task.unshift("marketing", "singing");
task[task.length-1] = "talking";

console.log(task);