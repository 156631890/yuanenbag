import type { EditorialArticle } from '../editorial'
const article: EditorialArticle = {
  "kind": "guide",
  "slug": "ice-sheet-order-unit-sheets-cells",
  "publishedAt": "2026-10-27",
  "title": {
    "en": "Confirm Whether Ice-Sheet Quantities Count Sheets or Cells",
    "zh": "多格冰片订货，确认按张还是按格",
    "es": "Confirme si las cantidades de láminas refrigerantes cuentan láminas o celdas"
  },
  "description": {
    "en": "Define the sheet, cell, inner-pack and carton quantities for segmented ice sheets, then match the quotation and receiving count to the approved specification.",
    "zh": "明确多格冰片按张、格、内包及外箱的计量对应关系，让报价与收货数量都对应同一批准规格。",
    "es": "Defina cantidades de láminas, celdas, paquetes interiores y cajas, y vincule cotización y recepción a la misma especificación aprobada."
  },
  "intro": {
    "en": "A count of 100 pieces is incomplete if buyer and supplier mean different units. YUANEN’s segmented ice-sheet page lists 1-, 3-, 6-, 12- and 24-cell formats and a stock minimum of 100 pieces per specification. Before comparing quantities or prices, ask what one ordered piece means for the selected format.",
    "zh": "买卖双方对计量单位理解不同时，“100个”仍不是完整订货信息。远恩多格冰片页面列出1、3、6、12、24格规格，现货门槛为同规格100个。比较数量或价格前，应先确认选定规格中一个订货单位具体指什么。",
    "es": "La cifra de 100 unidades queda incompleta si comprador y proveedor cuentan cosas distintas. YUANEN enumera formatos de 1, 3, 6, 12 y 24 celdas y un mínimo de existencias de 100 unidades por especificación. Antes de comparar cantidades o precios, confirme qué representa una unidad pedida."
  },
  "sections": [
    {
      "heading": {
        "en": "Name the complete sheet before counting cells",
        "zh": "先明确整张规格，再数格子",
        "es": "Identifique la lámina completa antes de contar celdas"
      },
      "paragraphs": [
        {
          "en": "Record the selected catalogue specification, full-sheet dimensions, cell layout and sample reference together. Current customization is limited to printing on existing sizes. A cell count by itself does not identify the sheet’s dimensions, the order unit or how it is packed for delivery.",
          "zh": "将选定目录规格、整张尺寸、格子排列和样品参考一起记录。当前定制仅限在已有规格上改变印刷。单有格数，不能确定整张尺寸、订货单位或交付包装方式。",
          "es": "Registre juntos la especificación del catálogo, las dimensiones de la lámina completa, la distribución de celdas y la referencia de muestra. La personalización actual solo cambia la impresión sobre medidas existentes. El número de celdas no identifica por sí solo dimensiones, unidad de pedido ni embalaje de entrega."
        },
        {
          "en": "Have the quotation state whether the piece count refers to a complete sheet or another specifically agreed unit. Do not silently translate the published 100-piece minimum into 100 cells or 100 sheets. Ask the supplier to confirm its meaning for that exact specification.",
          "zh": "让报价明确pcs是指完整一张，还是其他已约定单位。不要自行把公开的100个门槛解释成100格或100张；由供应方确认该规格下的具体含义。",
          "es": "La cotización debe indicar si cada unidad corresponde a una lámina completa o a otra unidad expresamente acordada. No interprete por su cuenta el mínimo publicado de 100 unidades como 100 celdas o 100 láminas. Confírmelo con el proveedor para esa especificación."
        }
      ]
    },
    {
      "heading": {
        "en": "Connect the order unit to the receiving count",
        "zh": "把订货单位对应到收货计数",
        "es": "Vincule la unidad pedida al recuento de recepción"
      },
      "paragraphs": [
        {
          "en": "Use the same unit on the purchase order, packing list and receiving record. Keep the following fields together so that a carton count can be reconciled to the agreed order quantity without assuming how many sheets a package contains.",
          "zh": "采购单、装箱单及收货记录使用同一计量口径。把下列字段放在一起，才能将箱数核对到约定订货数量，不猜测每包内有多少张。",
          "es": "Use la misma unidad en el pedido, la lista de embalaje y el registro de recepción. Reúna estos datos para conciliar cajas con la cantidad acordada sin suponer cuántas láminas contiene cada paquete."
        }
      ],
      "table": {
        "caption": {
          "en": "A proposed quantity record for one specification",
          "zh": "单一规格的建议数量记录",
          "es": "Propuesta de registro para una especificación"
        },
        "columns": [
          {
            "en": "Quantity level",
            "zh": "计量层级",
            "es": "Nivel de recuento"
          },
          {
            "en": "Required definition",
            "zh": "需要明确",
            "es": "Definición necesaria"
          },
          {
            "en": "Receiving reference",
            "zh": "收货依据",
            "es": "Referencia para recepción"
          }
        ],
        "rows": [
          [
            {
              "en": "Sheet",
              "zh": "整张",
              "es": "Lámina"
            },
            {
              "en": "Full dimensions, layout and cells per sheet",
              "zh": "整张尺寸、排列及每张格数",
              "es": "Dimensiones, distribución y celdas por lámina"
            },
            {
              "en": "Approved specification and sample",
              "zh": "批准规格与样品",
              "es": "Especificación y muestra aprobadas"
            }
          ],
          [
            {
              "en": "Order unit",
              "zh": "订货单位",
              "es": "Unidad pedida"
            },
            {
              "en": "Exact meaning of one piece and ordered quantity",
              "zh": "一个pcs的准确含义及订货数量",
              "es": "Significado exacto de una unidad y cantidad pedida"
            },
            {
              "en": "Written quotation and purchase order",
              "zh": "书面报价及采购单",
              "es": "Cotización escrita y pedido"
            }
          ],
          [
            {
              "en": "Inner pack",
              "zh": "内包",
              "es": "Paquete interior"
            },
            {
              "en": "Agreed sheets or order units per inner pack",
              "zh": "每内包约定的张数或订货单位数",
              "es": "Láminas o unidades pedidas por paquete"
            },
            {
              "en": "Pack label and packing list",
              "zh": "内包标识与装箱单",
              "es": "Etiqueta y lista de embalaje"
            }
          ],
          [
            {
              "en": "Outer carton",
              "zh": "外箱",
              "es": "Caja exterior"
            },
            {
              "en": "Inner packs and total order units per carton",
              "zh": "每箱内包数及订货单位总数",
              "es": "Paquetes y unidades pedidas por caja"
            },
            {
              "en": "Carton identification linked to the same specification",
              "zh": "对应同一规格的外箱标识",
              "es": "Identificación de caja vinculada a la misma especificación"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Treat cell arithmetic as a separate calculation",
        "zh": "格数换算单独记录",
        "es": "Registre por separado el cálculo de celdas"
      },
      "paragraphs": [
        {
          "en": "In a hypothetical order explicitly defined as 100 complete six-cell sheets, the nominal total is 600 cells. That is arithmetic only. It does not establish 600 usable transport units, coverage for 600 shipments or the yield from separating sheets. Different layouts must not be compared by piece price until the counted unit is the same.",
          "zh": "假设订单已明确为100张完整六格片，名义总格数为600格。这只是算术结果，不代表600个可用运输单元、可供600票运输或分割后的实际产出。比较不同排列的单价前，必须先统一计数单位。",
          "es": "En un pedido hipotético definido como 100 láminas completas de seis celdas, el total nominal es de 600 celdas. Es solo aritmética: no acredita 600 unidades utilizables, 600 envíos ni un rendimiento de separación. No compare precios por unidad entre distribuciones distintas sin igualar antes el recuento."
        },
        {
          "en": "Only list a smaller use unit if the selected sample’s written instructions authorize the relevant division. Follow the approved layout; do not open a filled cell. This quantity record gives no cutting procedure and does not determine coolant quantity per shipment.",
          "zh": "只有选定样品的书面说明批准相关分割时，才另列较小使用单元。遵守批准布局，不打开已填充格体。本文数量记录不提供剪切步骤，也不决定每票所需冰源数量。",
          "es": "Indique una unidad de uso menor solo si las instrucciones escritas de la muestra autorizan esa división. Respete la distribución aprobada y no abra una celda llena. Este registro no da un procedimiento de corte ni determina el refrigerante necesario por envío."
        }
      ]
    },
    {
      "heading": {
        "en": "Resolve discrepancies against the agreed specification",
        "zh": "按约定规格处理数量差异",
        "es": "Resuelva diferencias con la especificación acordada"
      },
      "paragraphs": [
        {
          "en": "At receipt, record the delivered specification, labels, package counts and any mismatch using the contract’s unit. Ask the supplier to resolve an unexplained packing or quantity difference rather than relabeling the count to make it match. Send the chosen layout, order unit, total quantity, destination and printing needs with the enquiry.",
          "zh": "收货时按合同单位记录实到规格、标识、包装数量及差异。包装或数量不符且原因未明时，让供应方处理，不通过改写计量名称使数字看似相符。询盘提供选定排列、订货单位、总量、目的地及印刷需求。",
          "es": "En recepción, registre especificación, etiquetas, cantidades de paquetes y diferencias según la unidad contractual. Pida al proveedor que resuelva cualquier diferencia inexplicada, sin cambiar el nombre de la unidad para hacer coincidir las cifras. Envíe distribución, unidad, total, destino e impresión solicitada."
        },
        {
          "en": "Confirm preparation, placement and the complete loaded shipment separately using the actual product instructions and an agreed evaluation plan. Counting cells establishes neither a cooling duration nor permission to change the fixed product size.",
          "zh": "另按实际产品说明和约定评估方案，确认准备方式、摆放及完整装载运输。数清格子不能证明保冷时长，也不授权改变固定产品尺寸。",
          "es": "Confirme por separado preparación, colocación y envío cargado con las instrucciones reales y un plan de evaluación acordado. Contar celdas no acredita duración térmica ni autoriza cambiar la medida fija del producto."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN segmented ice sheets: formats and order terms",
        "zh": "远恩多格冰片：规格与订货条款",
        "es": "YUANEN: formatos y condiciones de las láminas refrigerantes"
      },
      "url": "https://yuanenbag.com/products/segmented-ice-sheets/"
    },
    {
      "title": {
        "en": "YUANEN coolant-format selection and full-pack evaluation",
        "zh": "远恩冰源格式选型与完整包装评估",
        "es": "YUANEN: selección de refrigerantes y evaluación del embalaje completo"
      },
      "url": "https://yuanenbag.com/guides/ice-pack-selection/"
    }
  ],
  "relatedProducts": [
    "segmented-ice-sheets"
  ],
  "image": {
    "file": "images/editorial/2026-10-27/plain-segmented-sheet-seal-grid.webp",
    "kind": "illustration",
    "alt": {
      "en": "Plain white segmented film sheet with a three-by-four grid of sealed cells",
      "zh": "白色分格薄膜片，封边构成三列四行格子",
      "es": "Lámina blanca de película segmentada con una cuadrícula de tres por cuatro celdas selladas"
    },
    "caption": {
      "en": "A segmented sheet with its seal grid visible. The shown layout does not define an order unit.",
      "zh": "封边格网清晰的多格薄膜片，画面排列不定义订货单位。",
      "es": "Lámina segmentada con sellos visibles. La distribución mostrada no define la unidad de pedido."
    }
  }
}
export default article
