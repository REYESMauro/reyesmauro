import { useContext } from 'react'
import { CartContext } from '../../Context';
import './styles.css'


const ProductDetail = () => {
    const context = useContext(CartContext);


    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>            {console.log(context.isProductDetailOpen)}
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div onClick={() => context.closeProductDetail()}>x</div>
                <div onClick={()=> context.$}>carro</div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                    src={context.productToShow.photo}
                    alt={context.productToShow.price} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.reference}</span>
                <span className='font-medium text-md'>${context.productToShow.description}</span>
                <span className='font-light text-sm'>${context.productToShow.cc}</span>
                <span className='font-light text-sm'>${context.productToShow.price}</span>
            </p>
        </aside>
    )
}
export default ProductDetail