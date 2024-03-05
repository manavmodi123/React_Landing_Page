
import './App.css';
import DealList from './components/DealList';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SecondHeader from './components/SecondHeader';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <ProductList />
      <DealList />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
