# Ejercicios de React con TypeScript

Este documento contiene **5 ejercicios** en una sola página para practicar **componentes, props y estado** utilizando React + TypeScript.

---

## 1) Catálogo de Productos con Filtro y Contador de Favoritos

**Objetivo:** Renderizar tarjetas de productos; filtrar por texto; marcar/desmarcar favoritos y ver el contador global.

**Requisitos**
- Muestra una lista de productos (nombre, precio, categoría).
- Input de búsqueda que filtra por nombre (estado controlado).
- Cada tarjeta tiene un botón “❤” que alterna favorito (estado en `App`).
- Un **Badge** en el header muestra el total de favoritos.
- Sin navegación; todo en una sola página.

**Árbol de componentes**
- `ProductsPage`
  - `Header` *(props: totalFavoritos: number)*
  - `SearchBar` *(props: value: string, onChange: (v:string)=>void)*
  - `ProductGrid` *(props: products: Product[], favoritos: Set<string>, onToggleFav:(id:string)=>void)*
    - `ProductCard` *(props: product: Product, isFav: boolean, onToggle:()=>void)*

**Tipos y contratos**
```ts
type Product = { id: string; name: string; price: number; category: string };

interface HeaderProps { totalFavoritos: number }
interface SearchBarProps { value: string; onChange: (value: string) => void }
interface ProductGridProps {
  products: Product[];
  favoritos: Set<string>;
  onToggleFav: (id: string) => void;
}
interface ProductCardProps {
  product: Product;
  isFav: boolean;
  onToggle: () => void;
}
```

---

## 2) Lista de Tareas con Contadores Derivados

**Objetivo:** Crear un todo list con formulario controlado, marcar completadas y mostrar métricas.

**Requisitos**
- Formulario (input texto) para agregar tareas (no vacías).
- Listado de tareas con checkbox “completada” y botón “eliminar”.
- Muestra: **Total**, **Completadas**, **Pendientes** (derivados del estado).
- Opción “Mostrar solo pendientes” (toggle en el header).

**Árbol de componentes**
- `TareasPage`
  - `TodoHeader` *(props: total:number, done:number, pending:number, onlyPending:boolean, onToggleFilter:()=>void)*
  - `TodoForm` *(props: value:string, onChange:(v:string)=>void, onAdd:()=>void)*
  - `TodoList` *(props: items: Todo[], onToggle:(id:string)=>void, onDelete:(id:string)=>void)*
    - `TodoItem` *(props: item: Todo, onToggle:()=>void, onDelete:()=>void)*

**Tipos y contratos**
```ts
type Todo = { id: string; text: string; done: boolean };

interface TodoHeaderProps {
  total: number; done: number; pending: number;
  onlyPending: boolean; onToggleFilter: () => void;
}
interface TodoFormProps { value: string; onChange: (v: string) => void; onAdd: () => void }
interface TodoListProps {
  items: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
interface TodoItemProps {
  item: Todo;
  onToggle: () => void;
  onDelete: () => void;
}
```

---

## 3) Encuesta de Satisfacción con Estrellas y Resumen

**Objetivo:** Valorar 3 aspectos (UI, Rendimiento, Contenido) con un componente de **StarRating** reutilizable y mostrar un resumen en vivo.

**Requisitos**
- Tres secciones idénticas con un título y un `StarRating` (1–5).
- El valor de cada sección vive en el estado de `App`.
- Un panel lateral muestra el promedio y un mensaje:
  - 4.5–5: “Excelente”
  - 3–4.49: “Bueno”
  - <3: “Necesita mejorar”
- Botón “Restablecer” que vuelve todo a 0.

**Árbol de componentes**
- `EncuestasPage`
  - `RatingSection` *(props: title:string, value:number, onChange:(v:number)=>void)*
    - `StarRating` *(props: value:number, max?:number, onChange:(v:number)=>void)*
  - `SummaryPanel` *(props: values:number[])*
  - `ResetButton` *(props: onReset:()=>void)*

**Tipos y contratos**
```ts
interface RatingSectionProps { title: string; value: number; onChange: (v: number) => void }
interface StarRatingProps { value: number; max?: number; onChange: (v: number) => void }
interface SummaryPanelProps { values: number[] }
interface ResetButtonProps { onReset: () => void }
```

---

## 4) Temporizador Pomodoro con Configuración y Progreso

**Objetivo:** Implementar un Pomodoro básico con sesiones de Focus/Break configurables, controlado desde `App`.

**Requisitos**
- Dos duraciones configurables (minutos): **Focus** y **Break**.
- Botones: **Start/Pause**, **Reset**, **Skip** (salta a la siguiente sesión).
- Indicador de **progreso** (barra) y etiqueta del modo actual.
- Texto “¡Cambio de sesión!” cuando termina una sesión.
- Todo en una página.

**Árbol de componentes**
- `PomodoroPage`
  - `SessionConfig`
  - `TimerDisplay`
  - `ProgressBar`
  - `Controls`

**Tipos y contratos**
```ts
type Mode = "focus" | "break";

interface SessionConfigProps {
  focusMin: number;
  breakMin: number;
  onChangeFocus: (n: number) => void;
  onChangeBreak: (n: number) => void;
}
interface TimerDisplayProps { mode: Mode; remaining: number }
interface ProgressBarProps { value: number } // 0..1
interface ControlsProps {
  running: boolean;
  onStartPause: () => void;
  onReset: () => void;
  onSkip: () => void;
}
```

---

## 5) Quiz de Opción Múltiple con Resumen y Reinicio

**Objetivo:** Crear un cuestionario de 5 preguntas con opciones únicas; mostrar puntaje y resumen al finalizar.

**Requisitos**
- Renderiza una pregunta por vez con 4 opciones tipo radio.
- Botón **Next** deshabilitado hasta elegir opción.
- Al finalizar: muestra **puntaje** y un **resumen** con: pregunta, respuesta correcta y elegida.
- Botón **Restart** para volver a inicio.

**Árbol de componentes**
- `QuizPage`
  - `Quiz`
    - `QuestionCard`
      - `OptionsList`
    - `QuizControls`
    - `QuizSummary`
    - `RestartButton`

**Tipos y contratos**
```ts
type Option = { id: string; label: string };
type Question = { id: number; text: string; options: Option[]; correctId: string };

interface QuizProps { questions: Question[] }
interface QuestionCardProps {
  q: Question;
  selected?: string;
  onSelect: (optionId: string) => void;
}
interface OptionsListProps {
  options: Option[];
  selected?: string;
  onSelect: (optionId: string) => void;
}
interface QuizControlsProps {
  canNext: boolean;
  isLast: boolean;
  onNext: () => void;
}
interface QuizSummaryProps {
  questions: Question[];
  answers: Record<number, string>;
}
interface RestartButtonProps { onRestart: () => void }
```
