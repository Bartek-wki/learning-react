import styles from './Card.module.scss'

const Card = props => {
  return (
    <li className={styles.card} key={props.card.id}>{props.card.title}</li>
  )
}

export default Card;