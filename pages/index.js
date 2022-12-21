import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import Profiles from '../components/Profiles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-2/5 mt-2">
          <div className='inline-flex items-baseline'>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-200 ml-2  p-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search or start new chat"
              />
            </div>
            <div>
              <FunnelIcon className='ml-4 align-text-bottom text-gray-600 w-4'/>
            </div>
          </div>
          <hr className='mt-2 w-2/3'></hr>
          <div className='mt-2'>
            <Profiles />
          </div>
        </div>

        <div className="w-3/5">
          
        </div>
      </main>
    </>
  );
}
