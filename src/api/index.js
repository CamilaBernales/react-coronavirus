import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const buscarData = async (country) => {

    let newUrl = url; 

    if(country){
        newUrl = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(newUrl);
        return {confirmed, recovered, deaths, lastUpdate}
        
    } catch (error) {
        console.log(error)
        
    }
}


export const traerDatosPorDia = async() => {

    try {
        const {data} = await axios.get(`${url}/daily`);
        const modificarData = data.map((dataPorDia) => ({
            confirmed: dataPorDia.confirmed.total,
            deaths: dataPorDia.deaths.total,
            date: dataPorDia.reportDate
        }))

        return modificarData
    } catch (error) {
        console.log(error);
    }
}

export const traerDatosPais = async () => { 

    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name)
    } catch (error) {
        console.log(error);
    }
}