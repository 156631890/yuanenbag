import type { Text } from './data'
export const collectionContent:Record<string,{answer:Text;checks:Text[]}> = {
 'insulation-rolls-sheets':{answer:{en:'Choose rolls for variable cutting lengths and sheets for agreed repeated dimensions. Confirm the actual laminate and conversion method with a sample before ordering.',zh:'变长裁切可评估整卷供货，重复尺寸可评估裁片；订购前用样品确认实际复合结构与加工方式。',es:'Elija rollos para longitudes variables y láminas para medidas repetidas. Confirme laminado y método con una muestra.'},checks:[{en:'State width, length, thickness and units; distinguish rolls from sheets.',zh:'注明宽度、长度、厚度及单位，数量区分卷或片。',es:'Indique ancho, largo, espesor y unidades; distinga rollos de láminas.'},{en:'Agree core, tolerances, splices and protective packing.',zh:'约定纸芯、公差、接头及保护包装。',es:'Acuerde núcleo, tolerancias, empalmes y protección.'},{en:'Validate the complete package for the intended route and contents.',zh:'按货物与实际路线验证完整包装。',es:'Valide el embalaje completo para la ruta y contenido.'}]},
  "foil-insulated-packaging": {
    "answer": {
      "en": "Choose the format around the filled container and the packing workflow. Flat self-seal pouches close with an adhesive flap; gusseted bags add depth for boxes; open-top bags need a separately agreed closure. A box liner fits inside an outer shipping container, which is specified separately.",
      "zh": "按装好后的容器和打包流程选袋型：平面自粘袋用胶条翻盖封口；立体袋为餐盒增加底部空间；平口袋需要另行约定封口方式；箱内衬放入外运输容器使用，外箱需单独确认。",
      "es": "Elija según el envase lleno y el proceso de embalaje. Las bolsas planas autoadhesivas cierran con solapa; las de base ofrecen profundidad; las abiertas necesitan un cierre acordado. El revestimiento va dentro de un contenedor exterior que se especifica por separado."
    },
    "checks": [
      {
        "en": "Measure usable width, depth and height with the filled box. Include folds, flap overlap and any coolant; flat bag width is not internal box width.",
        "zh": "用装好后的盒子确认可用宽、深、高，留出折角、翻盖和冰源空间；平铺袋宽不等于内部容器宽度。",
        "es": "Mida ancho, fondo y alto útiles con el envase lleno. Reserve pliegues, solapa y refrigerantes; el ancho plano no equivale al ancho interior."
      },
      {
        "en": "Specify the facing, foam thickness and density, joining method and closure. Silver appearance alone does not identify every material layer.",
        "zh": "分别确认面层、泡棉厚度与密度、连接工艺和封口；银色外观不能说明全部材料成分。",
        "es": "Especifique cara exterior, espesor y densidad de espuma, uniones y cierre. El aspecto plateado no identifica todas las capas."
      },
      {
        "en": "For chilled deliveries, test the full pack-out with the actual coolant, outer box and route. A foil layer alone does not establish a delivery time or temperature rating.",
        "zh": "冷藏配送应使用实际冰源、外箱和路线条件测试完整包装，单一铝箔层不能证明配送时长或温控等级。",
        "es": "Para entregas refrigeradas, ensaye el conjunto con refrigerante, caja y ruta reales. Una capa de aluminio no determina tiempo ni temperatura garantizados."
      }
    ]
  },
  "insulated-takeaway-totes": {
    "answer": {
      "en": "An open-top paper tote suits a different packing workflow from a self-seal non-woven tote. Compare container clearance, base support, closure and handle attachment. A reflective lining does not establish a temperature rating or direct food-contact suitability.",
      "zh": "敞口纸基手提袋与自粘封口无纺布手提袋对应不同打包流程。选型时比较容器净空、底部支撑、封口及提手连接；不能仅凭反射内层认定保温时长或直接食品接触适用性。",
      "es": "Una bolsa de papel abierta requiere un proceso distinto al de una bolsa autoadhesiva no tejida. Compare espacio, apoyo de base, cierre y fijación de asas. Un forro reflectante no determina rendimiento térmico ni aptitud para contacto alimentario."
    },
    "checks": [
      {
        "en": "Measure the closed containers, including lids and clips, before specifying usable inner dimensions.",
        "zh": "先测量含盒盖与卡扣的封闭容器，再确认可用内尺寸。",
        "es": "Mida los envases cerrados, incluidas tapas y clips, antes de fijar medidas útiles."
      },
      {
        "en": "Confirm the outer layer, insulation, lining and handle joint with the selected sample. Paper exterior does not mean washable paper.",
        "zh": "按选定样品确认外层、隔热层、内衬及提手连接。纸外层不等于水洗纸。",
        "es": "Confirme exterior, aislamiento, forro y unión de asas con la muestra. Papel exterior no significa papel lavable."
      },
      {
        "en": "State packed weight, quantity, printing, destination and route. Validate loaded carrying and delivery conditions before ordering.",
        "zh": "提供装载重量、数量、印刷、目的地与路线，下单前验证装载提携及配送条件。",
        "es": "Indique peso, cantidad, impresión, destino y ruta. Valide transporte cargado y condiciones de reparto antes del pedido."
      }
    ]
  },
  "custom-cooler-bags": {
    "answer": {
      "en": "Choose the carrier around the item your team loads and lifts out at each stop. Measure it with the lid, packaging and any coolant in place.",
      "zh": "先看装好后的食品形状：蛋糕盒需要足够的开口和底部空间；餐盒可采用宽底横向排布；直立商超包装需确认高度和冰源空间。在确定印刷与大货数量前，先核对装载样品。",
      "es": "Empiece por la forma del alimento embalado. Las cajas de tartas requieren abertura y base adecuadas; las comidas pueden necesitar una base ancha; las compras verticales requieren altura y espacio para refrigerante. Revise una muestra cargada antes de definir impresión y cantidad."
    },
    "checks": [
      {
        "en": "Use the outside dimensions of the lunch container or cake box, including clips, board and decoration. Check the opening path as well as the inside volume.",
        "zh": "采用餐盒或蛋糕盒的外尺寸，包括卡扣、底板与装饰，同时检查开口轨迹和内部容积。",
        "es": "Use las medidas exteriores del envase, incluidos clips, base y adornos. Compruebe tanto la abertura como el volumen interior."
      },
      {
        "en": "Review outer fabric, insulation, lining, zipper, seams and handle attachment together. Agree cleaning and repeated-use requirements during sampling.",
        "zh": "一起核对外层、隔热层、内衬、拉链、接缝和提手连接；在打样时约定清洁与重复使用要求。",
        "es": "Revise tejido exterior, aislamiento, forro, cremallera, costuras y fijación de asas. Acuerde limpieza y requisitos de reutilización al muestrear."
      },
      {
        "en": "Provide artwork, order quantity and destination for a quote. Pricing and lead time vary with the construction; confirm them against the selected sample.",
        "zh": "询价时提供图稿、数量与目的地，按选定结构和样品确认价格与交期。",
        "es": "Facilite diseño, cantidad y destino para cotizar. Precio y plazo dependen de la construcción y se confirman con la muestra elegida."
      }
    ]
  },
  "insulated-box-liners-pallet-covers": {
    "answer": {
      "en": "Choose a box liner for the inside of a separately specified outer container. Choose a pallet hood for the top and sides of a stable pallet load. The open-bottom hood is not a lifting device or load restraint. For a wheeled roll cage, choose a front-opening cage cover with wheel and brake clearance. For an IBC cover, measure the cage and locate the top cap and lower valve. For a round drum cover, measure outside diameter and height, then check room to lift the circular cap. None replaces required refrigerated storage or transport.",
      "zh": "箱内衬适配另行确认的外运输容器内部；托盘罩覆盖稳定整托货堆的顶部与四侧。开放底部的罩体不是起吊或货物固定工具，带轮笼车采用前帘开合的笼车罩，并预留脚轮和刹车间隙。IBC 吨桶罩按框架外廓选配，分别核对顶部加注口和底部出液阀。工业圆桶罩按最大外径和总高选配，并预留圆顶盖取盖空间。各类产品均不能替代必要的冷藏储运。",
      "es": "El revestimiento se adapta al interior de un contenedor exterior acordado por separado. La funda cubre la parte superior y los lados de una carga estable. La base abierta no permite elevar ni sujetar la mercancía. Para carros con ruedas, elija una funda frontal que deje libres ruedas y frenos. Para una funda IBC, mida el bastidor y ubique tapa y válvula inferior. Para bidones redondos, mida diámetro y altura y deje espacio para retirar la tapa circular. Ninguno sustituye la refrigeración necesaria."
    },
    "checks": [
      {
        "en": "For a liner, measure the outer container interior and include lid closure, product and coolant clearance.",
        "zh": "箱内衬需测量外容器内尺寸，并计入盒盖闭合、货物与冰源空间。",
        "es": "Para un revestimiento, mida el interior del contenedor y reserve espacio para tapa, producto y refrigerante."
      },
      {
        "en": "For a pallet hood, measure maximum loaded width and depth and height above the pallet deck. Include overhang and keep fork access clear.",
        "zh": "托盘罩需测量货堆最大宽深及托盘面以上高度，计入突出部分并保持进叉口畅通。",
        "es": "Para una funda, mida ancho y fondo máximos y altura sobre la plataforma. Incluya salientes y deje libres las horquillas."
      },
      {
        "en": "Confirm layers, joins and fitting allowance by sample. Test the complete shipment against the intended route; accessories are specified separately.",
        "zh": "通过样品确认复合层、接缝与适配余量，按实际路线测试完整运输配置；配件另行约定。",
        "es": "Confirme capas, uniones y holgura con una muestra. Ensaye el envío completo según la ruta; acuerde accesorios por separado."
      }
    ]
  },
  "ice-packs-for-shipping": {
    "answer": {
      "en": "Water-fill packs need filling and inlet closure; self-absorbing formats need the specified soaking and draining procedure; segmented sheets arrange separate coolant cells around the contents. All formats need preparation and shipment testing matched to the selected sample. None establishes a universal shipping duration.",
      "zh": "注水袋需完成灌装与进水口封闭，自吸袋需按对应说明吸水和沥水，分格冰片可把独立蓄冷单元布置在内装物周围。各款都需按确认样品准备并做运输测试，不能统一承诺保冷时长。",
      "es": "Los acumuladores rellenables requieren llenado y cierre; los autoabsorbentes, absorción y escurrido indicados; las láminas distribuyen celdas alrededor del contenido. Todos requieren preparación y ensayos del envío según la muestra. Ninguno garantiza una duración universal."
    },
    "checks": [
      {
        "en": "Compare the filled dimensions and weight, not only the empty pouch. Reserve expansion space and check compatibility with the insulated bag or box.",
        "zh": "比较填充后的尺寸和重量，不能只看空袋；预留膨胀空间并检查与保温袋或箱体的匹配。",
        "es": "Compare medidas y peso llenos, no solo la bolsa vacía. Reserve expansión y compruebe compatibilidad con la bolsa o caja térmica."
      },
      {
        "en": "Ask for exact filling or soaking, draining, freezing and handling instructions. Check seal integrity after preparation and in a trial shipment.",
        "zh": "索取准确的注水或吸水、沥水、冷冻及操作说明，准备后和试运中检查封口完整性。",
        "es": "Solicite instrucciones concretas de llenado o absorción, escurrido, congelación y manejo. Revise sellos tras preparar y durante un envío de prueba."
      },
      {
        "en": "Use the product starting temperature, mass, required range, ambient profile and transit time to establish coolant quantity through testing.",
        "zh": "结合货物初始温度、重量、目标温区、环境温度变化和运输时间，通过测试确定冰袋用量。",
        "es": "Determine la cantidad mediante ensayos con temperatura inicial, masa, rango requerido, ambiente y duración del transporte."
      }
    ]
  }
}
