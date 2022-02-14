import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Card = props => {
  const dispatch = useDispatch();

    return (
      <li className={styles.card}>{props.title}
        <button onClick={e => dispatch(toggleCardFavorite(props.id))} className={clsx(styles.icon, 'fa fa-star-o', props.isFavorite && styles.isFavorite)}></button>
      </li>
    );
};

export default Card;