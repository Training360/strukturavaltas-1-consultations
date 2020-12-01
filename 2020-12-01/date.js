/*
Írj egy függvényt, ami paraméterként egy Date objektumot kap,
a visszatérési értéke pedig egy objektum két tulajdonsággal,
ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul,
    kisbetűkkel a nap száma, majd az idő a másodperc nélkül)

long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul,
    a nap száma, majd az idő)
*/

function customDateFormats(date) {
    const shortOption = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    return {
        short: date.toLocaleDateString('hu-HU', shortOption),
        long: date.toLocaleDateString('hu-HU', longOptions)
    }
}

console.log(customDateFormats(new Date()));

function countOfWorkingDays(from, to) {
    let counter = 0;
    for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
        if (day.getDay() > 0 && day.getDay() < 6) {
            counter += 1;
        }
    }
    return counter;
}

const from = new Date(2020, 10, 1);
const to = new Date(2020, 11, 1);
console.log(countOfWorkingDays(from, to));
