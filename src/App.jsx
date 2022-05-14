import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';
import { Card } from './components/Card';

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      <span>{isAdmin ? '管理者です' : '管理者以外です'}</span>
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  );
};
