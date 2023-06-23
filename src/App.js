import UserList from "./components/UserList";
import { useContext, useEffect } from 'react'
import Context from './helpers/context'
import './App.css'

function App() {
  const store = useContext(Context)

  useEffect(() => {
    fetch('https://file.notion.so/f/s/b697dfd0-4a6f-4555-bd14-60559f2a8179/users.json?id=cc13eeae-fbeb-4b40-9b71-228fe193a8f6&table=block&spaceId=a73b0a18-75ee-4904-8f1e-0681ca27036a&expirationTimestamp=1687555447138&signature=0pb8-uA5RsMI9em633gBBEA0SpSPnnc_n5pF108MQ5s&downloadName=users.json')
      .then(response => response.json())
      .then(data => store.setState(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main>
      <UserList />
    </main>
  );
}

export default App;
