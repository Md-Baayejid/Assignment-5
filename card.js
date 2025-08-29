


const historyData = [];

document.getElementById('call-btn-1').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'National Emergency Number',
        number: '999',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';

    for (const history of historyData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa] p-[10px] mt-[10px] rounded-[8px]">
                <div>
                    <p class="text-[#111111] font-bold">${history.service}</p>
                    <p class="text-[#5c5c5c]">${history.number}</p>
                </div>
                <div>
                    <p class="text-[#111111]">${history.time}</p>
                </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }

    
    alert('National Emergency service 999');
});
