Guía de llama.cpp: Ejecutar LLM localmente, en cualquier hardware, desde cero
01/07/2026 [Actualizado: 01/07/2026] EcoruralIA 65 min de lectura (13831 palabras)
#llama.cpp #llm #ai #guía

## Índice
Desde el 2022 empecé a experimentar con LLMs…
Pero antes, algunas aclaraciones para que no tengas expectativas demasiado altas.

¿Necesito un Hardware "Superman" o una GPU similar de gama media/alta o con mi actual vieja Labtop Lenovo con S.O. Linux Mint y 8GB RAM (que es desde la que te escribo este post) puedo hacer lo que te muestro aquí?

¿Qué rendimiento puedo esperar? ¿Qué calidad de respuestas puedo esperar? ¿Aguantará mi Labtop?

¿Puedo reemplazar ChatGPT/Claude/Gemini/DeepSeek/otros [insertar proveedor de LLM en línea] con esto?

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

En algún momento empecé a investigar modelos de código abierto. No tenía ni idea de cómo usarlos, pero en cuanto vi el tamaño de los modelos "pequeños", como Llama 2 7B, me di cuenta de que mi RTX 2070 Super con solo 8 GB de VRAM probablemente tendría problemas para ejecutarlos (¡y me equivoqué!), y que ejecutarlos con la CPU probablemente daría un rendimiento muy bajo. Entonces, compré una nueva GPU: una RX 7900 XT con 20 GB de VRAM, que sin duda es más que suficiente para ejecutar modelos LLM pequeños y medianos. ¡Genial!

Ahora mi problema era encontrar un software que pudiera ejecutar un modelo LLM en esa GPU. CUDA era el backend más popular, pero es para GPUs de Nvidia, no de AMD. Después de investigar un poco, descubrí ROCm y encontré LM Studio. Y esto era justo lo que buscaba, al menos por el momento. Una interfaz de usuario excelente, fácil acceso a muchos modelos y la cuantización: eso fue lo que me convenció definitivamente de alojar los modelos LLM en mi propio servidor. La existencia de la cuantización me hizo darme cuenta de que no se necesita hardware potente para ejecutar modelos lineales de aprendizaje (LLM). ¡Incluso se pueden ejecutar en Raspberry Pi (¡con llama.cpp también!)! Claro que el rendimiento será pésimo si no se ejecuta el LLM con un backend adecuado en un hardware decente, pero actualmente no es muy exigente.

Si llegaste aquí buscando un software que te permita ejecutar fácilmente modelos populares en la mayoría del hardware moderno para fines no comerciales, descarga LM Studio, lee la siguiente sección de esta publicación y experimenta con él. Cumple perfectamente con esta descripción; solo asegúrate de usar el backend apropiado para tu GPU/CPU para obtener un rendimiento óptimo.

Sin embargo, si:

Quieres aprender más sobre llama.cpp (que LM Studio usa como backend) y sobre los LLM en general
Quieres usar LLM con fines comerciales (los términos de LM Studio lo prohíben)
Quieres ejecutar LLM en hardware poco común (LM Studio solo ofrece los backends más populares)
No te gusta el software de código cerrado (que, lamentablemente, es el caso de LM Studio) y/o no confías en nada que no hayas creado tú mismo
Quieres tener acceso a las últimas funciones y modelos lo antes posible
¡el resto de esta publicación te resultará muy útil!

Pero antes, algunas aclaraciones para gestionar las expectativas
Antes de continuar, quiero aclarar algunas cosas. Esta sección de preguntas frecuentes responde a algunas preguntas cuyas respuestas me gustaría conocer antes de empezar con los LLM autoalojados.

¿Necesito una RTX 2070 Super/RX 7900 XT o una GPU de gama media/alta similar para hacer lo que hiciste aquí?

No, no la necesitas. Más adelante daré más detalles, pero puedes ejecutar LLM sin GPU. Siempre que tengas hardware relativamente moderno (es decir, al menos una CPU decente con soporte AVX), serás compatible. Sin embargo, recuerda que el rendimiento puede variar.

¿Qué rendimiento puedo esperar?

Es una pregunta difícil de responder directamente. La velocidad de generación de texto depende de varios factores, pero principalmente de:

el rendimiento de las operaciones matriciales en tu hardware, el ancho de banda de la memoria y el tamaño del modelo.