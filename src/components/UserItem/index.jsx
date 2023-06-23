import { useState, useRef, useEffect } from 'react'
import styles from './index.module.css'
import placeholder  from '../../assets/photo_placeholder.png'

const UserItem = (object) => {
  const user = object?.user
  const [options, setOptions] = useState(false)

  return (
  <div className={styles['UserItem']}>
    <img src={user?.image || placeholder} />
    <div>
      <span className={styles['UserItem__name']}>{user?.name}</span>
      {user?.status && <span className={styles['UserItem__status']}>{user.status}</span>}
      <a href={`mailto:${user?.email}`} className={styles['UserItem__email']}>{user?.email}</a>
      <div className={styles['UserItem__permissions']}>
        {user?.permissions && user.permissions.map((permission, index) => (
          <div key={index}>
            {permission}
          </div>
        ))}
      </div>
    </div>
    {!options && <div className={styles['UserItem__options']} onClick={() => (setOptions(true))}>. . .</div>}
    {options && (
      <>
        <div className={styles['UserItem__options--list']}>
          <ul>
            <li>Изменить права доступа</li>
            <li>Отправить код повторно</li>
            <li>Удалить</li>
          </ul>
        </div>
        <div className={styles['UserItem__options--list--placeholder']} onClick={() => (setOptions(false))}></div>
      </>
    )}
    
  </div>
)}

export default UserItem