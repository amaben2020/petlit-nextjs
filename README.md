Blurhash algorithm : https://www.newline.co/@kchan/static-site-generation-with-nextjs-and-typescript-part-iii-optimizing-image-loading-with-plaiceholder-and-blurhash--2e153353

$ npm install --save plaiceholder @plaiceholder/next react-blurhash

https://www.newline.co/@kchan/static-site-generation-with-nextjs-and-typescript-part-iv-dynamic-routes-with-getstaticpaths--a991c4cd
getStaticPaths: If your Next.js application depends on external data to statically generate pages for dynamic routes, such as from a content management system (CMS) for blog articles, then you can export a getStaticPaths() function that specifies the paths to generate at build time, like so:

Creating several components
touch components/{AnimalCard,AnimalCardsList}.tsx

Makefile: https://www.newline.co/@kchan/static-site-generation-with-nextjs-and-typescript-part-v-build-time-access-tokens-and-exporting-static-html--94fe8353?utm_source=newline&utm_medium=email&utm_campaign=20220927_np5btd&utm_content=l6&inf_contact_key=ab99ef8cf513c9907855fe7728496bdef651f238aa2edbb9c8b7cff03e0b16a0

remember 4 indentations to avoid error

Running the GNU: PETFINDER_ACCESS_TOKEN=abcdef npm run dev

curl for access_token request
single -d
$ curl -d "grant_type=client_credentials&client_id=<NEXT_PUBLIC_PETFINDER_CLIENT_ID>&client_secret=<NEXT_PUBLIC_PETFINDER_CLIENT_SECRET>" <NEXT_PUBLIC_PETFINDER_API_URL>/oauth2/token

several -d (--data)
$ curl -d grant_type=client_credentials -d client_id=<NEXT_PUBLIC_PETFINDER_CLIENT_ID> -d client_secret=<NEXT_PUBLIC_PETFINDER_CLIENT_SECRET> <NEXT_PUBLIC_PETFINDER_API_URL>/oauth2/token

sed command
$ curl -d grant*type=client_credentials -d client_id=<NEXT_PUBLIC_PETFINDER_CLIENT_ID> -d client_secret=<NEXT_PUBLIC_PETFINDER_CLIENT_SECRET> <NEXT_PUBLIC_PETFINDER_API_URL>/oauth2/token | sed -E 's/.*"access*token":"?([^,"]*)"?.\*/\1/'
