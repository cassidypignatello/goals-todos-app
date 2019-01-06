{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
}

{
  type: 'REMOVE_TODO',
  id: 0
}

{
  type: 'TOGGLE_TODO',
  id: 0
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a marathon',
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}

// Reducer function
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD-TODO':
      return state.concat([action.todo])
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, {complete: !todo.complete})
      )
    default:
      return state
  }
}

function createStore(reducer) {
  // The store should have four parts
  // 1. the state
  // 2. get the state (getState)
  // 3. listen to changes on the state (subscribe)
  // 4. update the state (dispatch)

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore(todos)
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
})
