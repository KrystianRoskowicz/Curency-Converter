{
    const calculateResult = (amount, convert) => {
        const rateEUR = 4.70;
        const rateBGN = 2.40;
        const rateUSD = 4.33;

        switch (convert) {
            case "EUR":
                return amount / rateEUR;

            case "BGN":
                return amount / rateBGN;

            case "USD":
                return amount / rateUSD;
        }
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const convertElement = document.querySelector(".js-convert");
        const resultElement = document.querySelector(".js-result");

        const amount = +amountElement.value;
        const convert = convertElement.value;

        const result = calculateResult(amount, convert);
        resultElement.innerText = `${result.toFixed(2)} ${convert}`
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    }
    init()
}





