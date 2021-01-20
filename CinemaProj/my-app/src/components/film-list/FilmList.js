import React from 'react';
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css';




export const FilmList = ({items}) => {
    console.log(items, 'items in film list component')
    return (
        <div className={styles.listWrapper}>
            {items.map((item) => (
                    <div className={styles.itemWrapper} key={item.id}>
                        <FilmItem {...item}/>
                    </div>
                )
            )}
        </div>
    )
}
