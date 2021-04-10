import Head from "next/head"
import getRecipes from "../lib/recipes"
import React from "react"
import Recipes from "../components/Recipes"

export async function getStaticProps() {
  let recipes = await getRecipes()

  return {
    props: {
      recipes,
    },
    revalidate: 30,
  }
}

export default function Home({ recipes }) {
  return (
    <div>
      <Head>
        <title>Recipes</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Recipes" />
      </Head>
      <div className="container max-w-3xl mx-auto mt-4 px-4">
        <h1 className="text-5xl">Recipes</h1>
        <Recipes recipes={recipes} />
      </div>
    </div>
  )
}
