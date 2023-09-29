import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`

const Left = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`

const Title = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
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

const LoQueHacemos = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Line = styled.img`
	height: 5px;
`

const Subtitulo = styled.h2`
	font-size: 30px;
	color: #73bb31;
`

const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`

const Button = styled.button`
	background-color: #73bb31;
	color: white;
	font-weight: 500;
	width: 120px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

function Who() {
	return (
		<Section>
			<Container>
				<Left>

				</Left>
				<Right>
					<Title>Piensa fuera de la caja. </Title>
					<LoQueHacemos>
						<Line src="./img/line.png" />
						<Subtitulo>Quienes somos.</Subtitulo>
					</LoQueHacemos>
					<Desc>
						Somos un grupo de creativos apasionados con el marketing.
						<br /><br />
						Buscamos ayudar a las empresas a crecer y a tener una mejor presencia en el mercado.

					</Desc>
					<Button>See our works</Button>
				</Right>
			</Container>
		</Section>
	)
}

export default Who