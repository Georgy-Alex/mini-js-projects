const currencies = {
    USD: 0.013971,
    EUR: 0.013015,
    CNY: 0.094885
};

export function calcul(rub, money) {
    if (!currencies[money]) {
        return null
    };
    return rub * currencies[money];

};