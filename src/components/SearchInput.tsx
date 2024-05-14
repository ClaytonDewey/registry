import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';

const SearchInput = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 flex items-center pl-3'>
          <VscSearch className='h-5 w-5 text-gray-500' />
        </div>
        <input
          className='pl-10 py-2 w-full border-0 shadow-none'
          id='search'
          name='search'
          type='search'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search packagers'
        />
      </div>
    </form>
  );
};
export default SearchInput;
