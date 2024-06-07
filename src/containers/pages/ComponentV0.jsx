/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DCkoD2MVsOw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import fotonivel from "../../assets/img/mapa_juego.png";
import { Button } from "../../components/button";
import Layout from "../../hocs/layouts/Layout";

export default function Component() {
  return (
    <Layout>
      <div className="w-full">
        <main className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fotonivel}
                alt="Product 1"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Stylish Sunglasses
                </h3>
                <p className="text-gray-300">Protect your eyes in style.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fotonivel}
                alt="Product 2"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Leather Backpack
                </h3>
                <p className="text-gray-300">Durable and stylish.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 3"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Wireless Headphones
                </h3>
                <p className="text-gray-300">Immersive audio experience.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 4"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Retro Wristwatch
                </h3>
                <p className="text-gray-300">Timeless elegance.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 5"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Minimalist Wallet
                </h3>
                <p className="text-gray-300">Slim and functional.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 6"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Ergonomic Keyboard
                </h3>
                <p className="text-gray-300">Comfortable typing experience.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 7"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Portable Bluetooth Speaker
                </h3>
                <p className="text-gray-300">Powerful sound on the go.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
              <img
                src={fotonivel}
                alt="Product 8"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-200">
                  Bamboo Cutting Board
                </h3>
                <p className="text-gray-300">Sustainable and durable.</p>
                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
