import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import AOS from 'aos';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setmountedComponent] = useState(false);
  
  const [langMode, setLang] = useState('en');
  

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const setLangMode = mode => {
    window.localStorage.setItem('langMode', mode);
    setLang(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('light') : setMode('light');
  };
  
  const langToggler = () => {
    langMode === 'en' ? setMode('zh') : setMode('en');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');

    const localLang = window.localStorage.getItem('langMode');
    localLang ? setLang(localLang) : setLangMode('en');

    setmountedComponent(true);
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [themeMode, langMode]);

  return [themeMode, themeToggler, mountedComponent];
};


export const useWallet = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  
  useEffect(() => {
    console.log(account)
    console.log(balance)
    AOS.refresh();
  }, [account, balance]);

  return [account, setAccount, balance, setBalance];
};


export default function WithLayout({ component: Component, layout: Layout, ...rest }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);
  

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  
  const [account, setAccount, balance, setBalance] = useWallet();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, account, balance]);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout 
        themeMode={themeMode} 
        themeToggler={themeToggler} 
        account={account} 
        setAccount={setAccount} 

        balance={balance}
        setBalance={setBalance}
        >
          <Component themeMode={themeMode} 
            account = {account}
            setAccount = {setAccount}
            balance = {balance}
            setBalance = {setBalance}
          {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}