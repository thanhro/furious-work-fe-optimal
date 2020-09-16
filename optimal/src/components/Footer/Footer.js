import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../Typography/CustomTypography';
import GridItem from '../Grid/GridItem';
import WrapperContainer from '../Container/WrapperContainer';
import styles from '../../assets/jss/components/userHeaderStyle';
import { GitHubIcon, LanguageIcon, FacebookIcon, YoutubeIcon, InstagramIcon, FavoriteIcon } from '../Icons/Icons';

const useStyles = makeStyles(styles);

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <WrapperContainer>
                <GridItem md={12} className={classes.footerItems}>
                    <img src="/resources/working-amico.png" alt="logo" className={classes.logo_header} />
                </GridItem>
                <GridItem md={12} className={classes.footerItems}>
                    <a href="/" className={classes.logo_brand}>
                        <GitHubIcon size={20} color="#ffb74d" />
                    </a>
                    <a href="/" className={classes.logo_brand}>
                        <LanguageIcon size={20} color="#ffb74d" />
                    </a>
                    <a href="/" className={classes.logo_brand}>
                        <FacebookIcon size={20} color="#ffb74d" />
                    </a>
                    <a href="/" className={classes.logo_brand}>
                        <InstagramIcon size={20} color="#ffb74d" />
                    </a>
                    <a href="/" className={classes.logo_brand}>
                        <YoutubeIcon size={20} color="#ffb74d" />
                    </a>
                </GridItem>
                <GridItem md={12} className={classes.footerItems}>
                    <Typography variant="h6">
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{' '}
                            <FavoriteIcon style={{ position: 'relavtive', top: '3px' }} size={15} color="red" /> by{' '}
                            <a
                                href="https://www.creative-tim.com?ref=njsmk-footer"
                                // className={aClasses}
                                target="blank"
                                style={{
                                    textDecoration: 'none',
                                    color: '#e57373',
                                }}
                            >
                                LTV Team
                            </a>{' '}
                            for a better web.😍
                        </div>
                    </Typography>
                </GridItem>
            </WrapperContainer>
        </footer>
    );
};

export default Footer;
