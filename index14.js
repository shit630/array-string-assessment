let score = [40, 60, 70, 30, 95, 65, 20, 80, 98, 45];

for(let i=0; i<score.length; i++){
    if(score[i] < 40 ){
        score[i] += 20;
    }
    if (score[i] > 90) {
        score[i] = 90;
    }
}

let count = 0;
for(let i=0; i<score.length; i++){
    if (score[i] > 50) {
        count++
    }
}
console.log(`${count} students are passed`);

console.log(score);
