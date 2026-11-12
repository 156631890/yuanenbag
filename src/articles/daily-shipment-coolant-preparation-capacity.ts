import type { EditorialArticle } from '../editorial'
const article: EditorialArticle = {
  "kind": "guide",
  "slug": "daily-shipment-coolant-preparation-capacity",
  "publishedAt": "2026-10-27",
  "title": {
    "en": "Check Coolant Preparation Capacity Before Increasing Daily Shipments",
    "zh": "日发货量增加前，先核对冰袋准备能力",
    "es": "Revise la capacidad de preparación de refrigerantes antes de aumentar los envíos diarios"
  },
  "description": {
    "en": "Compare coolant demand for each dispatch window with quantities confirmed ready under the actual pack instructions before planning higher shipment volumes.",
    "zh": "增加发货量前，按出货窗口对比冰袋需求与按本款说明确认可用的数量，分清准备中、待复核和已分配批次。",
    "es": "Compare la demanda de refrigerantes por ventana de despacho con las cantidades confirmadas listas según las instrucciones del producto antes de ampliar los envíos."
  },
  "intro": {
    "en": "Buying enough packs does not establish that enough can be prepared before dispatch. YUANEN’s water-fill pack information asks buyers to confirm the selected pack’s fill, inlet closure and freezing instructions. For a higher daily shipment plan, connect those instructions and the validated pack-out to the quantities available at each departure window.",
    "zh": "买到足量冰袋，不等于能在出货前准备好足量冰袋。远恩注水冰袋资料要求确认本款的填充、进水闭口和冻结说明。计划增加日发货量时，应把这些说明、已验证装载方案与各出货窗口可用数量连接起来。",
    "es": "Comprar suficientes bolsas no demuestra que puedan prepararse a tiempo. YUANEN pide confirmar las instrucciones de llenado, cierre y congelación del producto elegido. Al ampliar los envíos diarios, vincule esas instrucciones y el embalaje validado con las cantidades disponibles para cada salida."
  },
  "sections": [
    {
      "heading": {
        "en": "Calculate demand by departure window",
        "zh": "按出货窗口计算需求",
        "es": "Calcule la demanda por ventana de salida"
      },
      "paragraphs": [
        {
          "en": "Start with the coolant quantity and counting unit in the validated loading plan for each shipment type. Multiply by the shipments due in that window. Keep different pack sizes or sheet units on separate lines unless their substitution has been evaluated and approved. A sheet, cell and individual pouch are not interchangeable counting units.",
          "zh": "先从每种运输类型已验证装载方案中取得冰源数量及计量单位，再乘以该窗口要发出的票数。不同规格或片状单位分别列行，除非替换已经过评估并获准。张、格和独立袋不能作为可互换计数单位。",
          "es": "Parta de la cantidad y unidad del refrigerante en el plan de carga validado para cada tipo de envío. Multiplíquelas por los envíos de esa ventana. Mantenga separadas medidas y unidades de lámina salvo sustitución evaluada y aprobada. Lámina, celda y bolsa individual no son unidades intercambiables."
        },
        {
          "en": "As arithmetic only, an assumed plan using four pouches per shipment for 50 shipments needs 200 pouches for that window. The example does not recommend four pouches or establish a shipment’s thermal performance. Use the amount supported by your actual evaluation.",
          "zh": "仅作算术例子：假设某方案每票四袋、一个窗口发50票，则该窗口需200袋。这不是建议每票采用四袋，也不能证明运输温控性能。实际数量应来自自身评估。",
          "es": "Como simple cálculo, un plan hipotético de cuatro bolsas por envío para 50 envíos requiere 200 bolsas en esa ventana. El ejemplo no recomienda cuatro bolsas ni acredita rendimiento térmico. Use la cantidad respaldada por su evaluación real."
        }
      ]
    },
    {
      "heading": {
        "en": "Compare demand with confirmed ready quantities",
        "zh": "将需求与已确认可用量对照",
        "es": "Compare la demanda con las cantidades confirmadas listas"
      },
      "paragraphs": [
        {
          "en": "Use a planning record that follows quantities across batches without counting the same packs twice. Mark unavailable information as pending. Do not enter zero for an unknown preparation output, or add incoming stock directly to the ready total.",
          "zh": "用计划表跨批次跟踪数量，避免同一批冰袋重复计数。未知信息标为待确认，不将未知准备产出填成0，也不把采购到货直接加进可用数量。",
          "es": "Use un registro de planificación entre lotes sin contar dos veces las mismas bolsas. Marque como pendiente lo desconocido. No convierta una capacidad desconocida en cero ni sume automáticamente las existencias recibidas a la cantidad lista."
        }
      ],
      "table": {
        "caption": {
          "en": "Fields to complete before committing to higher daily dispatch",
          "zh": "承诺增加日发货量前需填明的字段",
          "es": "Datos que completar antes de comprometer más salidas diarias"
        },
        "columns": [
          {
            "en": "Planning field",
            "zh": "计划字段",
            "es": "Dato de planificación"
          },
          {
            "en": "Record against the same window",
            "zh": "对应同一出货窗口记录",
            "es": "Registro para la misma ventana"
          }
        ],
        "rows": [
          [
            {
              "en": "Demand",
              "zh": "需求",
              "es": "Demanda"
            },
            {
              "en": "Shipment count × validated amount and unit per shipment",
              "zh": "票数×已验证每票用量及单位",
              "es": "Envíos × cantidad y unidad validadas por envío"
            }
          ],
          [
            {
              "en": "In preparation",
              "zh": "准备中",
              "es": "En preparación"
            },
            {
              "en": "Batch, amount, instruction revision and expected review time",
              "zh": "批次、数量、说明版本及预计复核时间",
              "es": "Lote, cantidad, versión de instrucciones y revisión prevista"
            }
          ],
          [
            {
              "en": "Confirmed ready",
              "zh": "已确认可用",
              "es": "Confirmado listo"
            },
            {
              "en": "Quantity released under the selected product’s instructions, with supporting record",
              "zh": "按本款说明确认可用的数量及对应记录",
              "es": "Cantidad autorizada según las instrucciones del producto y su registro"
            }
          ],
          [
            {
              "en": "Pending review",
              "zh": "待复核",
              "es": "Pendiente de revisión"
            },
            {
              "en": "Unresolved quantity and the responsible team’s decision",
              "zh": "未解决数量及责任团队的决定",
              "es": "Cantidad pendiente y decisión del equipo responsable"
            }
          ],
          [
            {
              "en": "Already allocated",
              "zh": "已分配",
              "es": "Ya asignado"
            },
            {
              "en": "Amounts committed elsewhere, excluded from unallocated availability",
              "zh": "已分配给其他任务的数量，不计入未分配可用量",
              "es": "Cantidades comprometidas para otros trabajos, excluidas de la disponibilidad libre"
            }
          ],
          [
            {
              "en": "Remaining gap",
              "zh": "尚缺数量",
              "es": "Cantidad pendiente de cubrir"
            },
            {
              "en": "Demand less unallocated confirmed-ready quantity, with reserve needs agreed separately",
              "zh": "需求减未分配且确认可用数量，预留需求另行约定",
              "es": "Demanda menos cantidad libre confirmada lista; reservas acordadas por separado"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Subtract allocations before promising the next departure",
        "zh": "承诺下一窗口前，先扣除已分配数量",
        "es": "Reste asignaciones antes de comprometer la siguiente salida"
      },
      "paragraphs": [
        {
          "en": "Continue the arithmetic example with assumed figures: 160 pouches have completed the required preparation, but 20 are already reserved for another departure. Only 140 are uncommitted against this window’s demand of 200, leaving a shortfall of 60. “Prepared” describes a stock status; “available for this window” also excludes other allocations. Do not count the same pouch in both departures.",
          "zh": "继续使用假设数字：160只袋已完成规定准备，其中20只已留给另一出货窗口。本窗口需求200只，未占用的只有140只，缺口为60只。“已准备”描述库存状态；“本窗口可用”还需扣除其他分配，不能把同一只袋计入两次出货。",
          "es": "Siguiendo el ejemplo con cifras supuestas: 160 bolsas completaron la preparación exigida, pero 20 están reservadas para otra salida. Quedan 140 sin asignar frente a una demanda de 200: faltan 60. «Preparadas» es un estado; «disponibles para esta salida» excluye otras asignaciones. No cuente la misma bolsa dos veces."
        },
        {
          "en": "If the output of the next preparation batch is unknown, leave its contribution pending rather than fill the shortfall on paper. Keep batch identity and the time it can actually be handed to packing beside the quantity. The responsible team can then decide whether a different departure, a confirmed prepared batch or another evaluated arrangement is feasible; buying more unprepared pouches alone does not answer that timing question.",
          "zh": "若下一准备批次的产出未知，其贡献就保持待定，不能在纸面上填平缺口。数量旁保留批次身份与实际可交给装箱的时点，让负责团队判断能否调整出货、使用已确认准备批次或采用另一经评估方案；单纯多买未准备冰袋不能解决时间问题。",
          "es": "Si se desconoce la salida del siguiente lote de preparación, déjela pendiente en vez de cerrar la carencia sobre el papel. Junto a la cantidad, identifique lote y momento real de entrega a embalaje. El equipo decidirá si puede cambiar la salida, usar un lote preparado confirmado u otra configuración evaluada; comprar más bolsas sin preparar no resuelve el plazo."
        }
      ],
      "image": {
        "file": "images/editorial/2026-11-12-batch06/coolant-batch-to-packout-handoff.webp",
        "alt": {
          "en": "A white coolant pouch held beside a closed container in a foil-lined foam box, with more pouches on a separate tray",
          "zh": "独立浅盘中的白色冷媒袋，以及内衬泡沫箱内闭合容器旁被手提起的一只袋",
          "es": "Bolsa blanca junto a un recipiente cerrado en una caja de espuma revestida, con más bolsas en una bandeja separada"
        },
        "caption": {
          "en": "A proposed batch-to-pack-out handoff. Appearance does not identify preparation state, approved quantity or temperature.",
          "zh": "通用分批交接构图；外观不能确定准备状态、获准用量或温度。",
          "es": "Entrega propuesta de lote a embalaje; el aspecto no determina preparación, cantidad aprobada ni temperatura."
        },
        "kind": "illustration"
      },
      "table": {
        "caption": {
          "en": "Assumed quantities for one departure, in individual pouches",
          "zh": "一个出货窗口的假设数量，单位均为只",
          "es": "Cantidades supuestas para una salida, en bolsas individuales"
        },
        "columns": [
          {
            "en": "Record",
            "zh": "记录",
            "es": "Registro"
          },
          {
            "en": "Pouches",
            "zh": "只数",
            "es": "Bolsas"
          }
        ],
        "rows": [
          [
            {
              "en": "Demand: 50 shipments × 4",
              "zh": "需求：50票×4",
              "es": "Demanda: 50 envíos × 4"
            },
            {
              "en": "200",
              "zh": "200",
              "es": "200"
            }
          ],
          [
            {
              "en": "Prepared stock, including other allocations",
              "zh": "已准备库存，含其他分配",
              "es": "Existencias preparadas, incluidas otras asignaciones"
            },
            {
              "en": "160",
              "zh": "160",
              "es": "160"
            }
          ],
          [
            {
              "en": "Allocated elsewhere",
              "zh": "已分配其他窗口",
              "es": "Asignadas a otra salida"
            },
            {
              "en": "20",
              "zh": "20",
              "es": "20"
            }
          ],
          [
            {
              "en": "Uncommitted: 160 − 20",
              "zh": "未占用：160－20",
              "es": "Sin asignar: 160 − 20"
            },
            {
              "en": "140",
              "zh": "140",
              "es": "140"
            }
          ],
          [
            {
              "en": "Shortfall: 200 − 140",
              "zh": "缺口：200－140",
              "es": "Carencia: 200 − 140"
            },
            {
              "en": "60",
              "zh": "60",
              "es": "60"
            }
          ],
          [
            {
              "en": "Additional preparation output",
              "zh": "新增准备产出",
              "es": "Preparación adicional"
            },
            {
              "en": "Unknown; not counted as zero or ready",
              "zh": "未知，不填0也不算已就绪",
              "es": "Desconocida; no se registra como cero ni disponible"
            }
          ]
        ]
      }
    },
    {
      "heading": {
        "en": "Verify the preparation constraint with the responsible team",
        "zh": "与现场责任团队核对准备约束",
        "es": "Verifique la limitación con el equipo responsable"
      },
      "paragraphs": [
        {
          "en": "Ask the supplier for the instructions that match the actual pack. Have the qualified team responsible for the facility check the quantity it can prepare on time using the intended batches, layout and equipment load. Nominal freezer volume, its setpoint or one small sample run alone cannot establish daily output. The team must decide reserves, review criteria and responses to a shortfall.",
          "zh": "向供应方索取与实际冰袋相符的说明。由负责现场的合格团队，结合拟用批次、摆放和设备负载，核对能按时准备的数量。冷柜标称容积、设定温度或一次少量样品经历，均不能单独证明日产出。预留量、复核依据及缺口处置由该团队确定。",
          "es": "Solicite al proveedor las instrucciones del producto real. El equipo cualificado responsable de la instalación debe comprobar cuánto puede preparar a tiempo con los lotes, distribución y carga de equipo previstos. Volumen nominal, consigna del congelador o una prueba pequeña aislada no acreditan producción diaria. El equipo debe definir reservas, criterios de revisión y respuesta a faltantes."
        }
      ]
    },
    {
      "heading": {
        "en": "Bring the capacity plan into the procurement discussion",
        "zh": "把准备能力计划带入采购沟通",
        "es": "Incluya el plan de capacidad en la consulta de compra"
      },
      "paragraphs": [
        {
          "en": "Send YUANEN the selected pack reference, counting unit, evaluated quantity per shipment, dispatch windows and unresolved preparation questions. Confirm that procurement quantities and delivery timing support the reviewed plan. Keep the later batch-to-packing handover record linked to this plan; the handover record records an individual transfer, while this plan checks whether several departures can be supplied.",
          "zh": "向远恩提供选定冰袋参考、计量单位、已评估每票用量、出货窗口及准备环节待确认问题。核对采购数量及交付时间能否支持经复核的计划。后续批次到装箱的交接记录应与本计划关联；交接表记一次移交，本计划核对多个出货窗口是否有足量准备完成的冰源。",
          "es": "Envíe a YUANEN referencia de bolsa, unidad, cantidad evaluada por envío, ventanas de salida y dudas de preparación. Confirme que cantidades y entregas apoyen el plan revisado. Vincule después la entrega de cada lote a este plan: el registro de entrega documenta una transferencia y el plan comprueba el abastecimiento de varias salidas."
        },
        {
          "en": "This is a proposed purchasing plan, not evidence of a completed capacity or thermal test. It sets no universal freezing time or temperature and makes no offer of freezers or pre-frozen supply. Confirm the product, complete loaded system and operating plan with the responsible parties before relying on a higher dispatch commitment.",
          "zh": "本文是建议采购计划，不是已完成的准备能力或温控试验。它不规定通用冻结时间或温度，也不表示提供冷柜或预冻供货。依赖更高发货承诺前，与相关责任方确认实际产品、完整装载系统和运行计划。",
          "es": "Es una propuesta de planificación de compra, no un ensayo realizado de capacidad o rendimiento térmico. No fija tiempos o temperaturas universales ni ofrece congeladores o suministro precongelado. Confirme producto, sistema cargado y plan operativo con los responsables antes de comprometer más despachos."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": {
        "en": "YUANEN water-fill packs: selected-product preparation requirements",
        "zh": "远恩注水冰袋：本款准备要求",
        "es": "YUANEN: requisitos de preparación del producto elegido"
      },
      "url": "https://yuanenbag.com/products/water-fill-ice-packs/"
    },
    {
      "title": {
        "en": "YUANEN coolant selection and loaded-system testing",
        "zh": "远恩冰源选型与完整装载测试",
        "es": "YUANEN: selección de refrigerantes y ensayos con carga"
      },
      "url": "https://yuanenbag.com/guides/ice-pack-selection/"
    }
  ],
  "relatedProducts": [
    "water-fill-ice-packs"
  ],
  "image": {
    "file": "images/editorial/2026-10-27/white-coolant-pouches-shallow-tray.webp",
    "kind": "illustration",
    "alt": {
      "en": "White flexible-film pouches arranged in a shallow metal tray",
      "zh": "浅金属托盘中摆放的白色柔软薄膜袋",
      "es": "Bolsas blancas de película flexible dispuestas en una bandeja metálica baja"
    },
    "caption": {
      "en": "Pouches arranged in a tray. Appearance does not establish preparation readiness or capacity.",
      "zh": "托盘中摆放的薄膜袋；外观不能证明准备完成或处理能力。",
      "es": "Bolsas dispuestas en una bandeja. El aspecto no acredita preparación ni capacidad."
    }
  },
  "updatedAt": "2026-11-12"
}
export default article
