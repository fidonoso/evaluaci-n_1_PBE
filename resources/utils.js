const limpiador = (obj) => {
    console.log(obj)
    const forbidden = ["parseInt", "document.write", "eval", "isNaN", "unescape", "escape", "parseFloat", "parseInt", "eval", "isNaN", "onload", "alert", "script", "<", ">", "onload", "=", "(", ")", '"', "'", "/", ];
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let arr2 = [];
    values.forEach((el) => {
      let arr1 = [el];
      forbidden.forEach((malo) => {
        while (arr1[0].toString().includes(malo)) {
          arr1[0] = arr1[0].replace(malo, "");
        }
      });
      arr2.push(...arr1);
    });
    let preObj = keys.map((el, index) => {
      return [el, arr2[index]];
    });
    let resultado = Object.fromEntries(preObj);
    console.log(resultado);
    return resultado;
  };


module.exports ={limpiador}
