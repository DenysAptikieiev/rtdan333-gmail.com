let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function getData() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.onreadystatechange = function() {
                if (request.readyState === 4 && request.status == 200) {
                    let res = request.response;
                    resolve(res);
                    reject(res);
                }
            };
        });
    }
    getData()
        .then((data) => JSON.parse(data))
        .then((data) => inputUsd.value = inputRub.value / data.usd)
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
        });
});