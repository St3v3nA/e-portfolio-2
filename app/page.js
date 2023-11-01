import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-black  text-white  max-h-full'>
      <header className='w-full flex justify-center h-24'>
        <div className='flex justify-around  align-middle  my-4  border-solid  border-white  border-2  rounded-lg  w-1/2 h-14'>
            <a className='font-light flex justify-center items-center w-1/4 hover:bg-white hover:text-black hover:border-black hover:border-4 hover:rounded-l-lg'>Home</a>
            <a className='font-light flex justify-center items-center w-1/4 hover:bg-white hover:text-black hover:border-black hover:border-4'>About</a>
            <a className='font-light flex justify-center items-center w-1/4 hover:bg-white hover:text-black hover:border-black hover:border-4'>Projects</a>
            <a className='font-light flex justify-center items-center w-1/4 hover:bg-white hover:text-black hover:border-black hover:border-4 hover:rounded-r-lg'>Contact</a>
        </div>
      </header>

      <div className='flex'>
        <div className='w-1/2 flex justify-center my-12' id="img">
          <img className='aspect-square' src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' ></img>
        </div>

        <div id="introduction" className='my-16 mx-16'>
          <div className='text-3xl w-max'>
            <h2>Hello I am</h2>
          </div>
          <div className='text-6xl w-max'>
            <h1>Kristo-Steven Altmäe</h1>
          </div>
          
        </div>
      </div>
    </main>
  )
}
