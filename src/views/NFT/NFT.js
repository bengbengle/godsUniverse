import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    bgbox: {
        width: '100%',
        height: '450px',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    bgimg: {
        background: `url("/assets/nft.png")`
    },
    title: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    fontWeight600: {
        fontWeight: 600,
    },
    fontSubTitle: {
        fontWeight: 200,
        fontSize: '1rem',
        color: 'grey',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
})
)
const NFT = ({ themeMode }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" component="span" className={classes.fontWeight600}>
                    Gods Universe NFT  
                </Typography>
            </div>
            <div className={classes.bgbox}>
                <img alt='' src='/assets/nft.png' ></img>
            </div>
            <div className={classes.fontSubTitle}>
                <Typography variant="h2" component="span" style={{
                    fontSize: '2rem'
                }}>
                    Coming Soon ...
                </Typography>
            </div>
            
        </div>
    );
};

export default NFT;
