import { useState, useEffect } from "react"
import Layout from "../../componentes/layout"
import Card from "../../componentes/card"
import ProductDetail from "../../componentes/ProductDetail"

const Home = () => {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Motorcycle/')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => {
                console.log(err);
            })
    }
    )
    return (

        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg top-20 '>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }

            </div>
            <ProductDetail />
        </Layout>

    )
}
export default Home