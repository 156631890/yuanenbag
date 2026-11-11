import type { EditorialArticle } from '../editorial'
const article: EditorialArticle = {
  "kind": "guide",
  "slug": "design-sample-production-acceptance-scope",
  "publishedAt": "2026-10-23",
  "title": {
    "en": "Define What a Design Sample Approves Before Production",
    "zh": "量产前，写清设计样品的批准范围",
    "es": "Defina qué aprueba una muestra de diseño antes de producir"
  },
  "description": {
    "en": "Record which features a handmade design sample confirms and which machine-order details still need evidence. Use an item-by-item approval-scope record before ordering.",
    "zh": "逐项记录手工设计样品确认了哪些内容，以及机器订单哪些细节仍需依据；下单前明确批准范围、未决项与下一确认节点。",
    "es": "Registre qué confirma una muestra manual de diseño y qué detalles del pedido mecanizado siguen pendientes. Defina el alcance de aprobación antes de pedir."
  },
  "intro": {
    "en": "YUANEN’s self-adhesive foil-bag page states that machine-made orders also use handmade samples and that construction may differ. That makes a general “sample approved” note too broad for a purchasing record. Identify what was actually reviewed, the sample’s production method and the evidence still needed for the proposed order.",
    "zh": "远恩自粘铝箔袋页面说明，机器大货也以手工样确认，工艺可能存在差异。因此，采购记录只写“样品通过”范围过宽。应注明实际检查了什么、样品采用什么制作方式，以及拟定订单仍需哪些依据。",
    "es": "La página de bolsas autoadhesivas de aluminio YUANEN indica que los pedidos mecanizados también usan muestras manuales y que la fabricación puede diferir. Por eso, anotar simplemente “muestra aprobada” resulta demasiado amplio. Identifique lo revisado, el método de fabricación de la muestra y la evidencia pendiente para el pedido propuesto."
  },
  "sections": [
    {
      "heading": {
        "en": "Name the sample before naming the approval",
        "zh": "先标明样品，再说明批准内容",
        "es": "Identifique la muestra antes de aprobar"
      },
      "paragraphs": [
        {
          "en": "Record the sample ID, revision, date, preparation method and the drawing or artwork it represents. Ask the supplier which parts were made by the intended order process and which were assembled differently for the sample. If that relationship is unknown, keep it unanswered rather than assume that appearance makes the sample representative of every production feature.",
          "zh": "记录样品编号、版本、日期、制作方式，以及对应的图纸或印稿。询问供应方哪些部分采用拟定订单工艺，哪些部分为了打样采用不同方式制作。如果对应关系未知，应列为待答项，不能因外观相近就认为样品代表所有量产特征。",
          "es": "Anote referencia, revisión, fecha, método y plano o diseño representados. Pregunte qué partes se realizaron con el proceso previsto para el pedido y cuáles se montaron de otro modo para la muestra. Si no se conoce esa relación, déjela pendiente; una apariencia similar no hace representativas todas las características de producción."
        },
        {
          "en": "Use separate references for the artwork file, physical pouch and any loaded arrangement. A buyer may be ready to accept a logo position while still waiting for a finished-dimension drawing or joining detail. Give each decision its own scope and evidence instead of letting one signature close every open question.",
          "zh": "印稿文件、实物袋及装载方案应分别设置编号。采购者可能已经能够确认标志位置，但仍在等待成品尺寸图或连接细节。每项决定都应写明范围与依据，不能用一个签名结束全部未决问题。",
          "es": "Utilice referencias separadas para el archivo gráfico, la bolsa física y cualquier disposición cargada. Puede aceptarse la posición de un logotipo mientras siguen pendientes las medidas finales o una unión. Dé a cada decisión su alcance y evidencia, sin cerrar todas las cuestiones con una sola firma."
        }
      ]
    },
    {
      "heading": {
        "en": "Copy an approval-scope record for the enquiry",
        "zh": "复制一份批准范围记录用于沟通",
        "es": "Copie un registro del alcance de aprobación"
      },
      "paragraphs": [
        {
          "en": "Complete this layout jointly with the supplier for the actual sample. The blank fields are prompts, not accepted results. For every confirmed item, identify the sample or document and the exact condition reviewed. Keep unfinished rows open and assign the next decision to the person responsible for resolving it.",
          "zh": "可与供应方共同按实际样品填写下表。空白字段属于填写提示，不是已经接受的结果。每一项已确认内容都应关联样品或文件，并说明具体检查条件。未完成行继续保持未决状态，明确由谁负责解决及作出下一决定。",
          "es": "Complete este formato con el proveedor para la muestra real. Los espacios son indicaciones, no resultados aceptados. Vincule cada punto confirmado a su muestra o documento y a la condición revisada. Mantenga abiertas las filas incompletas y asigne la siguiente decisión a la persona responsable."
        }
      ],
      "table": {
        "caption": {
          "en": "Design-sample approval scope to complete",
          "zh": "待填写的设计样品批准范围表",
          "es": "Alcance de aprobación de la muestra para completar"
        },
        "columns": [
          {
            "en": "Review item",
            "zh": "检查项目",
            "es": "Punto de revisión"
          },
          {
            "en": "This sample confirms",
            "zh": "本样品确认内容",
            "es": "Qué confirma esta muestra"
          },
          {
            "en": "Evidence still needed",
            "zh": "仍需依据",
            "es": "Evidencia pendiente"
          },
          {
            "en": "Responsibility",
            "zh": "责任与节点",
            "es": "Responsabilidad"
          }
        ],
        "rows": [
          [
            {
              "en": "Appearance and artwork",
              "zh": "外观与印稿",
              "es": "Aspecto y diseño"
            },
            {
              "en": "Confirmed ___; open ___",
              "zh": "已确认___；未决___",
              "es": "Confirmado ___; pendiente ___"
            },
            {
              "en": "Artwork revision and viewed surface ___",
              "zh": "印稿版本与所看表面___",
              "es": "Revisión gráfica y superficie vista ___"
            },
            {
              "en": "Owner ___; next decision ___",
              "zh": "责任人___；下一决定___",
              "es": "Responsable ___; próxima decisión ___"
            }
          ],
          [
            {
              "en": "Layers and finished dimensions",
              "zh": "层结构与成品尺寸",
              "es": "Capas y medidas terminadas"
            },
            {
              "en": "Confirmed ___; open ___",
              "zh": "已确认___；未决___",
              "es": "Confirmado ___; pendiente ___"
            },
            {
              "en": "Order drawing/material record; representative check ___",
              "zh": "订单图与材料记录；代表性核实___",
              "es": "Plano y materiales del pedido; revisión representativa ___"
            },
            {
              "en": "Owner ___; next decision ___",
              "zh": "责任人___；下一决定___",
              "es": "Responsable ___; próxima decisión ___"
            }
          ],
          [
            {
              "en": "Side seals and adhesive flap",
              "zh": "侧封边与粘封袋口",
              "es": "Sellos laterales y solapa adhesiva"
            },
            {
              "en": "Confirmed ___; open ___",
              "zh": "已确认___；未决___",
              "es": "Confirmado ___; pendiente ___"
            },
            {
              "en": "Proposed order construction and available verification ___",
              "zh": "拟定订单工艺及可用核实方式___",
              "es": "Fabricación prevista y verificación disponible ___"
            },
            {
              "en": "Owner ___; next decision ___",
              "zh": "责任人___；下一决定___",
              "es": "Responsable ___; próxima decisión ___"
            }
          ],
          [
            {
              "en": "Basic loading arrangement",
              "zh": "基本装载方案",
              "es": "Disposición básica de carga"
            },
            {
              "en": "Confirmed ___; open ___",
              "zh": "已确认___；未决___",
              "es": "Confirmado ___; pendiente ___"
            },
            {
              "en": "Closed contents, pouch revision and reviewed action ___",
              "zh": "闭合内装物、袋体版本与检查动作___",
              "es": "Contenido cerrado, revisión y operación revisada ___"
            },
            {
              "en": "Owner ___; next decision ___",
              "zh": "责任人___；下一决定___",
              "es": "Responsable ___; próxima decisión ___"
            }
          ],
          [
            {
              "en": "Protection or thermal claims",
              "zh": "防护或温控主张",
              "es": "Afirmaciones de protección o temperatura"
            },
            {
              "en": "Confirmed ___; open ___",
              "zh": "已确认___；未决___",
              "es": "Confirmado ___; pendiente ___"
            },
            {
              "en": "Applicable full-pack evidence and agreed conditions ___",
              "zh": "适用的完整装载依据及约定条件___",
              "es": "Evidencia del conjunto y condiciones acordadas ___"
            },
            {
              "en": "Owner ___; next decision ___",
              "zh": "责任人___；下一决定___",
              "es": "Responsable ___; próxima decisión ___"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "A limited approval can leave the seam unresolved",
        "zh": "局部批准后，封边仍可保持未决",
        "es": "Una aprobación limitada puede dejar pendiente la unión"
      },
      "paragraphs": [
        {
          "en": "Suppose artwork A2 has been checked on hand sample S2 for logo position, while the intended production seam is still being discussed. Write “logo position accepted against artwork A2 on S2”; leave seam construction and its required evidence pending. Do not rewrite that as “S2 approved for production”. This is a hypothetical record example, not a YUANEN customer order or completed approval.",
          "zh": "假设印稿A2已在手工样S2上核对标志位置，而拟用量产封边仍在讨论。应写“按印稿A2，在S2上接受标志位置”，并将封边结构及所需依据保留未决；不能改写为“S2已批准量产”。这是假设性的记录例子，不是远恩客户订单或已完成批准。",
          "es": "Suponga que el arte A2 se revisó en muestra manual S2 para posición del logotipo, mientras sigue pendiente la unión de producción. Registre esa aceptación de posición y mantenga unión y evidencia pendientes. No lo convierta en «S2 aprobado para producción». Es un ejemplo hipotético, no un pedido ni aprobación YUANEN."
        },
        {
          "en": "If the supplier later revises the seam or supplies S3, carry the accepted artwork reference forward but identify which appearance, dimensions and closure checks must be repeated. Close a pending item only when the agreed evidence and responsible decision are attached. If a production-process sample cannot be supplied, record the alternative verification arrangement and the remaining uncertainty before the related order decision.",
          "zh": "供应方后来修改封边或提供S3时，可沿用已接受的印稿编号，但要列明哪些外观、尺寸及封口检查需要重做。未决项只有在附上约定依据和责任决定后才能关闭；不能提供量产工艺样时，应在相应订单决定前记录替代核实安排及剩余不确定性。",
          "es": "Si cambia la unión o llega S3, conserve referencia de arte aceptada e identifique qué apariencia, medidas y cierre volver a revisar. Cierre el pendiente solo con evidencia y decisión acordadas. Si no hay muestra del proceso de producción, documente alternativa e incertidumbre antes de decidir el pedido."
        }
      ]
    },
    {
      "heading": {
        "en": "Ask what can represent the order process",
        "zh": "询问怎样核实拟定订单工艺",
        "es": "Pregunte cómo verificar el proceso del pedido"
      },
      "paragraphs": [
        {
          "en": "Ask which production-representative sample, process information or other evidence can be supplied for unresolved features, and when it can be reviewed. Do not assume a machine-made trial or first-piece service is available. If a proposed sample cannot be provided, ask both parties to record an alternative verification arrangement and who must accept it before the relevant order decision.",
          "zh": "对于未决特征，应询问可提供什么代表拟定生产工艺的样品、工艺资料或其他依据，以及何时能够检查。不要默认必有机器工艺样或首件服务。拟定样品无法提供时，应由双方记录替代核实安排，并明确在相关订单决定之前由谁接受该安排。",
          "es": "Para lo pendiente, pregunte qué muestra representativa, información del proceso u otra evidencia puede aportarse y cuándo se revisará. No dé por disponible una prueba mecanizada ni un servicio de primera pieza. Si no puede entregarse la muestra propuesta, documenten una alternativa y quién debe aceptarla antes de la decisión correspondiente del pedido."
        },
        {
          "en": "A substitute document or image should state which question it answers and which it leaves open. A drawing may identify an intended seal position without demonstrating the strength of that seal. Likewise, a photograph of a closed pouch does not show every layer or establish how an adhesive closure will perform in the buyer’s use.",
          "zh": "替代文件或图片应说明回答了哪一个问题、哪些问题仍未解决。图纸可以标明拟定封边位置，但不能据此证明封边强度；同样，闭合袋体照片也不展示全部层结构，更不能证明粘封在买家实际用途中的表现。",
          "es": "El documento o imagen alternativos deben indicar qué pregunta responden y cuál sigue abierta. Un plano puede situar un sello previsto sin demostrar su resistencia. Una foto de la bolsa cerrada tampoco muestra todas las capas ni acredita el comportamiento del adhesivo en el uso del comprador."
        }
      ]
    },
    {
      "heading": {
        "en": "Carry the limited approval into the order",
        "zh": "把有范围的确认带入订单",
        "es": "Traslade al pedido una aprobación delimitada"
      },
      "paragraphs": [
        {
          "en": "Reference the accepted sample, artwork, drawing and open-item record in the order discussion. If a material, seal, adhesive flap or finished dimension changes, identify the revision and reassess the affected approvals. Do not relabel “not yet checked” as accepted merely because another row is complete. Agree any inspection method or tolerance for that specific order rather than invent a general acceptance percentage here.",
          "zh": "订单沟通应引用已接受样品、印稿、图纸及未决项记录。材料、封边、粘封袋口或成品尺寸改变后，要标明版本并重新判断哪些确认受影响。不能因另一行已经完成，就把“尚未检查”改写为已接受。检验方法或公差应按具体订单约定，本文不设通用验收比例。",
          "es": "En el pedido, cite muestra, diseño, plano y registro de pendientes aceptados. Si cambian material, sello, solapa adhesiva o medidas terminadas, identifique la revisión y reevalúe las aprobaciones afectadas. No convierta “sin revisar” en aceptado porque otra fila esté completa. Acuerde el método de inspección o tolerancia para ese pedido, sin imponer aquí un porcentaje universal."
        },
        {
          "en": "This record concerns decisions before production. It does not replace arrival-lot checks or a separate performance trial of the complete packed system. Construction, dimensions, quantities, sample availability and delivery terms require supplier and order confirmation. The pictured pouch is visual guidance, not a signed sample or evidence that machine production has passed inspection.",
          "zh": "这份记录解决生产前的决定，不替代到货批次检查，也不替代完整装载系统的独立性能试验。结构、尺寸、数量、样品可提供情况和交付条件，需要供应方及订单确认。配图仅提供外观引导，不是签样，也不证明机器大货已通过检验。",
          "es": "El registro se refiere a decisiones previas a producción. No sustituye la revisión del lote recibido ni una prueba independiente del conjunto embalado. Construcción, medidas, cantidades, disponibilidad de muestras y entrega requieren confirmación del proveedor y del pedido. La imagen orienta sobre el formato; no es una muestra firmada ni prueba de inspección superada en fabricación mecanizada."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN self-adhesive foil bags and handmade-sample terms",
        "zh": "远恩自粘铝箔袋及手工样品说明",
        "es": "Bolsas autoadhesivas YUANEN y condiciones de muestra manual"
      },
      "url": "https://yuanenbag.com/products/self-adhesive-foil-bags/"
    },
    {
      "title": {
        "en": "YUANEN customization and confirmation process",
        "zh": "远恩定制与确认流程",
        "es": "Proceso de personalización y confirmación YUANEN"
      },
      "url": "https://yuanenbag.com/customization/"
    }
  ],
  "relatedProducts": [
    "self-adhesive-foil-bags"
  ],
  "image": {
    "file": "images/editorial/2026-10-23/silver-pouch-open-release-flap.webp",
    "kind": "illustration",
    "alt": {
      "en": "A silver foil-faced pouch with its adhesive flap open and a white release strip on a grey surface",
      "zh": "灰色表面上，一只银色铝箔面层袋展开粘封袋口，可见白色离型纸条",
      "es": "Una bolsa con cara plateada, solapa adhesiva abierta y tira protectora blanca sobre una superficie gris"
    },
    "caption": {
      "en": "Foil-faced pouch with an open flap. This is not a signed sample or a machine-production inspection record.",
      "zh": "展开袋口的铝箔面层袋，画面不是签样或机器大货检验记录。",
      "es": "Bolsa con cara de aluminio y solapa abierta. No representa una muestra firmada ni un registro de inspección de producción mecanizada."
    }
  },
  "updatedAt": "2026-11-11"
}
export default article
