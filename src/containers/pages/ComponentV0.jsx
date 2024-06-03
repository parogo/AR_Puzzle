/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DCkoD2MVsOw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../../components/button";

export default function Component() {
  return (
    <div className="w-full">
      <header className="bg-gray-900 py-8 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
            Our Products
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 1"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Stylish Sunglasses
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Protect your eyes in style.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 2"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Leather Backpack
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Durable and stylish.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 3"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Wireless Headphones
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Immersive audio experience.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 4"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Retro Wristwatch
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Timeless elegance.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 5"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Minimalist Wallet
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Slim and functional.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 6"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Ergonomic Keyboard
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Comfortable typing experience.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 7"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Portable Bluetooth Speaker
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Powerful sound on the go.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              alt="Product 8"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Bamboo Cutting Board
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Sustainable and durable.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
