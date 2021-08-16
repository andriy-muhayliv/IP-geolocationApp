import style from './App.module.css'
import Data from './Data'
import Input from './Input'

function App() {
  return (
    <div className={style.App}>
      <div className={style.center__block}>
          <Input  />
          <Data />
      </div>
    </div>
  );
}

export default App;
