## Guía de llama.cpp: Ejecutar LLM localmente, en cualquier hardware, desde cero
01/07/2026 [Actualizado: 01/07/2026] EcoruralIA 65 min de lectura (13831 palabras)
#llama.cpp #llm #ai #guía

## Índice
Desde el 2022 empecé a experimentar con LLMs…
Pero antes, algunas aclaraciones para que no tengas expectativas demasiado altas.

¿Necesito un Hardware "Superman" o una GPU similar de gama media/alta o con mi actual vieja Labtop Lenovo con S.O. Linux Mint y 8GB RAM (que es desde la que te escribo este post) puedo hacer lo que te muestro aquí?

¿Qué rendimiento puedo esperar? ¿Qué calidad de respuestas puedo esperar? ¿Aguantará mi Labtop?

¿Puedo reemplazar ChatGPT/Claude/Gemini/DeepSeek/Perplexity/otros [insertar proveedor de LLM en línea] con esto?

**Índice del Tema**
1. Requisitos previos
2. Construyendo con el servidor llama.cpp
3. Obteniendo un modelo Gratis e ilimitado
4. Descargando el modelo Hugging Face a GGUF
5. Cuantizando el modelo
6. Ejecutando el servidor llama.cpp en Local sin telemetrías
7. Configuración local del servidor llama.cpp
8. Instalando el motor de inferencias local "opendev" para usarlo con llama.cpp
8. Otras herramientas de llama.cpp
9. llama-bench
10. llama-cli
11. Construyendo llama, pero mejor
12. ¿Necesitas mejor soporte para CPU?
13. ¿Qué tal el backend FastAPI/ROCm/Vulan/BLAS?
14. Opciones de configuración de LLM explicadas
15. ¿Cómo genera texto LLM?
16. Lista de opciones de configuración y muestreadores de LLM disponibles en llama.cpp
17. Conclusiones
18. Extra: dónde encontrar modelos y algunas recomendaciones
19. Análisis posterior
20. Ningún LLM sufrió daños durante la creación de esta publicación.

---
Así que empecé a experimentar con LLMs…
…y es bastante divertido. Al principio, era muy escéptico sobre el auge de la IA/LLMs. Pensaba, como mucha gente, que se lo estaban inventando todo y generando tonterías inquietantes. ¡Qué equivocado estaba! Comencé usando ChatGPT para tantear el terreno; me causó una buena primera impresión, a pesar de que alucinaba después de más o menos 1 hora de trabajo en el plan gratuito, bastante. Eso fue cuando GPT3.5 era el mejor modelo. Hemos avanzado mucho desde entonces.

Sin embargo, aunque ChatGPT no me decepcionó, seguía siendo escéptico. Todo lo que escribí y cada respuesta estaba disponible para OpenAI o cualquier otro proveedor que quisiera usar. Esto no es un gran problema, pero me resulta incómodo, y además significa que no puedo usar modelos de aprendizaje automático para ningún proyecto laboral que no sea de código abierto. Además, ChatGPT solo es gratuito hasta cierto punto; si quisiera usar IA por completo, probablemente tendría que pagar. Lo cual, obviamente, prefiero evitar.

En algún momento empecé a investigar modelos de código abierto. No tenía ni idea de cómo usarlos, pero en cuanto vi el tamaño de los modelos "pequeños", como Llama 2 7B, me di cuenta de que mi vieja Labtop Lenovo 2.5 Flex con solo 8 GB de VRAM probablemente tendría problemas para ejecutarlos (¡y me equivoqué!), y que ejecutarlos con la CPU probablemente daría un rendimiento muy bajo. Entonces, me decidí de todos modos a probarlos con esos mismos 8GB de VRAM, que sin duda es más que suficiente para ejecutar modelos LLMs pequeños gratuitos y opensource. ¡Genial!

Ahora mi problema era encontrar un software que pudiera ejecutar un modelo LLM en esta vieja CPU sin cogelarse ni destruir mi vieja Labtop. CUDA era el backend más popular, pero es para GPUs de Nvidia, no de AMD. Después de investigar un poco, descubrí ROCm y encontré LM Studio. Y pensaba que esto era justo lo que buscaba, al menos por el momento los probé pero mi vieja Labtop no respondia con ellos. Aunque tienen una interfaz de usuario excelente, fácil acceso a muchos modelos y la cuantización pero tuve que dejar de usarlos (al menos hasta que escale a una mejor y más moderna Labtop): y eso fue lo que me convenció definitivamente de buscar alojar los modelos LLM en mi propio servidor local pero de acuerdo a mi hardware actual:

system         20405 (LENOVO_MT_20405_BU_idea_FM_Lenovo Flex 2-15)
processor      Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz
memory         32KiB L1 caché, 256KiB L2 caché, 3MiB L3 caché, 32KiB L1 caché, 8GiB Memoria de sistema y 4GiB SODIMM DDR3 Síncrono 1600 MHz (0,6 ns)


La existencia de la cuantización me hizo darme cuenta de que no se necesita hardware potente para ejecutar modelos lineales de aprendizaje más avanzados (LLMs). ¡Incluso se pueden ejecutar en Raspberry Pi (¡con llama.cpp también!)! Claro que el rendimiento será pésimo si no se ejecuta el LLM con un backend adecuado en un hardware decente, pero actualmente no es muy exigente. ASí que me tuve que contentar por el momento con lo que tenía a mano. Así que solo debemos asegurarnos de usar el backend apropiado para tu CPU/GPU (en caso de que la tengas) para obtener un rendimiento óptimo.

