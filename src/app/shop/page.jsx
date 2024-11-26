import { products } from '../components/data.js';
import king from "../components/product.module.css";
import Image from 'next/image';
import Link from 'next/link'

export default function ShopPage() {
    const productCat = products.map(product => (
        <section className="flex flex-col items-center hover:shadow-2xl">
            <Link href={`/shop/${product.name.replace(' ','-')}`} title={`${product.name} is a ${product.location} product`}>
            <p>ID: {product.id}</p>
            <Image src = {product.imageUrl} alt={product.category} width={100} height={80}/>
            <h2>Name: {product.name}</h2>
            <p>distance: {product.location}</p>
            </Link>
        </section>
    ))
    return (
        <div className={king.prod}>
        {productCat}
        </div>
    );
    }