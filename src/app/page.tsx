'use client';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { allProducts } from '../data/products';
import Footer from '../components/Footer';

export default function Home() {
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <>
      <Head>
        {/* Preload Hero Image */}
        <link
          rel="preload"
          href="https://cdn.usegalileo.ai/sdxl10/1842c442-e3da-4742-adfb-fb83a3683bfa.png"
          as="image"
        />
      </Head>

      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8fafb]"
        style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Main Content */}
          <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Hero Section */}
              <div className="@container">
                <div className="relative @[480px]:p-4 min-h-[480px] rounded-xl overflow-hidden flex items-end px-4 pb-10 @[480px]:px-10">
                  <Image
                    src="https://cdn.usegalileo.ai/sdxl10/1842c442-e3da-4742-adfb-fb83a3683bfa.png"
                    alt="Hero Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                    fetchPriority="high"
                    quality={70}
                    className="z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10" />
                  <div className="relative z-20 flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                      Get the best of both worlds
                    </h1>
                    <h2 className="text-white text-sm @[480px]:text-base">
                      From cutting-edge gadgets to cozy fall threads, we’ve got you covered. Explore our lineup of hand-picked faves.
                    </h2>
                    <Link
                      href="/gadgets"
                      className="mt-2 flex h-10 px-4 items-center justify-center rounded-xl bg-[#1f89e0] text-white text-sm font-bold hover:bg-[#1a7bc8] transition-colors"
                    >
                      <span className="truncate">Shop now</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trending Section */}
              <h2 className="text-[#0e151b] text-[22px] font-bold px-4 pb-3 pt-5">Trending Now</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="flex flex-col gap-3 pb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={320}
                      height={180}
                      className="rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer object-cover w-full"
                      quality={70}
                    />
                    <div>
                      <p className="text-[#0e151b] text-base font-medium">{product.name}</p>
                      <p className="text-[#507695] text-sm">From {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* More Products */}
              {allProducts.length > 3 && (
                <>
                  <h2 className="text-[#0e151b] text-[22px] font-bold px-4 pb-3 pt-8">More Products</h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {allProducts.slice(3, 6).map((product) => (
                      <div key={product.id} className="flex flex-col gap-3 pb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={320}
                          height={180}
                          className="rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer object-cover w-full"
                          quality={70}
                        />
                        <div>
                          <p className="text-[#0e151b] text-base font-medium">{product.name}</p>
                          <p className="text-[#507695] text-sm">From {product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center pt-8 pb-4">
                    <Link
                      href="/clothes"
                      className="h-12 pt-3 px-6 bg-[#1f89e0] text-white font-bold rounded-xl hover:bg-[#1a7bc8] transition-colors"
                    >
                      View All Products
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
