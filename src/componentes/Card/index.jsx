import { useContext } from "react";
import { CartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(CartContext);

    // function to save a selected product
    const showProduct = (productDetail) => {
        console.log("XXXXXXXXXXXXXX")
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div className="bg-slate-500 cursor-pointer w-56  h-60 rounded-lg  top-24"
            onClick={() => showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-full">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
                    {data.data.reference}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={data.data.photo}
                    alt=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ">
                    +
                </div>

            </figure>

        </div>
    );
};

export default Card;