// import Payment from "./payment";
import Payment from "./payment";
import Nav from "./nav";
import Progress from "./progress";
import Summary from "./summary";
import Button from "./Button";
import Address from "./Address"
import Deliver from "./deliver";

function App() {
  return (
    <div className="font-display h-screen  mx-auto">
      <header className="App-header p-7 py-5 border-b  flex justify-between class items-center">
        <h1 className="font-display font-bold  text-4xl">LOGO</h1>
        <Nav />
      </header>
      <section className="grid grid-cols-12 min-h-full ">
        <main className=" col-start-1 col-span-8 h-full py-6 ">
          <div className="w-5/6 mx-auto max-w-xl">
            <Progress />
            {/* <Payment /> */}
            {/* <Address /> */}
            <Deliver />
            {/* <Payment /> */}
            {/* <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Review Order" /> */}
          </div>
        </main>
        <Summary />

      </section>
    </div >
  );
}

export default App;
