import { Button, Card, Loader, Message, Pagination, Container, Grid } from 'semantic-ui-react'
import { useGetCharactersQuery } from '../services/swapApi'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFave } from '../features/faves'
import CharacterDetails from './CharacterDetails'
import usePagination from '../hooks/pagination'

const Characters = () => {
	const { activePage, setActivePage } = usePagination()
	const { data, isError, isLoading } = useGetCharactersQuery(activePage)

	const dispatch = useDispatch()
	const selectCharacter = e => {
		const { name } = e.currentTarget.dataset
		const character = data.results.find(character => character.name === name)
		return character
	}
	const addToFavourites = e => dispatch(addFave(selectCharacter(e)))

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return (
			<>
				<Card.Group centered>
					{data.results.map(character => (
						<Card key={nanoid()}>
							<Card.Content>
								<Card.Header>{character.name}</Card.Header>
								{character && character.films && <Card.Meta> films : {character.films.length}</Card.Meta>}
								<Card.Description>{character.opening_crawl}</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<CharacterDetails details={character} />
								<Button
									icon={{ name: 'plus', size: 'small' }}
									data-name={character.name}
									positive
									content="Add to faves"
									onClick={addToFavourites}
								/>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
				<Container >
					<Grid centered>
						<Grid.Row>
							<Pagination
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              siblingRange={1}
              totalPages={9}
							onPageChange={(event, data) => setActivePage(data.activePage)}
							/>
						</Grid.Row>
					</Grid>
				</Container>
			</>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no characters found</Message>
	}
	return null
}
export default Characters
