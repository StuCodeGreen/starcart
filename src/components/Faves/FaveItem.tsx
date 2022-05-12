import { Button, List, Rating } from 'semantic-ui-react'
import {handleRating, handleRemove, FaveItemObj} from './types'

interface Props {
	fave: FaveItemObj;
	handleRating: handleRating;
	handleRemove:handleRemove;
}

const FaveItem = ({ fave, handleRating, handleRemove }: Props) => (
	<List.Item>
		<img className="ui mini circular image" src="avatar.jpg" alt="avatar" />
		<List.Content>
			{fave.name} <Button onClick={handleRemove} size="mini" icon={{ name: 'delete', color: 'red' }} basic />
		</List.Content>
		<List.Content>
			<Rating onRate={handleRating} maxRating={5} icon="star" size="mini" rating={fave.rating} />
		</List.Content>
	</List.Item>
)

export default FaveItem
