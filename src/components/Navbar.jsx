import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	padding: 1.5rem 0;
	width: 1400px;
	display:flex;
	justify-content: space-between;
	align-items: center;
`
const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 5rem;
`
const Logo = styled.img`
	width: auto;
	height: 65px;
`
const List = styled.ul`
	display: flex;
	gap: 2rem;
	list-style: none;
`
const ListItem = styled.li`
	cursor: pointer;
`

const Icon = styled.img`
	width: auto;
	height: 25px;
	cursor: pointer;
`
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`
const Button = styled.button`
	padding: 0.5rem;
	width: 100px;
	background-color: #73bb31;
	color: #FFFFFF;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const Navbar = () => {
	return (
		<Section>
			<Container>
				<Links>
					<Logo src="./img/logo.png" />
					<List>
						<ListItem>Inicio</ListItem>
						<ListItem>Nosotros</ListItem>
						<ListItem>Proyectos</ListItem>
						<ListItem>Clientes</ListItem>
					</List>
				</Links>
				<Icons>
					<Icon src="./img/search.png" />
					<Button>Contáctanos</Button>
				</Icons>
			</Container>
		</Section>
	)
}

export default Navbar