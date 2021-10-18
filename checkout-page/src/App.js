// import Payment from "./payment";
import Payment from "./anon";
import Nav from "./nav";
import Progress from "./progress";

function App() {
  return (
    <div className="font-display h-screen ">
      <header className="App-header p-7 py-5 border-b  flex justify-between class items-center">
        <h1 className="font-display font-bold  text-4xl">LOGO</h1>
        <Nav />
      </header>
      <section className="grid grid-cols-12 min-h-full ">
        <main className=" col-start-1 col-span-9 h-full py-6">
          <div className="w-5/6 mx-auto max-w-xl">
            <Progress />
            <Payment />
            {/* <Payment /> */}
          </div>
        </main>
        <aside className="border-l col-start-10 col-span-3 h-full">
          Cart Summary
        </aside>
      </section>
    </div>
  );
}

export default App;
