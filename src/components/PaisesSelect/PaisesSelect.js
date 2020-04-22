import React, { useState, useEffect} from 'react'
import {traerDatosPais} from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './PaisesSelect.module.css'

const PaisesSelect = ({handleCountry}) => {

    const[paises, setPaises] = useState([]);

    useEffect(() => {
      const buscarAPI = async () => {
        setPaises(await traerDatosPais());

      }
      buscarAPI();

    }, []);

    return(

        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
                <option value="">Global</option>
                {
                    paises.map((country,i) => <option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default PaisesSelect;