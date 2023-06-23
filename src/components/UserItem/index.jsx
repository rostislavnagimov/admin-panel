import { useState, useContext} from 'react'
import Context from '../../helpers/context'
import styles from './index.module.css'
import placeholder  from '../../assets/photo_placeholder.png'

const UserItem = (object) => {
  const [options, setOptions] = useState(false)
  const store = useContext(Context)
  const [alert, setAlert] = useState()
  const {
    user
  } = object

  const deleted = 'Пользователь успешно удален'
  const resend = `Приглашение отпрвалено на почту ${user?.email}`

  const disableAlert = () => {
    if (alert === deleted) {
      deleteUser(user?.email)
    } else {
      setAlert(false)
    }
  }


  const deleteUser = (email) => {
    let obj = {...store.state}
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key]['email'] === email) {
        delete obj[key];
      }
    }
    setAlert(false)
    store.setState(obj)
  }

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
              <li className={styles['UserItem__options--list--main']}>Изменить права доступа</li>
              <li className={styles['UserItem__options--list--main']} onClick={()=>{
                setAlert(resend)
                setOptions(false)}}>Отправить код повторно</li>
              <li className={styles['UserItem__options--list--delete']} onClick={()=>{
                setAlert(deleted)
                setOptions(false)
              }}>Удалить</li>
            </ul>
          </div>
          <div className={styles['UserItem__options--list--placeholder']} onClick={() => (setOptions(false))}></div>
        </>
      )}
      {alert && (
        <>
          <div className={styles['UserItem__alert']}>
            <h1>{alert}</h1>
            <button className={styles['UserItem__alert__button']} onClick={() => (disableAlert())}>Закрыть</button>

          </div>
          <div className={styles['UserItem__options--list--placeholder']} onClick={() => (disableAlert())}></div>
        </>
      )}
      
    </div>
  )}

export default UserItem