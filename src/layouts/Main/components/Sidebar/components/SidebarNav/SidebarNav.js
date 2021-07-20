/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
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
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Landings
        </Typography>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Pages
        </Typography>
        <SupportedPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography>
        <AccountPages />
      </ListItem>
      */}
      <ListItem className={classes.listItem}> 
        <Button
          // variant="outlined"
          fullWidth
          component="a"
          href="/home"
        >
          Home
        </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}> 
        <Button
          fullWidth
          component="a"
          href="/whitepaper"
        >
          WhitePaper
        </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}> 
        <Button
          // variant="outlined"
          fullWidth
          component="a"
          href="/exchange"
        >
          Exchange
        </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}> 
        <Button
          fullWidth
          component="a"
          href="/nft"
        >
          NFT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="/exchange"
        >
          Start Now
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
