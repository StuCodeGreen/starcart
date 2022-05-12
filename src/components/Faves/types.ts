import {SyntheticEvent} from 'react'
import {ButtonProps, RatingProps} from 'semantic-ui-react'
export interface FaveItemObj{
    id:number;
    name: string;
    rating: number
}
export type handleRemove = (_e: SyntheticEvent, data: ButtonProps) => void
export type handleRating = (_e: SyntheticEvent, data: RatingProps) => void
