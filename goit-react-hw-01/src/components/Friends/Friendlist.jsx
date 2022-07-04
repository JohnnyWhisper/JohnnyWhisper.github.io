import friends from '../friends.json';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = () => {
    return (
    <ul className={styles.friendList}>
        {friends.map (friend => (
            <li className={styles.item}>
            <span className={`${friend.isOnline ? styles.statusOnline : styles.statusOffline}`}/>
            <img className="avatar" src={friend.avatar} alt="" width="48" />
            <p className='name'>{friend.name}</p>
          </li>
        ))}
    </ul>
    

    );

};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;