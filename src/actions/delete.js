export const deleteFavorite = (data) => {
    return{
        type: "DELETE",
        payload: data
    }
}