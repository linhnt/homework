const a = 1;
const b = 2;
const c = 3;

function master () {
    return a + b + c;
}

function branchCommon () {
    if (c === 3) {
        return c - b - a;
    }

    return 0;
}
