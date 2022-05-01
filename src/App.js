import { useState } from 'react';
import styles from './App.module.css'
import powered from './assets/powered.png'
import {levels, calculateImc} from './helpers/helper'
import {GridItem} from './components/GridItem/index'
import leftArrow from './assets/leftarrow.png'

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0);
  const [showTypeInfo, setTypeInfo] = useState(null)

  console.log(heightField, weightField)

  const handleClickCalc = () => {
    if (heightField && weightField) {
      let imc = calculateImc(heightField, weightField);
      if (imc != null ){
        setTypeInfo(calculateImc(heightField, weightField))
      }
      else {
        alert('Seu IMC não se enquadra em nenhum dos campos')
      }
    }else {
      alert('Preencha todos os campos');
    }
  }

  const handleBackButton = ()  => {
    setTypeInfo(null)
    setHeightField(0)
    setWeightField(0)
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered}></img>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.title}>
            <h1>Calcule seu IMC.</h1>
            <p>IMC é a sigla para índice de massa corporal, a partir do seu imc é possível dizer o peso ideal que você deveria ter </p>
          </div>
          <input 
            type='number'
            placeholder='Digite seu tamanho na unidade de metro, Ex 1.5'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat((e.target.value)))}
            disabled={showTypeInfo ? true : false}
          >
          </input>
          <input 
            type='number'
            placeholder='Digite seu peso, Ex: 70.8 '
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat((e.target.value)))}
            disabled={showTypeInfo ? true : false}
          >
          </input>
          <button 
            onClick={handleClickCalc}
            disabled={showTypeInfo ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightside}>
          {!showTypeInfo &&
            <div className={styles.grid}>
              {levels.map((item, key) => 
                <GridItem key={key} item={item}/> 
              )}
            </div>
          }
          {showTypeInfo &&
            <div className={styles.gridBigItem}>
              <div className={styles.gridArrowBefore} onClick={handleBackButton}>
                <img src={leftArrow} alt='' width={25} />
              </div>
              <GridItem item={showTypeInfo}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
