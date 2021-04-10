import Head from "next/head"
import marked from "marked"
import { getAllRecipeNames, getRecipeData } from "../lib/recipes"

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.recipe)
  return {
    props: {
      recipeData,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const paths = await getAllRecipeNames()
  return {
    paths,
    fallback: false,
  }
}

export default function Recipe({ recipeData }) {
  return (
    <div className="w-11/12 md:w-1/2 mx-auto">
      <Head>
        <title>{recipeData.name}</title>
      </Head>
      <main className="my-4 markdown flex flex-col">
        <hr />
        <div className="text-3xl text-blue-500 font-bold">
          {recipeData.name}
        </div>
        <h4 className="text-xl mt-2 mb-2 font-bold">Ingredients</h4>
        <div
          className="marked list-disc"
          dangerouslySetInnerHTML={{
            __html: marked(recipeData.ingredients),
          }}
        />
        <h4 className="text-xl mt-4 mb-2 font-bold">Method</h4>
        <div
          className="marked"
          dangerouslySetInnerHTML={{
            __html: marked(recipeData.method),
          }}
        />
        <hr className="mt-4" />
      </main>
    </div>
  )
}
