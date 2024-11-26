import { products } from "@/app/components/data";
import Link from "next/link"
import Image from "next/image"
import king from "../../components/product.module.css"

export default function JustFruits() {
    const productCat = products.filter(fruit => fruit.category == 'Fruits').map(product => (
        <section key={product.id} className="flex flex-col items-center hover:shadow-2xl">
            <Link href={`/shop/${product.name.replace(' ','-')}`} title={'${product.name} is ${product.location}'}>
            <p>ID: {product.id}</p>
            <Image src={product.imageUrl} alt={product.name} width={150} height={150}/>
            <h2>Name: {product.name}</h2>
            <p>{product.location}</p>
            </Link>
        </section>
    ))
    return (
        <div>
            <div className={king.prod}>
                {productCat}
            </div>
        </div>
    )
}