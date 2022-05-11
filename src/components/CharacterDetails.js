import { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Details = ({ details }) => {
	const [modalOpen, setModalOpen] = useState(false)
	if (details) {
		return (
			<Modal
				onOpen={() => setModalOpen(true)}
				onClose={() => setModalOpen(false)}
				open={modalOpen}
				trigger={<Button onClick={() => setModalOpen(true)}>view</Button>}
			>
				<Modal.Header>{details.name}</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<strong>DoB: </strong>
						{details.birth_year}
						<br />
						<strong>Eye Color: </strong>
						{details.eye_color}
						<br />
						<strong>Gender: </strong>
						{details.gender}
						<br />
						<strong>Hair Color: </strong>
						{details.hair_color}
						<br />
						<strong>Height: </strong>
						{details.height} cm
						<br />
						<strong>Weight: </strong>
						{details.mass} kg
						<br />
						<strong>Skin Color: </strong>
						{details.skin_color}
						<br />
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
	return null
}
export default Details
