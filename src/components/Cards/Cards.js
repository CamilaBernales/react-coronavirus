import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Buscando resultados...'
    }

    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color='textSecondary'>Infectados</Typography>
                    <Typography varaint="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={1.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varaint="body2">Numero de infectados de COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary">Recuperados</Typography>
                    <Typography varaint="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={1.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography varaint="body2">Numero de recuperados del COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color='textSecondary'>Muertos</Typography>
                    <Typography varaint="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={1.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography varaint="body2">Numero de muertos por el COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>

    )
}

export default Cards