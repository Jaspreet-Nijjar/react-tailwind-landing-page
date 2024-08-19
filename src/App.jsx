import {
  Companies,
  Clipboard,
  Footer,
  Header,
  Hero,
  Workflow,
} from './sections/index';

const App = () => {
  return (
    <main className="max-w-md mx-auto flex flex-col items-center min-h-screen border border-red-500 text-center">
      <Header />
      <Hero />
      <Clipboard />
      <Workflow />
      <Companies />
      <Footer />
    </main>
  );
};

export default App;
