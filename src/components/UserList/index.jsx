import { useState, useContext} from 'react'
import Context from '../../helpers/context'
import UserItem from '../UserItem'
import styles from './index.module.css'

const UserList = () => {
  const store = useContext(Context)

  return (
  <section className={styles['UserList']}>
    <div className={styles['UserList__header']}>
      <span className={styles['UserList__header__title']} >Команда</span>
      <div className={styles['UserList__input--field']}>
        <input type="email" placeholder="Поиск по email" className={styles['UserList__input']}/>
        <span className={styles['UserList__search-icon']}>&#128269;</span>
      </div>
      <button className={styles['UserList__button']}>
        Добавить пользователя
      </button>
    </div>
    <div className={styles['UserList__body']}>
      <div className={styles['UserList__scrollable']}>
        {Object.keys(store.state).map((user, index) => {
          return (
          <UserItem user={store.state[user]} key={index} />
        )})}
      </div>


    </div>
  </section>
  )}

export default UserList