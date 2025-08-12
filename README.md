# Amigo Secreto

Aplicación web simple para gestionar una lista de amigos y **sortear** un nombre al azar.  
Hecha con **HTML + CSS + JavaScript (vanilla)**.

## 🎯 Demo
- GitHub Pages: <https://mhgommx.github.io/Challenge_Amigo_secretp/>
- Captura:  
  ![Pantalla principal](assets/amigo-secreto.png)

## ✨ Características
- Agregar nombres con validación:
  - Bloqueo de vacíos (trim).
  - Evita duplicados sin distinguir mayúsculas/minúsculas.
- Visualización dinámica de la lista (`<ul id="listaAmigos">`).
- **Sorteo aleatorio** con resultado mostrado en `<ul id="resultado">`.
- UX:
  - Tecla **Enter** agrega nombres sin recargar la página.
  - Botón “Sortear amigo” **deshabilitado** cuando no hay nombres.
  - Enfoque automático al input tras agregar.
- Accesibilidad:
  - `aria-live="polite"` para anunciar el resultado.
  - `aria-labelledby` del listado apuntando al título.

## 🧩 Estructura del proyecto
.
├─ index.html
├─ style.css
├─ app.js
└─ assets/
├─ amigo-secreto.png
└─ play_circle_outline.png

bash
Copiar
Editar

## 🚀 Cómo ejecutar

### Como usuario (en línea)
No necesitas instalar nada. Abre la demo:
- GitHub Pages: <https://mhgommx.github.io/Challenge_Amigo_secretp/>

### Como desarrollador (en tu computadora)
1) Clona el repositorio:
```bash
git clone https://github.com/mhgommx/Challenge_Amigo_secretp.git
cd Challenge_Amigo_secretp
Abre index.html en tu navegador
(tip: con la extensión Live Server en VS Code es más cómodo).

🧠 Lógica principal (resumen)
amigos: array en memoria con los nombres.

agregarAmigo(): valida, evita duplicados y pinta la lista con renderLista().

renderLista(): limpia y recrea los <li> de #listaAmigos y actualiza el estado del botón de sorteo.

sortearAmigo(): valida, obtiene índice aleatorio y muestra el resultado en #resultado.

🔧 Decisiones de implementación
createElement + textContent para pintar listas (seguro y claro).

Prevención de duplicados case-insensitive.

Gestión del estado del botón de sorteo.

📌 Próximos pasos
Persistir la lista en localStorage.

Eliminar nombres individuales.

Animación del resultado.

Normalizar acentos (José == jose).

👤 Autor
Misael HGMZ — @mhgommx

sql
Copiar
Editar

Luego:
```bash
git add README.md
git commit -m "docs: README limpio con demo y uso"
git push