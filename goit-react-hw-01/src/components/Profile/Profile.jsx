import user from '../user.json';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';


const Profile = () => (
<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={user.avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{user.username}</p>
    <p class="tag">@{user.tag}</p>
  <p className={styles.location}>{user.location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span>Followers</span>
      <span>{user.stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{user.stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{user.stats.likes}</span>
    </li>
  </ul>
</div>

);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;