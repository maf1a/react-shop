import {
    IShoppingItem,
    ShopListItemPropsType,
    ShoppingItemModel
} from '../models/ShoppingItem'


export async function seed() {
    await ShoppingItemModel.deleteMany()

    const shoppingItems: IShoppingItem[] = [{
            title: "Bluberri",
            type: ShopListItemPropsType.fruit,
            availability: 150,
            description: "Succulent bluberries, sun-kissed and rich in antioxidants, sourced from Californian hillsides",
            price: 3.99,
            priceUnit: "kg"
        },
        {
            title: "Graple",
            type: ShopListItemPropsType.fruit,
            availability: 0,
            description: "Aromatic graples, a delightful blend of grape and apple flavors, nurtured in Southern Italy's vineyards",
            price: 2.89,
            priceUnit: "kg"
        },
        {
            title: "Plumquat",
            type: ShopListItemPropsType.fruit,
            availability: 85,
            description: "Exotic plumquats, a fusion of plum and kumquat, boasting a unique tanginess, handpicked from Japan's fertile valleys",
            price: 4.49,
            priceUnit: "kg"
        },
        {
            title: "Strawbana",
            type: ShopListItemPropsType.fruit,
            availability: 120,
            description: "Invigorating strawbanas, a perfect marriage of strawberries and bananas, cultivated in Costa Rica's lush tropical regions",
            price: 1.99,
            priceUnit: "kg"
        },
        {
            title: "Pearango",
            type: ShopListItemPropsType.fruit,
            availability: 0,
            description: "Mouthwatering pearangos, an exquisite blend of pears and mangoes, grown in the nutrient-rich volcanic soil of the Canary Islands",
            price: 3.49,
            priceUnit: "kg"
        },
        {
            title: "Citruspin",
            type: ShopListItemPropsType.fruit,
            availability: 65,
            description: "Vibrant citruspins, a refreshing mix of citrus and pineapple flavors, thriving in Florida's sun-drenched orchards",
            price: 2.79,
            priceUnit: "kg"
        },
        {
            title: "Cherrygum",
            type: ShopListItemPropsType.fruit,
            availability: 200,
            description: "Chewy cherrygums, a playful fusion of cherries and bubblegum, harvested in the fertile cherry orchards of Michigan",
            price: 5.29,
            priceUnit: "kg"
        },
        {
            title: "Pinepeach",
            type: ShopListItemPropsType.fruit,
            availability: 35,
            description: "Captivating pinepeaches, a heavenly blend of pineapple and peach flavors, flourishing in Brazil's lush rainforests",
            price: 6.49,
            priceUnit: "kg"
        },
        {
            title: "Orangkiwi",
            type: ShopListItemPropsType.fruit,
            availability: 80,
            description: "Delightful orangkiwis, a sweet and tangy combination of oranges and kiwis, nurtured along the Mediterranean coast",
            price: 3.99,
            priceUnit: "kg"
        },
        {
            title: "Banapple",
            type: ShopListItemPropsType.fruit,
            availability: 130,
            description: "Crisp banapples, a harmonious union of bananas and apples, thriving in Washington state's temperate climate",
            price: 2.49,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Raspberry",
            availability: 95,
            description: "Delicate raspberries, packed with antioxidants and bursting with flavor, grown in Oregon's fertile lands",
            price: 4.79,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Mango",
            availability: 20,
            description: "Luscious mangoes, with their velvety texture and exotic sweetness, cultivated in India's tropical climate",
            price: 5.49,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Kiwi",
            availability: 90,
            description: "Fuzzy, nutrient-packed kiwis, with a vibrant green flesh and tangy sweetness, grown in the verdant landscapes of New Zealand",
            price: 4.29,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Apricot",
            availability: 50,
            description: "Golden apricots, with their delicate aroma and sun-ripened sweetness, nurtured in Turkey's fertile valleys",
            price: 6.99,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Grapefruit",
            availability: 75,
            description: "Juicy grapefruits, with their unique bittersweet taste and immune-boosting properties, grown in Florida's sunlit groves",
            price: 3.29,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Pomegranate",
            availability: 30,
            description: "Regal pomegranates, filled with ruby-red arils and packed with antioxidants, harvested from ancient Persian gardens",
            price: 7.49,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Watermelon",
            availability: 25,
            description: "Quenching watermelons, with their refreshing sweetness and hydrating properties, grown in the sun-drenched fields of Spain",
            price: 1.89,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Lemon",
            availability: 150,
            description: "Vibrant lemons, with their tangy taste and fragrant zest, handpicked from sun-soaked groves along Italy's Amalfi Coast",
            price: 3.49,
            priceUnit: "kg"
        },
        {
            type: ShopListItemPropsType.fruit,
            title: "Blueberry",
            availability: 180,
            description: "Antioxidant-rich blueberries, with their deep color and subtle sweetness, thriving in the pristine forests of Maine",
            price: 5.99,
            priceUnit: "kg"
        },
        {
            title: "Carrot",
            type: ShopListItemPropsType.vegetable,
            availability: 200,
            description: "Crunchy carrots, rich in beta-carotene and essential nutrients, grown in the nutrient-dense soil of the Netherlands",
            price: 1.99,
            priceUnit: "kg"
        },
        {
            title: "Broccoli",
            type: ShopListItemPropsType.vegetable,
            availability: 125,
            description: "Vibrant broccoli, packed with vitamins and minerals, flourishing in the fertile fields of California",
            price: 2.79,
            priceUnit: "kg"
        },
        {
            title: "Cucumber",
            type: ShopListItemPropsType.vegetable,
            availability: 95,
            description: "Cool, refreshing cucumbers, with their hydrating properties and crisp texture, harvested from sun-drenched greenhouses",
            price: 1.49,
            priceUnit: "kg"
        },
        {
            title: "Spinach",
            type: ShopListItemPropsType.vegetable,
            availability: 110,
            description: "Tender spinach, iron-rich and packed with essential nutrients, thriving in the mineral-rich soil of the Mediterranean",
            price: 3.29,
            priceUnit: "kg"
        },
        {
            title: "Tomato",
            type: ShopListItemPropsType.vegetable,
            availability: 300,
            description: "Juicy, sun-ripened tomatoes, bursting with flavor and rich in lycopene, grown in the Mediterranean's sun-soaked fields",
            price: 2.49,
            priceUnit: "kg"
        },
        {
            title: "Bell Pepper",
            type: ShopListItemPropsType.vegetable,
            availability: 90,
            description: "Colorful bell peppers, with their crisp texture and antioxidant properties, flourishing in the warm climates of Spain",
            price: 3.99,
            priceUnit: "kg"
        },
        {
            title: "Cauliflower",
            type: ShopListItemPropsType.vegetable,
            availability: 60,
            description: "Versatile cauliflower, with its subtle nutty flavor and numerous health benefits, thriving in the coastal regions of France",
            price: 4.29,
            priceUnit: "kg"
        },
        {
            title: "Eggplant",
            type: ShopListItemPropsType.vegetable,
            availability: 75,
            description: "Meaty eggplants, with their velvety texture and savory taste, cultivated in the sun-kissed fields of Italy",
            price: 3.59,
            priceUnit: "kg"
        },
        {
            title: "Kale",
            type: ShopListItemPropsType.vegetable,
            availability: 100,
            description: "Nutrient-dense kale, with its dark green leaves and powerful antioxidants, grown in the misty valleys of Northern Europe",
            price: 4.99,
            priceUnit: "kg"
        },
        {
            title: "Sweet Potato",
            type: ShopListItemPropsType.vegetable,
            availability: 50,
            description: "Sweet, earthy sweet potatoes, packed with vitamins and fiber, grown in the nutrient-rich soil of North Carolina",
            price: 3.49,
            priceUnit: "kg"
        },
        {
            title: "Celery",
            type: ShopListItemPropsType.vegetable,
            availability: 105,
            description: "Crunchy celery, with its hydrating properties and mild flavor, flourishing in the marshy lowlands of Central Europe",
            price: 1.99,
            priceUnit: "kg"
        },
        {
            title: "Green Beans",
            type: ShopListItemPropsType.vegetable,
            availability: 120,
            description: "Tender green beans, with their crisp texture and fresh taste, flourishing in the sun-drenched fields of France",
            price: 3.89,
            priceUnit: "kg"
        },
        {
            title: "Radish",
            type: ShopListItemPropsType.vegetable,
            availability: 40,
            description: "Spicy radishes, with their vibrant color and crisp texture, grown in the mineral-rich soil of Germany",
            price: 2.29,
            priceUnit: "kg"
        },
        {
            title: "Arugula",
            type: ShopListItemPropsType.vegetable,
            availability: 90,
            description: "Peppery arugula, with its unique flavor and numerous health benefits, thriving in the temperate climates of Italy",
            price: 4.49,
            priceUnit: "kg"
        },
        {
            title: "Beet",
            type: ShopListItemPropsType.vegetable,
            availability: 70,
            description: "Earthy beets, with their vibrant hue and rich nutrients, thriving in the cool climates of Eastern Europe",
            price: 3.19,
            priceUnit: "kg"
        },
        {
            title: "Asparagus",
            type: ShopListItemPropsType.vegetable,
            availability: 55,
            description: "Tender asparagus, with its delicate taste and numerous health benefits, flourishing in the sandy soils of California",
            price: 6.99,
            priceUnit: "kg"
        },
        {
            title: "Brussels Sprouts",
            type: ShopListItemPropsType.vegetable,
            availability: 65,
            description: "Nutrient-packed Brussels sprouts, with their unique flavor and health-promoting properties, grown in the cool climates of Belgium",
            price: 4.79,
            priceUnit: "kg"
        },
        {
            title: "Swiss Chard",
            type: ShopListItemPropsType.vegetable,
            availability: 60,
            description: "Colorful Swiss chard, with its nutrient-dense leaves and earthy flavor, flourishing in the fertile valleys of Switzerland",
            price: 3.99,
            priceUnit: "kg"
        },
        {
            title: "Cheddar",
            type: ShopListItemPropsType.cheese,
            availability: 0,
            description: "Sharp and tangy Cheddar, aged to perfection and crafted in the rolling hills of Somerset, England",
            price: 11.99,
            priceUnit: "kg"
        },
        {
            title: "Brie",
            type: ShopListItemPropsType.cheese,
            availability: 45,
            description: "Creamy and indulgent Brie, with its bloomy rind and rich flavor, produced in the lush regions of Northern France",
            price: 15.99,
            priceUnit: "kg"
        },
        {
            title: "Gouda",
            type: ShopListItemPropsType.cheese,
            availability: 30,
            description: "Buttery and smooth Gouda, with its distinctive taste and unique texture, crafted in the picturesque Dutch countryside",
            price: 12.49,
            priceUnit: "kg"
        },
        {
            title: "Swiss",
            type: ShopListItemPropsType.cheese,
            availability: 0,
            description: "Mild and nutty Swiss cheese, with its iconic holes and distinct flavor, produced in the pristine Alpine valleys of Switzerland",
            price: 14.29,
            priceUnit: "kg"
        },
        {
            title: "Blue Cheese",
            type: ShopListItemPropsType.cheese,
            availability: 20,
            description: "Bold and pungent Blue Cheese, with its unique veins of mold and strong flavor, crafted in the cool caves of France",
            price: 17.99,
            priceUnit: "kg"
        },
        {
            title: "Mozzarella",
            type: ShopListItemPropsType.cheese,
            availability: 100,
            description: "Soft and creamy Mozzarella, with its delicate taste and versatile nature, hand-stretched in the sun-kissed regions of Italy",
            price: 9.99,
            priceUnit: "kg"
        },
        {
            title: "Feta",
            type: ShopListItemPropsType.cheese,
            availability: 0,
            description: "Salty and crumbly Feta, steeped in brine and packed with flavor, crafted in the sun-soaked Greek countryside",
            price: 13.49,
            priceUnit: "kg"
        },
        {
            title: "Camembert",
            type: ShopListItemPropsType.cheese,
            availability: 25,
            description: "Luxurious and velvety Camembert, with its complex aroma and rich taste, produced in the pastoral landscapes of Normandy, France",
            price: 16.29,
            priceUnit: "kg"
        },
        {
            title: "Roquefort",
            type: ShopListItemPropsType.cheese,
            availability: 15,
            description: "Complex and tangy Roquefort, with its sharp taste and crumbly texture, matured in the historic caves of Southern France",
            price: 18.99,
            priceUnit: "kg"
        },
        {
            title: "Gruyère",
            type: ShopListItemPropsType.cheese,
            availability: 35,
            description: "Rich and earthy Gruyère, with its nutty flavor and firm texture, crafted in the time-honored traditions of Switzerland",
            price: 15.89,
            priceUnit: "kg"
        },
        {
            title: "Parmesan",
            type: ShopListItemPropsType.cheese,
            availability: 50,
            description: "Aged and savory Parmesan, with its granular texture and intense flavor, produced in the storied regions of Northern Italy",
            price: 19.99,
            priceUnit: "kg"
        },
        {
            title: "Havarti",
            type: ShopListItemPropsType.cheese,
            availability: 0,
            description: "Buttery and semi-soft Havarti, with its mild taste and creamy consistency, handcrafted in the lush Danish countryside",
            price: 11.79,
            priceUnit: "kg"
        },
        {
            title: "Provolone",
            type: ShopListItemPropsType.cheese,
            availability: 40,
            description: "Smooth and sharp Provolone, with its smoky notes and firm texture, produced in the picturesque regions of Southern Italy",
            price: 13.69,
            priceUnit: "kg"
        },
        {
            title: "Manchego",
            type: ShopListItemPropsType.cheese,
            availability: 30,
            description: "Nutty and crumbly Manchego, with its distinctive flavor and smooth texture, crafted in the arid plains of La Mancha, Spain",
            price: 17.49,
            priceUnit: "kg"
        },
        {
            title: "Stilton",
            type: ShopListItemPropsType.cheese,
            availability: 20,
            description: "Bold and crumbly Stilton, with its blue veins and complex flavor, matured in the historic cellars of England",
            price: 18.59,
            priceUnit: "kg"
        }
    ];

    for (const shoppingItem of shoppingItems) {
        await ShoppingItemModel.create(shoppingItem)
    }

    console.log("[seed]: successfull to seed database...")
}