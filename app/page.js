import Image from 'next/image'
import Hero from './scenes/Hero'
import Help from './scenes/Help'

export default function Home() {
  return (
    <div>
      <Hero />
      <Help />
    </div>
  )
}
