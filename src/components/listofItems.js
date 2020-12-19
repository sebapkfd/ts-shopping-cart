import uniqid from 'uniqid';
import Acer from '../assets/Acer-Aspire5.jpg';
import Asus from '../assets/Asus-TUF.jpg';
import MSI from '../assets/MSI-GL65.jpg'

const listofItems = [
    {name: 'Acer Aspire 5',
    price: 100,
    id: uniqid(),
    amount: 0,
    imgSrc: Acer
    },
    {name: 'Asus TUF',
    price: 200,
    id: uniqid(),
    amount: 0,
    imgSrc: Asus
    },
    {name: 'MSI GL65',
    price: 300,
    id: uniqid(),
    amount: 0,
    imgSrc: MSI
    },
]
export default listofItems;