import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchPhrase } from '../../redux/store';
import { resetSearchPhrase } from '../../redux/store';


const SearchForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  useEffect(() => {
    dispatch(resetSearchPhrase(title));
  }, []);
  //dispatch(resetSearchPhrase(''));
  console.log(title);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSearchPhrase( title ));
    console.log(title);
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
    <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Search..." />
    <Button><span className="fa fa-search" /></Button>
  </form>
  )
}

export default SearchForm;