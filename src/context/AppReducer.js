export default function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, toDoList: [...state?.toDoList, action?.payload] };
    case 'REMOVE_TODO':
      return {
        ...state,
        toDoList: [...state?.toDoList?.filter((m, i) => m?.id !== action?.payload)],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        toDoList: [
          ...state?.toDoList?.map((toDo) => {
            if (toDo?.id === action?.payload?.id) {
              toDo = { ...toDo, ...action?.payload };
            }
            return toDo;
          }),
        ],
      };
    case 'TOGGLE_DONE':
      return {
        ...state,
        toDoList: [
          ...state?.toDoList?.map((toDo) => {
            if (toDo?.id === action?.payload) {
              toDo.done = !toDo.done;
            }
            return toDo;
          }),
        ],
      };
    default:
      return { ...state };
  }
}
