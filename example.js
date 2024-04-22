const a = 1;
const b = 2;
const c = 3;

function master () {
    return a + b + c;
}

function branchCommon () {
    if (a === 1) {
        return a * b * c;
    }

    return 0;
}
