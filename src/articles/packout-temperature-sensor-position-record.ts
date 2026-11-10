import type { EditorialArticle } from '../editorial'

const article: EditorialArticle = {
  "kind": "guide",
  "slug": "packout-temperature-sensor-position-record",
  "publishedAt": "2026-10-19",
  "title": {
    "en": "Keep Sensor Positions With the Loaded-Bag Test Record",
    "zh": "装载测试的测温位置，要随照片一起留档",
    "es": "Guarde la posición de los sensores con el registro de ensayo de la bolsa cargada"
  },
  "description": {
    "en": "Link sensor identifiers, placement photographs and loading revisions when discussing a temperature-test plan for a front-opening insulated catering bag.",
    "zh": "为前开式餐盘配送包的温控试验记录关联传感器编号、测点照片、装载版本与时间信息，避免用一条温度曲线代替完整试验说明。",
    "es": "Vincule identificadores de sensores, fotos de posición y versiones de carga al acordar el ensayo térmico de una bolsa de catering con apertura frontal."
  },
  "intro": {
    "en": "A temperature trace needs a location record that says what was measured, not just where a device appears in a photograph. For a front-opening catering bag, connect each point to the closed tray, bag revision and actual arrangement. Air, a container surface and the contents are different measurement objects; do not use one label for all three.",
    "zh": "温度曲线需要一份能说明“测的是什么”的位置记录，不能只有设备在照片中的大概位置。前开式餐盘包的每个测点，都应关联到闭合餐盘、袋体版本及实际布局。空气、容器表面和内容物是不同测量对象，不能混用一个名称。",
    "es": "Una curva necesita un registro que explique qué se mide, además de dónde aparece el dispositivo. En una bolsa de catering frontal, vincule cada punto con bandeja cerrada, revisión de bolsa y disposición real. Aire, superficie del envase y contenido son objetos distintos; no utilice una sola etiqueta para los tres."
  },
  "sections": [
    {
      "heading": {
        "en": "Name the measurement object before choosing a point",
        "zh": "先命名测量对象，再讨论点位",
        "es": "Nombre el objeto antes de elegir la posición"
      },
      "paragraphs": [
        {
          "en": "Begin with the purchasing question: are you reviewing air inside the bag, a named tray surface or a defined position in the contents? The testing team must decide which answers the intended requirement. A point attached to a lid does not become a food-core reading because the lid covers food. A device beside refrigerant does not describe every tray in the carrier.",
          "zh": "先说清采购问题：要评估袋内空气、指定餐盘表面，还是内容物的某个位置？由负责测试的团队判断哪种测量能回答要求。贴在盖子上的点不会因为盖下有食品，就变成食品中心温度；靠近冷媒的设备也不能描述包内全部餐盘。",
          "es": "Empiece por la pregunta: ¿aire de la bolsa, superficie de una bandeja o posición definida en el contenido? El equipo de ensayo debe elegir lo pertinente. Un punto sobre la tapa no mide el centro del alimento por cubrirlo. Un dispositivo junto al refrigerante tampoco representa todas las bandejas."
        }
      ],
      "table": {
        "caption": {
          "en": "Keep these measurement descriptions distinct",
          "zh": "把三种测量描述分开",
          "es": "Distinga estas descripciones de medición"
        },
        "columns": [
          {
            "en": "Object",
            "zh": "对象",
            "es": "Objeto"
          },
          {
            "en": "Record with the point",
            "zh": "应随点位记录",
            "es": "Qué registrar"
          },
          {
            "en": "Do not infer",
            "zh": "不能据此推定",
            "es": "Qué no deducir"
          }
        ],
        "rows": [
          [
            {
              "en": "Air",
              "zh": "空气",
              "es": "Aire"
            },
            {
              "en": "The free-space position and any contact with surrounding parts",
              "zh": "所在空隙及是否接触周边部件",
              "es": "Posición en el espacio y contacto con otras partes"
            },
            {
              "en": "Temperature at the centre of the food",
              "zh": "食品中心温度",
              "es": "Temperatura en el centro del alimento"
            }
          ],
          [
            {
              "en": "Container surface",
              "zh": "容器表面",
              "es": "Superficie del envase"
            },
            {
              "en": "Container face, attachment and exact location",
              "zh": "容器哪一面、连接方式和准确位置",
              "es": "Cara, fijación y ubicación exacta"
            },
            {
              "en": "The contents or all surrounding air",
              "zh": "内容物或全部周围空气",
              "es": "Contenido o todo el aire circundante"
            }
          ],
          [
            {
              "en": "Defined location in contents",
              "zh": "内容物指定位置",
              "es": "Posición definida en el contenido"
            },
            {
              "en": "The responsible team’s method, object and placement reference",
              "zh": "责任团队的方法、对象及定位依据",
              "es": "Método, objeto y referencia del equipo responsable"
            },
            {
              "en": "Every other item or another load arrangement",
              "zh": "其他所有物件或另一种装载",
              "es": "Todos los artículos u otra disposición"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Fix the load that the location will refer to",
        "zh": "固定点位所对应的装载",
        "es": "Fije la carga a la que se refiere el punto"
      },
      "paragraphs": [
        {
          "en": "Identify the bag sample, tray and lid, contents and starting condition, and any coolant preparation and position. Photograph the closed loaded unit before it hides the next point. YUANEN’s current catering proposal has a fold-down front and short side grips, with a nonwoven exterior and foil lining. It does not specify shelves, a sensor pocket, a cable port or a supplied logger.",
          "zh": "记录袋体样品、餐盘与盖、内容物及初始状态，以及冷媒准备和位置。在下一层装载遮住测点前，拍下对应的闭合装载单元。远恩当前餐盘包为前盖下翻、两侧短提手、无纺布外层和铝箔内衬；不默认搁架、传感器口袋、线缆接口或随货记录器。",
          "es": "Identifique bolsa, bandeja y tapa, contenido y estado inicial, preparación y posición del refrigerante. Fotografíe la unidad cerrada antes de ocultar otro punto. La propuesta actual tiene frontal abatible, asas laterales, exterior no tejido y forro de aluminio. No especifica estantes, bolsillo para sensor, puerto de cable ni registrador incluido."
        },
        {
          "en": "Give the load and the test plan separate revision references. If the tray lid changes but the bag does not, the point’s relation to the lid may still change. Keep a revised arrangement identifiable instead of continuing an old photograph under the same general product name.",
          "zh": "装载版本与试验方案分别编号。即使袋子没变，更换餐盘盖也可能改变测点与盖面的关系。应能识别修改后的排列，不能只因产品名相同就继续使用旧照片。",
          "es": "Asigne revisiones distintas a carga y plan. Aunque la bolsa no cambie, otra tapa puede alterar la relación del punto con ella. Identifique la nueva disposición; no conserve una foto antigua solo por mantener el nombre del producto."
        }
      ]
    },
    {
      "heading": {
        "en": "Make each location recoverable from the record",
        "zh": "让记录能重新找到每个位置",
        "es": "Permita reconstruir cada ubicación"
      },
      "paragraphs": [
        {
          "en": "Assign the point code to the device identifier and original data file. Show its relation to a named tray, opening, lining or coolant, then state the measurement object separately. The A and B paper markers in the image illustrate this distinction: one locates a lid area and the other an inner-wall area. The markers are not sensors and neither demonstrates food temperature.",
          "zh": "把点位编号与设备编号、原始数据文件关联起来。先说明它相对哪只餐盘、袋口、内衬或冷媒的位置，再另写测量对象。图中的A、B纸标记用来说明这种区别：一处定位盖面，另一处定位内侧壁。标记不是传感器，也不证明食品温度。",
          "es": "Relacione código del punto, identificador del dispositivo y archivo original. Sitúelo respecto a una bandeja, apertura, forro o refrigerante y anote aparte el objeto medido. Las marcas de papel A y B ilustran una zona de tapa y otra de pared interior. No son sensores ni demuestran temperatura del alimento."
        },
        {
          "en": "Use another view when one photograph cannot establish the location. For a hidden point, keep the pre-loading view and final load view under the same reference. Do not invent a dimension from an image; if placement depends on a distance, have the testing team define its datum, unit and method.",
          "zh": "单张照片不能定位时，补一个方向。隐藏点应把遮盖前照片与最终装载照片放在同一记录中。不能从图片估出尺寸；定位确实依赖距离时，由测试团队明确基准、单位及方法。",
          "es": "Añada otra vista si una foto no sitúa el punto. Para puntos ocultos, vincule la vista previa y la carga final. No deduzca medidas de una imagen; si la posición depende de una distancia, el equipo debe definir referencia, unidad y método."
        }
      ],
      "image": {
        "file": "images/editorial/2026-11-10-depth/sensor-detail.webp",
        "kind": "illustration",
        "alt": {
          "en": "Paper mark A on a closed tray lid and B on the carrier’s inner wall; two grey devices remain outside.",
          "zh": "闭合餐盘盖上放有A纸标记，包内侧壁有B纸标记，两只灰色设备仍在包外。",
          "es": "Marca de papel A en la tapa y B en la pared interior; dos dispositivos grises permanecen fuera."
        },
        "caption": {
          "en": "Example location markers, not a sensor-placement prescription. Record the measured object and mounting separately.",
          "zh": "位置标记示例，不是规定的测点布置；测量对象和固定方式应另行记录。",
          "es": "Marcas de posición de ejemplo, no una prescripción de sensores. Registre objeto medido y fijación por separado."
        }
      }
    },
    {
      "heading": {
        "en": "Preserve the closure and the time reference",
        "zh": "同时保留封口与时间基准",
        "es": "Conserve el cierre y la referencia temporal"
      },
      "paragraphs": [
        {
          "en": "For a wired setup, agree and photograph the cable route before closing. If it leaves a gap, compresses the zipper or changes the pack, record that deviation and resolve it with the test team. Do not force a lead through the zipper or puncture the lining to create a port. For a self-contained device, record how its position is maintained without assuming an attachment is supplied.",
          "zh": "采用有线设备时，合盖前应约定并拍下线缆路径。如果产生缝隙、挤压拉链或改变装载，应记录偏离并交测试团队处理，不能硬夹线缆或刺穿内衬开孔。采用自包含设备时，也要记录怎样保持其位置，不能默认随货提供固定件。",
          "es": "En una instalación cableada, acuerde y fotografíe el recorrido antes de cerrar. Documente y resuelva huecos, compresión de la cremallera o cambios de carga. No fuerce cables ni perfore el forro. Con un dispositivo autónomo, registre cómo mantiene la posición sin presumir accesorios incluidos."
        },
        {
          "en": "Keep device time, time zone, interval and original file together. Use that reference for loading, closure, each opening and any movement of a sensor or coolant. If two devices use different clocks, retain the original timestamps and document the reconciliation; do not silently shift curves until they appear to match.",
          "zh": "设备时间、时区、记录间隔及原始文件要一起保存。装载、合盖、每次开袋以及测点或冷媒移位都使用可对应的时间基准。两台设备时钟不同时，应保留原始时间并记录对齐方法，不能暗中挪动曲线让它们看似一致。",
          "es": "Conserve hora del dispositivo, zona, intervalo y archivo original. Relacione carga, cierre, aperturas y movimientos con esa referencia. Si los relojes difieren, mantenga los tiempos originales y documente su conciliación; no desplace curvas silenciosamente para hacerlas coincidir."
        }
      ]
    },
    {
      "heading": {
        "en": "Decide what a missing or changed record permits",
        "zh": "判断记录缺失或改变后还能得出什么结论",
        "es": "Decida qué permite un registro incompleto o modificado"
      },
      "paragraphs": [
        {
          "en": "If a point cannot be located or its measurement object is unknown, obtain the underlying record before using that curve for the purchase decision. A missing location is missing evidence, not proof the bag failed. If the object, device or load changed, ask which data remain comparable and whether another assessment is needed. Agree acceptance criteria before interpreting the result.",
          "zh": "无法定位测点或不知道它测什么时，应先补原记录，再决定是否用于采购判断。位置缺失属于证据缺失，并不证明袋子失败。对象、设备或装载改变时，应确认哪些数据仍可比较、是否需要重新评估；接受条件应在解释结果前约定。",
          "es": "Si no puede localizar un punto o desconoce qué mide, solicite el registro antes de utilizar la curva. Falta de ubicación significa falta de evidencia, no fallo de la bolsa. Si cambian objeto, equipo o carga, determine qué sigue siendo comparable y si se requiere otra evaluación. Acuerde la aceptación antes de interpretar resultados."
        },
        {
          "en": "A useful handoff line contains: pack revision; plan revision; point and device IDs; measured object; location and mounting; photograph; clock and data file; deviation and decision owner. Send the actual closed-tray dimensions and any equipment-clearance requirement with the bag enquiry. This record does not prescribe sensor count, food-safety limits, accuracy or a holding duration.",
          "zh": "可交接的一条记录应含：装载版本、方案版本、点位与设备编号、测量对象、位置与固定方式、照片、时钟及数据文件、偏离和处理责任人。询价时附实际闭合餐盘尺寸及设备空间要求。本文不规定测点数量、食品安全限值、设备精度或保温时长。",
          "es": "Una línea útil incluye revisiones de carga y plan, punto y equipo, objeto, posición y fijación, foto, reloj y archivo, desviación y responsable. Adjunte medidas reales de bandeja cerrada y necesidades de espacio del equipo. Este registro no prescribe cantidad de sensores, límites alimentarios, precisión ni duración térmica."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN current front-opening catering carrier proposal",
        "zh": "远恩当前前开式餐盘配送包方案",
        "es": "Propuesta actual de bolsa de catering de YUANEN"
      },
      "url": "https://yuanenbag.com/products/insulated-catering-bags/"
    },
    {
      "title": {
        "en": "YUANEN material and complete-pack-out test boundaries",
        "zh": "远恩材料与完整装载测试边界",
        "es": "Materiales y límites del ensayo de carga completa de YUANEN"
      },
      "url": "https://yuanenbag.com/guides/insulated-bag-materials/"
    },
    {
      "title": {
        "en": "YUANEN order and sample confirmation",
        "zh": "远恩订单与样品确认",
        "es": "Confirmación de pedidos y muestras de YUANEN"
      },
      "url": "https://yuanenbag.com/guides/custom-bag-order-checklist/"
    }
  ],
  "relatedProducts": [
    "insulated-catering-bags"
  ],
  "image": {
    "file": "images/editorial/2026-11-10-depth/sensor-cover.webp",
    "kind": "illustration",
    "alt": {
      "en": "Open navy front-opening carrier holding one lidded tray, with two unconnected grey devices and a blank card beside it.",
      "zh": "深蓝色前开包内放着一只带盖餐盘，旁边是两只未连接的灰色设备和空白卡。",
      "es": "Bolsa azul abierta con una bandeja tapada; dos dispositivos grises desconectados y una tarjeta aparte."
    },
    "caption": {
      "en": "Prepare the load and the location record before placing equipment. The devices and tray are props, not supplied accessories or a completed test.",
      "zh": "先固定装载与位置记录，再安排设备。设备和餐盘为道具，不表示随货配件或完成了试验。",
      "es": "Prepare carga y registro antes de colocar equipos. Dispositivos y bandeja son accesorios de escena, no suministro ni ensayo realizado."
    }
  },
  "updatedAt": "2026-11-10"
}

export default article
