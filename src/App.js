import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation';

function App() {
  return (
    <div>
      <header>
        <div className='container-module--container'>
          <Nav />
        </div>
      </header>     
      <main>
        <div className="container-module--container">
          <div className="align-center">
            <h1 className='block-center'>Yuri Valverde</h1>
              <p className="subtitle index-module--subtitle block-center">Hi, I'm Yuri a front end developer with & years of experience, interests not just web but also mobile
              with flutter and also have some projects in web3.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
