import { createSelector } from '@ngrx/store'
import { AppStateInterface } from '../types/AppState.interface'

const selectFeature = (state: AppStateInterface) => state.posts

export const isLoadingSelector = createSelector(
    selectFeature, 
    (state) => state.isLoading 
)
export const isSuccessSelector = createSelector(
    selectFeature, 
    (state) => state.posts 
)
export const isErrorSelector = createSelector(
    selectFeature, 
    (state) => state.error 
)