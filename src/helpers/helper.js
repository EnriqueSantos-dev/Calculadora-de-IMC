export const levels = [
    {title: 'Magreza', color:'#96A3bc' , icon:'down', imc: [0,18.5], yourImc: null},
    {title: 'Normal', color:'#0ead69' , icon:'up', imc: [18.5, 24.99], yourImc: null},
    {title: 'Sobrepeso', color:'#e2b039' , icon:'down', imc: [25,29.99], yourImc: null},
    {title: 'Obesidade', color:'#c3423f' , icon:'down', imc: [30,34.99], yourImc: null},
]

export const calculateImc = (height, weight) => {
    let imc = +((weight / (height ** 2)).toFixed(2))

    for (let i = 0; i < levels.length; i++) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1] ){
            let copyLevel = {...levels[i]};
            copyLevel.yourImc = imc;
            return copyLevel;
        }
    }
    return null;
}