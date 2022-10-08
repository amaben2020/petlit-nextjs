interface AnimalTypesEnum {
  [key: string]: {
    image: {
      url: string;
      styles?: {
        backgroundPosition?: string;
        objectPosition?: string;
      };
    };
    photographer: {
      name: string;
      url: string;
    };
  };
}

// Currently, the Petfinder API does not provide a slugified identifier and stock image for each animal type.
// Once the API provides these data, remove this enum.
// Note: Since each image has different set of dimensions, we must apply corrective styling for consistency.
export const ANIMAL_TYPES: AnimalTypesEnum = {
  Dog: {
    image: {
      url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
    },
    photographer: {
      name: "Berkay Gumustekin",
      url: "https://unsplash.com/@berkaygumustekin",
    },
  },
  Cat: {
    image: {
      // Notice that you can apply more query parameters to the image to apply more transformations. `q` is for image quality (percentage-based) and `fit` is for determining how the image, post-transformation, should be fit within its new dimensions. Read more about the `fit` query parameter: https://docs.imgix.com/apis/rendering/size/fit#fill.
      url: "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=320&q=80",
      styles: {
        objectPosition: "center top",
      },
    },
    photographer: {
      name: "Timo Volz",
      url: "https://unsplash.com/@magict1911",
    },
  },
  Rabbit: {
    image: {
      url: "https://images.unsplash.com/photo-1619447257726-fe312296ee9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
    },
    photographer: {
      name: "Paige Cody",
      url: "https://unsplash.com/@paige_cody",
    },
  },
  "Small & Furry": {
    image: {
      url: "https://images.unsplash.com/photo-1618232118117-98d49b20e2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
    },
    photographer: {
      name: "Doina Gavrilov",
      url: "https://unsplash.com/@doinagavrilov",
    },
  },
  Horse: {
    image: {
      url: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
    },
    photographer: {
      name: "Annie Spratt",
      url: "https://unsplash.com/@anniespratt",
    },
  },
  Bird: {
    image: {
      url: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
      styles: {
        objectPosition: "-1rem center",
      },
    },
    photographer: {
      name: "Sharon McCutcheon",
      url: "https://unsplash.com/@sharonmccutcheon",
    },
  },
  "Scales, Fins & Other": {
    image: {
      url: "https://images.unsplash.com/photo-1604859347436-2e6925be8176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
    },
    photographer: {
      name: "Eugene Chystiakov",
      url: "https://unsplash.com/@eugenechystiakov",
    },
  },
  Barnyard: {
    image: {
      url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=320",
      styles: {
        objectPosition: "left center",
      },
    },
    photographer: {
      name: "Christopher Carson",
      url: "https://unsplash.com/@bhris1017",
    },
  },
};