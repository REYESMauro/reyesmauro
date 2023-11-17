import ico from '../../assets/motos/cb190..jpg'

function Navbar() {
    return (
        <div className='flex justify-center items-center pb-8 z-10 w-full py-5 px-8 text-sm font-light bg-sky-600 '>
            <img className='w-12'
                src={ico} alt="" />

            <ul className='flex items-center gap-7'>
                <li className='font-semibold text-2xl gap-3'>
                    {/*<nav to='/'
                      className={({ isactive }) => isactive ? activeStyle : undefined}>
                      home
                   </nav>*/}
                </li>
                <li>
                    <div className="flex space-x-4">

                        <a href="#" className="bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">MOTOS</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SUZUKI</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">YAMAHA</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">HONDA</a>

                        <a className="search-bar font-medium text-sm hover:text-black">
                            <input type="text" placeholder="Buscar..." />
                            <button>Buscar</button>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar