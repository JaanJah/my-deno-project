export default (nr: number) => {
    let val = 1;
    for (let i = 2; i <= nr; i++) {
        val *= i;
    }
    return val;
}