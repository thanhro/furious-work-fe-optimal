import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '../../components/Typography/CustomTypography';
import CustomButton from '../../components/Button/CustomButton';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import WrapperContainer from '../../components/Container/WrapperContainer';
import styles from '../../assets/jss/components/userHeaderStyle';

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

            <footer>
                <WrapperContainer style={{ alignItems: 'center' }}>
                    <GridItem>
                        Logo
                    </GridItem>
                    <GridItem>
                        List Logo
                    </GridItem>
                    <GridItem>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{' '}
                            <Favorite style={{ width: '18px', height: '18px', position: 'relavtive', top: '3px' }} color="secondary" /> by{' '}
                            <a
                                href="https://www.creative-tim.com?ref=njsmk-footer"
                                // className={aClasses}
                                target="blank"
                            >
                                Creative Tim
                            </a>{' '}
                            for a better web.
                        </div>
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
