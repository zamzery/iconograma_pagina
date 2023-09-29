import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`

const Container = styled.div`
	height: 100%;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`
const Left = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`
const Line = styled.img`
	height: 5px;
`

const LoQueHacemos = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Titulo = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`
const Subtitulo = styled.h2`
	font-size: 30px;
	color: #73bb31;

`
const Descripcion = styled.p`
	font-size: 24px;
	color: lightgray;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
	}
`
const Button = styled.button`
	background-color: #73bb31;
	color: white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`
const Right = styled.div`
	flex: 3;
	position: relative;
	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100%;
	}
`

const Img = styled.img`
	width: 800px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 5s infinite ease alternate;

	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
	}

	@keyframes animate {
		to {
			transform: translateY(20px);
		}
	}
`
function Hero() {
	return (
		<Section>
			<Navbar />
			<Container>
				<Left>
					<Titulo>Piensa. Crea. Resuelve.</Titulo>
					<LoQueHacemos>
						<Line src="./img/line.png" /> <Subtitulo>Lo que hacemos</Subtitulo>
					</LoQueHacemos>
					<Descripcion>
						En <strong>Iconograma</strong> somos un equipo de profesionales que busca ayudar a las empresas a resolver sus problemas de comunicación y diseño.
						<br />
						<br />
						A través de la creación de identidades visuales que transmitan la esencia de tu marca y la hagan destacar.
					</Descripcion>
					<Button>Aprende más</Button>
				</Left>
				<Right>
					{/* Modelo 3D */}
					<Img src="./img/computadora2.png" />
				</Right>
			</Container>
		</Section>
	)
}

export default Hero