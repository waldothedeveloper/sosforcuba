import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ChevronRightIcon } from "@heroicons/react/solid"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <main className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-red-500 to-cyan-300 bg-clip-text text-transparent tracking-tight sm:text-9xl uppercase">
          Patria y Vida
        </h1>
        <p className="mt-2 text-lg font-medium text-gray-400">
          It looks like the page you’re looking for doesn&apos;t exist.
        </p>
        <div className="mt-12">
          <div className="max-w-xl mx-auto py-16 sm:py-24">
            <Link
              to="/"
              className="text-base font-medium bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
            >
              Take me back home<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
