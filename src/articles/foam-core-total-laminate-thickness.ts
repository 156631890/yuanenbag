import type { EditorialArticle } from '../editorial'

const article: EditorialArticle = {
  "kind": "guide",
  "slug": "foam-core-total-laminate-thickness",
  "publishedAt": "2026-11-04",
  "title": {
    "en": "Define Which Layer an Insulation Thickness Quote Measures",
    "zh": "保温材料报价里的厚度，量的是泡沫芯还是复合总厚",
    "es": "Defina qué capa mide el espesor cotizado del aislante"
  },
  "description": {
    "en": "A foam-core thickness and a total-laminate thickness are different specification bases. Align the measured layer, units and contact conditions before comparing quotations or samples.",
    "zh": "泡沫芯厚与复合总厚的规格口径不同。比较报价或样品前，应先统一测量层次、单位及接触测量条件。",
    "es": "Espesor del núcleo de espuma y espesor total del laminado son bases distintas. Alinee capa medida, unidades y condiciones de contacto antes de comparar ofertas o muestras."
  },
  "intro": {
    "en": "Two insulation quotations can use the same millimetre unit while describing different parts of the material. Before deciding that a roll is thicker, thinner or out of specification, ask what the stated thickness includes and how it is measured. A larger number is not, by itself, evidence of better insulation or cushioning.",
    "zh": "两份隔热材料报价都使用毫米，却可能量的是不同部分。判断卷材更厚、更薄或是否超出规格前，应先问清厚度包含哪些层、采用什么测法。数值更大，本身不能证明保温或缓冲更好。",
    "es": "Dos ofertas de aislamiento pueden usar milímetros y describir partes distintas del material. Antes de concluir que un rollo es más grueso, más fino o está fuera de especificación, confirme qué incluye la cifra y cómo se mide. Una cifra mayor no demuestra por sí sola mejor aislamiento ni amortiguación."
  },
  "sections": [
    {
      "heading": {
        "en": "Start with the named measurement scope",
        "zh": "先明确厚度指向的层次",
        "es": "Empiece por el alcance de la medida"
      },
      "paragraphs": [
        {
          "en": "YUANEN’s EPE foam foil roll specification asks for foam thickness T. Its foil bubble roll specification asks for laminate thickness T using an agreed low-pressure method. The first identifies the foam layer; the second identifies the laminate measurement. Do not silently treat the foam-only entry as total composite thickness, or import the EPE definition into a bubble construction. Ask for the proposed layer description beside the dimension.",
          "zh": "远恩EPE珍珠棉铝箔卷规格要求确认泡沫厚度T；铝箔气泡卷规格要求按约定低压力方法确认复合厚度T。前者指泡沫层，后者指复合材料测量。不能把仅泡沫的条目默认为复合总厚，也不能把EPE定义套用到气泡结构。应在尺寸旁写明拟供层次说明。",
          "es": "La especificación YUANEN del rollo EPE solicita espesor de espuma T. La del rollo de burbuja solicita espesor del laminado T mediante un método de baja presión acordado. El primero identifica la capa de espuma; el segundo, la medida del laminado. No convierta sin aclaración un dato de espuma en espesor total ni traslade la definición EPE a la burbuja. Pida la descripción de capas junto a la medida."
        },
        {
          "en": "If the supplier provides both core and total thickness, label them separately on the same material revision. Record whether the value applies to one sheet or another agreed specimen arrangement. Do not divide a stack reading and assume it reproduces a single-sheet result, and do not peel a bonded laminate apart as an improvised acceptance method.",
          "zh": "若供应方同时给出芯层厚度与总厚，应在同一材料版本下分别标记。注明数值针对单层材料还是另行约定的试样形式。不能将叠层读数简单相除，就认为等同单层结果，也不要临时剥离已复合材料作为验收方法。",
          "es": "Si el proveedor aporta espesor del núcleo y total, identifíquelos por separado para la misma revisión del material. Indique si corresponde a una lámina o a otra disposición acordada. No divida una lectura de capas apiladas suponiendo que reproduce una lectura individual, ni despegue un laminado adherido como método improvisado de aceptación."
        }
      ],
      "image": {
        "file": "images/editorial/2026-11-12-batch05/continuous-foam-laminate-edge.webp",
        "kind": "illustration",
        "alt": {
          "en": "Cut edge of a continuous white foam laminate with a thin silver face and a curled white reverse",
          "zh": "连续白色泡棉复合片的切边、薄银色面层和卷起的白色背面",
          "es": "Canto de un laminado continuo de espuma blanca con cara plateada fina y reverso blanco curvado"
        },
        "caption": {
          "en": "The white core and complete laminate are different measurement scopes. This generic edge view supplies no scale, reading or facing-composition evidence.",
          "zh": "白色芯层与完整复合件是不同测量范围；通用切边构图不提供比例尺、读数或面层成分依据。",
          "es": "El núcleo blanco y el laminado completo son alcances distintos. La vista genérica no aporta escala, lectura ni prueba de composición de la cara."
        }
      }
    },
    {
      "heading": {
        "en": "Make quotation and sample readings comparable",
        "zh": "让报价与样品读数可比较",
        "es": "Haga comparables oferta y lecturas de muestra"
      },
      "paragraphs": [
        {
          "en": "Soft foam and formed air cells can be affected by the contact used to measure them. A close-up photograph of a gauge does not define the measurement conditions. Agree the instrument/method and how the specimen is supported and contacted; record the contact pressure or applicable agreed method, foot geometry, reading timing and specimen condition as required for that method. Do not choose a universal pressure or instrument solely from a supplier’s unrelated material page.",
          "zh": "软泡沫及成型气泡会受到测量接触方式影响。量具特写不能说明完整测量条件。应约定仪器或方法，以及试样怎样支撑和接触；按该方法要求，记录接触压力或适用约定方法、测足形状、读数时机及试样状态。不能从其他材料供应商页面挑一个通用压力或量具直接套用。",
          "es": "La espuma blanda y las celdas de aire pueden verse afectadas por el contacto de medición. Una foto del instrumento no define las condiciones. Acuerde instrumento/método, apoyo y contacto de la muestra; registre presión o método acordado aplicable, geometría del pie, momento de lectura y estado de la muestra según ese método. No elija una presión o instrumento universal a partir de una página de otro material."
        }
      ],
      "table": {
        "caption": {
          "en": "Minimum comparison record",
          "zh": "基本对照记录",
          "es": "Registro básico de comparación"
        },
        "columns": [
          {
            "en": "Identify",
            "zh": "标明",
            "es": "Identifique"
          },
          {
            "en": "Record together",
            "zh": "对应记录",
            "es": "Registre conjuntamente"
          }
        ],
        "rows": [
          [
            {
              "en": "Material and layers",
              "zh": "材料与层次",
              "es": "Material y capas"
            },
            {
              "en": "Material/sample revision; foam-only or total-laminate scope",
              "zh": "材料及样品版本；仅泡沫或复合总厚口径",
              "es": "Revisión de material/muestra; espuma sola o laminado total"
            }
          ],
          [
            {
              "en": "Dimension",
              "zh": "尺寸",
              "es": "Medida"
            },
            {
              "en": "Unit, nominal thickness and agreed tolerance",
              "zh": "单位、标称厚度与约定公差",
              "es": "Unidad, nominal y tolerancia acordada"
            }
          ],
          [
            {
              "en": "Method",
              "zh": "测法",
              "es": "Método"
            },
            {
              "en": "Agreed measurement conditions, date and locations/readings",
              "zh": "约定测量条件、日期及测点和读数",
              "es": "Condiciones acordadas, fecha y puntos/lecturas"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Reconcile two records before comparing their numbers",
        "zh": "比较数字前，先对齐两份记录",
        "es": "Concilie dos registros antes de comparar cifras"
      },
      "paragraphs": [
        {
          "en": "In a hypothetical comparison, quotation Q1 labels T as foam-core thickness, while sample record S1 labels its reading as the full laminate. Both may use millimetres, but they are not yet a like-for-like comparison. Ask for the same identified material revision and the same measured span under the agreed method. Do not subtract an assumed facing or adhesive thickness to manufacture a core reading.",
          "zh": "假设报价Q1把T标为泡棉芯厚，而样品记录S1把读数标为复合总厚。即使单位都是毫米，也还不能直接比较。应要求在约定方法下，对同一材料版本和同一测量跨度给出记录，不能减去假定面层或胶层厚度来凑出芯厚读数。",
          "es": "En un ejemplo hipotético, Q1 llama a T espesor del núcleo y S1 mide el laminado completo. Aunque ambas cifras estén en milímetros, todavía no son comparables. Pida la misma revisión y alcance con el método acordado; no reste capas supuestas para fabricar una lectura del núcleo."
        }
      ],
      "table": {
        "caption": {
          "en": "Align the meaning of the reading",
          "zh": "对齐读数的含义",
          "es": "Alinee el significado de la lectura"
        },
        "columns": [
          {
            "en": "Record field",
            "zh": "记录字段",
            "es": "Campo"
          },
          {
            "en": "Resolve before judgement",
            "zh": "判定前先解决",
            "es": "Resolver antes de juzgar"
          }
        ],
        "rows": [
          [
            {
              "en": "Material and revision",
              "zh": "材料及版本",
              "es": "Material y revisión"
            },
            {
              "en": "EPE foam laminate or formed-bubble laminate; same offered construction",
              "zh": "EPE泡棉复合或成型气泡复合，是否同一拟供结构",
              "es": "Laminado EPE o de burbujas; misma construcción ofrecida"
            }
          ],
          [
            {
              "en": "Measured span",
              "zh": "测量跨度",
              "es": "Alcance medido"
            },
            {
              "en": "Foam core, complete laminate or another explicitly named specimen",
              "zh": "泡棉芯层、完整复合件或其他明确试样",
              "es": "Núcleo, laminado completo u otra probeta identificada"
            }
          ],
          [
            {
              "en": "Method and condition",
              "zh": "方法及状态",
              "es": "Método y estado"
            },
            {
              "en": "Agreed contact/support, pressure or specified method, timing and sample condition",
              "zh": "约定接触/支撑、压力或指定方法、读数时点与样品状态",
              "es": "Contacto/apoyo, presión o método, tiempo y estado acordados"
            }
          ],
          [
            {
              "en": "Nominal value and tolerance",
              "zh": "标称值及公差",
              "es": "Valor nominal y tolerancia"
            },
            {
              "en": "The acceptance range agreed for that scope and method",
              "zh": "针对该范围与方法已约定的接受区间",
              "es": "Intervalo aceptado para ese alcance y método"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Investigate a difference before calling it a failure",
        "zh": "出现差异，先对照口径再判断不合格",
        "es": "Investigue la diferencia antes de declarar un fallo"
      },
      "paragraphs": [
        {
          "en": "When a sample reading differs from a quotation, compare the material revision, measured layers, units and method first. Ask the supplier to explain the difference against the agreed nominal value and tolerance, with the recorded measurement conditions. If those conditions or tolerances were never agreed, resolve them rather than invent a pass/fail threshold after delivery.",
          "zh": "样品读数与报价不一致时，先比较材料版本、被测层次、单位与方法。请供应方结合有记录的测量条件，对照约定标称值及公差说明差异。若事先没有约定条件或公差，应先补齐，不能到货后临时制定通过或不通过门槛。",
          "es": "Si la lectura de muestra difiere de la oferta, compare primero revisión, capas, unidades y método. Pida explicar la diferencia frente al nominal y tolerancia acordados, con condiciones registradas. Si no se acordaron condiciones o tolerancias, resuélvalas en vez de inventar un umbral de aceptación después de recibir el material."
        },
        {
          "en": "If the records describe different spans or conditions, request a matched comparison before calling the material out of specification. If they do match and the result is outside the agreed tolerance, retain the record for the supplier’s nonconformity review. Missing measurement information and an observed failure against an agreed requirement are different outcomes; neither is resolved by photographing an uncalibrated gauge.",
          "zh": "若两份记录的跨度或条件不同，应先索取一致口径的比较，再判断材料是否超差。若口径一致且结果超出约定公差，应保留记录交供方复核不符合项。缺少测量信息与按已约定要求观察到不符合，是不同结果；拍一张未明确校准状态的量具照片都不能代替处理。",
          "es": "Si alcance o condiciones difieren, solicite comparación equivalente antes de declarar incumplimiento. Si coinciden y el resultado queda fuera de tolerancia acordada, conserve el registro para revisión del proveedor. Falta de datos y fallo frente a un requisito acordado son resultados distintos; fotografiar un medidor sin calibración identificada no los resuelve."
        },
        {
          "en": "Thickness alone does not establish density, facing composition, heat-transfer performance, an R-value or a shipping temperature duration. Those are separate specification or test questions. YUANEN’s proposed construction, supplied thickness range and acceptance method remain subject to the confirmed sample and order; this article reports no completed laboratory test or certification.",
          "zh": "单凭厚度不能确定密度、反射面层成分、传热性能、R值或运输保温时长，这些应分别以规格或测试回答。远恩拟供结构、供货厚度范围及验收方法以确认样品和订单为准；本文没有报告已完成的实验室测试或认证。",
          "es": "El espesor solo no establece densidad, composición de la cara, transferencia térmica, valor R ni duración de temperatura en transporte. Son cuestiones separadas de especificación o ensayo. Construcción, rango suministrado y aceptación de YUANEN dependen de la muestra y pedido confirmados; este artículo no comunica ensayos de laboratorio ni certificaciones completados."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN EPE foam roll: foam thickness definition",
        "zh": "远恩EPE卷：泡沫厚度定义",
        "es": "Rollo EPE YUANEN: definición de espesor de espuma"
      },
      "url": "https://yuanenbag.com/products/epe-foam-foil-insulation-rolls/"
    },
    {
      "title": {
        "en": "YUANEN bubble roll: laminate thickness and method",
        "zh": "远恩气泡卷：复合厚度与测法",
        "es": "Rollo de burbuja YUANEN: espesor y método"
      },
      "url": "https://yuanenbag.com/products/foil-bubble-insulation-rolls/"
    }
  ],
  "relatedProducts": [
    "epe-foam-foil-insulation-rolls",
    "foil-bubble-insulation-rolls"
  ],
  "image": {
    "file": "images/editorial/2026-11-06-guide-cover-revisions/foam-core-total-laminate-thickness.webp",
    "kind": "illustration",
    "alt": {
      "en": "Flat measuring pads straddle the silver face and white underside of a foam laminate swatch.",
      "zh": "测厚工具的平压脚分别接触泡沫复合样片的银色面和白色底面。",
      "es": "Los palpadores planos abarcan la cara plateada y la cara inferior blanca de una muestra de laminado de espuma."
    },
    "caption": {
      "en": "The pads show the full laminate measurement span. The image provides no reading.",
      "zh": "压脚的位置展示复合总厚的测量范围，画面未显示读数。",
      "es": "Los palpadores muestran el alcance del espesor total del laminado. La imagen no aporta una lectura."
    }
  },
  "updatedAt": "2026-11-12"
}

export default article
