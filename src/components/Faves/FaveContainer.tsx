import { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { RatingProps } from 'semantic-ui-react'
import { removeFave } from '../../features/faves'
import FaveItem from './FaveItem'
import { FaveItemObj } from './types'

const FaveContainer = ({ fave }:{fave:FaveItemObj}) => {
	const dispatch = useDispatch()
	/*
    ? dispatch the action from the faves features slice to update the rating of the selected fave
    */
	const handleRating = (_e:SyntheticEvent, data:RatingProps) => {
		/*
	? set a rating
	*/ console.log('rating data ', data)
	}
	const handleRemove = () => {
		/*
	 ? remove the Fave from the list here:
	 */
		dispatch(removeFave(fave.id))
	}

	return <FaveItem fave={fave} handleRating={handleRating} handleRemove={handleRemove} />
}
export default FaveContainer
