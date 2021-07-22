export const HIDE_SHLEF = 'HIDE_SHLEF'

export const hideShelves = (shelves) =>{
    return{
        type: HIDE_SHLEF,
        shelves
    }
}