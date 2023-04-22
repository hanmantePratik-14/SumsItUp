import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumsitup-logo'
            className='w-28 object-contain'/>

            <button
            type='button'
            onClick={() => window.open("https://github.com/hanmantePratik-14/SumsItUp")}
            className="black_btn"
            >
                
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
        Summarize articles using the advanced capabilities of  <br className='max-md:hidden' />
            <span className="orange_gradient">
                OpenAI GPT-4
            </span>  
        </h1>
        <h2 className="desc">
        Say goodbye to lengthy articles and hello to quick summaries with SumsItUp, the ultimate tool for efficient and effective content condensing.
        </h2>
    </header>
  )
}

export default Hero