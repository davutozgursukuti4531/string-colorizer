/**
 * @param {string} string
 */
export default (string) => {
    for(let i = 0; i<1000; i++){
        return string.includes(`\x1b[${i}m`)
    }
}