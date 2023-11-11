export default function Header() {
    return (
      <header className='w-full flex justify-center h-20 bg-[#9DB2BF] text-[#27374D]'>
        <div className='flex justify-around  align-middle w-screen h-20'>
            <a  className='font-light flex justify-center items-center'>Home</a>
            <a  className='font-light flex justify-center items-center'>About</a>
            <a  className='font-light flex justify-center items-center'>Projects</a>
            <a  className='font-light flex justify-center items-center'>Contact</a>
        </div>
      </header>
    );
}

