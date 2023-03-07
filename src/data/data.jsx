import {
  ClientTemporaryVideo,
  Apv1,
  Apv2,
  Apv3,
  Apv4,
  Spb1,
  Spb2,
  Spb3,
  Spb4,
  Snv1,
  Snv2,
  Snv3,
  Snv4,
  Apb1,
  Apb2,
  Apb3,
  Apb4,
  Snb1,
  Snb2,
  Snb3,
  Snb4,
  Aph1,
  Aph2,
  Aph3,
  Aph4,
  Sph1,
  Sph2,
  Sph3,
  Sph4,
  Anb1,
  Anb2,
  Anb3,
  Anb4,
  Logo1,
  Logo10,
  Logo2,
  Logo3,
  Logo5,
  Logo6,
  Logo8,
  Logo9,
  ModelApv,
  ModelSpb,
  ModelSnv,
  ModelApb,
  ModelSnb,
  ModelAph,
  ModelSph,
  ModelAnb,
  ModelAnv,
  ModelSpv,

  Anv1,
  Anv2,
  Anv3,
  Anv4,
  Spv1,
  Spv2,
  Spv3,
  Spv4,
  PlaceApv,
  PlaceSpb,
  PlaceSnv,
  PlaceApb,
  PlaceSnb,
  PlaceAph,
  PlaceSph,
  PlaceAnb,
  PlaceAnv,
  PlaceSpv,
 
 
} from "../assets/manage";

export const DataModel = [
  {
    foto: ModelSpv,
    placeholder: PlaceSpv,
    text: "Spv",
    bigPhoto: [Spv1, Spv2, Spv3, Spv4],
    bio: {
      keterangan: 'Sapi Puas Vakum',
      isi: 10,
      
      
    },
  },
  {
    foto: ModelSpb,
    placeholder: PlaceSpb,
    text: "Spb",
    bigPhoto: [Spb1, Spb2, Spb3, Spb4],
    bio: {
      keterangan: 'Sapi Puas Box',
      isi: 10,
    
    },
  },
  {
    foto: ModelSph,
    placeholder: PlaceSph,
    text: "Sph",
    bigPhoto: [Sph1, Sph2, Sph3, Sph4],
    bio: {
      keterangan: 'Sapi Hemat',
      isi: 5,
    
    },
  },
  {
    foto: ModelSnb,
    placeholder: PlaceSnb,
    text: "Snb",
    bigPhoto: [Snb1, Snb2, Snb3, Snb4],
    bio: {
      keterangan: 'Sapi Ngemil Box',
      isi: 4,
    
    },
  },
  {
    foto: ModelSnv,
    placeholder: PlaceSnv,
    text: "Snv",
    bigPhoto: [Snv1, Snv2, Snv4, Snv3],
    bio: {
      keterangan: 'Sapi Ngemil Vakum',
      isi: 4,
    
    },
  },
  {
    foto: ModelApv,
    placeholder: PlaceApv,
    text: "Apv",
    bigPhoto: [Apv1, Apv4, Apv3, Apv2],
    bio: {
      keterangan: 'Ayam Puas Vakum',
      isi: 10,
    
    },
  },
  {
    foto: ModelApb,
    placeholder: PlaceApb,
    text: "Apb",
    bigPhoto: [Apb1, Apb2, Apb3, Apb4],
    bio: {
      keterangan: 'Ayam Puas Box',
      isi: 10,
    
    },
  },
  {
    foto: ModelAph,
    placeholder: PlaceAph,
    text: "Aph",
    bigPhoto: [Aph1, Aph2, Aph3, Aph4],
    bio: {
      keterangan: 'Ayam Hemat',
      isi: 5,
    
    },
  },
  {
    foto: ModelAnb,
    placeholder: PlaceAnb,
    text: "Anb",
    bigPhoto: [Anb1, Anb2, Anb3, Anb4],
    bio: {
      keterangan: 'Ayam Ngemil Box',
      isi: 4,
    
    },
  },
  {
    foto: ModelAnv,
    placeholder: PlaceAnv,
    text: "Anv",
    bigPhoto: [Anv1, Anv2, Anv3, Anv4],
    bio: {
      keterangan: 'Ayam Ngemil Vakum',
      isi: 10,
    
    },
  },
 
  
];

export const DataClient = [
  {
    id: 1,
    rating: 5,
    src: ClientTemporaryVideo,
  },
  {
    id: 2,
    rating: 3,
    src: ClientTemporaryVideo,
  },
  {
    id: 3,
    rating: 4,
    src: ClientTemporaryVideo,
  },
];

export const DataLogoClient = [
  {
    image:Logo1
  },
  {
    image:Logo2
  },
  {
    image:Logo3
  },
  {
    image:Logo5
  },
  {
    image:Logo6
  },
  {
    image:Logo8
  },
  {
    image:Logo9
  },
  {
    image:Logo10
  }
]
