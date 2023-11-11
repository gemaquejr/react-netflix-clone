import React from "react";
import styles from './MovieRow.module.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MovieRow({title, items}) {
    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.movieRow_left}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className={styles.movieRow_right}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className={styles.movieRow_listarea}>
                <div className={styles.movieRow_list}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className={styles.movieRow_item}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>       
            </div>
        </div>
    )
}