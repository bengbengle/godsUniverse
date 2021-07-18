import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Grid,
  List,
  ListItem,
  SvgIcon
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';


import { Image } from 'components/atoms';


const DiscordIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg t="1626593792074" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2907" width="24" height="24"><path d="M404.992 156.992L380 160s-112.128 12.256-194.016 78.016h-0.96l-1.024 0.96c-18.368 16.896-26.368 37.664-39.008 68.032a982.08 982.08 0 0 0-37.984 112C83.264 504.864 64 608.864 64 704v8l4 8c29.632 52 82.24 85.12 131.008 108 48.736 22.88 90.88 35.008 120 36l19.008 0.992 9.984-16.992 35.008-62.016c37.12 8.384 79.872 14.016 128.992 14.016 49.12 0 91.872-5.632 128.992-14.016l35.008 62.016 10.016 16.992 18.976-0.992c29.12-0.992 71.264-13.12 120-36 48.768-22.88 101.376-56 131.008-108l4-8V704c0-95.136-19.264-199.136-43.008-284.992a982.08 982.08 0 0 0-37.984-112c-12.64-30.4-20.64-51.136-39.008-68l-0.992-1.024h-1.024C756.16 172.256 644 160 644 160l-24.992-3.008-9.024 23.008s-9.248 23.36-14.976 50.016A643.04 643.04 0 0 0 512 224c-17.12 0-46.72 1.12-83.008 6.016-5.76-26.656-15.008-50.016-15.008-50.016z m-44 73.024c1.376 4.48 2.752 8.352 4 12-41.376 10.24-85.504 25.856-125.984 50.976l33.984 54.016C356 295.488 475.232 288 512 288c36.736 0 156 7.488 239.008 59.008l33.984-54.016c-40.48-25.12-84.608-40.736-125.984-51.008 1.248-3.616 2.624-7.488 4-12 29.856 6.016 86.88 19.776 133.984 57.024-0.256 0.128 12 18.624 23.008 44.992 11.264 27.136 23.744 63.264 35.008 104 21.632 78.112 38.624 173.248 40 256.992-20.16 30.752-57.504 58.496-97.024 77.024a311.808 311.808 0 0 1-77.984 24.96L704 768c9.504-3.52 18.88-7.36 27.008-11.008 49.248-21.632 76-44.992 76-44.992l-42.016-48s-17.984 16.512-60 35.008C663.04 717.504 598.88 736 512 736s-151.008-18.496-192.992-36.992c-42.016-18.496-60-35.008-60-35.008l-42.016 48s26.752 23.36 76 44.992c8.128 3.648 17.504 7.52 27.008 11.008l-16 27.008a311.808 311.808 0 0 1-78.016-25.024c-39.488-18.496-76.864-46.24-96.96-76.992 1.344-83.744 18.336-178.88 40-256.992a917.216 917.216 0 0 1 34.976-104c11.008-26.368 23.264-44.864 23.008-44.992 47.104-37.248 104.128-51.008 133.984-56.992zM400 448c-24.736 0-46.624 14.112-60 32-13.376 17.888-20 39.872-20 64s6.624 46.112 20 64c13.376 17.888 35.264 32 60 32 24.736 0 46.624-14.112 60-32 13.376-17.888 20-39.872 20-64s-6.624-46.112-20-64c-13.376-17.888-35.264-32-60-32z m224 0c-24.736 0-46.624 14.112-60 32-13.376 17.888-20 39.872-20 64s6.624 46.112 20 64c13.376 17.888 35.264 32 60 32 24.736 0 46.624-14.112 60-32 13.376-17.888 20-39.872 20-64s-6.624-46.112-20-64c-13.376-17.888-35.264-32-60-32z m-224 64c1.76 0 4 0.64 8 6.016 4 5.344 8 14.72 8 25.984 0 11.264-4 20.64-8 26.016-4 5.344-6.24 5.984-8 5.984-1.76 0-4-0.64-8-6.016A44.832 44.832 0 0 1 384 544c0-11.264 4-20.64 8-26.016 4-5.344 6.24-5.984 8-5.984z m224 0c1.76 0 4 0.64 8 6.016 4 5.344 8 14.72 8 25.984 0 11.264-4 20.64-8 26.016-4 5.344-6.24 5.984-8 5.984-1.76 0-4-0.64-8-6.016A44.832 44.832 0 0 1 608 544c0-11.264 4-20.64 8-26.016 4-5.344 6.24-5.984 8-5.984z" p-id="2908" fill="#a4a2b3"></path></svg>
    </SvgIcon>
  );
}



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 42,
  },
  logoTitle: {
    width: '240px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'larger',
    fontWeight: '700'
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '10px'
    // width: '100%',
    // height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
  iconsGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

 
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="thefront" className={classes.logoTitle}>
                    <Image
                      className={classes.logoImage}
                      src="/assets/logo.png"
                      alt="thefront"
                      lazy={false}
                    />
                    Gods Universe
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters className={classes.iconsGroup}>
                <IconButton target='_blank' className={classes.socialIcon} href='mailto:godsuniversecommunity@gmail.com'>
                  <EmailIcon className={classes.icon} />
                </IconButton>
                <IconButton target='_blank' className={classes.socialIcon} href='https://twitter.com/@GodsUniGroup'>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton target='_blank' className={classes.socialIcon} href='https://t.me/GodsUniverse' >
                  <TelegramIcon className={classes.icon} />
                </IconButton>
                <IconButton target='_blank' className={classes.socialIcon} href='https://discord.gg/WxJUJvQw' >
                  <DiscordIcon></DiscordIcon>
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                {/* <LandingPages /> */}
              </Grid>
              <Grid item>
                {/* <SupportedPages /> */}
              </Grid>
              <Grid item>
                {/* <AccountPages /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
