import { products } from '../components/data.js';
import king from "../components/product.module.css";
import Image from 'next/image';

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
            <Image src = {product.imageUrl} alt={product.category} width={100} height={80}/>
            <p>ID: {product.id}</p>
            <h2>Name: {product.name}</h2>
            <p>distance: {product.location}</p>
            </section>
    ))
    return (
        <div className={king.prod}>
        {productCat}
        </div>
    );
    }