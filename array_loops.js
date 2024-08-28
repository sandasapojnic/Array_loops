
function calcTip(nota) {
    return (nota >= 50 && nota <= 300) ? nota * 0.15 : nota * 0.20;
}

const facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < facturi.length; i++) {
    const tip = calcTip(facturi[i]);
    tips.push(tip);
    totals.push(facturi[i] + tip);
}

console.log('Facturi:', facturi);  
console.log('Tips:', tips);        
console.log('Totals:', totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);