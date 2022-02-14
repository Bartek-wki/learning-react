import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/cardRedux';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state))

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
        </ul>
      </article>
    </div>
  )
}

export default Favorite;