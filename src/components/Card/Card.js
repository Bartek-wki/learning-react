import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardRedux';


const Card = props => {
  const dispatch = useDispatch();

    return (
      <li className={styles.card}>
        {props.title}
        <div>
          <button onClick={e => dispatch(toggleCardFavorite(props.id))} className={clsx(styles.icon, 'fa fa-star-o', props.isFavorite && styles.isFavorite)}></button>
          <button onClick={e => dispatch(removeCard(props.id))} className={clsx(styles.icon, 'fa fa-trash')}></button>
        </div>
      </li>
    );
};

export default Card;