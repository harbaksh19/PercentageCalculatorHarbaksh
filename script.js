console.log('Js live');

var arr = [];
var r=document.getElementById('answer');
function calculate() {
    var totalsalemount = parseFloat(document.getElementById('Amount').value);
    

    if(totalsalemount<0)
        {
            alert('Product Amount Cannot Be Negative');
            return;
        }
    var per = parseFloat(document.getElementById('percent').value);

    // Validate percentage input
    if (per > 100 || per < 0) {
        alert('Percentage Value Should Be Between 0 and 100');
        document.getElementById('Amount').value = '';
        document.getElementById('percent').value = '';
        return;
    }

    var result = Number((totalsalemount * per) / 100);
    arr.push(result);
    r.innerHTML='Answer For These Input is' +result;


    // Clear inputs after each calculation
    document.getElementById('Amount').value = '';
    document.getElementById('percent').value = '';

    console.log('Result added: ' + result);
}

function finalize() {
    var total = 0;

    // Calculate the total of all elements in the array
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    // Display the total
    var ans = document.getElementById('final');
    ans.innerHTML = 'Total Profit is Rs'  + total;

    // Log all results
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function clearResults() {
    arr = []; // Clear the array
    var ans = document.getElementById('final');
    ans.innerHTML = ''; // Clear the displayed result
    r.innerHTML='';
    console.log('Results cleared');
}
