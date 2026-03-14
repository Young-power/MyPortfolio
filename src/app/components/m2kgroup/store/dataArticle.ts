type StockStatus = "disponible" | "fini";

export type ArticleType = {
  id: number;
  name: string;
  description: string;
  images: { link: string; alt: string }[]; // modification ici
  stock: {
    status: StockStatus;
    quantity: number;
  };
  price: number;
};

// Exemple de tableau avec plusieurs articles
export const dataArticle: ArticleType[] = [
  {
    id: 1,
    name: "Webcam HD 1080p",
    description: `Avec la Webcam HD 1080p, chaque expression compte. Son capteur CMOS haute sensibilité capture les moindres détails en Full HD (1920x1080) à 30 images par seconde – parfait pour les cours en ligne, le télétravail ou les appels en famille.

L’autofocus intégré vous suit dans vos mouvements, et la correction adaptative de la lumière ajuste automatiquement l’image, même en fin de journée ou sous un éclairage tamisé. Fini les visages sombres ou flous ! Le microphone antibruit filtre les bruits de fond pour que votre voix passe clairement, sans “hein ?” intempestifs.

C’est simple : branchez-la en USB (plug-and-play), et elle fonctionne immédiatement avec Windows, Mac et Chrome OS. Pas de driver, pas de prise de tête`,
    images: [
      { link: "/assets/m2kgroup/cam1-1.jpeg", alt: "Webcam HD 1080p - vue 1" },
      { link: "/assets/m2kgroup/cam1-2.jpeg", alt: "Webcam HD 1080p - vue 2" },
      { link: "/assets/m2kgroup/cam1-3.jpeg", alt: "Webcam HD 1080p - vue 3" },
      { link: "/assets/m2kgroup/cam1-4.jpeg", alt: "Webcam HD 1080p - vue 4" },
      { link: "/assets/m2kgroup/cam1-5.jpeg", alt: "Webcam HD 1080p - vue 5" },
      { link: "/assets/m2kgroup/cam1-6.jpeg", alt: "Webcam HD 1080p - vue 6" }



    ],
    stock: {
      status: "disponible",
      quantity: 7
    },
    price: 5500
  },

  {
    id: 2,
    name: "Mini Webcam USB HD 1080p avec Microphone",
    description: "Table basse en verre trempé avec pieds en métal noir.",
    images: [
      { link: "/assets/m2kgroup/cam2-1.jpeg", alt: "Mini Webcam USB HD 1080p - vue 1" },
      { link: "/assets/m2kgroup/cam2-2.jpeg", alt: "Mini Webcam USB HD 1080p - vue 2" },
      { link: "/assets/m2kgroup/cam2-3.jpeg", alt: "Mini Webcam USB HD 1080p - vue 3" },
      { link: "/assets/m2kgroup/cam2-4.jpeg", alt: "Mini Webcam USB HD 1080p - vue 4" },
      { link: "/assets/m2kgroup/cam2-5.jpeg", alt: "Mini Webcam USB HD 1080p - vue 5" }


    ],
    stock: {
      status: "fini",
      quantity: 5
    },
    price: 6300
  },
  {
    id: 3,
    name: "Souris sans fil Rechargeable-2,4DHz",
    description: "Lampe de chevet LED à intensité réglable, design minimaliste.",
    images: [
      { link: "/assets/m2kgroup/cam3-1.jpeg", alt: "Souris sans fil Rechargeable - vue 1" },
      { link: "/assets/m2kgroup/cam3-2.jpeg", alt: "Souris sans fil Rechargeable - vue 2" },
      { link: "/assets/m2kgroup/cam3-3.jpeg", alt: "Souris sans fil Rechargeable - vue 3" },
      { link: "/assets/m2kgroup/cam3-4.jpeg", alt: "Souris sans fil Rechargeable - vue 4" },
      { link: "/assets/m2kgroup/cam3-5.jpeg", alt: "Souris sans fil Rechargeable - vue 5" }
    ],
    stock: {
      status: "disponible",
      quantity: 3
    },
    price: 3700
  }
];