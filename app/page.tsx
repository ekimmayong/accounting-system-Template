import getWeather from '@/components/Weather/weather';
import Link from 'next/link';

export default function Home() {
  const dataV = getWeather()
  return (
    <div>
      <Link href='/auth/login'>Login</Link>
      
    </div>
  )
}
