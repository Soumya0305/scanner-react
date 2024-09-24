import scanner from './svgs/scanner.svg';

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-[23rem] h-fit rounded-2xl shadow-lg">
        <div className="p-4 rounded-lg flex justify-center">
          <img
            src={scanner}
            alt="account"
            title="account"
            className="img-fluid rounded-lg w-full h-auto max-w-xs"
          />
        </div>
        <div className='p-3 text-center'>
          <div className='head'>
            <p className='text-xl sm:text-2xl font-bold text-black'>Improve your front-end</p>
            <p className='text-xl sm:text-2xl font-bold text-black'>Skills by building projects</p>
          </div>
          <div className='bod mt-4'>
            <p className='text-base sm:text-lg text-slate-500'>Scan this QR code to visit Frontend</p>
            <p className='text-base sm:text-lg text-slate-500'>Mentor and take coding skills to</p>
            <p className='text-base sm:text-lg text-slate-500'>next level</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
