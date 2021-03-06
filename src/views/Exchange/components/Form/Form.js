import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
};

const balanceShow = (balance) => {
  let b = balance / 10 ** 18
  return b.toFixed(4)
}

// const contract_address = '0x6Dd6E592D2945a01F16183D0878bb0e092A6ae67'
const contract_address = '0x0f0D26e84102e85Ef71fdF9519782611B6c26503'
const short_address = '0x0f0D...6503'
const baseurl = 'https://bscscan.com/address/'

// const contract_address =  '0xC541Aeaf07DC320ce3d3528712C7f1512827c891'
// const short_address =  '0xC541...c891'
// const baseurl = 'https://kovan.etherscan.io/address/'


const Form = ({ balance, account, remainingBnbTokens, ...rest }) => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [willGetGodtNum, setWillGetGodtNum] = useState('0');
  const [willSendBnbNum, setWillSendBnbNum] = useState('0');
  const [disabledSend, setDisabledSend] = useState(false);

  const remainingBnbTokensShow = () => {
    let tmp = Math.floor(remainingBnbTokens * 100)
    return tmp / 100
  }
  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    console.log(event.target.value)

    let bnb_num = event.target.value

    let gdot_num = bnb_num * 200000000000

    console.log('balance::', balance)

    if (remainingBnbTokens < bnb_num || bnb_num * 10 ** 18 > balance) {
      setDisabledSend(true)
      setWillGetGodtNum(0)
      // return false
    } else {
      setDisabledSend(false)
      setWillGetGodtNum(gdot_num)
      setWillSendBnbNum(bnb_num)
    }
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (disabledSend) return false

    if (formState.isValid) {
      window.location.replace('/');
    }
    let num = parseFloat(willSendBnbNum)
    num = num * 10 ** 18

    console.log(willGetGodtNum, num)

    window.web3.eth.sendTransaction({
      from: account,
      to: contract_address,
      value: num
    }, (err, res) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Tx ID: ', res);
      }
    });

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            Account Balance
            {/* / ???????????? */}
          </Grid>
          <Grid item xs={6}>
            {
              balanceShow(balance) + ' '
            }
            USDT
          </Grid>
          <Grid item xs={6}>
            Exchange Rate
            {/* / ???????????? */}
          </Grid>
          <Grid item xs={6}>
            1 USDT = 200,000,000,000 GODT
          </Grid>
          <Grid item xs={6}>
            IDO maximum
            {/* / ????????????????????? */}
          </Grid>
          <Grid item xs={6}>
            200,000 USDT
          </Grid>
          <Grid item xs={6}>
            Remaining Tokens
            {/* / ????????????????????? */}
          </Grid>
          <Grid item xs={6}>
            {remainingBnbTokensShow() + ' '}
            USDT
          </Grid>
          <Grid item xs={6}>
            BSC-USDT Address
            {/* / ???????????? */}
          </Grid>
          <Grid item xs={6}>
            <a rel="noreferrer" target="_blank"
              href={baseurl + ' 0x55d398326f99059ff775485246999027b3197955'} >
              {'0x55d3...7955'}???
            </a>
          </Grid>
          <Grid item xs={6}>
            IDO Contract Address
            {/* / ???????????? */}
          </Grid>
          <Grid item xs={6}>
            <a rel="noreferrer" target="_blank"
              href={baseurl + contract_address} >
              {short_address}???
            </a>
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                {/* Please input the exchange tokens number  */}
                Please input the USDT number
                {/* / ???????????????????????? */}
              </Typography>
            </i>
          </Grid>
          <Grid item xs={6} style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <TextField
              placeholder="Swap USDT Amount"
              label="Swap Amount *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              onChange={handleChange}
              value={formState.values.email || ''}
            />
            USDT
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                {/* ?????????????????? GODT ????????? */}
                The GODT Number that You will get
              </Typography>
            </i>
          </Grid>
          <Grid item xs={6}>
            {
              (willGetGodtNum || '0') + ' GODT'
            }
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={disabledSend}
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
              {/* / ?????? */}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
