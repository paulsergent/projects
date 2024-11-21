import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-wrap space-x-4">
    <Image src="/apples.jpg" alt="fruits" width={'500'} height={'400'}/>
    <Image src="/avocados.jpg" alt="fruits" width={'500'} height={'400'}/>

    </main>
  )
}
