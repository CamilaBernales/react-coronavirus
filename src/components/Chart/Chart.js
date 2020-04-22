import React,{useState, useEffect} from 'react'
import {traerDatosPorDia} from '../../api'
import {Line, Pie} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {

    const [datosPorDia, setDatosPorDias] = useState([])

    useEffect(() => {
       const buscarData = async () => {
           setDatosPorDias(await traerDatosPorDia());
       }
       buscarData();
    }, [])

    const pieChart=(
        confirmed ? (
            <Pie 
            data ={{

                labels: ['Infectados', 'Recuperados', 'Muertos'],
                datasets: [

                    {
                        backgroundColor: ['#f2ed6f', '#a3fd97', '#ec8585'],
                        data: [confirmed.value, recovered.value, deaths.value],
                      }
                ]
            }}
            options={{
               
                title: { display: true, text: `Resultados de ${country}` },
              }}
            
            />
        ): null
    )
    const lineChart = (
        datosPorDia.length
        ?(
            <Line 
            data={{
                labels: datosPorDia.map(({date}) => date),
                datasets: [{
                    data: datosPorDia.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor:'#fbff18',
                    backgroundColor: '#fbff0038',
                    fill: true,
                }, {
                    data: datosPorDia.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor:'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
            
            />
        ): null
    )
    return(
    <div className={styles.container}>
         {country ? pieChart : lineChart}
    </div>
    )
}

export default Chart;