import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, projectFirestore, logout } from '../firebase/config';
import styles from '../styles/Title.module.css';

const Title = () => {
  const [user, loading, error] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const history = useHistory();

  const fetchUsername = async () => {
    try{
      const query = await projectFirestore.collection('users').where("userId", "==", user?.uid).get();
      const data = await query.docs[0].data();
      setUsername(data.name);
    }
    catch (error) {
      console.error(error);
      alert("An error occured while fetching user.");
    }
  }

  useEffect(() => {
    if (loading){
      //trigger something
      return;
    }
    if (!user)
      return history.replace("/");
    fetchUsername();
  }, [user, loading]);
  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.HeaderDiv}>
        <div className={styles.Temp}>
          <h1>MyCastle</h1>
        </div>
        <div className={styles.UserDiv}>
          <div className={styles.UsernameDiv}>{username}</div>
          <button className={styles.LogoutBtn} onClick={logout}>Logout</button>
        </div>
      </div>
      <h2>My Gallery</h2>
    </div>
  )
}

export default Title;