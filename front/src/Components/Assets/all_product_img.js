import f11 from './fer1.1.jpg';
import f12 from './fer1.2.jpg';
import f13 from './fer1.3.jpg';
import f21 from './fer2.1.jpg';
import f22 from './fer2.2.jpg';
import f23 from './fer2.3.jpg';
import f31 from './fer3.1.jpg';
import f32 from './fer3.2.jpg';
import f33 from './fer3.3.jpg';
import f41 from './fer4.1.webp';
import f42 from './fer4.2.webp';
import f43 from './fer4.3.webp';
import f51 from './fer5.1.webp';
import f52 from './fer5.2.webp';
import f53 from './fer5.3.webp';
import f61 from './fer6.1.webp';
import f62 from './fer6.2.webp';
import f63 from './fer6.3.jpg';

import p11 from './pest1.1.jpg';
import p12 from './pest1.2.png';
import p13 from './pest1.3.png';
import p21 from './pest2.1.webp';
import p22 from './pest2.2.webp';
import p23 from './pest2.3.webp';
import p31 from './pest3.1.webp';
import p32 from './pest3.2.webp';
import p33 from './pest3.3.webp';
import p41 from './pest4.1.webp';
import p42 from './pest4.2.webp';
import p43 from './pest4.3.webp';
import p51 from './pest5.1.webp';
import p52 from './pest5.2.webp';
import p53 from './pest5.3.webp';
import p61 from './pest6.1.webp';
import p62 from './pest6.2.webp';
import p63 from './pest6.3.webp';


import e11 from './eq1.1.webp';
import e12 from './eq1.2.webp';
import e13 from './eq.1.3.jpg';
import e21 from './eq2.1.webp';
import e22 from './eq2.2.webp';
import e23 from './eq2.3.jpg';
import e31 from './eq3.1.webp';
import e32 from './eq3.2.jpg';
import e41 from './eqw1.1.jpg';
import e42 from './eqw1.2.webp';
import e51 from './eqw2.1.webp';
import e52 from './eqw2.2.webp';
import e53 from './eqw2.3.webp';
import e61 from './eqw3.1.webp';
import e62 from './eqw3.2.webp';
import e63 from './eqw3.3.webp';


/*import s11 from './rg3.1.webp';
import s12 from './rg3.2.webp';
import s21 from './tomato.webp';
import s22 from './tom1.2.webp';
import s23 from './tom1.3.webp';
import s31 from './sun.jpeg';*/

