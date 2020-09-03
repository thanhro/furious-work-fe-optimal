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

const useStyles = makeStyles(styles);

const Home = (props) => {
    const {

    } = props;
    const classes = useStyles();
    const appBarClasses = classNames({
        [classes.appBar]: true,
    });

    return (
        <>
            <AppBar className={appBarClasses}>
                <WrapperContainer>
                    <GridItem md={2}>
                        <img src="/resources/working-amico.png" alt="logo" className={classes.logo_header} />
                    </GridItem>
                    <GridItem md={9}>
                        <GridContainer direction="row" justify="space-between" alignItems="baseline">
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button color="transparent">
                                    Mẫu CV
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Cover Letter
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Việc Làm
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Công Ty
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Đăng Nhập
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <CustomButton color="success" round gradient size="md">
                                    Nhà Tuyển Dụng
                                    <br />
                                    Đăng Tuyển & Tìm Hồ Sơ
                                </CustomButton>

                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </WrapperContainer>
            </AppBar>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <Box>
                ahihi body
            </Box>
            <footer className={classes.footer}>
                <WrapperContainer>
                    <GridItem md={12} className={classes.footerItems}>
                        <img src="/resources/working-amico.png" alt="logo" className={classes.logo_header} />
                    </GridItem>
                    <GridItem md={12} className={classes.footerItems}>
                        <a href="/" className={classes.logo_brand}>
                            <GitHubIcon size={20} color="#00ff08" />
                        </a>
                        <a href="/" className={classes.logo_brand}>
                            <LanguageIcon size={20} color="#00ff08" />
                        </a>
                        <a href="/" className={classes.logo_brand}>
                            <FacebookIcon size={20} color="#00ff08" />
                        </a>
                        <a href="/" className={classes.logo_brand}>
                            <InstagramIcon size={20} color="#00ff08" />
                        </a>
                        <a href="/" className={classes.logo_brand}>
                            <YoutubeIcon size={20} color="#00ff08" />
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
                                >
                                    LTV Team
                                </a>{' '}
                                for a better web.😍
                            </div>
                        </Typography>
                    </GridItem>
                </WrapperContainer>
            </footer>
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
