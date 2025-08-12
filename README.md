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
## 🎯 Demo
- GitHub Pages: <https://mhgommx.github.io/Challenge_Amigo_secretp/>
- Captura:
  ![Pantalla principal](assets/amigo-secreto.png)

### Como desarrollador (en tu computadora)
1) Clona el repositorio:
```bash
/*
git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
cd NOMBRE_DEL_REPO
Abre index.html en tu navegador
(tip: con la extensión Live Server en VS Code es más cómodo).

markdown
Copiar
Editar

- **“Como usuario (en línea)”** → para ver la app ya publicada (cuando actives GitHub Pages).
- **“Como desarrollador”** → para quien quiera **clonar** y correrlo localmente con `git clone`.
*/


🧠 Lógica principal (resumen)
amigos: array en memoria con los nombres.

agregarAmigo():

Lee #amigo, valida, evita duplicados y pinta la lista con renderLista().

renderLista():

Limpia y vuelve a crear los <li> de #listaAmigos.

Actualiza el estado del botón de sorteo.

sortearAmigo():

Valida que haya elementos, toma índice aleatorio y pinta el resultado en #resultado.

🔧 Decisiones de implementación
Preferencia por createElement + textContent al pintar la lista (más seguro que innerHTML).

Prevención de duplicados case-insensitive.

Gestión de estados de UI (botón de sorteo) centralizada.

📌 Próximos pasos (roadmap)
Persistir la lista en localStorage.

Botón para eliminar nombres individuales.

Animación/estilos del resultado del sorteo.

Normalización de acentos para duplicados (José == jose).

📝 Requisitos / versión
Navegador moderno (ES6+).

👤 Autor
<Misael HGMZ> — <mhgommx>