import { createSelector } from '@ngrx/store'
import { AppStateInterface } from '../types/AppState.interface'

const selectFeature = (state: AppStateInterface) => state.posts

export const isLoadingSelector = createSelector(
    selectFeature, 
    (state) => state.isLoading 
)
export const successSelector = createSelector(
    selectFeature, 
    (state) => state.posts 
)
export const errorSelector = createSelector(
    selectFeature, 
    (state) => state.error 
)