import { products } from '../components/data.js';
import king from "../components/product.module.css";

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key=(product.id)>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
    ))

    }
    return (
        <div className='king.product'>
        {productCat}
        </div>
    );
    }