import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  border: {
    width: theme.spacing(5),
    height: theme.spacing(2),
    borderRadius: theme.spacing(3),
    border: '3px solid',
    borderColor: theme.palette.divider,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(6),
      height: theme.spacing(3),
    }
  },
  borderDark: {
    borderColor: colors.indigo[700],
  },
  modeToggler: {
    position: 'absolute',
    top: `-${theme.spacing(1 / 2)}px`,
    left: `-${theme.spacing(1 / 2)}px`,
    // height: theme.spacing(3),
    borderRadius: '50%',
    backgroundColor: theme.palette.text.primary,
    transition: `transform .3s cubic-bezier(.4,.03,0,1)`,
    cursor: 'pointer',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    }
  },
  modeTogglerDark: {
    transform: `translateX(${theme.spacing(3)}px)`,
    backgroundColor: colors.indigo[900],
  },
  modeTogglerIcon: {
    color: 'white'
  },
}));

/**
 * Component to display the dark mode toggler
 *
 * @param {Object} props
 */
const DarkModeToggler = ({ themeMode = 'light', onClick, className, ...rest }) => {
  const classes = useStyles();

  return (
    <span className={clsx(classes.root, className)} {...rest} onClick={onClick}>
      {/* <div
        className={clsx(
          classes.border,
          themeMode === 'dark' ? classes.borderDark : '',
        )}
      /> */}
      {/* <div
        className={clsx(
          classes.modeToggler,
          themeMode === 'dark' ? classes.modeTogglerDark : '',
        )}>
          <div className={classes.modeTogglerIcon}>
            {
              themeMode === 'dark' ? 'English' : '中文'
            }
          </div>
      </div> */}
    </span>
  );
};

DarkModeToggler.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The theme mode
   */
  themeMode: PropTypes.string,
  /**
   * Theme toggler function
   */
  onClick: PropTypes.func.isRequired,
};

export default DarkModeToggler;
