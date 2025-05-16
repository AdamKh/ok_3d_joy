import styles from './styles/App.module.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
