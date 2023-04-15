import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import { AppContext, AppProvider } from './contexts/AppState';

function App() {
  return (
    <AppProvider>
      <Header />
        <AppContext.Consumer>
        {({ users }) => (
          <>
            <main>
              <h3>
                Users: <span>{users.length}</span>
              </h3>
              <UserList />
            </main>
          </>
        )}
        </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;