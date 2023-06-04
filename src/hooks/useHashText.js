import { useSelector, useDispatch } from 'react-redux';
import { setScroll, selectScroll } from '../features/address/addressSlice';

const useHashText = () => {
  const dispatch = useDispatch();
  const hashText = (text, auto) => {
    if (auto) {
      dispatch(setScroll(text));
    } else if (text) {
      const currentHash = window.location.hash.substring(1);
      const newHash = text ? `#${text}` : '';
      if (currentHash !== newHash) {
        window.location.hash = newHash;
      }
    } else {
      window.location.hash = '';
    }
  };

  return hashText;
};

export default useHashText;
