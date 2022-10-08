Blurhash algorithm : https://www.newline.co/@kchan/static-site-generation-with-nextjs-and-typescript-part-iii-optimizing-image-loading-with-plaiceholder-and-blurhash--2e153353

$ npm install --save plaiceholder @plaiceholder/next react-blurhash

https://www.newline.co/@kchan/static-site-generation-with-nextjs-and-typescript-part-iv-dynamic-routes-with-getstaticpaths--a991c4cd
getStaticPaths: If your Next.js application depends on external data to statically generate pages for dynamic routes, such as from a content management system (CMS) for blog articles, then you can export a getStaticPaths() function that specifies the paths to generate at build time, like so:

Creating several components
touch components/{AnimalCard,AnimalCardsList}.tsx
