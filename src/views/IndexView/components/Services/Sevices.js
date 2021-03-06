import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 140,
  },
}));

const data = [
  {
    icon: 'fas fa-layer-group',
    title: 'GODT (Gods Universe Token)',
    subtitle:
      'GODT is the basic token of Gods Universe Community. Community governance is gradually realized through GODT.',
  },
  {
    icon: 'fab fa-sketch',
    title: 'Gods Universe NFT',
    subtitle:
      'Create vip identity card for the God universe community and open a variety of high-level and interesting playing methods.',
  },
  {
    icon: 'fas fa-dice',
    title: 'Gods Universe Game',
    subtitle:
      "Create a GaaS type of God universe game. Start to enter the new world of Gods Universe.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
   
  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      {/* Build accessible React apps&nbsp; */}
      Join the community of  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Gods Universe</Typography> 
      {/* 加入神宇宙社区 */}
      {/* <Typography component="span" variant="inherit" color="primary">with speed</Typography> */}
    </Typography>
  );

  const subtitle = 'Be a member of Gods Universe Community, participate in community governance and get the according reward.';
  // 成为神宇宙社区的一员，参与社区治理，并获得相应的回报。

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.indigo}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
