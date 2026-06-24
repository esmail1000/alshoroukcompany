import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";

export type ArticleLink = {
  label: string;
  href: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
  subSections?: readonly {
    heading: string;
    paragraphs: readonly string[];
  }[];
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  readTime: string;
  category: string;
  productLinks: readonly ArticleLink[];
  sections: readonly ArticleSection[];
};

export const articles: Record<Locale, readonly Article[]> = {
  ar: [
    {
      slug: "red-clay-bricks-features-uses",
      title: "الطوب الطفلي الأحمر: مميزاته واستخداماته في البناء",
      seoTitle: "الطوب الطفلي الأحمر | المميزات والاستخدامات | الشروق لمواد البناء",
      seoDescription:
        "تعرف على مميزات الطوب الطفلي الأحمر، مراحل تصنيعه، استخداماته في الحوائط الداخلية والخارجية، ونصائح مهمة قبل الشراء من شركة الشروق لمواد البناء.",
      excerpt:
        "دليل مبسط يشرح مميزات الطوب الطفلي الأحمر، طريقة تصنيعه، استخداماته، وأهم النصائح قبل الشراء.",
      image: "/images/products/red-clay-brick.webp",
      publishedAt: "2026-06-24",
      readTime: "6 دقائق قراءة",
      category: "الطوب الطفلي",
      productLinks: [
        { label: "مشاهدة مقاسات الطوب الأحمر", href: "/ar/products/red-clay-bricks" },
        { label: "طلب عرض سعر", href: "/ar#quote" }
      ],
      sections: [
        {
          heading: "ما هو الطوب الطفلي الأحمر؟",
          paragraphs: [
            "يُعد الطوب الطفلي الأحمر من أقدم وأشهر مواد البناء المستخدمة في مصر والعالم العربي، وما زال يحتفظ بمكانته حتى اليوم بفضل قوته، وسهولة استخدامه، وتكلفته المناسبة، وقدرته الجيدة على العزل الحراري والصوتي.",
            "يُصنع الطوب الطفلي من خليط طبيعي يتكون غالبًا من الطفلة والطمي والرمل والماء، ثم يتم تشكيله في قوالب بأبعاد محددة، وتجفيفه، وبعد ذلك يتم حرقه داخل أفران مخصصة حتى يكتسب صلابته ولونه الأحمر المعروف."
          ]
        },
        {
          heading: "مراحل تصنيع الطوب الطفلي",
          paragraphs: [
            "تمر صناعة الطوب الطفلي بعدة مراحل رئيسية، تبدأ بتحضير الخامات وتنقية الطفلة من الشوائب، ثم خلطها بالماء للحصول على عجينة متجانسة قابلة للتشكيل.",
            "بعد ذلك يتم تقطيع العجينة إلى وحدات منتظمة باستخدام خطوط إنتاج مخصصة، ثم تُترك لتجف تدريجيًا قبل دخولها مرحلة الحرق داخل الأفران.",
            "مرحلة الحرق من أهم مراحل التصنيع، لأنها تؤثر بشكل مباشر على قوة الطوبة، درجة امتصاصها للماء، لونها، ومدى تحملها للعوامل الجوية المختلفة."
          ]
        },
        {
          heading: "أهم مميزات الطوب الطفلي الأحمر",
          paragraphs: [
            "اختيار الطوب الطفلي المناسب يساعد على رفع جودة أعمال المباني وتحسين أداء الحوائط على المدى الطويل، خصوصًا عند اختيار منتج منتظم المقاسات ومطابق للمواصفات."
          ],
          subSections: [
            {
              heading: "عزل حراري جيد",
              paragraphs: [
                "يتميز الطوب الطفلي بقدرته على تقليل انتقال الحرارة داخل المبنى، مما يساعد على تحسين راحة السكان وتقليل الاعتماد الزائد على أجهزة التبريد أو التدفئة."
              ]
            },
            {
              heading: "مقاومة جيدة للحريق",
              paragraphs: [
                "بسبب تعرض الطوب لدرجات حرارة مرتفعة أثناء التصنيع، فإنه يتميز بمقاومة جيدة للحرارة، لذلك يُستخدم في بعض التطبيقات التي تحتاج إلى تحمل حراري أعلى من مواد البناء العادية."
              ]
            },
            {
              heading: "قوة تحمل مناسبة",
              paragraphs: [
                "الطوب الطفلي يتحمل ظروف الاستخدام اليومية في أعمال البناء، كما يتحمل التغيرات المناخية بدرجات جيدة، بشرط أن يكون مطابقًا للمواصفات ومصنعًا بجودة عالية."
              ]
            },
            {
              heading: "عزل صوتي أفضل من بعض البدائل الخفيفة",
              paragraphs: [
                "يساعد الطوب الطفلي في تقليل انتقال الصوت بين الفراغات، خاصة عند استخدامه بسماكات مناسبة مع محارة جيدة وتنفيذ صحيح."
              ]
            },
            {
              heading: "تكلفة اقتصادية وسهولة في التنفيذ",
              paragraphs: [
                "يُعتبر الطوب الطفلي من المواد الاقتصادية في البناء، كما أن الفنيين والمقاولين لديهم خبرة كبيرة في التعامل معه، مما يجعل تنفيذه أسرع وأسهل في أغلب المشروعات."
              ]
            }
          ]
        },
        {
          heading: "استخدامات الطوب الطفلي في البناء",
          paragraphs: [
            "يُستخدم الطوب الطفلي في بناء الحوائط الداخلية والخارجية، والفواصل بين الغرف، وبعض أعمال الديكور، والأسوار، والواجهات ذات الطابع الكلاسيكي أو الريفي.",
            "كما يدخل في بعض الاستخدامات المعمارية التي تحتاج إلى شكل جمالي طبيعي بلون الطوب الأحمر. ويمكن استخدامه خارجيًا في الواجهات والأسوار وبعض الممرات حسب نوع الطوب ومواصفاته."
          ]
        },
        {
          heading: "نصائح عند شراء الطوب الطفلي",
          paragraphs: [
            "عند شراء الطوب الطفلي يجب التأكد من انتظام المقاسات، وخلو الطوبة من الشروخ أو الكسور، وتجانس اللون، وعدم وجود نسبة عالية من الأملاح أو التزهير الأبيض على السطح.",
            "كما يُفضل التعامل مع مصنع موثوق يوفر منتجًا مطابقًا للمواصفات المطلوبة للمشروع، مع تأكيد الكميات وجدول التوريد قبل التنفيذ."
          ]
        },
        {
          heading: "الخلاصة",
          paragraphs: [
            "الطوب الطفلي الأحمر اختيار عملي واقتصادي في كثير من أعمال البناء، لأنه يجمع بين القوة، العزل، سهولة التنفيذ، والشكل الجمالي. ومع اختيار منتج عالي الجودة وتنفيذ صحيح، يمكن أن يوفر عمرًا طويلًا وأداءً ممتازًا للمبنى."
          ]
        }
      ]
    },
    {
      slug: "cement-bricks-and-concrete-blocks",
      title: "الطوب الأسمنتي والبلوك الخرساني: الأنواع والمكونات وطريقة التصنيع",
      seoTitle: "الطوب الأسمنتي والبلوك الخرساني | الأنواع والمواصفات | الشروق",
      seoDescription:
        "دليل شامل عن الطوب الأسمنتي والبلوك الخرساني، الفرق بينهما، مكونات التصنيع، الأنواع، الاستخدامات، وأهم النصائح قبل الشراء.",
      excerpt:
        "تعرف على الفرق بين الطوب الأسمنتي والبلوك الخرساني، ومكونات التصنيع، والأنواع والاستخدامات المناسبة لكل مشروع.",
      image: "/images/products/hollow-block-20.webp",
      publishedAt: "2026-06-24",
      readTime: "7 دقائق قراءة",
      category: "الطوب الأسمنتي والبلوك",
      productLinks: [
        { label: "الطوب الأسمنتي", href: "/ar/products/cement-bricks" },
        { label: "البلوك الخرساني", href: "/ar/products/blocks" },
        { label: "طلب عرض سعر", href: "/ar#quote" }
      ],
      sections: [
        {
          heading: "ما هو الطوب الأسمنتي؟",
          paragraphs: [
            "يُعتبر الطوب الأسمنتي والبلوك الخرساني من أهم وحدات البناء الحديثة المستخدمة في الحوائط، الأسوار، الأرصفة، وبعض الأعمال الإنشائية والمعمارية.",
            "الطوب الأسمنتي هو وحدة بناء يتم تصنيعها من خليط يتكون عادة من الأسمنت، الرمل، الركام الناعم أو السن الناعم، والماء. يتم كبس الخليط داخل قوالب مخصصة للحصول على الشكل والمقاس المطلوب، ثم تتم معالجة الطوب بالماء حتى يكتسب القوة المطلوبة."
          ]
        },
        {
          heading: "الفرق بين الطوب والبلوك",
          paragraphs: [
            "الطوب عادة يكون أصغر حجمًا ويستخدم في أعمال الحوائط والفواصل والبناء التقليدي، أما البلوك فهو وحدة بناء أكبر حجمًا، وقد يكون مصمتًا أو مفرغًا حسب النوع والمواصفات.",
            "اختيار الطوب أو البلوك يعتمد على طبيعة المشروع، نوع الحائط، الأحمال المطلوبة، العزل، التكلفة، وسرعة التنفيذ."
          ]
        },
        {
          heading: "أنواع الطوب الأسمنتي والبلوك الخرساني",
          paragraphs: [
            "تختلف أنواع الطوب الأسمنتي والبلوك حسب الشكل والفراغات والمقاس والاستخدام المطلوب داخل المشروع."
          ],
          subSections: [
            {
              heading: "الطوب الأسمنتي المصمت",
              paragraphs: [
                "هو طوب لا يحتوي على فراغات كبيرة، ويتميز بوزنه الأعلى وقوة تحمله الأكبر مقارنة ببعض الأنواع المفرغة. يستخدم في الأماكن التي تحتاج إلى تحمل أعلى مثل الأسوار وبعض أعمال الرصف أو الاستخدامات التي تتطلب صلابة أكبر."
              ]
            },
            {
              heading: "الطوب الأسمنتي المفرغ",
              paragraphs: [
                "يحتوي على فراغات داخلية مصممة لتقليل الوزن وتحسين العزل وتقليل استهلاك المواد، ويستخدم بكثرة في الحوائط غير الحاملة والفواصل الداخلية وبعض الحوائط الخارجية حسب التصميم."
              ]
            },
            {
              heading: "البلوك الخرساني",
              paragraphs: [
                "البلوك وحدة خرسانية كبيرة نسبيًا، ويتميز بسرعة التنفيذ وتقليل عدد الوحدات المستخدمة في المتر مقارنة بالطوب الأصغر."
              ]
            },
            {
              heading: "بلوك الأسقف",
              paragraphs: [
                "يستخدم في بعض أنظمة البلاطات الخرسانية المسلحة لتقليل وزن السقف وتقليل كمية الخرسانة المستخدمة، مع الالتزام بتصميم المهندس المختص."
              ]
            }
          ]
        },
        {
          heading: "مكونات الطوب الأسمنتي",
          paragraphs: [
            "تتكون الخلطة الأساسية للطوب الأسمنتي من الأسمنت والرمل والركام الناعم والماء، ويؤثر كل مكون على جودة المنتج النهائي.",
            "يجب أن يكون الرمل والركام نظيفين وخاليين من الطين الزائد والأملاح والمواد العضوية، كما يجب استخدام مياه نظيفة في الخلط والمعالجة."
          ]
        },
        {
          heading: "طريقة تصنيع الطوب الأسمنتي",
          paragraphs: [
            "تبدأ عملية التصنيع بوزن المكونات وخلطها بنسب مناسبة داخل خلاط ميكانيكي حتى يتم الحصول على خليط متجانس. بعد ذلك يوضع الخليط داخل القوالب، ثم يتم كبسه واهتزازه للحصول على طوب منتظم الأبعاد ومتماسك.",
            "بعد خروج الطوب من القوالب، يتم نقله إلى منطقة التجفيف والمعالجة. وتعد المعالجة بالماء من أهم مراحل التصنيع، لأنها تساعد الطوب على اكتساب القوة وتحسين مقاومته للتفتت والكسر."
          ]
        },
        {
          heading: "نصائح عند شراء الطوب الأسمنتي والبلوك",
          paragraphs: [
            "قبل الشراء يجب التأكد من أن الطوب جاف ومعالج بشكل جيد، وأن لونه وملمسه متجانسان، وأبعاده منتظمة، ولا توجد به شروخ أو كسور واضحة.",
            "كما يُفضل طلب المواصفات الفنية للمنتج، خاصة في المشروعات التي تحتاج إلى مقاومة ضغط محددة أو استخدامات إنشائية خاصة."
          ]
        },
        {
          heading: "الخلاصة",
          paragraphs: [
            "الطوب الأسمنتي والبلوك الخرساني من أكثر مواد البناء استخدامًا في المشروعات الحديثة، لأنهما يوفران قوة جيدة، سرعة في التنفيذ، وتنوعًا في الأشكال والمقاسات. ومع اختيار منتج عالي الجودة ومطابق للمواصفات، يمكن الحصول على بناء قوي ومنظم يدوم لفترات طويلة."
          ]
        }
      ]
    },
    {
      slug: "curbstones-types-and-uses",
      title: "البردورات: أنواعها واستخداماتها في الطرق والأرصفة",
      seoTitle: "البردورات الخرسانية | الأنواع والاستخدامات | الشروق لمواد البناء",
      seoDescription:
        "تعرف على أنواع البردورات الخرسانية واستخداماتها في الطرق، الأرصفة، الحدائق، المداخل، والمشروعات الخارجية، وكيف تختار النوع المناسب لمشروعك.",
      excerpt:
        "مقال يوضح دور البردورات في تنظيم الطرق والأرصفة والمداخل، وأهم أنواعها وعوامل اختيار النوع المناسب.",
      image: "/images/products/curbstone-garden.webp",
      publishedAt: "2026-06-24",
      readTime: "5 دقائق قراءة",
      category: "البردورات",
      productLinks: [
        { label: "مشاهدة أنواع البردورات", href: "/ar/products/curbstones" },
        { label: "طلب عرض سعر", href: "/ar#quote" }
      ],
      sections: [
        {
          heading: "ما هي البردورة؟",
          paragraphs: [
            "البردورات من العناصر المهمة في أعمال الطرق، الأرصفة، المداخل، الجزر الوسطى، ومشروعات تنسيق المواقع. فهي لا تُستخدم فقط كعنصر شكلي، بل لها دور وظيفي في تحديد حواف الرصف، تنظيم حركة المياه، حماية الأرصفة، وتحسين المظهر النهائي للموقع.",
            "البردورة هي قطعة خرسانية أو حجرية تُركب على حافة الرصيف أو الطريق لتحديد الحدود بين المساحات المختلفة، مثل الطريق والرصيف، أو الطريق والجزيرة الوسطى، أو مناطق المشاة ومواقف السيارات."
          ]
        },
        {
          heading: "أهمية استخدام البردورات",
          paragraphs: [
            "تساعد البردورات في تحديد حافة الطريق أو الرصيف بشكل واضح، كما تساهم في توجيه مياه الأمطار أو مياه الغسيل نحو مسارات الصرف المناسبة.",
            "كذلك تعمل على حماية أطراف الرصف من التآكل أو الكسر، وتمنع دخول المركبات إلى مناطق غير مخصصة لها في بعض الحالات. ومن الناحية الجمالية، تضيف البردورات شكلًا منظمًا ونظيفًا للموقع."
          ]
        },
        {
          heading: "أنواع البردورات",
          paragraphs: [
            "تختلف أشكال وأحجام البردورات حسب مكان الاستخدام، طبيعة المشروع، ودرجة التحمل المطلوبة."
          ],
          subSections: [
            {
              heading: "البردورات الحاجزة",
              paragraphs: [
                "تكون مرتفعة نسبيًا وذات وجه جانبي واضح، وتُستخدم غالبًا للفصل بين مسار المركبات والرصيف أو المناطق التي يجب حمايتها من دخول السيارات."
              ]
            },
            {
              heading: "البردورات الغاطسة أو سهلة العبور",
              paragraphs: [
                "هذا النوع يكون أقل ارتفاعًا وأكثر سهولة في العبور، ويُستخدم في مداخل الجراجات ومواقف السيارات وبعض التقاطعات والمناطق التنظيمية."
              ]
            },
            {
              heading: "بردورات الحدائق والممرات",
              paragraphs: [
                "تُستخدم في تنسيق الحدائق، فصل المسطحات الخضراء عن الممرات، تحديد أحواض الزراعة، وتنظيم المسارات داخل الفلل والمنتجعات والمناطق السكنية."
              ]
            },
            {
              heading: "بردورات الطرق والمشروعات الثقيلة",
              paragraphs: [
                "تُستخدم في الطرق الرئيسية، المناطق الصناعية، محطات الخدمات، مواقف الشاحنات، والمشروعات التي تتعرض لأحمال أكبر."
              ]
            }
          ]
        },
        {
          heading: "استخدامات البردورات",
          paragraphs: [
            "تُستخدم البردورات في الأرصفة، الطرق الداخلية، مداخل المصانع، الجزر الوسطى، مواقف السيارات، الكمبوندات، الحدائق، المدارس، المستشفيات، والمناطق التجارية.",
            "كما تُستخدم في تحسين تصريف المياه ومنع تلف حواف الرصف، خصوصًا في الأماكن التي تتعرض لحركة مستمرة أو مياه سطحية."
          ]
        },
        {
          heading: "عوامل اختيار البردورة المناسبة",
          paragraphs: [
            "عند اختيار نوع البردورة يجب تحديد مكان الاستخدام أولًا: هل هي لطريق سيارات، رصيف مشاة، مدخل جراج، حديقة، أم منطقة صناعية؟ بعد ذلك يتم اختيار المقاس، درجة التحمل، شكل الوجه، اللون، وطريقة التركيب المناسبة.",
            "كذلك يجب الاهتمام بجودة الخرسانة، انتظام الأبعاد، نعومة الحواف، قوة التحمل، وعدم وجود شروخ أو تفتت في القطع."
          ]
        },
        {
          heading: "الخلاصة",
          paragraphs: [
            "البردورات عنصر أساسي في تنفيذ الطرق والأرصفة والمداخل، لأنها تجمع بين التنظيم، الحماية، التصريف، والشكل الجمالي. واختيار النوع المناسب يساعد على إطالة عمر الرصف وتحسين جودة المشروع النهائية."
          ]
        }
      ]
    },
    {
      slug: "interlock-benefits-for-sidewalks-entrances",
      title: "مميزات الإنترلوك في الأرصفة والمداخل والمساحات الخارجية",
      seoTitle: "الإنترلوك | المميزات والأشكال والاستخدامات | الشروق لمواد البناء",
      seoDescription:
        "اكتشف مميزات الإنترلوك في تنفيذ الأرصفة، المداخل، الحدائق، الجراجات، والممرات، مع شرح للأشكال والسماكات والألوان المتاحة.",
      excerpt:
        "تعرف على مميزات الإنترلوك، أشهر أشكاله، السماكات المناسبة، واستخداماته في الأرصفة والمداخل واللاندسكيب.",
      image: "/images/products/interlock-i-gray.webp",
      publishedAt: "2026-06-24",
      readTime: "5 دقائق قراءة",
      category: "الإنترلوك",
      productLinks: [
        { label: "مشاهدة أشكال الإنترلوك", href: "/ar/products/interlock" },
        { label: "منتجات حسب الطلب", href: "/ar/products/custom-products" },
        { label: "طلب عرض سعر", href: "/ar#quote" }
      ],
      sections: [
        {
          heading: "ما هو الإنترلوك؟",
          paragraphs: [
            "يُعد الإنترلوك من أفضل حلول الرصف الحديثة المستخدمة في الأرصفة، المداخل، الحدائق، الجراجات، الممرات، والمساحات الخارجية، لأنه يجمع بين القوة، الشكل الجمالي، سهولة التركيب، وإمكانية الفك وإعادة التركيب عند الحاجة.",
            "يعتمد الإنترلوك على وحدات خرسانية متداخلة تُركب بجانب بعضها بطريقة منظمة، مما يساعد على توزيع الأحمال وتحقيق مظهر نهائي مرتب للموقع."
          ]
        },
        {
          heading: "لماذا يُستخدم الإنترلوك في الأرصفة والمداخل؟",
          paragraphs: [
            "يستخدم الإنترلوك في الأرصفة والمداخل لأنه يوفر سطحًا قويًا ومنظمًا يتحمل الحركة اليومية، كما يمنح الموقع مظهرًا جماليًا مناسبًا للمداخل والحدائق والممرات.",
            "كما أن إمكانية تنفيذ ألوان وأشكال متعددة تجعله مناسبًا للمشروعات السكنية والتجارية واللاندسكيب."
          ]
        },
        {
          heading: "أهم مميزات الإنترلوك",
          paragraphs: [
            "يمتاز الإنترلوك بتنوع الأشكال والسماكات والألوان، مع سهولة الصيانة والاستبدال مقارنة ببعض حلول الرصف التقليدية."
          ],
          subSections: [
            {
              heading: "قوة تحمل مناسبة للاستخدامات الخارجية",
              paragraphs: [
                "يتوفر الإنترلوك بسماكات مثل 6 سم و8 سم حسب طبيعة الاستخدام، وهو مناسب للأرصفة والمداخل والجراجات والممرات عند اختياره وتنفيذه بطريقة صحيحة."
              ]
            },
            {
              heading: "أشكال متعددة تناسب التصميمات المختلفة",
              paragraphs: [
                "من أشهر الأشكال المتاحة حرف S، حرف I، الشكل السداسي، والباركيه، مما يساعد على تنفيذ تصميمات متنوعة حسب طبيعة المشروع."
              ]
            },
            {
              heading: "ألوان متنوعة حسب طبيعة المشروع",
              paragraphs: [
                "تتوفر جميع الألوان حسب الطلب، مما يجعل الإنترلوك مناسبًا للواجهات والمداخل والحدائق والمساحات الخارجية التي تحتاج إلى تنسيق جمالي."
              ]
            },
            {
              heading: "سهولة الصيانة والاستبدال",
              paragraphs: [
                "في حالة وجود أعمال صيانة أو تمديدات أسفل الرصف، يمكن فك جزء من الإنترلوك وإعادة تركيبه مرة أخرى بشكل أسهل من بعض أنواع الرصف الأخرى."
              ]
            }
          ]
        },
        {
          heading: "أشهر أشكال الإنترلوك",
          paragraphs: [
            "تتوفر لدى شركة الشروق أشكال متعددة من الإنترلوك مثل إنترلوك حرف S، إنترلوك حرف I، الإنترلوك السداسي، وإنترلوك باركيه، مع إمكانية تحديد اللون والسمك حسب متطلبات المشروع.",
            "وتتراوح أعداد الوحدات في المتر المربع حسب الشكل، لذلك من المهم اختيار النوع المناسب بناءً على المساحة والاستخدام والتصميم المطلوب."
          ]
        },
        {
          heading: "نصائح قبل شراء الإنترلوك",
          paragraphs: [
            "قبل شراء الإنترلوك يجب تحديد مكان الاستخدام، هل هو رصيف مشاة، مدخل فيلا، جراج، ممشى حديقة، أم ساحة انتظار؟ لأن السماكة المناسبة قد تختلف حسب طبيعة الاستخدام.",
            "كذلك يجب التأكد من انتظام الأبعاد، جودة الكبس، تجانس اللون، ومطابقة المنتج للمواصفات المطلوبة للمشروع."
          ]
        },
        {
          heading: "الخلاصة",
          paragraphs: [
            "الإنترلوك حل عملي وجمالي للأرصفة والمداخل والمساحات الخارجية، لأنه يجمع بين المرونة في التصميم، سهولة الصيانة، وتعدد الألوان والأشكال. ومع اختيار منتج جيد وتنفيذ صحيح، يمكن الحصول على رصف قوي ومنظم يدوم لفترات طويلة."
          ]
        }
      ]
    }
  ],
  en: [
    {
      slug: "red-clay-bricks-features-uses",
      title: "Red Clay Bricks: Features and Uses in Construction",
      seoTitle: "Red Clay Bricks | Features, Uses and Benefits | Alshorouk",
      seoDescription:
        "Learn about red clay bricks, their manufacturing process, key benefits, construction uses, and important tips before buying bricks for your project.",
      excerpt:
        "A practical guide to red clay bricks, their manufacturing process, benefits, construction uses, and buying tips.",
      image: "/images/products/red-clay-brick.webp",
      publishedAt: "2026-06-24",
      readTime: "6 min read",
      category: "Red Clay Bricks",
      productLinks: [
        { label: "View red clay bricks", href: "/en/products/red-clay-bricks" },
        { label: "Request a quote", href: "/en#quote" }
      ],
      sections: [
        {
          heading: "What are red clay bricks?",
          paragraphs: [
            "Red clay bricks are among the oldest and most widely used building materials in Egypt and the Arab region. They remain popular because they combine strength, ease of use, reasonable cost, and good thermal and sound insulation.",
            "They are commonly manufactured from clay, silt, sand, and water. The mixture is shaped into units, dried, and then fired in kilns until the bricks gain their final hardness and familiar red color."
          ]
        },
        {
          heading: "How red clay bricks are manufactured",
          paragraphs: [
            "The manufacturing process starts with preparing and cleaning the raw materials, then mixing them with water to form a consistent clay mixture that can be shaped.",
            "The mixture is cut into regular units using production lines, then dried before entering the kiln firing stage. Firing is important because it affects brick strength, water absorption, color, and resistance to weather conditions."
          ]
        },
        {
          heading: "Key benefits of red clay bricks",
          paragraphs: [
            "Good-quality red clay bricks provide reliable performance in everyday masonry work when they are manufactured to consistent dimensions and handled properly on site."
          ],
          subSections: [
            { heading: "Thermal insulation", paragraphs: ["Red clay bricks help reduce heat transfer through walls, improving indoor comfort and reducing excessive dependence on cooling or heating."] },
            { heading: "Fire resistance", paragraphs: ["Because the bricks are fired at high temperatures during production, they offer good heat resistance compared with many ordinary lightweight alternatives."] },
            { heading: "Durability", paragraphs: ["Red clay bricks can handle normal construction conditions and weather changes when the product is made to the required quality standards."] },
            { heading: "Sound insulation", paragraphs: ["With suitable wall thickness and proper plastering, red clay bricks can help reduce sound transmission between spaces."] },
            { heading: "Cost-effective construction", paragraphs: ["They are economical and easy to install, and most contractors and technicians are familiar with their handling and execution."] }
          ]
        },
        {
          heading: "Common uses in construction",
          paragraphs: [
            "Red clay bricks are used for internal and external walls, room partitions, fences, selected decorative works, and architectural designs that require the natural red-brick appearance.",
            "They can also be used in external façades and decorative wall surfaces when the right brick type and execution method are selected."
          ]
        },
        {
          heading: "Tips before buying red clay bricks",
          paragraphs: [
            "Before buying, check dimensional consistency, surface cracks, broken pieces, color consistency, and visible salts or white efflorescence on the brick surface.",
            "It is also better to work with a trusted supplier that can provide consistent quality, clear sizes, and organized delivery according to project needs."
          ]
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Red clay bricks are a practical and economical choice for many construction works. With proper product selection and correct installation, they can provide long-lasting performance and a strong building finish."
          ]
        }
      ]
    },
    {
      slug: "cement-bricks-and-concrete-blocks",
      title: "Cement Bricks and Concrete Blocks: Types, Materials and Manufacturing",
      seoTitle: "Cement Bricks and Concrete Blocks | Types and Uses | Alshorouk",
      seoDescription:
        "A practical guide to cement bricks and concrete blocks, including types, materials, manufacturing process, uses, and buying tips.",
      excerpt:
        "Learn the difference between cement bricks and concrete blocks, their materials, manufacturing method, and suitable uses.",
      image: "/images/products/hollow-block-20.webp",
      publishedAt: "2026-06-24",
      readTime: "7 min read",
      category: "Cement Bricks & Blocks",
      productLinks: [
        { label: "View cement bricks", href: "/en/products/cement-bricks" },
        { label: "View concrete blocks", href: "/en/products/blocks" },
        { label: "Request a quote", href: "/en#quote" }
      ],
      sections: [
        {
          heading: "What are cement bricks?",
          paragraphs: [
            "Cement bricks and concrete blocks are widely used modern building units for walls, fences, service buildings, and selected construction applications.",
            "Cement bricks are typically made from cement, sand, fine aggregate, and water. The mixture is pressed into molds, then cured with water until it gains the required strength."
          ]
        },
        {
          heading: "Difference between bricks and blocks",
          paragraphs: [
            "Bricks are usually smaller units used in traditional masonry and partitions, while blocks are larger units that may be solid or hollow depending on the required specification.",
            "The choice depends on wall type, required load, insulation, cost, execution speed, and project requirements."
          ]
        },
        {
          heading: "Types of cement bricks and concrete blocks",
          paragraphs: ["There are several types depending on dimensions, voids, weight, strength, and the intended use."],
          subSections: [
            { heading: "Solid cement bricks", paragraphs: ["Solid cement bricks have a higher weight and good strength, making them suitable for fences, selected heavy-duty works, and applications that need more rigidity."] },
            { heading: "Hollow cement bricks", paragraphs: ["Hollow units reduce weight and can improve handling and insulation in non-load-bearing walls and partitions."] },
            { heading: "Concrete blocks", paragraphs: ["Concrete blocks are larger building units that can speed up wall execution and reduce the number of units required per square meter."] },
            { heading: "Roof blocks", paragraphs: ["Roof blocks may be used in selected slab systems to reduce slab weight and concrete consumption, according to the structural design."] }
          ]
        },
        {
          heading: "Materials used in cement bricks",
          paragraphs: [
            "The main materials are cement, sand, fine aggregate, and clean water. Good storage and correct material selection are important for consistent product quality.",
            "Sand and aggregate should be clean and free from excessive clay, salts, and organic materials that could affect strength or surface appearance."
          ]
        },
        {
          heading: "Manufacturing process",
          paragraphs: [
            "The materials are measured and mixed mechanically until a consistent mix is achieved. The mix is then placed into molds and compacted to form regular and strong units.",
            "After demolding, the units are moved to the curing area. Proper water curing is essential because it helps the product gain strength and improves resistance to cracking and crumbling."
          ]
        },
        {
          heading: "Buying tips",
          paragraphs: [
            "Before buying, check that the units are well cured, consistent in color and texture, regular in dimensions, and free from visible cracks or breakage.",
            "For projects requiring specific compressive strength or technical performance, request the product specifications before confirming the order."
          ]
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Cement bricks and concrete blocks are widely used because they provide good strength, efficient execution, and multiple sizes. Choosing a quality product helps achieve durable and well-organized construction work."
          ]
        }
      ]
    },
    {
      slug: "curbstones-types-and-uses",
      title: "Curbstones: Types and Uses in Roads and Sidewalks",
      seoTitle: "Concrete Curbstones | Types and Uses | Alshorouk",
      seoDescription:
        "Learn about concrete curbstones, their types, uses in roads, sidewalks, gardens and entrances, and how to choose the right curbstone for your project.",
      excerpt:
        "A clear guide to curbstone types, their role in roads, sidewalks, entrances, gardens, and how to choose the right type.",
      image: "/images/products/curbstone-garden.webp",
      publishedAt: "2026-06-24",
      readTime: "5 min read",
      category: "Curbstones",
      productLinks: [
        { label: "View curbstones", href: "/en/products/curbstones" },
        { label: "Request a quote", href: "/en#quote" }
      ],
      sections: [
        {
          heading: "What is a curbstone?",
          paragraphs: [
            "Curbstones are important elements in roads, sidewalks, entrances, median islands, and landscape works. They do not only provide a visual border; they also help define paving edges, guide water flow, protect sidewalks, and improve the final appearance of the site.",
            "A curbstone is a concrete or stone unit installed at the edge of a road or sidewalk to separate different areas such as vehicle lanes, pedestrian zones, green areas, or parking spaces."
          ]
        },
        {
          heading: "Why curbstones are important",
          paragraphs: [
            "Curbstones clearly define the edge of roads and sidewalks. They also help direct rainwater or washing water toward proper drainage paths.",
            "They protect paving edges from damage and add a clean, organized finish to entrances, compounds, sidewalks, and commercial areas."
          ]
        },
        {
          heading: "Main types of curbstones",
          paragraphs: ["Curbstone dimensions and shapes vary according to location, project type, and required durability."],
          subSections: [
            { heading: "Barrier curbstones", paragraphs: ["These are relatively higher curbstones used to separate vehicle lanes from sidewalks or protected areas."] },
            { heading: "Mountable curbstones", paragraphs: ["These are lower and easier to cross at low speed, making them suitable for parking areas, garage entrances, and traffic organization zones."] },
            { heading: "Garden and walkway curbstones", paragraphs: ["These are used in landscaping, green areas, garden paths, villas, resorts, and residential developments."] },
            { heading: "Heavy-duty road curbstones", paragraphs: ["These are used in main roads, industrial areas, service stations, truck parking areas, and projects exposed to higher loads."] }
          ]
        },
        {
          heading: "Common uses",
          paragraphs: [
            "Curbstones are used in sidewalks, internal roads, factory entrances, median islands, parking areas, compounds, gardens, schools, hospitals, and commercial zones.",
            "They also help protect paving edges and improve surface water control in areas exposed to frequent movement or water flow."
          ]
        },
        {
          heading: "How to choose the right curbstone",
          paragraphs: [
            "Start by identifying the place of use: vehicle road, pedestrian sidewalk, garage entrance, garden, or industrial area. Then select the size, strength, face shape, color, and installation method accordingly.",
            "Quality, dimensional accuracy, smooth edges, compressive strength, and the absence of cracks or crumbling are key points to check before purchase."
          ]
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Curbstones are essential for roads, sidewalks, and entrances because they combine organization, protection, drainage support, and visual finishing. Choosing the right type improves both the durability and appearance of the project."
          ]
        }
      ]
    },
    {
      slug: "interlock-benefits-for-sidewalks-entrances",
      title: "Benefits of Interlock Pavers for Sidewalks, Entrances and Outdoor Areas",
      seoTitle: "Interlock Pavers | Benefits, Shapes and Uses | Alshorouk",
      seoDescription:
        "Discover the benefits of interlock pavers for sidewalks, entrances, gardens, parking areas and outdoor spaces, including shapes, thicknesses and colors.",
      excerpt:
        "Discover interlock paver benefits, common shapes, suitable thicknesses, color options, and uses in outdoor areas.",
      image: "/images/products/interlock-i-gray.webp",
      publishedAt: "2026-06-24",
      readTime: "5 min read",
      category: "Interlock Pavers",
      productLinks: [
        { label: "View interlock pavers", href: "/en/products/interlock" },
        { label: "Custom products", href: "/en/products/custom-products" },
        { label: "Request a quote", href: "/en#quote" }
      ],
      sections: [
        {
          heading: "What are interlock pavers?",
          paragraphs: [
            "Interlock pavers are one of the most practical paving solutions for sidewalks, entrances, gardens, garages, walkways, and outdoor spaces. They combine strength, visual appeal, easy installation, and the ability to remove and reinstall units when needed.",
            "They are concrete paving units installed in an interlocking pattern, helping distribute loads and create a clean, organized finish."
          ]
        },
        {
          heading: "Why use interlock pavers?",
          paragraphs: [
            "Interlock pavers provide a strong and attractive surface for daily movement, making them suitable for entrances, sidewalks, garden paths, parking areas, and outdoor landscapes.",
            "Their variety of colors and shapes makes them a flexible choice for residential, commercial, and landscape projects."
          ]
        },
        {
          heading: "Key benefits",
          paragraphs: ["Interlock pavers offer multiple advantages in design, maintenance, and site performance."],
          subSections: [
            { heading: "Strength and durability", paragraphs: ["They are available in practical thicknesses such as 6 cm and 8 cm depending on the use, making them suitable for sidewalks, entrances, and parking areas when properly installed."] },
            { heading: "Multiple shapes", paragraphs: ["Common shapes include S shape, I shape, hexagonal, and parquet, allowing different design patterns."] },
            { heading: "Various colors", paragraphs: ["Colors can be selected according to project design, making interlock pavers suitable for entrances, gardens, and outdoor areas."] },
            { heading: "Easy maintenance", paragraphs: ["If underground maintenance is needed, selected units can be removed and reinstalled more easily than many traditional paving systems."] }
          ]
        },
        {
          heading: "Common interlock shapes",
          paragraphs: [
            "Alshorouk supplies several interlock shapes including S shape, I shape, hexagonal, and parquet. Thickness and color can be selected according to project requirements.",
            "The number of units per square meter differs from one shape to another, so it is important to select the right option based on area, use, and design."
          ]
        },
        {
          heading: "Buying tips",
          paragraphs: [
            "Before buying interlock pavers, define the use area: pedestrian sidewalk, villa entrance, garage, garden path, or parking area. The suitable thickness may vary based on usage.",
            "Check dimensional consistency, pressing quality, color uniformity, and compliance with project specifications."
          ]
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Interlock pavers are a practical and attractive solution for sidewalks, entrances, and outdoor spaces. With good product quality and proper installation, they provide an organized paving system that can last for years."
          ]
        }
      ]
    }
  ]
};

export function getArticles(locale: Locale) {
  return articles[locale];
}

export function getArticle(locale: Locale, slug: string) {
  return articles[locale].find((article) => article.slug === slug);
}

export function getArticleMetadata(article: Article, locale: Locale): Metadata {
  return buildSeoMetadata({
    locale,
    path: `/articles/${article.slug}`,
    title: article.seoTitle,
    description: article.seoDescription,
    image: article.image,
    type: "article",
    keywords: [article.title, article.category, "مواد بناء", "الشروق لمواد البناء"]
  });
}
