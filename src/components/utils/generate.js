import { useState, useEffect } from "react"
const checkGcd = (e, phiFunction) => {
    //checks if e is coprime to phiFunction or not
    for (let i = e; i >= 1; i--) {
        if (e % i === 0 && phiFunction % i === 0) return (i === 1 ? 1 : 0);
    }
}
export const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateKeys(p1, p2) {
    if (!isPrime(p1) || !isPrime(p2)) {
        return ({ error: "Please enter prime number" })
    }
    const phiFunction = (p1 - 1) * (p2 - 1)
    let d, loop = 2,
        noOfElement = 0,
        possibleE = [];
    while (noOfElement <= 15) {
        if (checkGcd(loop, phiFunction)) {
            possibleE.push(loop);
            noOfElement++;
        }
        loop++;
        if (loop > +phiFunction) break;
    }
    if (possibleE.length === 0) { return ({ error: ` Keys cannot be generated with given numbers ${p1} and ${p2}` }) }
    let e = possibleE[Math.floor(Math.random() * possibleE.length)]
    // const e = 11
    for (let i = 1; ; i++) {
        d = (phiFunction * i + 1) / e;
        if (d > 0 && Number.isInteger(d)) {

            break;
        }
    }

    if (d === e) {
        //to prevent same value of public and private keys
        const tempKeys = generateKeys(p1, p2)
        d = tempKeys.d
        e = tempKeys.e
    }
    return ({ d, e })
}

export const useGenerateKeys = (p1, p2) => {
    const [error, setError] = useState("")
    const [product, setproduct] = useState(1)
    const [keys, setKeys] = useState({ publicKey: 1, privateKey: 1 })

    useEffect(() => {

        ; (() => {
            if (p1 < 4 || p2 < 4) {
                return setError("Please enter number greater than 3")
            }
            const keys = generateKeys(p1, p2)
            if (keys.error) return setError(keys.error);
            setError("")
            setKeys({ publicKey: keys.e, privateKey: keys.d })
            setproduct(p1 * p2)
        })();

    }, [p1, p2])


    return { keys, product, error }

}









