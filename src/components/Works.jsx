import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`

const Left = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`

const List = styled.ul`
	
`

const ListItem = styled.li`
	
`

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`

function Works() {
	return (
		<Section>
			<Left>

			</Left>
			<Right>
				<h1>Proyectos</h1>
			</Right>
		</Section>
	)
}

export default Works