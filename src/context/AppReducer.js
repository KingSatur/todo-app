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
      break;
    default:
      break;
  }
}
