import Head from "next/head"
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
    <div>
      <Head>
        <title>{recipeData.name}</title>
      </Head>
      <div>{recipeData.name}</div>
    </div>
  )
}
