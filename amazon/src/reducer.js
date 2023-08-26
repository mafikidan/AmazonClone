export const initialState = {
    basket: [],
    user: null,
};
// const falseNb = items.reduce((n, item) => item.status === 'false' ? n+1 : n, 0)
// const falseNb = items.filter(e => e.status === 'false').length;
// const unique = arr.filter(
//     (obj, index) =>
//       arr.findIndex((item) => item.location === obj.location) === index
//   );

// const counts = arr.reduce((acc, item) => {
//     if (!acc[item.name]) {
//       acc[item.name] = 1;
//     } else {
//       acc[item.name]++;
//     }
//     return acc;
//   }, {});
  

//   let count = 1
//             const unique = state.basket.filter(
//                 (obj, index) =>
//                   state.basket.findIndex(
//                     (item) => item.id === obj.id && item.name === obj.name
//                   ) === index
//               )
//               console.log(unique)
//               if(unique.length > 0){
//                 count = count + 1
//               }
//               console.log(count)

//   const duplicates = Object.entries(counts).filter(([name, count]) => count > 1);
const reducer = (state, action) => {
    // console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                // basket:[...state.basket, unique]
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (item)=> item.id === action.id
            )

            let newBasket =[...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(
                    `Item with id ${action.id} not found in the cart`
                )
            }

            return {
                ...state,
                basket: newBasket 
            };

            case "SET_USER":
                return{
                    ...state,
                    user : action.user
                }
            
            default:
                return state;
    }
}
export default reducer