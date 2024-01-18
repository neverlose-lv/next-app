'use client';

import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
// import _ from 'lodash';
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      {/* <h1>Hello {session && session.user!.name}</h1> */}

      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Sort
      </button>

      {/* <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Show
      </button>
      {isVisible && <HeavyComponent />} */}

      {/* <Link href="/users">Users</Link>
      <ProductCard /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
