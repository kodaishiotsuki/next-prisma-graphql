import Image from 'next/image'
import Link from 'next/link'

const header = () => {
  return (
    <header>
      <nav className="p-2 h-12">
        <ul className="flex items-center space-x-2">
          <li>
            <Image
              alt="Vercel Logo"
              src="/vercel.svg"
              width={128}
              height={128}
            />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
          <li>
            <Link href="/user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
