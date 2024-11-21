import Link from "next/link";

export default function Footer() {

    const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-800 text-white h-[30vh] flex flex-col items-center justify-center text-3xl">
        <p>This app is a product of &copy;<Link href="https://univelcity.com/" target="_blank" className="hover:font-bold px-3">univelcity</Link> {currentYear}</p>
    </footer>
  )
}
