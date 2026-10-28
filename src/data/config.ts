export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  layout?: 'polaroid' | 'cinematic' | 'framed';
  quote?: string;
}

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover?: string;
}

export interface PoemLine {
  acrosticLetter: string;
  text: string;
}

export interface SiteConfig {
  couple: {
    sender: string;
    recipient: string;
    occasion: string;
    date: string;
  };
  intro: {
    badge: string;
    envelopeTitle: string;
    openButtonText: string;
    hintText: string;
  };
  hero: {
    smallSubtitle: string;
    mainTitle: string;
    letterParagraph: string;
    scrollHint: string;
  };
  gardenInterlude: {
    quote: string;
    authorOrNote: string;
  };
  poemSection: {
    badge: string;
    title: string;
    subtitle: string;
    acrosticWord: string;
    lines: PoemLine[];
    signature: string;
  };
  finalMessage: {
    highlightText: string;
    loveDeclaration: string;
    subText: string;
    dateBadge: string;
  };
  playlist: SongItem[];
  photos: PhotoItem[];
}

export const siteConfig: SiteConfig = {
  couple: {
    sender: "Furkan",
    recipient: "Mehtap",
    occasion: "Doğum Günü",
    date: "29 Ekim",
  },

  intro: {
    badge: "29 Ekim • Doğum Günün Kutlu Olsun",
    envelopeTitle: "Senin için, kalbimin en güzel yerinden…",
    openButtonText: "💌 Hediyeni aç",
    hintText: "Zarif bir melodiyle eşlik etmek için sesinizi açabilirsiniz 🌷",
  },

  hero: {
    smallSubtitle: "Furkan'dan Mehtap'a Bir Aşk Mektubu",
    mainTitle: "İyi ki hayatımın en güzel hikâyesi sen olmuşsun.",
    letterParagraph:
      "Bugün sana yalnızca bir hediye vermek istemedim. Birlikte yaşadığımız güzellikleri, yüzümde bıraktığın gülümsemeleri ve seninle çoğalan dünyamı küçük bir yerde toplamak istedim.",
    scrollHint: "Anılarımızın arasında bir yolculuğa çıkmak için aşağı kaydır",
  },

  gardenInterlude: {
    quote: "Dünyada milyonlarca güzel şey var. Ama benim en sevdiğim manzara, senin olduğun yer.",
    authorOrNote: "Bahar bahçemizden bir nefes...",
  },

  poemSection: {
    badge: "Sadece Sana Özel",
    title: "Kalbimden sana…",
    subtitle: "Her mısrasında adını saklayan, ömrüme yazılmış bir ahit...",
    acrosticWord: "MEHTABIM",
    lines: [
      { acrosticLetter: "M", text: "aharetli bakışınla işledin içime," },
      { acrosticLetter: "E", text: "n derin sevdaları yazdılar şahit." },
      { acrosticLetter: "H", text: "er seferinde ruhumda bir esrime," },
      { acrosticLetter: "T", text: "anrı buyruğu eskilerden bir ahit." },
      { acrosticLetter: "A", text: "şk-ı Efzun, derd-i derunum karıma," },
      { acrosticLetter: "B", text: "içaren, yoluna olurum şehit." },
      { acrosticLetter: "I", text: "şığı müstesna, şarab-ı hançerim" },
      { acrosticLetter: "M", text: "ehtaba kül olduğum andır bu vakit!" },
    ],
    signature: "Furkan ♥ Mehtap",
  },

  finalMessage: {
    highlightText: "Doğum günün kutlu olsun, sevgilim. ❤️",
    loveDeclaration: "Seni çok seviyorum.",
    subText: "Bugün, yarın ve birlikte yaşayacağımız bütün güzel günlerde…",
    dateBadge: "29 Ekim",
  },

  playlist: [
    {
      id: "song-1",
      title: "Gönül Yarası",
      artist: "Hüsnü Arkan & Cem Adrian",
      src: "/music/husnu-arkan-gonul-yarasi.mp3",
    },
    {
      id: "song-2",
      title: "Dans Et",
      artist: "Hayko Cepkin",
      src: "/music/hayko-cepkin-dans-et.mp3",
    },
  ],

  photos: [
    {
      id: "photo-1",
      src: "/images/FY5_2620.JPG",
      alt: "Furkan & Mehtap",
      caption: "Gözlerinin değdiği her an, ömrümün en aydınlık sabahı.",
      date: "Özel Anlarımız",
      layout: "cinematic",
      quote: "En sıradan anları bile seninle güzelleştirmeyi seviyorum.",
    },
    {
      id: "photo-2",
      src: "/images/FY5_2630.JPG",
      alt: "Furkan & Mehtap",
      caption: "Yüzündeki tebessüm, hayatımın en huzurlu sığınağı.",
      date: "Birlikte Güzel",
      layout: "polaroid",
    },
    {
      id: "photo-3",
      src: "/images/FY5_2642.JPG",
      alt: "Furkan & Mehtap",
      caption: "Zaman senin yanında duruyor gibi zarif ve dingin.",
      date: "Ebedi Sevda",
      layout: "framed",
      quote: "Bazı fotoğraflar bir günden fazlasını saklar.",
    },
    {
      id: "photo-4",
      src: "/images/FY5_2647.JPG",
      alt: "Furkan & Mehtap",
      caption: "Aynı gökyüzüne seninle bakmaktan daha güzel ne olabilir?",
      date: "Birlikte Bir Ömür",
      layout: "polaroid",
    },
    {
      id: "photo-5",
      src: "/images/FY5_2828.JPG",
      alt: "Furkan & Mehtap",
      caption: "Birlikte yürüdüğümüz her yol, çiçek açan bir bahar bahçesi.",
      date: "Ömrümün Baharı",
      layout: "cinematic",
      quote: "Seninle geçen zamanın neden bu kadar kıymetli olduğunu her hatırlayışımda yeniden anlıyorum.",
    },
    {
      id: "photo-6",
      src: "/images/FY5_2844.JPG",
      alt: "Furkan & Mehtap",
      caption: "Sen benim dualarımın yeryüzündeki en asil karşılığısın.",
      date: "Aşkla",
      layout: "polaroid",
    },
    {
      id: "photo-7",
      src: "/images/IMG-20220614-WA0033.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Haziranın ilk sıcak rüzgarları ve senin sıcacık elin.",
      date: "Haziran 2022",
      layout: "polaroid",
    },
    {
      id: "photo-8",
      src: "/images/IMG-20220614-WA0034.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Birlikte attığımız her kahkaha kalbime işlenen bir nota.",
      date: "Haziran 2022",
      layout: "polaroid",
    },
    {
      id: "photo-9",
      src: "/images/IMG-20220614-WA0049.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Göz göze geldiğimizde tüm dünya sessizleşir.",
      date: "Yaz Anıları",
      layout: "framed",
      quote: "Senin gülüşün, bir ömre bedel bir hazine.",
    },
    {
      id: "photo-10",
      src: "/images/IMG-20220809-WA0006.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Ağustos akşamlarının serinliği ve senin varlığının huzuru.",
      date: "Ağustos 2022",
      layout: "polaroid",
    },
    {
      id: "photo-11",
      src: "/images/IMG-20220812-WA0017.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Yollar, şehirler değişir ama senin yanın hep evim.",
      date: "Ağustos 2022",
      layout: "polaroid",
    },
    {
      id: "photo-12",
      src: "/images/IMG-20220830-WA0019.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Her yeni güne senin adınla uyanmanın şükrüyle...",
      date: "Ağustos 2022",
      layout: "cinematic",
      quote: "Birlikte geçen her saniye, kalbime yazılmış bir şiir.",
    },
    {
      id: "photo-13",
      src: "/images/IMG-20220927-WA0020.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Sonbaharın gelişini bile güzelleştiren o zarif tebessüm.",
      date: "Eylül 2022",
      layout: "polaroid",
    },
    {
      id: "photo-14",
      src: "/images/IMG-20221022-WA0027.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Ekim rüzgarları eserken elini tutmanın güveni.",
      date: "Ekim 2022",
      layout: "polaroid",
    },
    {
      id: "photo-15",
      src: "/images/IMG-20221030-WA0026.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Bir doğum gününün ertesinde, nice güzel yılların müjdesi.",
      date: "Ekim 2022",
      layout: "framed",
    },
    {
      id: "photo-16",
      src: "/images/IMG-20230226-WA0016.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Kışın soğuğunda bile kalbimi ısıtan tek güneşsin.",
      date: "Şubat 2023",
      layout: "polaroid",
    },
    {
      id: "photo-17",
      src: "/images/IMG-20230408-WA0022.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Nisan laleleri gibi taptaze ve saf...",
      date: "Nisan 2023",
      layout: "polaroid",
    },
    {
      id: "photo-18",
      src: "/images/IMG-20230408-WA0037.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Baharı getiren çiçekler değil, senin bana bakan gözlerin.",
      date: "Nisan 2023",
      layout: "cinematic",
      quote: "Seninle çoğalan dünyam, bana verilen en kutlu lütuf.",
    },
    {
      id: "photo-19",
      src: "/images/IMG-20230408-WA0056.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Masum bir bakış, sonsuz bir sevgi.",
      date: "Nisan 2023",
      layout: "polaroid",
    },
    {
      id: "photo-20",
      src: "/images/IMG-20230408-WA0057.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Birlikte kurduğumuz hayallerin her biri birer çiçek oldu.",
      date: "Nisan 2023",
      layout: "polaroid",
    },
    {
      id: "photo-21",
      src: "/images/IMG-20230409-WA0017.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "Yan yana geçen her an ömrüme ömür katıyor.",
      date: "Nisan 2023",
      layout: "polaroid",
    },
    {
      id: "photo-22",
      src: "/images/IMG-20230409-WA0019.jpg",
      alt: "Furkan & Mehtap Anı",
      caption: "İyi ki varsın, iyi ki yanımdasın sevgilim.",
      date: "Nisan 2023",
      layout: "framed",
    },
  ],
};
