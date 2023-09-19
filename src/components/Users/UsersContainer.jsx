import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '.././common/Preloader/Preloader';
import { 
    getUsersSuperSelector, 
    getPageSize, 
    getTotalUsersCount, 
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress 
} from '../../redux/users-selectors';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    /* Before refactoring
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }*/
    //After refactoring
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }    

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// Old version of mapDispatchToProps
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/

let mapStateToProps = (state) => {
    //console.log('mapStateToProps USERS')
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage, 
        toggleFollowingProgress, requestUsers
    }),
)(UsersContainer)