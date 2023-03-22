import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />)
  debug()
}); 
