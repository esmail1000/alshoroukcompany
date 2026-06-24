import type { Locale } from "@/lib/i18n";

export type ProductVariant = {
  title: string;
  description: string;
  image: string;
  images?: readonly string[];
  sizes: readonly string[];
  applications?: readonly string[];
  features?: readonly string[];
};

export type Product = {
  slug: string;
  title: string;
  description: string;
  usage: string;
  specs: string;
  image: string;
  details: string;
  sizes: readonly string[];
  applications: readonly string[];
  features: readonly string[];
  variants?: readonly ProductVariant[];
};

export type Feature = {
  title: string;
  description: string;
};

export type Article = {
  title: string;
  excerpt: string;
  href: string;
};

export const content = {
  ar: {
    seo: {
      title: "الشروق لمواد البناء | تصنيع وبيع الطوب والمنتجات الأسمنتية",
      description:
        "شركة الشروق لتصنيع وبيع الطوب الأحمر والطوب الأسمنتي والبلوك والإنترلوك والبردورات، مع توريد سريع للمواقع وجودة مطابقة للمواصفات."
    },
    nav: [
      { label: "الرئيسية", href: "/ar" },
      { label: "من نحن", href: "/ar/about" },
      { label: "المنتجات", href: "/ar/products" },
      { label: "المعرض", href: "/ar/gallery" },
      { label: "تواصل معنا", href: "/ar/contact" },
      { label: "مقالات", href: "/ar/articles" }
    ],
    cta: "اطلب عرض سعر",
    languageLabel: "English",
    hero: {
      eyebrow: "الشروق لمواد البناء - Alshorouk Company",
      title: "أفضل جودة طوب لمشروعات تدوم لسنين",
      subtitle:
        "تصنيع وبيع الطوب الطفلي والطوب الأسمنتي والبلوك والإنترلوك والبردورات، مع قدرة توريد مناسبة للمشروعات الكبرى وسرعة التزام بالمواعيد.",
      primaryAction: "اطلب عرض سعر",
      secondaryAction: "تواصل واتساب",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
      stats: [
        { value: "+3", label: "مصانع إنتاج" },
        { value: "+6", label: "فئات منتجات" },
        { value: "24/7", label: "استقبال طلبات" }
      ],
      highlights: [
        "توريد للمواقع والمشروعات",
        "منتجات مطابقة للمواصفات",
        "كميات كبيرة حسب الطلب"
      ],
      cardNote: "ممثلو التسويق والمبيعات لدى مصانع الشروق وسينا"
    },
    about: {
      sectionLabel: "من نحن",
      title: "خبرة صناعية وتسويقية لخدمة مشروعات البناء في مصر",
      description:
        "شركة الشروق من رواد صناعة وتسويق الطوب في مصر، وتشمل منتجاتها الطوب الأسمنتي والطوب الطفلي والإنترلوك المتداخل والبردورات للحدائق والأرصفة. الشركة هي ممثل التسويق والمبيعات لدى مصانعنا، وتعمل على توفير منتجات عالية الجودة بكميات تناسب احتياجات السوق والمشروعات الكبيرة.",
      plantsTitle: "مصانعنا",
      plants: [
        "مصنع الشروق لجميع المنتجات الأسمنتية والطوب الطفلي",
        "مصنع سينا للطوب الطفلي"
      ],
      extra:
        "تعتمد مصانعنا على خطوط إنتاج حديثة لتلبية احتياجات السوق المحلي، ويتميز موقعها الاستراتيجي بالقرب من مصادر المواد الخام وبالقرب من مشروعات كبرى مثل العاصمة الإدارية الجديدة، العلمين الجديدة، رأس الحكمة، زايد الجديدة، ومشروعات شرق وغرب قناة السويس."
    },
    quality: {
      sectionLabel: "الجودة والاعتمادات",
      title: "منتجات مطابقة للمواصفات وموثوقة في مواقع العمل",
      description:
        "جودة منتجاتنا مقبولة ومعتمدة من الشركات والمشروعات التي تعاملت معنا، كما أن منتجاتنا معتمدة من المركز القومي لبحوث الإسكان والبناء. نحرص على تقديم منتج عالي الجودة ومطابق للمواصفات القياسية المصرية والعالمية، مع إمكانية تنفيذ أشكال ومواصفات خاصة طبقًا لاحتياجات العملاء.",
      points: [
        "مطابقة للمواصفات القياسية المصرية والعالمية",
        "إمكانية تنفيذ مقاسات ومواصفات خاصة",
        "سابقة أعمال قوية مع شركات ومشروعات متنوعة",
        "هدفنا تقديم منتج يرضي العميل ويناسب مواصفات مشروعه"
      ]
    },
    productsSection: {
      sectionLabel: "منتجاتنا",
      title: "كل ما يحتاجه مشروعك من الطوب والمنتجات الأسمنتية",
      description:
        "منتجات منظمة بجودة ثابتة وخيارات مناسبة للمقاولين وشركات التشطيب والموزعين."
    },
    products: [
      {
        slug: "red-clay-bricks",
        title: "طوب أحمر / طوب طفلي",
        description:
          "طوب طفلي عالي الجودة لأعمال المباني والحوائط الداخلية والخارجية، متوفر بأنواع دوبل وفرداني بمقاسات واضحة حسب احتياج المشروع.",
        usage: "الاستخدام: المباني السكنية والتجارية والحوائط والأسوار.",
        specs: "المقاسات: دوبل 20 / دوبل 24 / دوبل 25 / فرداني 20 / فرداني 24.",
        image: "/images/products/red-clay-double.webp",
        details:
          "الطوب الأحمر / الطوب الطفلي من المنتجات الأساسية لأعمال البناء، ونوفره بأنواع دوبل وفرداني بمقاسات تناسب الحوائط الداخلية والخارجية وأعمال التقسيم. يتم تأكيد الكميات وجدول التوريد طبقًا لاحتياج المشروع ومكان التوريد.",
        sizes: [
          "طوب دوبل 20: المقاس 10 × 12 × 20 سم",
          "طوب دوبل 24: المقاس 11 × 12 × 24 سم",
          "طوب دوبل 25: المقاس 12 × 12 × 25 سم",
          "طوب فرداني 20: المقاس 6 × 10 × 20 سم",
          "طوب فرداني 24: المقاس 6 × 11 × 24 سم"
        ],
        applications: [
          "المباني السكنية والتجارية",
          "الحوائط الداخلية والخارجية",
          "الأسوار وأعمال التقسيم",
          "مشروعات المقاولات والتطوير العقاري"
        ],
        features: [
          "مقاسات واضحة ومتعددة",
          "مناسب لأعمال البناء اليومية",
          "توريد منظم حسب احتياج الموقع",
          "اختيار بين الطوب الدوبل والفرداني"
        ],
        variants: [
          {
            title: "طوب دوبل 20",
            description:
              "طوب أحمر دوبل مناسب لأعمال الحوائط التي تحتاج سمكًا ومتانة أعلى مع توريد منظم للمواقع.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["المقاس: 10 × 12 × 20 سم"],
            applications: [
              "الحوائط الداخلية والخارجية",
              "المباني السكنية والتجارية",
              "أعمال التقسيم والأسوار"
            ],
            features: [
              "مقاس واضح للتنفيذ",
              "مناسب للكميات الكبيرة",
              "توريد حسب احتياج المشروع"
            ]
          },
          {
            title: "طوب دوبل 24",
            description:
              "طوب أحمر دوبل بمقاس عملي للمشروعات التي تحتاج حلًا قويًا ومرنًا في أعمال المباني.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["المقاس: 11 × 12 × 24 سم"],
            applications: [
              "الحوائط الخارجية",
              "المباني السكنية والتجارية",
              "مشروعات المقاولات"
            ],
            features: [
              "مناسب للحوائط الأكثر سمكًا",
              "متاح للتوريد بكميات",
              "اختيار عملي للمواقع"
            ]
          },
          {
            title: "طوب دوبل 25",
            description:
              "طوب أحمر دوبل بمقاس أكبر يناسب أعمال البناء التي تتطلب سمكًا أعلى طبقًا لاحتياج المشروع.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["المقاس: 12 × 12 × 25 سم"],
            applications: [
              "الحوائط والأسوار",
              "مشروعات التطوير العقاري",
              "أعمال البناء العامة"
            ],
            features: [
              "مقاس كبير ومناسب للمشروعات",
              "جودة ثابتة في التوريد",
              "توريد حسب الكمية والموقع"
            ]
          },
          {
            title: "طوب فرداني 20",
            description:
              "طوب أحمر فرداني مناسب لأعمال التقسيم والحوائط الداخلية عندما يكون السمك المطلوب أقل.",
            image: "/images/products/red-clay-single.webp",
            sizes: ["المقاس: 6 × 10 × 20 سم"],
            applications: [
              "الحوائط الداخلية",
              "أعمال التقسيم",
              "التشطيبات والمباني الخفيفة"
            ],
            features: [
              "عملي في التقسيمات",
              "سهل الاستخدام في الموقع",
              "توريد منظم للمشروعات"
            ]
          },
          {
            title: "طوب فرداني 24",
            description:
              "طوب أحمر فرداني بمقاس أطول مناسب لأعمال الحوائط الداخلية والتقسيمات حسب متطلبات المشروع.",
            image: "/images/products/red-clay-single.webp",
            sizes: ["المقاس: 6 × 11 × 24 سم"],
            applications: [
              "الحوائط الداخلية",
              "التقسيمات المعمارية",
              "المباني السكنية والتجارية"
            ],
            features: [
              "مقاس عملي للتنفيذ",
              "مناسب لأعمال التقسيم",
              "توريد حسب الطلب"
            ]
          }
        ]
      },

      {
        slug: "cement-bricks",
        title: "طوب أسمنتي",
        description:
          "طوب أسمنتي مصمت قوي ومناسب للأعمال التي تحتاج تحمل ومتانة مع إنتاج بكميات كبيرة.",
        usage: "الاستخدام: الحوائط، الأسوار، الأعمال الإنشائية.",
        specs: "المقاسات: مصمت 20 / مصمت 25 بمواصفات واضحة.",
        image: "/images/products/cement-solid-20.webp",
        details:
          "الطوب الأسمنتي المصمت مناسب للمشروعات التي تحتاج منتجًا قويًا ومتينًا، ويستخدم في الحوائط والأسوار وبعض الأعمال الإنشائية طبقًا لمتطلبات التصميم والمواصفات. نوفر منه مصمت 20 ومصمت 25 مع توضيح القياسات والوزن والإجهاد والكثافة ونسبة الامتصاص ومعامل الحريق.",
        sizes: [
          "مصمت 20: القياس 6 × 10 × 20 سم - الوزن 2.5 كجم/م²",
          "مصمت 20: الإجهاد 145 – 175 كجم/سم² - متوسط الكثافة 2090 كجم/م³",
          "مصمت 20: متوسط الامتصاص 6% - معامل الحريق 2 ساعة",
          "مصمت 25: القياس 6 × 12 × 25 سم - الوزن 3.6 كجم/م²",
          "مصمت 25: الإجهاد 145 – 175 كجم/سم² - متوسط الكثافة 2050 كجم/م³",
          "مصمت 25: متوسط الامتصاص 6% - معامل الحريق 2 ساعة"
        ],
        applications: [
          "الحوائط والأسوار",
          "المباني الخدمية والصناعية",
          "أعمال التقسيم والفواصل",
          "مواقع الإنشاء والتشطيب"
        ],
        features: [
          "تحمل ومتانة عالية",
          "خامة أسمنتية قوية",
          "مناسب للكميات الكبيرة",
          "سهولة في التخزين والتوريد"
        ],
        variants: [
          {
            title: "مصمت 20",
            description:
              "طوب أسمنتي مصمت مناسب لأعمال الحوائط والأسوار التي تحتاج منتجًا قويًا بمقاس عملي وسهل الاستخدام في الموقع.",
            image: "/images/products/cement-solid-20.webp",
            sizes: [
              "القياس: 6 × 10 × 20 سم",
              "الوزن: 2.5 كجم/م²",
              "الإجهاد: 145 – 175 كجم/سم²",
              "متوسط الكثافة: 2090 كجم/م³",
              "متوسط الامتصاص: 6%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الحوائط والأسوار",
              "أعمال التقسيم والفواصل",
              "المباني الخدمية والصناعية"
            ],
            features: [
              "مصمت وقوي",
              "مناسب للتوريد بالكميات",
              "مواصفات واضحة للمشروعات"
            ]
          },
          {
            title: "مصمت 25",
            description:
              "طوب أسمنتي مصمت بمقاس أكبر يناسب الأعمال التي تحتاج متانة أعلى واستخدامًا منظمًا في المشروعات المختلفة.",
            image: "/images/products/cement-solid-25.webp",
            sizes: [
              "القياس: 6 × 12 × 25 سم",
              "الوزن: 3.6 كجم/م²",
              "الإجهاد: 145 – 175 كجم/سم²",
              "متوسط الكثافة: 2050 كجم/م³",
              "متوسط الامتصاص: 6%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الحوائط والأسوار",
              "الأعمال الإنشائية حسب المواصفة",
              "المشروعات التي تحتاج متانة أعلى"
            ],
            features: [
              "مقاس أكبر",
              "تحمل ومتانة",
              "توريد حسب احتياج الموقع"
            ]
          }
        ]
      },
      {
        slug: "blocks",
        title: "بلوك",
        description:
          "بلوك أسمنتي مفرغ للمشروعات التي تتطلب سرعة تنفيذ وكفاءة في الاستخدام، متوفر بمقاسات 10 و12 و20 و25 سم.",
        usage: "الاستخدام: مباني، فواصل، أسوار، مشروعات كبرى.",
        specs: "المقاسات: بلوك 10 مفرغ / بلوك 12 مفرغ / بلوك 20 مفرغ / بلوك 25 مفرغ.",
        image: "/images/products/hollow-block-20.webp",
        details:
          "البلوك الأسمنتي المفرغ من الحلول العملية للمقاولين والمطورين، حيث يساعد على سرعة التنفيذ في الحوائط والفواصل والأسوار. نوفر مقاسات متعددة بمواصفات واضحة تشمل القياس والوزن والإجهاد والكثافة ونسبة الامتصاص ومعامل الحريق، مع إمكانية التوريد للمواقع بكميات كبيرة.",
        sizes: [
          "بلوك 10 مفرغ: القياس 40 × 20 × 10 سم - الوزن 12 كجم/م²",
          "بلوك 12 مفرغ: القياس 40 × 20 × 12 سم - الوزن 13 كجم/م²",
          "بلوك 20 مفرغ: القياس 40 × 20 × 20 سم - الوزن 19 كجم/م²",
          "بلوك 25 مفرغ: القياس 40 × 20 × 25 سم - الوزن 24 كجم/م²"
        ],
        applications: [
          "المباني السكنية والإدارية",
          "الفواصل الداخلية والخارجية",
          "الأسوار والمواقع المفتوحة",
          "المشروعات التي تحتاج سرعة تنفيذ"
        ],
        features: [
          "سرعة في التنفيذ",
          "مناسب للكميات الكبيرة",
          "اختيارات متعددة للمقاسات",
          "حل عملي للمقاولين والمشروعات"
        ],
        variants: [
          {
            title: "بلوك 10 مفرغ",
            description:
              "بلوك أسمنتي مفرغ بسمك 10 سم مناسب للفواصل والحوائط التي تحتاج وزنًا أخف وسرعة في التنفيذ.",
            image: "/images/products/hollow-block-10.webp",
            sizes: [
              "القياس: 40 × 20 × 10 سم",
              "الوزن: 12 كجم/م²",
              "الإجهاد: 35 – 42 كجم/سم²",
              "متوسط الكثافة: 2172 كجم/م³",
              "متوسط الامتصاص: 6%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الفواصل الداخلية",
              "الحوائط غير الحاملة",
              "مشروعات التشطيب والبناء"
            ],
            features: [
              "خفيف نسبيًا وسهل الاستخدام",
              "مناسب للتوريد بكميات كبيرة",
              "قياس عملي للمواقع"
            ]
          },
          {
            title: "بلوك 12 مفرغ",
            description:
              "بلوك أسمنتي مفرغ بسمك 12 سم مناسب لأعمال الحوائط والفواصل التي تحتاج مقاسًا متوسطًا.",
            image: "/images/products/hollow-block-12.webp",
            sizes: [
              "القياس: 40 × 20 × 12 سم",
              "الوزن: 13 كجم/م²",
              "الإجهاد: 4 نيوتن",
              "متوسط الكثافة: 2191 كجم/م³",
              "متوسط الامتصاص: 7%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الفواصل والحوائط",
              "المباني السكنية والإدارية",
              "مشروعات المقاولات"
            ],
            features: [
              "مقاس متوسط ومناسب للتنفيذ",
              "توريد حسب الكمية والموقع",
              "مواصفات واضحة قبل الطلب"
            ]
          },
          {
            title: "بلوك 20 مفرغ",
            description:
              "بلوك أسمنتي مفرغ بسمك 20 سم مناسب للحوائط التي تحتاج سمكًا أكبر واستخدامًا عمليًا في المشروعات.",
            image: "/images/products/hollow-block-20.webp",
            sizes: [
              "القياس: 40 × 20 × 20 سم",
              "الوزن: 19 كجم/م²",
              "الإجهاد: 4 نيوتن",
              "متوسط الكثافة: 2125 كجم/م³",
              "متوسط الامتصاص: 6%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الحوائط والفواصل الخارجية",
              "الأسوار والمواقع المفتوحة",
              "مشروعات البناء الكبيرة"
            ],
            features: [
              "سمك مناسب للأعمال الثقيلة نسبيًا",
              "مناسب للكميات الكبيرة",
              "توريد منظم للموقع"
            ]
          },
          {
            title: "بلوك 25 مفرغ",
            description:
              "بلوك أسمنتي مفرغ بسمك 25 سم مناسب للأعمال التي تحتاج سمكًا أكبر ومتانة أعلى طبقًا لمتطلبات المشروع.",
            image: "/images/products/hollow-block-25.webp",
            sizes: [
              "القياس: 40 × 20 × 25 سم",
              "الوزن: 24 كجم/م²",
              "الإجهاد: 7 نيوتن",
              "متوسط الكثافة: 2177 كجم/م³",
              "متوسط الامتصاص: 6%",
              "معامل الحريق: 2 ساعة"
            ],
            applications: [
              "الحوائط الأكبر سمكًا",
              "الأسوار والمباني الخدمية",
              "المشروعات التي تتطلب مقاسًا أكبر"
            ],
            features: [
              "سمك كبير ومناسب للمشروعات",
              "مواصفات فنية واضحة",
              "إمكانية توريد كميات كبيرة"
            ]
          }
        ]
      },
      {
        slug: "interlock",
        title: "إنترلوك",
        description:
          "إنترلوك متداخل بأشكال متعددة مثل حرف S وحرف I والسداسي والباركيه، مناسب للأرصفة والمداخل والحدائق واللاندسكيب.",
        usage: "الاستخدام: الأرصفة، الحدائق، المداخل، الجراجات، الممرات، واللاندسكيب.",
        specs: "الأشكال: حرف S / حرف I / سداسي / باركيه - السماكة: 6 أو 8 سم - الألوان: جميع الألوان متاحة.",
        image: "/images/products/interlock-i-gray.webp",
        details:
          "توفر شركة الشروق إنترلوك عالي الجودة بأشكال وألوان متعددة ليناسب أعمال الأرصفة والمداخل والحدائق والجراجات والممرات والمساحات الخارجية. جميع الألوان متاحة حسب التصميم، ويتم تحديد الإجهاد طبقًا للمواصفات المطلوبة للمشروع.",
        sizes: [
          "إنترلوك حرف S: الأبعاد 24 × 12 سم - السمك 6 أو 8 سم - عدد الوحدات 35 وحدة/م²",
          "إنترلوك حرف I: الأبعاد 20 × 16.5 سم - السمك 6 أو 8 سم - عدد الوحدات 36 وحدة/م²",
          "إنترلوك سداسي: الأبعاد 23 × 20 سم - السمك 6 أو 8 سم - عدد الوحدات 29 وحدة/م²",
          "إنترلوك باركيه: الأبعاد 20 × 10 سم - السمك 6 أو 8 سم - عدد الوحدات 50 وحدة/م²",
          "الوزن: من 135 إلى 175 كجم/م² حسب السماكة",
          "متوسط الامتصاص: 6%",
          "الألوان: جميع الألوان متاحة"
        ],
        applications: [
          "الأرصفة والمداخل",
          "الحدائق واللاندسكيب",
          "الممرات والمساحات الخارجية",
          "الجراجات وساحات الانتظار",
          "المشروعات السكنية والتجارية"
        ],
        features: [
          "أشكال متعددة تناسب التصميمات المختلفة",
          "ألوان متعددة حسب طلب العميل",
          "سماكات 6 و8 سم حسب الاستخدام",
          "مناسب للمشروعات والكميات الكبيرة",
          "سهولة في الصيانة والاستبدال"
        ],
        variants: [
          {
            title: "إنترلوك حرف S",
            description:
              "إنترلوك حرف S مناسب للأرصفة والممرات والحدائق والمساحات الخارجية، ويتميز بشكل متداخل يعطي ثباتًا ومظهرًا منظمًا.",
            image: "/images/products/interlock-s-gray.webp",
            sizes: [
              "الأبعاد: 24 × 12 سم",
              "سمك الوحدة: 6 أو 8 سم",
              "الوزن: 135 – 175 كجم/م²",
              "عدد الوحدات/م²: 35",
              "متوسط الامتصاص: 6%",
              "مساحة القطعة: 260 سم²",
              "الإجهاد: حسب المواصفات المطلوبة",
              "الألوان: جميع الألوان متاحة"
            ],
            applications: [
              "الأرصفة والممرات",
              "الحدائق واللاندسكيب",
              "المداخل والمساحات الخارجية"
            ],
            features: [
              "شكل متداخل عملي",
              "متوفر بسماكات 6 و8 سم",
              "ألوان متعددة حسب التصميم"
            ]
          },
          {
            title: "إنترلوك حرف I",
            description:
              "إنترلوك حرف I مناسب للمداخل والجراجات والممرات، ومتواجد بألوان متعددة ويتم عرض الألوان المختلفة لنفس النوع مع نفس المواصفات.",
            image: "/images/products/interlock-i-gray.webp",
            images: [
              "/images/products/interlock-i-gray.webp",
              "/images/products/interlock-i-red.webp"
            ],
            sizes: [
              "الأبعاد: 20 × 16.5 سم",
              "سمك الوحدة: 6 أو 8 سم",
              "الوزن: 135 – 175 كجم/م²",
              "عدد الوحدات/م²: 36",
              "متوسط الامتصاص: 6%",
              "مساحة القطعة: 280 سم²",
              "الإجهاد: حسب المواصفات المطلوبة",
              "الألوان: جميع الألوان متاحة"
            ],
            applications: [
              "المداخل والجراجات",
              "الأرصفة والممرات",
              "المشروعات السكنية والتجارية"
            ],
            features: [
              "شكل قوي ومناسب للاستخدام العملي",
              "متوفر بألوان متعددة",
              "توريد حسب الكمية والموقع"
            ]
          },
          {
            title: "إنترلوك سداسي",
            description:
              "إنترلوك سداسي يعطي مظهرًا جماليًا منظمًا للممرات والحدائق واللاندسكيب، مع إمكانية اختيار اللون المناسب للتصميم.",
            image: "/images/products/interlock-hex-gray.webp",
            images: [
              "/images/products/interlock-hex-gray.webp",
              "/images/products/interlock-hex-red.webp"
            ],
            sizes: [
              "الأبعاد: 23 × 20 سم",
              "سمك الوحدة: 6 أو 8 سم",
              "الوزن: 135 – 175 كجم/م²",
              "عدد الوحدات/م²: 29",
              "متوسط الامتصاص: 6%",
              "مساحة القطعة: 345 سم²",
              "الإجهاد: حسب المواصفات المطلوبة",
              "الألوان: جميع الألوان متاحة"
            ],
            applications: [
              "الحدائق واللاندسكيب",
              "الأرصفة والممرات",
              "المساحات الخارجية"
            ],
            features: [
              "شكل سداسي جمالي",
              "ألوان متعددة حسب الطلب",
              "مناسب للتصميمات الخارجية"
            ]
          },
          {
            title: "إنترلوك باركيه",
            description:
              "إنترلوك باركيه مناسب للأرصفة والمداخل والممرات التي تحتاج شكلًا منتظمًا وسهل التركيب.",
            image: "/images/products/interlock-parquet-gray.webp",
            sizes: [
              "الأبعاد: 20 × 10 سم",
              "سمك الوحدة: 6 أو 8 سم",
              "الوزن: 135 – 175 كجم/م²",
              "عدد الوحدات/م²: 50",
              "متوسط الامتصاص: 6%",
              "مساحة القطعة: 200 سم²",
              "الإجهاد: حسب المواصفات المطلوبة",
              "الألوان: جميع الألوان متاحة"
            ],
            applications: [
              "الأرصفة والممرات",
              "المداخل والمساحات الخارجية",
              "أعمال اللاندسكيب"
            ],
            features: [
              "شكل منتظم وسهل التنسيق",
              "عدد وحدات مناسب للمتر المربع",
              "متوفر بسماكات وألوان متعددة"
            ]
          }
        ]
      },
      {
        slug: "curbstones",
        title: "بردورات",
        description:
          "بردورات للحدائق والأرصفة والطرق بتشطيب قوي ومظهر منظم للمواقع الخارجية، متوفرة بأنواع حدائق وأرصفة وعجالي.",
        usage: "الاستخدام: الأرصفة، الطرق، الحدائق، تنظيم المسارات.",
        specs: "المقاسات: بردورات حدائق / بردورات أرصفة / عجالي.",
        image: "/images/products/curbstone-garden.webp",
        details:
          "البردورات تستخدم لتنظيم الأرصفة والطرق والحدائق وتحديد المسارات والمناطق الخارجية بشكل عملي ومنظم. نوفر بردورات كبس آلي بمقاسات واضحة، مع تحديد الإجهاد طبقًا للمواصفات المطلوبة لكل مشروع.",
        sizes: [
          "بردورات حدائق: الأبعاد 8 × 25 × 50 سم",
          "بردورات أرصفة: الأبعاد 15 × 12 × 30 × 50 سم",
          "عجالي: الأبعاد 30 × 25 × 30 × 50 سم",
          "النوع: كبس آلي",
          "الإجهاد: حسب المواصفات المطلوبة"
        ],
        applications: [
          "الأرصفة والطرق",
          "الحدائق والمساحات الخارجية",
          "تنظيم المسارات والمداخل",
          "مشروعات اللاندسكيب والمرافق"
        ],
        features: [
          "تصنيع بنظام الكبس الآلي",
          "مقاسات مناسبة للحدائق والأرصفة",
          "تشطيب قوي ومنظم",
          "توريد حسب احتياج المشروع"
        ],
        variants: [
          {
            title: "بردورات حدائق",
            description:
              "بردورات مناسبة لتنسيق الحدائق والمساحات الخارجية وتحديد المسارات بشكل منظم.",
            image: "/images/products/curbstone-garden.webp",
            sizes: [
              "الأبعاد: 8 × 25 × 50 سم",
              "النوع: كبس آلي",
              "الإجهاد: حسب المواصفات المطلوبة"
            ],
            applications: [
              "تنسيق الحدائق",
              "الممرات والمساحات الخارجية",
              "مشروعات اللاندسكيب"
            ],
            features: [
              "مظهر منظم",
              "تصنيع بالكبس الآلي",
              "مناسب للمساحات الخارجية"
            ]
          },
          {
            title: "بردورات أرصفة",
            description:
              "بردورات أرصفة لتحديد جوانب الأرصفة والممرات والطرق الداخلية بالمواقع.",
            image: "/images/products/curbstone-sidewalk.webp",
            sizes: [
              "الأبعاد: 15 × 12 × 30 × 50 سم",
              "النوع: كبس آلي",
              "الإجهاد: حسب المواصفات المطلوبة"
            ],
            applications: [
              "الأرصفة",
              "الطرق الداخلية",
              "المداخل والممرات"
            ],
            features: [
              "مناسب للأرصفة",
              "تشطيب قوي",
              "توريد للمشروعات"
            ]
          },
          {
            title: "عجالي",
            description:
              "بردورة عجالي بمقاس عملي للمواقع التي تحتاج تحديدًا قويًا ومنظمًا للطرق والمسارات.",
            image: "/images/products/curbstone-ajaly.webp",
            sizes: [
              "الأبعاد: 30 × 25 × 30 × 50 سم",
              "النوع: كبس آلي",
              "الإجهاد: حسب المواصفات المطلوبة"
            ],
            applications: [
              "الطرق والمداخل",
              "تنظيم المسارات",
              "المشروعات الخارجية"
            ],
            features: [
              "مقاس قوي للمواقع",
              "تصنيع بالكبس الآلي",
              "مناسب للتوريد بكميات"
            ]
          }
        ]
      },
      {
        slug: "custom-products",
        title: "منتجات حسب الطلب",
        description:
          "تنفيذ منتجات خرسانية بمقاسات وأشكال وألوان خاصة طبقًا لمواصفات مشروعك واحتياجات الموقع.",
        usage: "الاستخدام: المشروعات الخاصة، اللاندسكيب، الأرصفة، الطرق، والكميات الكبيرة.",
        specs: "المواصفات: يتم تنفيذها بعد مراجعة المقاسات والرسومات والكمية المطلوبة.",
        image: "/images/products/cement-brick.webp",
        details:
          "توفر شركة الشروق إمكانية تصنيع منتجات خرسانية خاصة طبقًا للمواصفات المطلوبة من العميل أو الاستشاري، سواء كانت مقاسات غير قياسية، أشكال خاصة، ألوان محددة، أو كميات كبيرة للمشروعات. يتم مراجعة تفاصيل الطلب فنيًا قبل الإنتاج لتحديد أفضل حل مناسب للموقع وجدول التوريد.",
        sizes: [
          "مقاسات خاصة حسب الرسومات أو المواصفات المطلوبة",
          "أشكال وتصميمات غير قياسية حسب طبيعة المشروع",
          "ألوان خاصة لأعمال اللاندسكيب والتشطيبات الخارجية",
          "إمكانية تنفيذ كميات كبيرة للمشروعات بعد اعتماد المواصفات",
          "مراجعة فنية للطلب قبل تقديم عرض السعر والبدء في التصنيع"
        ],
        applications: [
          "شركات المقاولات والمطورين العقاريين",
          "مشروعات اللاندسكيب والحدائق",
          "الأرصفة والمداخل والطرق الداخلية",
          "المشروعات السكنية والتجارية الكبرى",
          "طلبات المكاتب الاستشارية والموزعين"
        ],
        features: [
          "تنفيذ حسب المواصفات المطلوبة",
          "مرونة في المقاسات والأشكال",
          "إمكانية اختيار ألوان خاصة",
          "مناسب للمشروعات والكميات الكبيرة",
          "تنسيق مباشر مع فريق المبيعات قبل الإنتاج"
        ]
      }
    ],
    featuresSection: {
      sectionLabel: "مميزات الشركة",
      title: "لماذا تختار الشروق؟",
      description:
        "نركز على الجودة، سرعة التوريد، والالتزام بالمواصفات المطلوبة في كل مشروع."
    },
    features: [
      {
        title: "جودة تصنيع عالية",
        description: "خطوط إنتاج حديثة ورقابة على جودة المنتج النهائي.",},
      {
        title: "أسعار تنافسية",
        description: "حلول توريد مناسبة للكميات الصغيرة والكبيرة.",},
      {
        title: "توريد سريع للمواقع",
        description: "تنسيق جيد مع العملاء لتسليم المنتجات في الوقت المناسب.",},
      {
        title: "خامات مطابقة للمواصفات",
        description: "اعتماد على خامات مناسبة ومعايير تصنيع واضحة.",},
      {
        title: "دعم فني وخدمة عملاء",
        description: "مساعدة العميل في اختيار المنتج الأنسب للمشروع.",},
      {
        title: "توريد كميات كبيرة",
        description: "طاقة إنتاجية مناسبة لمتطلبات المشروعات الضخمة.",}
    ],
    gallerySection: {
      sectionLabel: "المعرض",
      title: "صور من المصنع والمنتجات والتوريد",
      description:
        ""
    },
    gallery: [
      {
        title: "موقع بناء",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "مصنع ومنتجات",
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "تحميل وتوريد",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "منتجات بناء",
        image:
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "إنترلوك وأرضيات",
        image:
          "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "مشروعات كبيرة",
        image:
          "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80"
      }
    ],
    quote: {
      sectionLabel: "طلب عرض سعر",
      title: "اطلب عرض سعر مناسب لمشروعك",
      description:
        "املأ البيانات وسيتم تجهيز رسالة واتساب تلقائية بالتفاصيل، ويمكن تطويرها لاحقًا للإرسال عبر البريد أو قاعدة بيانات.",
      fields: {
        name: "الاسم",
        phone: "رقم الهاتف",
        product: "نوع المنتج المطلوب",
        quantity: "الكمية",
        location: "المحافظة / مكان التوريد",
        message: "رسالة إضافية"
      },
      placeholders: {
        name: "اكتب اسمك",
        phone: "مثال: 01000000000",
        product: "اختر المنتج",
        quantity: "مثال: 10000 طوبة",
        location: "مثال: القاهرة الجديدة",
        message: "أي تفاصيل خاصة بالمشروع أو المقاسات المطلوبة"
      },
      submit: "إرسال الطلب عبر واتساب",
      success: "تم تجهيز الطلب، سيتم فتح واتساب الآن.",
      error: "حدث خطأ، برجاء المحاولة مرة أخرى."
    },
    contact: {
      sectionLabel: "تواصل معنا",
      title: "جاهزون لتوريد احتياجات مشروعك",
      description:
        "تواصل معنا الآن لطلب الكميات، معرفة الأسعار، أو تنسيق التوريد لموقع المشروع.",
      phone: "الهاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      address: "العنوان",
      social: "تابعنا"
    },
    articlesSection: {
      sectionLabel: "مقالات",
      title: "نصائح ومعلومات عن الطوب ومواد البناء",
      description:
        "محتوى يساعد العملاء في اختيار المنتجات المناسبة وحساب احتياجات المشروع."
    },
    articles: [
      {
        title: "الفرق بين الطوب الأحمر والطوب الأسمنتي",
        excerpt:
          "تعرف على أهم الفروق في الاستخدام والخصائص وكيف تختار النوع الأنسب لمشروعك.",
        href: "/ar/articles"
      },
      {
        title: "كيف تحسب كمية الطوب المطلوبة؟",
        excerpt:
          "خطوات مبسطة تساعد المقاول أو صاحب المشروع على تقدير الكميات قبل الشراء.",
        href: "/ar/articles"
      },
      {
        title: "مميزات الإنترلوك في الأرصفة والمداخل",
        excerpt:
          "لماذا يعتبر الإنترلوك اختيارًا عمليًا للاندسكيب والممرات والمساحات الخارجية؟",
        href: "/ar/articles"
      }
    ],
    footer: {
      about:
        "الشروق لمواد البناء شركة متخصصة في تصنيع وبيع الطوب الطفلي والطوب الأسمنتي والبلوك والإنترلوك والبردورات، مع حلول توريد مناسبة للمشروعات.",
      quickLinks: "روابط سريعة",
      products: "المنتجات",
      contact: "بيانات التواصل",
      rights: "جميع الحقوق محفوظة"
    },
    common: {
      readMore: "اقرأ المزيد",
      requestQuote: "اطلب عرض سعر",
      viewProducts: "عرض المنتجات"
    }
  },
  en: {
    seo: {
      title: "Alshorouk Company | Bricks & Building Materials Supplier",
      description:
        "Alshorouk manufactures and supplies red bricks, cement bricks, blocks, interlock pavers, curbstones, and building materials for contractors and large projects."
    },
    nav: [
      { label: "Home", href: "/en" },
      { label: "About Us", href: "/en/about" },
      { label: "Products", href: "/en/products" },
      { label: "Gallery", href: "/en/gallery" },
      { label: "Contact Us", href: "/en/contact" },
      { label: "Articles", href: "/en/articles" }
    ],
    cta: "Request a Quote",
    languageLabel: "العربية",
    hero: {
      eyebrow: "Alshorouk Company",
      title: "Premium quality bricks for projects built to last",
      subtitle:
        "Manufacturing and supplying clay bricks, cement bricks, blocks, interlock pavers, and curbstones with reliable capacity for large-scale projects.",
      primaryAction: "Request a Quote",
      secondaryAction: "WhatsApp Contact",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
      stats: [
        { value: "+3", label: "Production Plants" },
        { value: "+6", label: "Product Types" },
        { value: "24/7", label: "Quote Requests" }
      ],
      highlights: [
        "Site and project supply",
        "Standard-compliant products",
        "Bulk quantities on request"
      ],
      cardNote: "Marketing and sales representative for Alshorouk, Al Hilal, and Sina factories"
    },
    about: {
      sectionLabel: "About Us",
      title: "Industrial and sales expertise for construction projects in Egypt",
      description:
        "Alshorouk is a leading manufacturer and sales representative in Egypt for cement bricks, clay bricks, interlock pavers, and curbstones for gardens and sidewalks. The company represents the marketing and sales arm of our factories and focuses on delivering high-quality products in quantities suitable for major projects.",
      plantsTitle: "Our Plants",
      plants: [
        "Alshorouk Factory for cement products and clay bricks",
        "Al Hilal Factory for cement products",
        "Sina Factory for clay bricks"
      ],
      extra:
        "Our plants rely on modern production lines to meet local market needs. Their strategic location is close to raw material sources and major developments such as the New Administrative Capital, New Alamein, Ras El Hekma, New Zayed, and East/West Suez Canal projects."
    },
    quality: {
      sectionLabel: "Quality & Certifications",
      title: "Reliable products that meet construction standards",
      description:
        "Our product quality is accepted and approved by companies and projects that have worked with us. Products are also approved by the National Housing and Building Research Center. We focus on delivering high-quality products that meet Egyptian and international standards, with the ability to manufacture special shapes and specifications according to client requirements.",
      points: [
        "Compliant with Egyptian and international standards",
        "Custom sizes and specifications available",
        "Strong project track record",
        "Our goal is to deliver products that match project requirements"
      ]
    },
    productsSection: {
      sectionLabel: "Our Products",
      title: "Bricks and cement products for every project need",
      description:
        "Reliable product categories for contractors, finishing companies, developers, and distributors."
    },
    products: [
      {
        slug: "red-clay-bricks",
        title: "Red Clay Bricks",
        description:
          "High-quality red clay bricks for internal and external walls, available in double and single options with clear sizes for project needs.",
        usage: "Usage: residential buildings, commercial buildings, walls, and fences.",
        specs: "Sizes: Double 20 / Double 24 / Double 25 / Single 20 / Single 24.",
        image: "/images/products/red-clay-double.webp",
        details:
          "Red clay bricks are essential for construction works. We supply double and single red clay brick options for internal walls, external walls, and partitions. Quantities and supply schedules are confirmed according to project requirements and delivery location.",
        sizes: [
          "Double 20: 10 × 12 × 20 cm",
          "Double 24: 11 × 12 × 24 cm",
          "Double 25: 12 × 12 × 25 cm",
          "Single 20: 6 × 10 × 20 cm",
          "Single 24: 6 × 11 × 24 cm"
        ],
        applications: [
          "Residential and commercial buildings",
          "Internal and external walls",
          "Fences and partitions",
          "Contracting and real estate projects"
        ],
        features: [
          "Clear and multiple size options",
          "Suitable for daily construction works",
          "Organized supply according to site needs",
          "Double and single brick options"
        ],
        variants: [
          {
            title: "Double 20 Red Clay Brick",
            description:
              "Double red clay brick for walls that require more thickness and durability, with organized site supply.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["Size: 10 × 12 × 20 cm"],
            applications: [
              "Internal and external walls",
              "Residential and commercial buildings",
              "Partitions and fences"
            ],
            features: [
              "Clear execution size",
              "Suitable for bulk quantities",
              "Supply according to project needs"
            ]
          },
          {
            title: "Double 24 Red Clay Brick",
            description:
              "Double red clay brick with a practical size for projects that require strong and flexible masonry solutions.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["Size: 11 × 12 × 24 cm"],
            applications: [
              "External walls",
              "Residential and commercial buildings",
              "Contracting projects"
            ],
            features: [
              "Suitable for thicker walls",
              "Available for bulk supply",
              "Practical site option"
            ]
          },
          {
            title: "Double 25 Red Clay Brick",
            description:
              "Larger double red clay brick option for construction works that require higher thickness according to project needs.",
            image: "/images/products/red-clay-double.webp",
            sizes: ["Size: 12 × 12 × 25 cm"],
            applications: [
              "Walls and fences",
              "Real estate development projects",
              "General building works"
            ],
            features: [
              "Large project-ready size",
              "Consistent supply quality",
              "Supply by quantity and location"
            ]
          },
          {
            title: "Single 20 Red Clay Brick",
            description:
              "Single red clay brick for partitions and internal walls where lower wall thickness is required.",
            image: "/images/products/red-clay-single.webp",
            sizes: ["Size: 6 × 10 × 20 cm"],
            applications: [
              "Internal walls",
              "Partition works",
              "Finishing and light masonry works"
            ],
            features: [
              "Practical for partitions",
              "Easy site handling",
              "Organized project supply"
            ]
          },
          {
            title: "Single 24 Red Clay Brick",
            description:
              "Longer single red clay brick option for internal walls and partitions according to project requirements.",
            image: "/images/products/red-clay-single.webp",
            sizes: ["Size: 6 × 11 × 24 cm"],
            applications: [
              "Internal walls",
              "Architectural partitions",
              "Residential and commercial buildings"
            ],
            features: [
              "Practical execution size",
              "Suitable for partition works",
              "Supply on request"
            ]
          }
        ]
      },

      {
        slug: "cement-bricks",
        title: "Cement Bricks",
        description:
          "Solid cement bricks for projects that require durability, load resistance, and large supply quantities.",
        usage: "Usage: walls, fences, and construction works.",
        specs: "Sizes: Solid 20 / Solid 25 with clear technical specifications.",
        image: "/images/products/cement-solid-20.webp",
        details:
          "Solid cement bricks are suitable for projects that require strength and durability. They are used for walls, fences, and selected construction works depending on the required design and specifications. Solid 20 and Solid 25 are available with clear size, weight, strength, density, absorption, and fire rating details.",
        sizes: [
          "Solid 20: size 6 × 10 × 20 cm - weight 2.5 kg/m²",
          "Solid 20: strength 145 – 175 kg/cm² - average density 2090 kg/m³",
          "Solid 20: average absorption 6% - fire rating 2 hours",
          "Solid 25: size 6 × 12 × 25 cm - weight 3.6 kg/m²",
          "Solid 25: strength 145 – 175 kg/cm² - average density 2050 kg/m³",
          "Solid 25: average absorption 6% - fire rating 2 hours"
        ],
        applications: [
          "Walls and fences",
          "Service and industrial buildings",
          "Partitions and separating walls",
          "Construction and finishing sites"
        ],
        features: [
          "High durability",
          "Strong cement-based material",
          "Suitable for large quantities",
          "Easy handling and site supply"
        ],
        variants: [
          {
            title: "Solid 20",
            description:
              "Solid cement brick suitable for walls and fences that require a strong product with a practical site-friendly size.",
            image: "/images/products/cement-solid-20.webp",
            sizes: [
              "Size: 6 × 10 × 20 cm",
              "Weight: 2.5 kg/m²",
              "Strength: 145 – 175 kg/cm²",
              "Average density: 2090 kg/m³",
              "Average absorption: 6%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "Walls and fences",
              "Partitions and separating walls",
              "Service and industrial buildings"
            ],
            features: [
              "Solid and strong",
              "Suitable for bulk supply",
              "Clear project specifications"
            ]
          },
          {
            title: "Solid 25",
            description:
              "Larger solid cement brick suitable for works that require greater durability and organized supply for different project needs.",
            image: "/images/products/cement-solid-25.webp",
            sizes: [
              "Size: 6 × 12 × 25 cm",
              "Weight: 3.6 kg/m²",
              "Strength: 145 – 175 kg/cm²",
              "Average density: 2050 kg/m³",
              "Average absorption: 6%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "Walls and fences",
              "Construction works according to specification",
              "Projects requiring higher durability"
            ],
            features: [
              "Larger size",
              "Durable and strong",
              "Supply according to site needs"
            ]
          }
        ]
      },
      {
        slug: "blocks",
        title: "Hollow Blocks",
        description:
          "Hollow cement blocks for projects that need efficient execution and practical performance, available in 10, 12, 20, and 25 cm sizes.",
        usage: "Usage: buildings, partitions, fences, and major projects.",
        specs: "Sizes: hollow block 10 / hollow block 12 / hollow block 20 / hollow block 25.",
        image: "/images/products/hollow-block-20.webp",
        details:
          "Hollow cement blocks are practical for contractors and developers, helping speed up execution in walls, partitions, and fences. Available sizes include clear specifications for dimensions, weight, compressive strength, density, absorption, and fire rating.",
        sizes: [
          "Hollow Block 10: size 40 × 20 × 10 cm - weight 12 kg/m²",
          "Hollow Block 12: size 40 × 20 × 12 cm - weight 13 kg/m²",
          "Hollow Block 20: size 40 × 20 × 20 cm - weight 19 kg/m²",
          "Hollow Block 25: size 40 × 20 × 25 cm - weight 24 kg/m²"
        ],
        applications: [
          "Residential and administrative buildings",
          "Internal and external partitions",
          "Fences and open sites",
          "Projects requiring faster execution"
        ],
        features: [
          "Fast installation",
          "Suitable for large quantities",
          "Multiple size options",
          "Practical solution for contractors and projects"
        ],
        variants: [
          {
            title: "Hollow Block 10",
            description:
              "A 10 cm hollow cement block suitable for partitions and walls that require lighter weight and fast execution.",
            image: "/images/products/hollow-block-10.webp",
            sizes: [
              "Size: 40 × 20 × 10 cm",
              "Weight: 12 kg/m²",
              "Strength: 35 – 42 kg/cm²",
              "Average density: 2172 kg/m³",
              "Average absorption: 6%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "Internal partitions",
              "Non-load-bearing walls",
              "Finishing and construction projects"
            ],
            features: [
              "Relatively lightweight",
              "Suitable for bulk supply",
              "Practical site size"
            ]
          },
          {
            title: "Hollow Block 12",
            description:
              "A 12 cm hollow cement block suitable for wall and partition works that need a medium thickness.",
            image: "/images/products/hollow-block-12.webp",
            sizes: [
              "Size: 40 × 20 × 12 cm",
              "Weight: 13 kg/m²",
              "Strength: 4 N",
              "Average density: 2191 kg/m³",
              "Average absorption: 7%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "Partitions and walls",
              "Residential and administrative buildings",
              "Contracting projects"
            ],
            features: [
              "Medium practical size",
              "Supply according to quantity and location",
              "Clear specifications before ordering"
            ]
          },
          {
            title: "Hollow Block 20",
            description:
              "A 20 cm hollow cement block suitable for walls that need larger thickness and practical use in projects.",
            image: "/images/products/hollow-block-20.webp",
            sizes: [
              "Size: 40 × 20 × 20 cm",
              "Weight: 19 kg/m²",
              "Strength: 4 N",
              "Average density: 2125 kg/m³",
              "Average absorption: 6%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "External walls and partitions",
              "Fences and open sites",
              "Large construction projects"
            ],
            features: [
              "Suitable larger thickness",
              "Suitable for large quantities",
              "Organized site delivery"
            ]
          },
          {
            title: "Hollow Block 25",
            description:
              "A 25 cm hollow cement block suitable for works that need greater thickness and higher durability based on project requirements.",
            image: "/images/products/hollow-block-25.webp",
            sizes: [
              "Size: 40 × 20 × 25 cm",
              "Weight: 24 kg/m²",
              "Strength: 7 N",
              "Average density: 2177 kg/m³",
              "Average absorption: 6%",
              "Fire rating: 2 hours"
            ],
            applications: [
              "Thicker walls",
              "Fences and service buildings",
              "Projects requiring a larger block size"
            ],
            features: [
              "Large size for projects",
              "Clear technical specifications",
              "Bulk supply available"
            ]
          }
        ]
      },
      {
        slug: "interlock",
        title: "Interlock Pavers",
        description:
          "Interlock pavers in multiple shapes such as S shape, I shape, hexagonal, and parquet, suitable for sidewalks, entrances, gardens, and landscaping.",
        usage: "Usage: sidewalks, gardens, entrances, garages, pathways, and landscaping.",
        specs: "Shapes: S shape / I shape / Hexagonal / Parquet - Thickness: 6 or 8 cm - Colors: all colors available.",
        image: "/images/products/interlock-i-gray.webp",
        details:
          "Alshorouk supplies high-quality interlock pavers in multiple shapes and colors for sidewalks, entrances, gardens, garages, pathways, and outdoor areas. All colors are available according to the required design, and strength is supplied according to project specifications.",
        sizes: [
          "S shape interlock: 24 × 12 cm - thickness 6 or 8 cm - 35 units/m²",
          "I shape interlock: 20 × 16.5 cm - thickness 6 or 8 cm - 36 units/m²",
          "Hexagonal interlock: 23 × 20 cm - thickness 6 or 8 cm - 29 units/m²",
          "Parquet interlock: 20 × 10 cm - thickness 6 or 8 cm - 50 units/m²",
          "Weight: 135 – 175 kg/m² depending on thickness",
          "Average absorption: 6%",
          "Colors: all colors available"
        ],
        applications: [
          "Sidewalks and entrances",
          "Gardens and landscaping",
          "Pathways and outdoor spaces",
          "Garages and parking areas",
          "Residential and commercial projects"
        ],
        features: [
          "Multiple shapes for different designs",
          "Multiple colors according to request",
          "6 and 8 cm thickness options",
          "Suitable for project-scale supply",
          "Practical maintenance and replacement"
        ],
        variants: [
          {
            title: "S Shape Interlock",
            description:
              "S shape interlock is suitable for sidewalks, pathways, gardens, and outdoor areas, with an interlocking shape that gives stability and an organized appearance.",
            image: "/images/products/interlock-s-gray.webp",
            sizes: [
              "Dimensions: 24 × 12 cm",
              "Unit thickness: 6 or 8 cm",
              "Weight: 135 – 175 kg/m²",
              "Units/m²: 35",
              "Average absorption: 6%",
              "Piece area: 260 cm²",
              "Strength: according to required specifications",
              "Colors: all colors available"
            ],
            applications: [
              "Sidewalks and pathways",
              "Gardens and landscaping",
              "Entrances and outdoor areas"
            ],
            features: [
              "Practical interlocking shape",
              "Available in 6 and 8 cm thickness",
              "Multiple colors according to design"
            ]
          },
          {
            title: "I Shape Interlock",
            description:
              "I shape interlock is suitable for entrances, garages, and pathways. Different colors for the same type are displayed together with the same specifications.",
            image: "/images/products/interlock-i-gray.webp",
            images: [
              "/images/products/interlock-i-gray.webp",
              "/images/products/interlock-i-red.webp"
            ],
            sizes: [
              "Dimensions: 20 × 16.5 cm",
              "Unit thickness: 6 or 8 cm",
              "Weight: 135 – 175 kg/m²",
              "Units/m²: 36",
              "Average absorption: 6%",
              "Piece area: 280 cm²",
              "Strength: according to required specifications",
              "Colors: all colors available"
            ],
            applications: [
              "Entrances and garages",
              "Sidewalks and pathways",
              "Residential and commercial projects"
            ],
            features: [
              "Strong practical shape",
              "Available in multiple colors",
              "Supply according to quantity and site"
            ]
          },
          {
            title: "Hexagonal Interlock",
            description:
              "Hexagonal interlock provides an organized decorative appearance for pathways, gardens, and landscaping, with color selection according to the project design.",
            image: "/images/products/interlock-hex-gray.webp",
            images: [
              "/images/products/interlock-hex-gray.webp",
              "/images/products/interlock-hex-red.webp"
            ],
            sizes: [
              "Dimensions: 23 × 20 cm",
              "Unit thickness: 6 or 8 cm",
              "Weight: 135 – 175 kg/m²",
              "Units/m²: 29",
              "Average absorption: 6%",
              "Piece area: 345 cm²",
              "Strength: according to required specifications",
              "Colors: all colors available"
            ],
            applications: [
              "Gardens and landscaping",
              "Sidewalks and pathways",
              "Outdoor areas"
            ],
            features: [
              "Decorative hexagonal shape",
              "Multiple colors according to request",
              "Suitable for outdoor designs"
            ]
          },
          {
            title: "Parquet Interlock",
            description:
              "Parquet interlock is suitable for sidewalks, entrances, and pathways that require a regular shape and easy layout.",
            image: "/images/products/interlock-parquet-gray.webp",
            sizes: [
              "Dimensions: 20 × 10 cm",
              "Unit thickness: 6 or 8 cm",
              "Weight: 135 – 175 kg/m²",
              "Units/m²: 50",
              "Average absorption: 6%",
              "Piece area: 200 cm²",
              "Strength: according to required specifications",
              "Colors: all colors available"
            ],
            applications: [
              "Sidewalks and pathways",
              "Entrances and outdoor areas",
              "Landscaping works"
            ],
            features: [
              "Regular shape and easy coordination",
              "Suitable units per square meter",
              "Available in multiple thicknesses and colors"
            ]
          }
        ]
      },
      {
        slug: "curbstones",
        title: "Curbstones",
        description:
          "Machine-pressed curbstones for gardens, sidewalks, and road edges with clear dimensions and organized outdoor finishing.",
        usage: "Usage: sidewalks, roads, gardens, and pathways.",
        specs: "Types: Garden curbstones / Sidewalk curbstones / Ajaly.",
        image: "/images/products/curbstone-garden.webp",
        details:
          "Curbstones are used to organize sidewalks, roads, gardens, pathways, and outdoor areas. We supply machine-pressed curbstones with clear dimensions, while strength is supplied according to the required project specifications.",
        sizes: [
          "Garden curbstones: 8 × 25 × 50 cm",
          "Sidewalk curbstones: 15 × 12 × 30 × 50 cm",
          "Ajaly: 30 × 25 × 30 × 50 cm",
          "Type: Machine pressed",
          "Strength: According to required specifications"
        ],
        applications: [
          "Sidewalks and roads",
          "Gardens and outdoor spaces",
          "Pathways and entrances",
          "Landscaping and infrastructure projects"
        ],
        features: [
          "Machine-pressed manufacturing",
          "Suitable dimensions for gardens and sidewalks",
          "Strong and organized finishing",
          "Supply according to project needs"
        ],
        variants: [
          {
            title: "Garden Curbstones",
            description:
              "Curbstones suitable for gardens, outdoor spaces, and organized pathway edging.",
            image: "/images/products/curbstone-garden.webp",
            sizes: [
              "Dimensions: 8 × 25 × 50 cm",
              "Type: Machine pressed",
              "Strength: According to required specifications"
            ],
            applications: [
              "Garden landscaping",
              "Walkways and outdoor spaces",
              "Landscaping projects"
            ],
            features: [
              "Organized appearance",
              "Machine-pressed",
              "Suitable for outdoor spaces"
            ]
          },
          {
            title: "Sidewalk Curbstones",
            description:
              "Curbstones for sidewalks, walkways, and internal roads within construction sites and projects.",
            image: "/images/products/curbstone-sidewalk.webp",
            sizes: [
              "Dimensions: 15 × 12 × 30 × 50 cm",
              "Type: Machine pressed",
              "Strength: According to required specifications"
            ],
            applications: [
              "Sidewalks",
              "Internal roads",
              "Entrances and walkways"
            ],
            features: [
              "Suitable for sidewalks",
              "Strong finishing",
              "Project-scale supply"
            ]
          },
          {
            title: "Ajaly",
            description:
              "Ajaly curbstone with a practical dimension for strong and organized road and pathway edging.",
            image: "/images/products/curbstone-ajaly.webp",
            sizes: [
              "Dimensions: 30 × 25 × 30 × 50 cm",
              "Type: Machine pressed",
              "Strength: According to required specifications"
            ],
            applications: [
              "Roads and entrances",
              "Route organization",
              "Outdoor projects"
            ],
            features: [
              "Strong site dimension",
              "Machine-pressed",
              "Suitable for bulk supply"
            ]
          }
        ]
      },
      {
        slug: "custom-products",
        title: "Custom Products",
        description:
          "Concrete products manufactured with custom sizes, shapes, and colors according to project specifications.",
        usage: "Usage: special projects, landscaping, sidewalks, roads, and bulk quantities.",
        specs: "Specifications: executed after reviewing required drawings, sizes, and quantities.",
        image: "/images/products/cement-brick.webp",
        details:
          "Alshorouk can manufacture custom concrete products according to client or consultant requirements, including non-standard sizes, special shapes, selected colors, and bulk project quantities. Each request is technically reviewed before production to define the suitable solution, pricing, and supply schedule.",
        sizes: [
          "Custom sizes based on drawings or required specifications",
          "Special shapes and non-standard designs for project needs",
          "Custom colors for landscaping and outdoor finishes",
          "Bulk project quantities after specification approval",
          "Technical review before quotation and production"
        ],
        applications: [
          "Contractors and real estate developers",
          "Landscaping and garden projects",
          "Sidewalks, entrances, and internal roads",
          "Large residential and commercial projects",
          "Consultant and distributor requests"
        ],
        features: [
          "Manufactured according to required specifications",
          "Flexible sizes and shapes",
          "Custom color options",
          "Suitable for large projects and bulk supply",
          "Direct coordination before production"
        ]
      }
    ],
    featuresSection: {
      sectionLabel: "Why Choose Us",
      title: "Built around quality, speed, and reliability",
      description:
        "We focus on manufacturing quality, fast supply, and commitment to project specifications."
    },
    features: [
      {
        title: "High Manufacturing Quality",
        description: "Modern production lines and quality monitoring for final products.",},
      {
        title: "Competitive Pricing",
        description: "Supply solutions suitable for small and large quantities.",},
      {
        title: "Fast Site Delivery",
        description: "Smooth coordination to deliver materials on time.",},
      {
        title: "Standard-Compliant Materials",
        description: "Clear manufacturing standards and suitable raw materials.",},
      {
        title: "Customer & Technical Support",
        description: "Guidance to help clients choose the right product.",},
      {
        title: "Large Quantity Supply",
        description: "Production capacity suitable for major project needs.",}
    ],
    gallerySection: {
      sectionLabel: "Gallery",
      title: "Factory, products, loading, and supply photos",
      description:
        "Replace these demo images with real factory, loading, and project photos."
    },
    gallery: [
      {
        title: "Construction Site",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Factory & Products",
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Loading & Supply",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Building Materials",
        image:
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Pavers & Flooring",
        image:
          "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Major Projects",
        image:
          "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80"
      }
    ],
    quote: {
      sectionLabel: "Request a Quote",
      title: "Get a quote for your project needs",
      description:
        "Fill in the details and a WhatsApp message will be generated automatically. The form can later be connected to email or a database.",
      fields: {
        name: "Name",
        phone: "Phone Number",
        product: "Requested Product",
        quantity: "Quantity",
        location: "Governorate / Delivery Location",
        message: "Additional Message"
      },
      placeholders: {
        name: "Enter your name",
        phone: "Example: 01000000000",
        product: "Choose product",
        quantity: "Example: 10,000 bricks",
        location: "Example: New Cairo",
        message: "Any special project details or required sizes"
      },
      submit: "Send Request via WhatsApp",
      success: "Request prepared. WhatsApp will open now.",
      error: "Something went wrong. Please try again."
    },
    contact: {
      sectionLabel: "Contact Us",
      title: "Ready to supply your project needs",
      description:
        "Contact us now to request quantities, check prices, or coordinate delivery to your project site.",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      social: "Follow Us"
    },
    articlesSection: {
      sectionLabel: "Articles",
      title: "Guides about bricks and building materials",
      description:
        "Helpful content for choosing materials and estimating project requirements."
    },
    articles: [
      {
        title: "Red bricks vs. cement bricks",
        excerpt:
          "Learn the key differences in usage, properties, and how to choose the right type.",
        href: "/en/articles"
      },
      {
        title: "How to estimate brick quantities",
        excerpt:
          "Simple steps to help contractors and project owners estimate quantities before purchasing.",
        href: "/en/articles"
      },
      {
        title: "Benefits of interlock pavers",
        excerpt:
          "Why interlock pavers are practical for landscaping, entrances, and outdoor spaces.",
        href: "/en/articles"
      }
    ],
    footer: {
      about:
        "Alshorouk Company specializes in manufacturing and supplying clay bricks, cement bricks, blocks, interlock pavers, and curbstones for construction projects.",
      quickLinks: "Quick Links",
      products: "Products",
      contact: "Contact",
      rights: "All rights reserved"
    },
    common: {
      readMore: "Read More",
      requestQuote: "Request a Quote",
      viewProducts: "View Products"
    }
  }
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
