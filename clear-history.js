


// document.getElementById('clear-btn').addEventListener(
//     'click', function(){
//         const historyContainer1 = document.getElementById('history-container');
//         historyContainer1.innerHTML = '';
//     }
// )

document.getElementById('clear-btn').addEventListener(
    'click', function () {
        const historyContainer1 = document.getElementById('history-container');
        historyContainer1.classList.add('hidden');
    }
)