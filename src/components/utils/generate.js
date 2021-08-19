import { useState, useEffect } from "react"
const checkGcd = (e, phiFunction) => {
    //checks if e is coprime to phiFunction or not
    for (let i = e; i >= 1; i--) {
        if (e % i === 0 && phiFunction % i === 0) return (i === 1 ? 1 : 0);
    }
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
    const e = possibleE[Math.floor(Math.random() * possibleE.length)]
    // const e = 11
    for (let i = 1; ; i++) {
        d = (phiFunction * i + 1) / e;
        if (d > 0 && Number.isInteger(d)) {

            break;
        }
    }
    return ({ d, e })

}

export const useGenerateKeys = (p1, p2) => {
    const [error, setError] = useState("")
    const [keys, setKeys] = useState({ publicKey: 1, privateKey: 1 })

    useEffect(() => {
        ; (() => {
            const keys = generateKeys(p1, p2)
            if (keys.error) return setError(keys.error);
            setError("")
            setKeys({ publicKey: keys.e, privateKey: keys.d })
        })();

    }, [p1, p2])


    return { keys, product: p1 * p2, error }

}
export const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}









