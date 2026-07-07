## Título de la entrada del blog a partir del primer encabezado

Gracias al plugin `jekyll-titles-from-headings`, compatible con GitHub Pages de forma predeterminada, el encabezado anterior (en el archivo Markdown) se utilizará automáticamente como título de la página.

Si el archivo no comienza con un encabezado, el título de la entrada se derivará del nombre del archivo.

Esta es una entrada de blog de ejemplo. Aquí puedes hablar de todo tipo de temas interesantes.

--

### Este es un encabezado

#### Código T-SQL
```tsql
SELECT This, [Is], A, Code, Block -- Usando resaltado de sintaxis estilo SSMS

, REVERSE('abc')
FROM dbo.SomeTable s

CROSS JOIN dbo.OtherTable o;

```

#### Código PowerShell

```powershell
Write-Host "Este es un bloque de código PowerShell";

# Hay muchos otros lenguajes que puedes usar, pero el estilo debe cargarse primero.

ForEach ($thing in $things) {
Write-Output "Lo resalta usando el estilo de GitHub"
}
```
