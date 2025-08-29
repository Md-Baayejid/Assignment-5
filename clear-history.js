

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
        service: 'Brac Helpline',
        number: '16445',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Brac Helpline 16445');
});



document.getElementById('call-btn-2').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'Police Helpline Number',
        number: '999',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Police Helpline Number 999');
});

  


document.getElementById('call-btn-3').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'Fire Service',
        number: '999',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Fire Service 999');
});


document.getElementById('call-btn-4').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'Ambulance Service',
        number: '1994-999999',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Ambulance Service 1994-999999 ');
});


document.getElementById('call-btn-5').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'Women & Child Helpline',
        number: '109',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Women & Child Helpline 109' );
});



document.getElementById('call-btn-6').addEventListener('click', function () {
    const coinNumberElement = document.getElementById('coin-number');
    const coinNumber = parseInt(coinNumberElement.innerText);

    if (coinNumber < 20) {
        alert('Not enough coins to make a call');
        return;
    }

    
    const newCoinNumber = coinNumber - 20;
    coinNumberElement.innerText = newCoinNumber;

   
    const data = {
        service: 'Anti-Corruption Helpline',
        number: '109',
        time: new Date().toLocaleTimeString(),
    };

    historyData.push(data);

   
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
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

    
    alert('Anti-Corruption Helpline 109' );
});







// Clear button
document.getElementById('clear-btn').addEventListener(
    'click', function () {
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';   // সব history মুছে ফেলা
        historyContainer.classList.add('hidden'); // container লুকানো
        historyData.length = 0; // array খালি করা
    }
);
