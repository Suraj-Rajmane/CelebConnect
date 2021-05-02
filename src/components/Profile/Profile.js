import React from 'react';
import './Profile.css';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import About from '../About/About';
import Posts from '../Posts/Posts';
import Follow from '../Follow/Follow';

const Profile = ({ firstName, name, image}) => {

    const { url, path } = useRouteMatch();

    return (
        <div className="profile-section">
            <div className="user-section">
                <div>
                    <h3>Hello {firstName} !</h3>
                </div>
                <div className="profile-pic">
                    <img src={image} alt={name} />
                    <h6>{name}</h6>
                </div>
            </div>
            <div className="main">
                <div className="navbar-container">
                    <div className="link"><Link to={`${url}`}>About</Link></div>
                    <div className="link"><Link to={`${url}/posts`}>Posts</Link></div>
                    <div className="link"><Link to={`${url}/follow`}>Follow</Link></div>
                </div>

                <Switch>
                    <Route exact path={`${path}`}>
                        <About/>
                    </Route>
                    <Route path={`${path}/posts`}>
                        <Posts/>
                    </Route>
                    <Route path={`${path}/follow`}>
                        <Follow/>
                    </Route>
                </Switch>
            </div>
        </div>


    );
};

export default Profile;