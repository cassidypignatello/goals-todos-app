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

function createStore() {
  // The store should have four parts
  // 1. the state
  // 2. get the state
  // 3. listen to changes on the state
  // 4. update the state

  let state
  let listeners = []

  const getState = () => getState

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const update

  return {
    getState,
    subscribe,
  }
}