let product_img =[
	{
        id: 1,
        name: "Cow Manure",
        category: "Fertilizers",
        image: f11,
        price: 899,
        weight: "5kg"
    },
	{
		id:2,
		name:"Cow Manure",
		category:"Fertilizers",
		image:f12,
		price: 899,
		weight:  "5kg",
	},
	{
		id:3,
		name:"Cow Manure",
		category:"Fertilizers",
		image:f13,
		price: 899,
		weight: "5kg",
	},
	{
		id:4,
		name:"Vermicompost",
		category:"Fertilizers",
		image:f21,
		price: 1399,
		weight: "5kg",
	},
	{
		id:5,
		name:"Vermicompost",
		category:"Fertilizers",
		image:f22,
		price: 1399,
		weight: "5kg",
	},
	{
		id:6,
		name:"Vermicompost",
		category:"Fertilizers",
		image:f23,
		price: 1399,
		weight:  "5kg",
	},
	{
		id:7,
		name:"Epsom Salt",
		category:"Fertilizers",
		image:f31,
		price: 760,
		weight: "5kg",
	},
	{
		id:8,
		name:"Epsom Salt",
		category:"Fertilizers",
		image:f32,
		price: 760,
		weight: "5kg",
	},
	{
		id:9,
		name:"Epsom Salt",
		category:"Fertilizers",
		image:f33,
		price: 760,
		weight: "5kg",
	},
	{
		id:10,
		name:"Humic Acid",
		category:"Fertilizers",
		image:f41,
		price: 890,
		weight: "5kg",
	},
	{
		id:11,
		name:"Humic Acid",
		category:"Fertilizers",
		image:f42,
		price: 760,
		weight: "5kg",
	},
	{
		id:12,
		name:"Humic Acid",
		category:"Fertilizers",
		image:f43,
		price: 760,
		weight: "5kg",
	},
	{
		id:13,
		name:"Bio Fertilizer",
		category:"Fertilizers",
		image:f51,
		price: 1189,
		weight: "5kg",
	},
	{
		id:14,
		name:"Bio Fertilizer",
		category:"Fertilizers",
		image:f52,
		price: 1189,
		weight: "5kg",
	},
	{
		id:15,
		name:"Bio Fertilizer",
		category:"Fertilizers",
		image:f53,
		price: 1189,
		weight: "5kg",
	},
	{
		id:16,
		name:"NPK-Nitrogen, Phosphorus and Potassium",
		category:"Fertilizers",
		image:f61,
		price: 1189,
		weight: "5kg",
	},
	{
		id:17,
		name:"NPK-Nitrogen, Phosphorus and Potassium",
		category:"Fertilizers",
		image:f62,
		price: 1189,
		weight: "5kg",
	},
	{
		id:18,
		name:"NPK-Nitrogen, Phosphorus and Potassium",
		category:"Fertilizers",
		image:f63,
		price: 1189,
		weight: "5kg",
	},
	{
		id:19,
		name:"Bio Finish",
		category:"Pesticides",
		image:p11,
		price: 799,
		weight: "5L",
	},
	{
		id:20,
		name:"Bio Finish",
		category:"Pesticides",
		image:p12,
		price: 799,
		weight: "5L",
	},
	{
		id:21,
		name:"Bio Finish",
		category:"Pesticides",
		image:p13,
		price: 799,
		weight: "5L",
	},
	{
		id:22,
		name:"Verticillium",
		category:"Pesticides",
		image:p21,
		price: 600,
		weight: "5L",
	},
	{
		id:23,
		name:"Verticillium",
		category:"Pesticides",
		image:p22,
		price: 600,
		weight: "5L",
	},
	{
		id:24,
		name:"Verticillium",
		category:"Pesticides",
		image:p23,
		price: 600,
		weight: "5L",
	},
	{
		id:25,
		name:"Bio Larvicide",
		category:"Pesticides",
		image:p31,
		price: 950,
		weight: "5kg",
	},
	{
		id:26,
		name:"Bio Larvicide",
		category:"Pesticides",
		image:p32,
		price: 950,
		weight: "5kg",
	},
	{
		id:27,
		name:"Bio Larvicide",
		category:"Pesticides",
		image:p33,
		price: 950,
		weight: "5kg",
	},
	{
		id:28,
		name:"Bio Insecticide1",
		category:"Pesticides",
		image:p41,
		price: 750,
		weight: "5kg",
	},
	{
		id:29,
		name:"Bio Insecticide1",
		category:"Pesticides",
		image:p42,
		price: 750,
		weight: "5kg",
	},
	{
		id:30,
		name:"Bio Insecticide1",
		category:"Pesticides",
		image:p43,
		price: 750,
		weight: "5kg",
	},
	{
		id:31,
		name:"Bio Insecticide2",
		category:"Pesticides",
		image:p51,
		price: 850,
		weight: "5kg",
	},
	{
		id:32,
		name:"Bio Insecticide2",
		category:"Pesticides",
		image:p52,
		price: 850,
		weight: "5kg",
	},
	{
		id:33,
		name:"Bio Insecticide2",
		category:"Pesticides",
		image:p53,
		price: 850,
		weight: "5kg",
	},
	{
		id:34,
		name:"Emathio - Insecticide",
		category:"Pesticides",
		image:p61,
		price: 1399,
		weight: "5kg",
	},
	{
		id:35,
		name:"Emathio - Insecticide",
		category:"Pesticides",
		image:p62,
		price: 1399,
		weight: "5kg",
	},
	{
		id:36,
		name:"Emathio - Insecticide",
		category:"Pesticides",
		image:p63,
		price: 1399,
		weight: "5kg",
	},
	{
		id:37,
		name:"Reaper Binder",
		category:"Equipments",
		image:e11,
		price: 38000,
		weight:' 400kg',
	},
	{
		id:38,
		name:"Reaper Binder",
		category:"Equipments",
		image:e12,
		price: 38000,
		weight:' 400kg',
	},
	{
		id:39,
		name:"Reaper Binder",
		category:"Equipments",
		image:e13,
		price: 38000,
		weight:' 400kg',
	},
	{
		id:40,
		name:"Honda F300 Power Weeder",
		category:"Equipments",
		image:e21,
		price: 49890,
		weight: "550kg",
	},
	{
		id:41,
		name:"Honda F300 Power Weeder",
		category:"Equipments",
		image:e22,
		price: 49890,
		weight: "550kg",
	},
	{
		id:42,
		name:"Honda F300 Power Weeder",
		category:"Equipments",
		image:e23,
		price: 49890,
		weight: "550kg",
	},
	{
		id:43,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e31,
		price: 49890,
		weight: "550kg",
	},
	{
		id:44,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e32,
		price: 49890,
		weight: "550kg",
	},	
	/*{
		id:45,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e33,
		price: 49890,
		weight: "550kg",
	},*/
	{
		id:46,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e41,
		price: 49890,
		weight: "550kg",
	},
	{
		id:47,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e42,
		price: 49890,
		weight: "550kg",
	},
	/*{
		id:48,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e43,
		price: 49890,
		weight: "550kg",
	},*/
	{
		id:49,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e51,
		price: 49890,
		weight: "550kg",
	},
	{
		id:50,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e52,
		price: 49890,
		weight: "550kg",
	},
	{
		id:51,
		name:"BAM55 Power Weeder",
		category:"Equipments",
		image:e53,
		price: 49890,
		weight: "550kg",
	},
	{
		id:52,
		name:"Knapsack Sprayer",
		category:"Equipments",
		image:e61,
		price: 49890,
		weight: "550kg",
	},
	{
		id:53,
		name:"Knapsack Sprayer",
		category:"Equipments",
		image:e62,
		price: 49890,
		weight: "550kg",
	},		
	{
		id:54,
		name:"Knapsack Sprayer",
		category:"Equipments",
		image:e63,
		price: 49890,
		weight: "550kg",
	}
]

export default product_img;








