
const tareaCompleja = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Termino")
        }, 5000)
    })
}


const main = async () => {
    // tareaCompleja().then( (cadena) =>{
    //     console.log(cadena)
    //     tareaCompleja().then( (cad) => {
    //         tareaCompleja().then( (cad) => {
            
    //         } )
    //     } )
    // } )

    const resp = await tareaCompleja()
    const resp1 = await tareaCompleja()
    const res2 = await tareaCompleja()
    console.log("HOLA PW")
    console.log(resp)
    
}

main()