Sin embargo, si eres como yo que:
- Quiero aprender más sobre llama.cpp (que por cierto LM Studio usa como backend) y sobre los LLMs opensource y gratuitos en general.
- Quiero usar LLMs gratuitos y opensource con fines locales para luego proyectos comerciales (ten en cuenta que los términos de LM Studio lo prohíben).
- Quiero ejecutar LLMs en hardware opensource low-cost poco común (ya que LM Studio solo ofrece los backends más populares).
- No me gusta el software de código cerrado (que, lamentablemente, es el caso de LM Studio) y/o no confías en nada que no hayas creado tú mismo.
- Quiero tener acceso a las últimas funciones y modelos gratuitos opensource e ilimitados lo antes posible sin telemetrías ocultas de venta de tus datos a terceros.
- Busco en todos mis proyectos la soberanía tecnológica sin dependencias de licencias caras ni pagos ocultos extras, con software libre pero no todo Gratuito porque de algo hay que vivi y hay que comer y pagar gastos mensuales y familia que mantener. El tiempo de los patriotas ya se acabó.

Entonces sigue conmigo ¡el resto de esta publicación te resultará muy útil!

Pero antes, algunas aclaraciones para gestionar bien las expectativas.
Antes de continuar, quiero aclarar algunas cosas. Esta sección de preguntas frecuentes responde a algunas preguntas cuyas respuestas me gustaría conocer antes de empezar con los LLM locales soberanos autoalojados.

¿Necesito un Hardware "Superman" o una GPU similar de gama media/alta o con mi actual vieja Labtop Lenovo con S.O. Linux Mint y 8GB RAM (que es desde la que te escribo este post) puedo hacer lo que te muestro aquí?

No, no la necesitas. Más adelante daré más detalles, pero puedes ejecutar LLMs sin GPU tal como hago y con mi vieja CPU. Siempre que tengas algún hardware relativamente mcon el mínimo de condiciones como el mío (es decir, al menos una CPU decente con soporte AVX), serás compatible. Sin embargo, recuerda que el rendimiento puede variar.

¿Qué rendimiento puedo esperar? ¿Qué calidad de respuestas puedo esperar? ¿Aguantará mi Labtop?

Es una pregunta difícil de responder directamente. La velocidad de generación de texto depende de varios factores, pero principalmente de: el rendimiento de las operaciones matriciales en tu hardware, el ancho de banda de la memoria y el tamaño del modelo.

¿Puedo reemplazar ChatGPT/Claude/Gemini/DeepSeek/otros con esto?

[Proveedor de LLMs en local: opencode] Me decidí por usar opencode en local, que es Quizás, el agente de codificación IA (Motor de Inferencias) de código abierto para 
Modelos gratuitos incluidos o que conecta cualquier modelo de cualquier proveedor,
incluyendo Claude, GPT, Gemini y más, en teoría, sí, pero en la práctica, utilizan telemetría oculta venden tus datos para poder costear o sostener el "regalo" de los modelos de IA gratuitos que ofrecen y depende de tus herramientas. Entonces me decidí por usar como servidor local a llama.cpp que proporciona un servidor compatible con todas las IA. Siempre que mis herramientas se comuniquen con los modelos de lenguaje natural (LLMs) gratuitos sin APIs de pago ni telemetrías de datos lo cual resolví "Modificando el código fuente opensource de opencode", me lo descargué de su sitio (https://github.com/anomalyco/opencode) sin APIs de pagos, localmente y con soberanía tecnológica y le cambién nombre a mi nueva creación "opendev" y así pude configurar un punto final personalizado, para poder usar un LLMs gratuitas autoalojadas con ello.

![opendev](/img/opendev.png)

## Requisitos:
- CPU viejita pero con lo mínimo de hardware requerido. Si tienes una GPU o un procesador Intel de octava generación o posterior, no tendrás problemas, pero todo esto debería funcionar también en hardware más antigüo como el mío.
- Idealmente, una CPU con el mínimo requerido de VRAM, si tienes mucho más pués mejor. Si tienes al menos 8 GB de VRAM como yo, pués deberías poder ejecutar al menos modelos de 3 mil millones; diría que es un mínimo razonable. En mi caso el que uso es "qwen2.5-coder-3b-instruct-q4_k_m.gguf", descargado del repo de Hugging Face (https://huggingface.co/docs/hub/repositories). El fabricante no importa, llama.cpp es compatible con CPU, GPU de Nvidia, AMD y Apple (no estoy seguro de Intel, pero creo haber visto un backend para ello; si no, Vulkan o ROCm deberían funcionar).

Si no usas una GPU o no tiene suficiente VRAM, como en mi caso necesitas una RAM mínima de 8GB para que el modelo gratuito pueda correr sin problema. Como se mencionó anteriormente, se recomiendan al menos 8 GB de RAM libre, pero cuanto más, mejor. Ten en cuenta que cuando llama.cpp solo usa la CPU, el consumo de RAM es casi el 30% del total disponible.

En esta guía, asumiré que usas Linux (En mi caso uso Linux Mint). No puedo brindar soporte para usuarios de Mac, por lo que deberán seguir los pasos para Linux y consultar la documentación de llama.cpp siempre que sea posible.

En esta publicación se utiliza un formato específico del contexto:
