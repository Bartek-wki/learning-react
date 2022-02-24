import styles from './ListForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setdescription('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      Description: <TextInput type="text" value={description} onChange={e => setdescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  );
}

export default ListForm