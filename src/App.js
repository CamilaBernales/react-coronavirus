import React, { useEffect } from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import PaisesSelect from './components/PaisesSelect/PaisesSelect'
import { buscarData } from './api'
import styles from './App.module.css'

class App extends React.Component {
    state= {
        data: {},
        country:''
    }

    async componentDidMount () {
        const dataApi = await buscarData();
        console.log(dataApi);
        this.setState({data: dataApi})
    }

    handleCountry = async (country) => {
        const dataApi = await buscarData(country);
        this.setState({ data: dataApi, country: country })
    }

    render() {
        const {data, country} = this.state

        return (
            <div className={styles.container}>
            <div md= {4} className={styles.stay}><h1>Stay Inside.</h1></div>
           
                <Cards data={data}/>
                <PaisesSelect handleCountry={this.handleCountry}/>
                <Chart data={data} country={country}/>
            </div>

        );
    }


}

export default App;
