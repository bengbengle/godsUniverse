import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url("/assets/home-bg.jpg")`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    }
  },
  imageAnimationDark: {
    background: '/assets/home-bg.jpg',
    //url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png")`,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({ themeMode = 'light', className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
     Gods Universe  
     {/* An introduction to the background of Gods Universe */}
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            ' An',
            'introduction ',
            'to the  ',
            'background of ',
            "Gods Universe ",
            '',
          ],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = 'Generate a new world of Meta Universe and realize more possibilities in the future.';

  // ??????????????????????????????????????????????????????????????????

  


  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={(
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === 'dark' ? classes.imageAnimationDark: '',
            )}
          />
        )}
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;
