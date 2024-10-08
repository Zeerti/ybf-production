import imageUrlBuilder from "@sanity/image-url"
import NextImage from "next/image"
import { defineQuery } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 60 } };

const FO_BUNDLES_QUERY = defineQuery(`*[
  _type == "foBundle"
]{_id, name, weight, price, image, bundleItems}|order(price desc)`);

const COLDCUTS_QUERY = defineQuery(`*[
  _type == "coldCuts"
]{_id, name, price}|order(name desc)`)

const BUNDLES_QUERY = defineQuery(`*[
  _type == "bundle"
]{_id, weight, price, image, bundleItems}|order(price desc)`)

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const BundleCard = ({ bundle, isOtherBundle = false }: { bundle: any; isOtherBundle?: boolean }) => (
  <li className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
    {bundle.image && (
      <div className="mb-2 flex-shrink-0">
        <NextImage
          src={urlFor(bundle.image)?.width(150).height(100).url() || "https://via.placeholder.com/150x100"}
          alt={bundle.name || "Bundle Image"}
          width={150}
          height={100}
          className="w-full h-24 object-cover rounded-md"
        />
      </div>
    )}
    {!isOtherBundle && bundle.name && <h2 className="text-lg font-semibold mb-1">{bundle.name}</h2>}
    <p className="text-sm text-gray-600 mb-1">Weight: {bundle.weight} lbs</p>
    <p className="text-base font-bold text-green-600 mb-2">${bundle.price.toFixed(2)}</p>
    <div className="mt-auto">
      <h3 className="text-sm font-semibold mb-1">Bundle Items:</h3>
      <ul className="list-disc pl-4 text-xs text-gray-700">
        {bundle.bundleItems.slice(0, 3).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
        {bundle.bundleItems.length > 3 && <li>...</li>}
      </ul>
    </div>
  </li>
);

export default async function IndexPage() {
  const fo_bundles = await client.fetch(FO_BUNDLES_QUERY, {}, options);
  const bundles = await client.fetch(BUNDLES_QUERY, {}, options)

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-8 gap-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Franks Original Bundles</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fo_bundles.map((bundle: any) => (
            <BundleCard key={bundle._id} bundle={bundle} />
          ))}
        </ul>
      </section>
      <section>
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Other Bundles</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bundles.map((bundle: any) => (
            <BundleCard key={bundle._id} bundle={bundle} isOtherBundle={true} />
          ))}
        </ul>
      </section>
    </main>
  );
}

