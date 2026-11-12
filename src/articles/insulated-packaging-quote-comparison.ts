import type { EditorialArticle } from '../editorial'

const article: EditorialArticle = {
  "kind": "guide",
  "slug": "insulated-packaging-quote-comparison",
  "publishedAt": "2026-10-17",
  "title": {
    "en": "Compare What Each Insulated-Packaging Quote Includes",
    "zh": "保温包装报价差在哪，先把计价范围放到同一张表",
    "es": "Compare qué incluye cada oferta de embalaje térmico"
  },
  "description": {
    "en": "Build a line-by-line comparison of actual packaging quotes using one specification, counting unit and order quantity. Keep included, extra and unresolved charges separate.",
    "zh": "按同一规格、计数单位和订单数量逐项比较实际保温包装报价，区分包含、另计与待确认项目，不把缺失费用当成零。",
    "es": "Compare ofertas reales con la misma especificación, unidad y cantidad. Distinga conceptos incluidos, adicionales y pendientes sin convertir datos ausentes en cero."
  },
  "intro": {
    "en": "Two unit prices are comparable only after you know what each supplier priced. Give both offers one agreed specification and build a record of included, separately charged and unresolved items. Keep the original quote and revision beside each entry so a change in scope can be traced.",
    "zh": "比较两个单价前，先弄清双方各自报了什么。以同一份约定规格为基准，逐项记录包含、另计和尚待确认的项目，并让每项都能对应原报价及版本，便于追踪计价范围变化。",
    "es": "Antes de comparar dos precios unitarios, aclare qué ha valorado cada proveedor. Use una especificación acordada y registre conceptos incluidos, cobrados aparte y pendientes. Vincule cada entrada a la oferta original y su versión para seguir los cambios de alcance."
  },
  "sections": [
    {
      "heading": {
        "en": "Freeze the comparison specification",
        "zh": "先固定这次比较采用的规格",
        "es": "Fije la especificación de comparación"
      },
      "paragraphs": [
        {
          "en": "YUANEN’s quotation guide asks buyers to define dimensions, material, quantity, artwork and destination. For an actual comparison, put the agreed revision of those requirements at the top of the record. Confirm that both offers refer to that revision. A supplier’s different construction should remain a separate alternative until you accept it for comparison.",
          "zh": "远恩现有询价指南要求确定尺寸、材料、数量、图稿及目的地。实际比价时，把这些要求的约定版本放在记录顶部，确认两份报价都引用该版要求。供应方提出的不同结构，应先作为另一备选保留，不能未经确认就混在同一列比较。",
          "es": "La guía de YUANEN pide medidas, materiales, cantidad, diseño y destino. Encabece la comparación con la revisión acordada de esos requisitos y confirme que ambas ofertas la citan. Mantenga una construcción distinta como alternativa separada hasta aceptarla para comparar."
        },
        {
          "en": "For the current foil box-liner application, separate the liner from the white foam outer box, its lid and any coolant. An image of the assembled pack-out does not establish that all components are supplied together. Ask each quote to state the component or confirmed set it covers, with its counting unit.",
          "zh": "以当前铝箔箱内衬应用为例，应把内衬与白色泡沫外箱、箱盖及冰源分开。整套装箱图片不代表这些组件一起供货。要求每份报价写明涵盖哪一组件或经确认的套装，以及对应计数单位。",
          "es": "En la aplicación actual del revestimiento, separe este de la caja blanca de espuma, su tapa y el refrigerante. Una imagen del conjunto no demuestra suministro completo. Pida que cada oferta indique el componente o conjunto confirmado y su unidad de recuento."
        }
      ]
    },
    {
      "heading": {
        "en": "Compare the four scopes before adding a total",
        "zh": "汇总前先比较四类范围",
        "es": "Compare cuatro alcances antes de sumar"
      },
      "paragraphs": [
        {
          "en": "Use the same requirement revision above both offers. The table below is an unpriced working tool: replace every pending entry with the supplier’s dated answer, not an assumed zero. Retain currency, unit and quote revision beside each actual amount in your own record.",
          "zh": "先在两份报价上方写同一要求版本。下表是不带价格的工作工具，所有待确认项都需由供应方带日期的答复补齐，不能猜成零。实际金额旁同时保留币种、单位及报价版本。",
          "es": "Use la misma revisión de requisitos para ambas ofertas. La tabla es una herramienta sin precios: cada pendiente se resuelve con respuesta fechada del proveedor, no con cero supuesto. Conserve moneda, unidad y revisión junto a cada importe real."
        }
      ],
      "table": {
        "caption": {
          "en": "Unpriced quote comparison worksheet",
          "zh": "不带价格的报价对照工具",
          "es": "Hoja de comparación sin precios"
        },
        "columns": [
          {
            "en": "Scope",
            "zh": "范围",
            "es": "Alcance"
          },
          {
            "en": "Common basis",
            "zh": "共同口径",
            "es": "Base común"
          },
          {
            "en": "A / B response to obtain",
            "zh": "A/B待取得答复",
            "es": "Respuesta A/B por obtener"
          }
        ],
        "rows": [
          [
            {
              "en": "Product",
              "zh": "产品",
              "es": "Producto"
            },
            {
              "en": "Same liner revision; pieces or confirmed sets",
              "zh": "同版内衬；只或确认后的套",
              "es": "Misma revisión; unidades o conjuntos definidos"
            },
            {
              "en": "Included components / separate alternatives / pending",
              "zh": "包含组件／另列替代方案／待确认",
              "es": "Componentes incluidos / alternativas / pendiente"
            }
          ],
          [
            {
              "en": "One-time work",
              "zh": "一次性工作",
              "es": "Trabajo inicial"
            },
            {
              "en": "Named sample, artwork or setup task",
              "zh": "明确的样品、图稿或准备工作",
              "es": "Muestra, diseño o preparación definidos"
            },
            {
              "en": "Separate charge / included / not quoted; repeat trigger",
              "zh": "另收费／已含／未报价；再次发生条件",
              "es": "Separado / incluido / no cotizado; repetición"
            }
          ],
          [
            {
              "en": "Packing and transport",
              "zh": "包装与运输",
              "es": "Embalaje y transporte"
            },
            {
              "en": "Same destination and delivery basis",
              "zh": "同目的地和交付口径",
              "es": "Mismo destino y base de entrega"
            },
            {
              "en": "Packing list, freight scope and exclusions pending",
              "zh": "包装清单、运费范围及除外项待确认",
              "es": "Lista, flete y exclusiones pendientes"
            }
          ],
          [
            {
              "en": "Validity and timing",
              "zh": "有效期与时间",
              "es": "Validez y plazos"
            },
            {
              "en": "Quote revision and start event",
              "zh": "报价版号及起算事件",
              "es": "Revisión y hecho de inicio"
            },
            {
              "en": "Expiry; sample/production/dispatch periods separately",
              "zh": "到期日；样品／生产／发运分别列",
              "es": "Vencimiento; muestra/producción/expedición separados"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Resolve the missing scope before comparing totals",
        "zh": "先解决范围缺口，再比较合计",
        "es": "Resuelva el alcance pendiente antes de comparar totales"
      },
      "paragraphs": [
        {
          "en": "A blank freight or setup line is unresolved unless the supplier confirms its treatment. Do not enter zero to finish the sheet. Likewise, a lower amount for fewer pieces, a different liner construction or a different delivery destination is not a like-for-like result. Send the open questions back with the same specification reference.",
          "zh": "运费或准备费一栏空白时，除非供应方确认其处理方式，否则仍是未解决项目，不能为了填完表格写成零。同样，数量更少、内衬结构不同或交付目的地不同的较低金额，也不是同口径结果。回传问题时，应继续引用同一份规格。",
          "es": "Una línea de transporte o preparación vacía queda pendiente hasta que el proveedor la aclare; no introduzca cero para completar la hoja. Un importe menor con menos unidades, otra construcción o destino tampoco es comparable. Devuelva las preguntas citando la misma especificación."
        },
        {
          "en": "Keep recurring product charges and one-time work visible as separate lines. Compare totals only within a confirmed common scope and stated currency basis, using the buyer’s actual quotations. If currency or scope still differs, show the offers separately and identify the missing confirmation rather than presenting a saving.",
          "zh": "保留重复发生的产品费用与一次性工作费用各自行列。只有共同计价范围和币种口径已确认，才按买家实际报价比较合计。币种或范围仍不一致时，应分开展示，并指出缺少哪项确认，不生成节省比例。",
          "es": "Mantenga separados cargos recurrentes de producto y trabajos iniciales. Compare totales solo con alcance común y base monetaria confirmados, usando ofertas reales del comprador. Si aún difieren, muéstrelas por separado e identifique lo pendiente sin presentar un ahorro."
        },
        {
          "en": "For example, if quote A names “one liner” and quote B names “one set” without a component list, there is no justified conversion yet. Ask B to name each set component and count, and ask A whether the same requested parts are included or separately priced. Then update those rows under the dated replies. This example identifies missing scope, not a cheaper supplier.",
          "zh": "例如A写“一只内衬”，B只写“一套”而没有组件表，此时尚无换算依据。向B索取每套组件和数量，同时向A确认相同需求组件已含还是另报，再按带日期答复更新行。示例识别的是范围缺口，不是更便宜的供应方。",
          "es": "Si A dice «un revestimiento» y B «un conjunto» sin componentes, aún no puede convertir. Pida a B componentes y cantidades; a A, si las mismas piezas se incluyen o cotizan aparte. Actualice las filas con respuestas fechadas. El ejemplo identifica alcance pendiente, no un proveedor más barato."
        }
      ]
    },
    {
      "heading": {
        "en": "Keep revised quotes linked to the agreed sample",
        "zh": "让修订报价继续对应确认样品",
        "es": "Vincule las ofertas revisadas con la muestra acordada"
      },
      "paragraphs": [
        {
          "en": "When a supplier answers, retain the original offer and attach the dated revision. Update the affected comparison row and mark which question it resolves. Before ordering, confirm that the chosen quote, sample and written specification refer to the same dimensions, materials and requested options. A comparison record does not replace the order agreement.",
          "zh": "供应方回复后，保留原报价并附有日期的修订版，更新受影响行，标明解决了哪个问题。下单前，再确认所选报价、样品及书面规格对应同一尺寸、材料和所需选项。比价记录不能代替订单约定。",
          "es": "Conserve la oferta original y adjunte la revisión fechada cuando responda el proveedor. Actualice la fila afectada y señale la pregunta resuelta. Antes de pedir, confirme que oferta, muestra y especificación corresponden a las mismas medidas, materiales y opciones. El registro no sustituye el acuerdo del pedido."
        },
        {
          "en": "For a YUANEN enquiry, send the specification revision and unresolved scope questions. Final quantities, construction, charges and delivery arrangements require written confirmation for the selected order. This article provides no price, tax rate or promised saving, and the cover’s foam box and lid are props rather than an included supply list. Product performance still needs relevant sample and complete-pack testing.",
          "zh": "向远恩询价时，提供规格版本和未解决的计价范围问题。最终数量、结构、费用和交付安排需针对所选订单书面确认。本文不提供价格、税率或节省承诺；封面泡沫箱和箱盖为道具，不是随货清单。产品性能仍需相关样品和完整装载试验依据。",
          "es": "Envíe a YUANEN revisión de especificación y preguntas pendientes. Cantidad, construcción, cargos y entrega requieren confirmación escrita para el pedido elegido. El artículo no fija precios, impuestos ni ahorro. Caja y tapa de portada son elementos de escena, no una lista de suministro. El rendimiento requiere pruebas pertinentes de muestra y del embalaje completo."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN quotation scope and sample approval guide",
        "zh": "远恩询价范围与样品确认指南",
        "es": "Guía YUANEN de alcance de oferta y aprobación de muestras"
      },
      "url": "https://yuanenbag.com/guides/custom-bag-order-checklist/"
    },
    {
      "title": {
        "en": "YUANEN current box-liner application and supply boundaries",
        "zh": "远恩当前箱内衬应用与供货边界",
        "es": "Aplicación actual y límites de suministro del revestimiento YUANEN"
      },
      "url": "https://yuanenbag.com/products/foil-insulated-box-liners/"
    }
  ],
  "relatedProducts": [
    "foil-insulated-box-liners"
  ],
  "image": {
    "file": "images/editorial/2026-10-17/folded-foil-liner-foam-box-separate-lid.webp",
    "kind": "illustration",
    "alt": {
      "en": "Overlapping silver foil liner folds inside a white foam box, with a separate foam lid behind it",
      "zh": "白色泡沫箱内相互覆盖的银色铝箔内衬折口，以及后方分开放置的泡沫箱盖",
      "es": "Pliegues superpuestos de revestimiento plateado dentro de una caja blanca de espuma, con tapa separada detrás"
    },
    "caption": {
      "en": "A folded foil-faced liner in a foam box with its lid placed separately.",
      "zh": "泡沫箱内折叠的铝箔面层内衬，箱盖分开放置。",
      "es": "Revestimiento de lámina de aluminio plegado dentro de una caja de espuma, con la tapa aparte."
    }
  },
  "updatedAt": "2026-11-12"
}

export default article
