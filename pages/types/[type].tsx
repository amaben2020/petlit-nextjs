// ...

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import AnimalsCardsList from "../../components/AnimalCardsList";
import {
  Animal,
  AnimalType,
  AnimalTypeBreed,
  AnimalTypesResponse,
} from "../../shared/interfaces/petfinder.interface";
import Breadcrumbs from "../../components/Breadcrumbs";

export interface TypePageProps {
  type: AnimalType;
  adoptedAnimals: Animal[];
}

const {
  NEXT_PUBLIC_PETFINDER_API_URL,
  NEXT_PUBLIC_PETFINDER_CLIENT_ID,
  NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
  PETFINDER_ACCESS_TOKEN,
} = process.env;

interface PageProps {
  type: AnimalType;
  adoptedAnimals: Animal[];
}

interface StaticPathParams extends ParsedUrlQuery {
  type: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [] as any;

  try {
    const { types }: AnimalTypesResponse = await (
      await fetch(`${NEXT_PUBLIC_PETFINDER_API_URL}/types`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PETFINDER_ACCESS_TOKEN}`,
        },
      })
    ).json();

    if (types.length > 0) {
      paths = types.map((type) => ({
        params: {
          type: (type._links.self.href.match(/\/types\/([\w-]+)$/) || "")[1],
        },
      }));
    }
  } catch (err) {
    console.error(err);
  }

  return {
    paths,
    fallback: false, // Return a 404 page for a non-existent type.
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  StaticPathParams
> = async ({ params }) => {
  let adoptedAnimals: Animal[] = [],
    breeds: AnimalTypeBreed[] = [],
    type!: AnimalType;

  let { type: typeParam } = params as StaticPathParams;

  try {
    ({ type } = await (
      await fetch(`${NEXT_PUBLIC_PETFINDER_API_URL}/types/${typeParam}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PETFINDER_ACCESS_TOKEN}`,
        },
      })
    ).json());

    ({ breeds } = await (
      await fetch(
        `${NEXT_PUBLIC_PETFINDER_API_URL}/types/${typeParam}/breeds`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${PETFINDER_ACCESS_TOKEN}`,
          },
        }
      )
    ).json());

    ({ animals: adoptedAnimals } = await (
      await fetch(
        `${NEXT_PUBLIC_PETFINDER_API_URL}/animals?type=${typeParam}&status=adopted&limit=5`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${PETFINDER_ACCESS_TOKEN}`,
          },
        }
      )
    ).json());
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      type: {
        ...(type || {}),
        id: params?.type,
        breeds,
      },
      adoptedAnimals,
    },
  };
};

const TypePage: NextPage<TypePageProps> = ({ adoptedAnimals, type }) => (
  <>
    <Breadcrumbs
      className="mb-7"
      pages={[
        {
          name: "Types",
          url: `/`, // Should be /types, which will be implemented at a later time.
        },
        {
          name: type.name,
          url: `/types/${type.id}`,
        },
      ]}
    />{" "}
    <main>
      <section className="relative mb-7" id="overview">
        <h1 className="text-7xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
          {type.name}
        </h1>
        <p className="mt-7 text-2xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="relative mb-7" id="recently-adopted">
        <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-7">
          Recently Adopted
        </h3>
        <AnimalsCardsList animals={adoptedAnimals} />
      </section>
    </main>
  </>
);

export default TypePage;
