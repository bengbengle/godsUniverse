import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode, account, setAccount, balance, setBalance, remainingBnbTokens, setRemainingBnbTokens }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
 
  const navigations = {

    home: {
      title: 'Home',
      id: 'home',
    },
    whitepaper: {
      title: 'WhitePaper',
      id: 'whitePaper',
    },
    exchange: {
      title: 'Exchange',
      id: 'exchange',
    },
    nft: {
      title: 'NFT',
      id: 'nft',
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar 
      onSidebarOpen={handleSidebarOpen} 
      pages={navigations} 
      themeMode={themeMode} 
      themeToggler={themeToggler} 
      account={account} 
      setAccount={setAccount} 
      balance={balance} 
      setBalance={setBalance} 
      remainingBnbTokens={remainingBnbTokens}
      setRemainingBnbTokens={setRemainingBnbTokens}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={navigations}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={navigations} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
