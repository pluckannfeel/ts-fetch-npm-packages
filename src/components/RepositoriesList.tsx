import { useRef, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import ListItem from './ListItem';

const RepositoriesList: React.FunctionComponent = () => {
  // const [term, setTerm] = useState('');
  const termInputRef = useRef<HTMLInputElement | null>(null);
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const term = termInputRef.current!.value;

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={termInputRef} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map(repository => {
            return <ListItem name={repository} />
          })}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
