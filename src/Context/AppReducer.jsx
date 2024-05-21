export default (state,action)=>{

    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [ ...state.transactions , action.payload]
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((e) => e.id !== action.payload )
            }
        
    }

}