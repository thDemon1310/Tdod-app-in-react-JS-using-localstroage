# Todo App
- In this App I am going to create a **TodoList App**


##  How the Todo App is Working Now (After the Fix)

###  What Was Wrong Earlier

You had two separate components:

- `Input.jsx` → added todos and saved them to `localStorage`
- `TodoList.jsx` → displayed todos

But they were **not connected**.

####  The Problem:
- When you added a todo in `Input.jsx`, it saved to `localStorage`
- But `TodoList.jsx` didn't know that the data changed
- React didn't re-render the UI
- You had to **refresh the page** to see the updated list

---

###  What You Fixed

You **lifted the `todoList` state** up to the parent component: `Section.jsx`.

#### Now:

- `Section` owns the main state: `todoList` (`useState`)
- `Input` gets `setTodoList` to **add new todos**
- `TodoList` gets `todoList` to **display todos**
- When the state updates, React automatically re-renders the UI

---

###  New Data Flow

```txt
           ┌────────────┐
           │ Section.jsx│   ← owns the `todoList` state
           └────┬───────┘
                │
        ┌───────┴────────┐
        │                │
┌───────▼───────┐  ┌─────▼────────┐
│  Input.jsx    │  │ TodoList.jsx │
│  (adds todo)  │  │ (displays)   │
└───────────────┘  └──────────────┘
