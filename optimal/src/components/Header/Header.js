import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomButton from '../Button/CustomButton';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import WrapperContainer from '../Container/WrapperContainer';
import styles from '../../assets/jss/components/userHeaderStyle';

const useStyles = makeStyles(styles);

const Header = () => {
    const classes = useStyles();
    const appBarClasses = classNames({
        [classes.appBar]: true,
    });
    return (
        <AppBar className={appBarClasses} position="sticky">
            <Toolbar>
                <WrapperContainer container direction="row" justify="space-between" alignItems="flex-start">
                    <GridItem md={3} xs={3}>
                        {/* <img src="/resources/working-amico.png" alt="logo" className={classes.logo_header} /> */}
                        Furious Work
                    </GridItem>
                    <GridItem md={9} xs={9}>
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                ahihihi
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                ahihihi
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                ahihihi
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                ahihihi
                            </ListItem>
                        </List>
                        {/* <GridContainer direction="row" justify="space-between" alignItems="baseline">
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button color="transparent">
                                    Create CV
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Company
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Blog
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    Support
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <Button>
                                    SignIn / SignUp
                                </Button>
                            </GridItem>
                            <GridItem md={2} style={{ padding: '25px 0', cursor: 'pointer' }}>
                                <CustomButton color="success" round gradient size="md">
                                    REGISTER
                                    <br />
                                    AS A RECRUITER
                                </CustomButton>
                            </GridItem>
                        </GridContainer> */}
                    </GridItem>
                </WrapperContainer>
            </Toolbar>
        </AppBar>
    );
};

Header.defaultProps = {
};

Header.propTypes = {
};

export default Header;
