/*
Adott két azonos elemszámú, csak egész számokat tartalmazó tömb.
Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét,
és descartes szorzatát.
Írassuk ki az új tömböket!
*/

function union(arr1, arr2) {
    // return arr1.concat(arr2);
    const union = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (union.indexOf(arr1[i]) === -1) {
            union.push(arr1[i]);
        }
        if (union.indexOf(arr2[i]) === -1) {
            union.push(arr2[i]);
        }
    }
    return union;
}

function section(arr1, arr2) {
    const section = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1.indexOf(arr2[i]) !== -1) {
            section.push(arr2[i]);
        }
    }
    return section
}

function difference(arr1, arr2) {
    const defference = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            defference.push(arr1[i]);
        }
    }
    return defference;
}

function descartes(arr1, arr2) {
    const descartes = [];
    // 2 darab 5 elemű tömb
    // i = 0
    // i = 1
    for (let i = 0; i < arr1.length; i += 1) {
        // j = 0, 1, 2, 3, 4 
        // j = 0, 1, 2, 3, 4 
        for (let j = 0; j < arr2.length; j += 1) {
            descartes.push(arr1[i] * arr2[j]);
        }
    }
    return descartes;
}

