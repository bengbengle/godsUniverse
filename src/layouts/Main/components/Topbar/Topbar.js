import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';


import Web3 from 'web3';


const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 40,
    },
  },
  titlelink: {
    width: '40px'
  },
  logoImage: {
    with: '40px!important',
    height: '40px',
  },
  logoTitle: {
    display: 'flex',
    fontSize: 'large',
    fontWeight: '800',
    alignItems: 'center',
    marginLeft: '10px'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));


const showAccount = (account) => {
  let l = account.length;
  let s = account.substr(0, 8);
  let e = account.substr(l - 4, 4);
  return s + '...' + e
}

const Topbar = ({ 
  themeMode, 
  themeToggler, 
  onSidebarOpen, 
  pages, 
  className,
  account,
  setAccount,
  balance,
  setBalance,
  ...rest }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);

  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const callConnect = async () => {
    console.log('call connect ....')

    var web3Provider;
    var myAccount;
    if (window.ethereum) {
      web3Provider = window.ethereum;
      try {
        // 请求用户授权
        myAccount = await window.ethereum.enable();
        setAccount(myAccount[0])

      } catch (error) {
        console.log(error)
        // 用户不授权时
        console.error("User denied account access")
      }
    } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
      web3Provider = window.web3.currentProvider;
    } else {
      web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    window.web3 = new Web3(web3Provider);
    window.web3Provider = web3Provider
    let balance = await window.web3.eth.getBalance(myAccount[0])

    console.log('balance ..:', balance)
    setBalance(balance)
  }

  const whitepaper = pages.whitepaper
  const nft = pages.nft
  const exchange = pages.exchange

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront" className={classes.titlelink}>
          <Image
            className={classes.logoImage}
            src={themeMode === 'light' ? '/assets/logo.png' : '/assets/logo.png'}
            alt="thefront"
            lazy={false}
          />
        </a>
        <div className={classes.logoTitle}>
          God's Universe
        </div>
      </div>
      <div className={classes.flexGrow} />


      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>

          {[whitepaper, exchange, nft].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  component={'a'}
                  color="textPrimary"
                  href={'/' + page.id}
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
              </ListItem>
            </div>
          ))}
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
          </ListItem>

          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            {
              account ?
                showAccount(account)
                :
                <Button variant="contained" color="primary" onClick={() => callConnect()}>
                  Connect
                </Button>
            }
          </ListItem>
        </List>
      </Hidden>

    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
