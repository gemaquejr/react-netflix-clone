import React from "react";
import styles from './FeaturedMovie.module.css'

export default function FeaturedMovie({item}) {
    
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className={styles.featured_vertical}>
                <div className={styles.featured_horizontal}>
                    <div className={styles.featured_name}>{item.original_name}</div>
                    <div className={styles.featured_info}>
                        <div className={styles.featured_points}>{item.vote_average} pontos</div>
                        <div className={styles.featured_year}>{firstDate.getFullYear()}</div>
                        <div className={styles.featured_seasons}>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.featured_description}>{description}</div>
                    <div className={styles.featured_buttons}>
                        <a href={`/watch/${item.id}`} className={styles.featured_playbutton}> ▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className={styles.featured_mylistbutton}>+ Minha Lista</a>

                    </div>
                    <div className={styles.featured_genres}><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}