import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {  SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const GetStarted = ({ className, ...rest }) => {
  const classes = useStyles();
  const title = "Exchange";
  const subtitle = ' ';
  const button = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/exchange"
    >
      Get started
    </Button>
  );
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        align="center"
        titleProps={{
          variant: 'h2',
          color: 'textPrimary',
          className: classes.fontWeight900,
        }}
        ctaGroup={[button]}
      />
    </div>
  );
};

GetStarted.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default GetStarted;
