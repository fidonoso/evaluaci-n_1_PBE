const { limpiador}=require('../resources/utils')

const triangulo=(req, res)=>{
    console.log(req.body);
    const respuesta=new Object();
    let arr= Object.values(req.body)
    let result=[...new Set(arr)].length
    if(result==1){
        respuesta.respuesta="El triángulo es equilatero"
        console.log('Tres lados iguales:',respuesta)
    }
    if(result==2){
        respuesta.respuesta="El triángulo es isóseles"
        console.log('Dos lados iguales:',respuesta)
    }
    if(result==3){
        respuesta.respuesta="El triángulo es escaleno"
        console.log('Todos los lados distintos:',respuesta)
    }
    res.send(respuesta)
}

const circunferencia=(req, res)=>{
    const {radio}=req.body
    let ob={
        mensaje: `La circunsferencia es ${2*radio*3.14} cm2`
    }
    res.send(JSON.stringify(ob))
}

const cuadrado =(req, res)=>{
    const {lado}=req.body
    let ob={
        area: `área ${lado*lado} cm2`,
        perimetro: `perimetro ${4*lado} cm2`,
    }
    res.send(JSON.stringify(ob))
}
module.exports = {triangulo, circunferencia, cuadrado}