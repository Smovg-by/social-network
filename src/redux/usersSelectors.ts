import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

// export const getUsers = (state: AppStateType):Array<UserType> => {
//     return state.usersPage.users
// }

// создаем примитивный селектор для зависимости
const getUsersSelector = (state: AppStateType) => state.usersPage.users

// создаем реселектор с помощью createSelector()
export const getUsers = createSelector([getUsersSelector], (users)=>{
    // филтрация ниже не иметт смысла, просто для примера сложных вычислений
    return users.filter(u => u)
})

export const getPageSize = (state: AppStateType):number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType):number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType):number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType):boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType):Array<number> => {
    return state.usersPage.followingInProgress
}