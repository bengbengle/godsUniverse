import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  Button,
} from '@material-ui/core';
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

// bsc mainnet 
const contract_address =  '0x5328475b5C05165B7e95983B54c56378b1d03045'

// kova testnet 
// const contract_address =  '0xC541Aeaf07DC320ce3d3528712C7f1512827c891'


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
  remainingBnbTokens,
  setRemainingBnbTokens,
  ...rest }) => {
  const classes = useStyles();

  const [setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);

  };

  const getremainingBnbTokensNumber = async () => {
    var abi = [
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "_godt",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "godtAmount",
              "type": "uint256"
            }
          ],
          "name": "SwapForGODT",
          "type": "event"
        },
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "name": "changeReceiver",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "claimOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getPurchaseLimit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "godt",
          "outputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "gotAsset",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxNeedAsset",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "offeredGODT",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "pendingOwner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "purchaseLimit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "receiver",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalOfferGODT",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxNeedAsset",
              "type": "uint256"
            }
          ],
          "name": "setSwapRate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "superTransfer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "swapForGODT",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalOfferGODT",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
            }
          ],
          "name": "transferAsset",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]


      var contract = new window.web3.eth.Contract(abi, contract_address)
      

      let remainingBnbTokens = await contract.methods.getPurchaseLimit().call()
      
      let num = remainingBnbTokens/ 10 ** 18 
      console.log('num::', num) 

      setRemainingBnbTokens(num)

      // debugger
     contract.events.SwapForGODT(function (error, result) {
      if (error) {
        return
      }
      console.log("9999");
      console.log(result);
      
      // document.getElementById("info").innerHTML = ZombieFactory.get();
    });
  }
 

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

    await getremainingBnbTokensNumber()
  // 
  }

  // callConnect()
  
  const whitepaper = pages.whitepaper
  const nft = pages.nft
  const exchange = pages.exchange
  const home = pages.home

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <span title=".." className={classes.titlelink}>
          <Image
            className={classes.logoImage}
            src={themeMode === 'light' ? '/assets/logo.png' : '/assets/logo.png'}
            alt="thefront"
            lazy={false}
          />
        </span>
        <div className={classes.logoTitle}>
          Gods Universe
        </div>
      </div>
      <div className={classes.flexGrow} />


      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>

          {[home, whitepaper, exchange, nft].map((page) => (
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
