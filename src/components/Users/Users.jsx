import React from 'react';
import Paginator from ".././common/Paginator/Paginator";
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    /* Before refactoring
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {<div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={() => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>}*/
        
    // After refactoring
    return <div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} 
            currentPage={currentPage} onPageChanged={onPageChanged} />
        {
            /* Before refactoring
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>
                                Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </span>
            </div >)*/

            // After refactoring
            users.map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                key={u.id} 
                unfollow={props.unfollow}
                follow={props.follow}
                />)
        }
    </div>
}

export default Users;