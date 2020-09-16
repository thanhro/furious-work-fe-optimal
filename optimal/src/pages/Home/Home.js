import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '../../components/Typography/CustomTypography';
import CustomButton from '../../components/Button/CustomButton';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import WrapperContainer from '../../components/Container/WrapperContainer';
import styles from '../../assets/jss/components/userHeaderStyle';
import { GitHubIcon, LanguageIcon, FacebookIcon, YoutubeIcon, InstagramIcon, FavoriteIcon } from '../../components/Icons/Icons';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles(styles);

const Home = (props) => {
    const {

    } = props;
    const classes = useStyles();

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

Home.defaultProps = {
    companyDetail: {},
    editSuccess: false,
};

Home.propTypes = {

};

export default Home;
