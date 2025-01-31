import { GET_CATEGORY, CATEGORY_ERROR, GET_SUB_CATEGORY, SUB_CATEGORY_ERROR } from "../actions/types"

export const categoryList = (state = { categories: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false,
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}

export const subcategoryList = (state = { subcategories: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_SUB_CATEGORY:
            return {
                ...state,
                subcategories: payload,
                loading: false,
            }
        case SUB_CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}
