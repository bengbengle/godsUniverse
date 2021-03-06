import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

const SignupCover = ({balance, account, remainingBnbTokens, ...rest}) => {
  const classes = useStyles();

  console.log('balance', balance)

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="IDO"
              subtitle="Initial Digital assets Offering in BSC"
              titleProps={{
                variant: 'h3',
              }}
            />
            <Form balance={balance} account={account} remainingBnbTokens={remainingBnbTokens} />
          </div>
        }
        rightSide={
          <Image
            src="/assets/exchange.jpg"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  );
};

export default SignupCover;
