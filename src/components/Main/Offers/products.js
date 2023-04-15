import cameraImg from '../../../assets/img/offer/camera.png'
import iphone13ProImg from '../../../assets/img/offer/iphone-13-pro-max-7173413_640.jpg'
import keyboardImg from '../../../assets/img/offer/keyboard.png'
import controllerImg from '../../../assets/img/offer/playstation_controller.png'
import monitorImg from '../../../assets/img/offer/monitor.png'
import laptopImg from '../../../assets/img/offer/laptop-.png'

const products = [
	{
		imgDevice: iphone13ProImg,
		alt: 'Zdjęcie przedstawiające Smartfon Iphone 13 pro w kolorze zielonym',
		typeOfEquipment: 'Smartfon',
		nameOfEquipment: 'Iphone 13 pro',
		price: 6499,
		id: 1,
	},
	{
		imgDevice: cameraImg,
		alt: 'Zdjęcie przedstawiające aparat Nikon 3600x jel w kolorze czarnym',
		typeOfEquipment: 'Aparat',
		nameOfEquipment: 'Nikon 3600x jel',
		price: 2349,
		id: 2,
	},
	{
		imgDevice: keyboardImg,
		alt: 'Zdjęcie przedstawiające klawiature Xiaomi fast K-x w kolorze szarym',
		typeOfEquipment: 'Klawiatura',
		nameOfEquipment: 'Xiaomi fast K-x',
		price: 299,
		id: 3,
	},
	{
		imgDevice: controllerImg,
		alt: 'Zdjęcie przedstawiające kontroler SONY DualSense w kolorze białym',
		typeOfEquipment: 'Pad',
		nameOfEquipment: 'Kontroler SONY DualSense Biały',
		price: 349,
		id: 4,
	},
	{
		imgDevice: monitorImg,
		alt: 'Zdjęcie przedstawiające monitor Apple mac kros',
		typeOfEquipment: 'Monitor',
		nameOfEquipment: 'Apple mac kros',
		price: 3149,
		id: 5,
	},
	{
		imgDevice: laptopImg,
		alt: 'Zdjęcie przedstawiające laptop KD Smu real 473 gt w kolorze czarnym',
		typeOfEquipment: 'Laptop',
		nameOfEquipment: 'KD Smu real 473 gt',
		price: 1569,
		id: 6,
	},
]

export default products
