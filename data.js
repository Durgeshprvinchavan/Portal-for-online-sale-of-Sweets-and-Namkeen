const items = [
    {
        id: '001',
        image: 'samosa.jpg',
        alt:'samosa',
        item_name: 'Samosa',
        original_price: 20,
        current_price: 20,
        discount_percentage: 0,
        description:`Samosa is a popular savory snack originating from the Indian subcontinent, although it is now enjoyed worldwide. It typically consists of a crispy, triangular pastry shell filled with a savory mixture. The filling traditionally includes ingredients such as spiced potatoes, peas, lentils, or minced meat, seasoned with various herbs and spices. The exact recipe may vary based on regional and personal preferences.Samosas are commonly enjoyed as a snack or appetizer and are often served with chutney or sauces for dipping. They are also a popular street food item in many countries, known for their delicious combination of flavors and textures. Due to their versatility and delicious taste, samosas have become a beloved culinary delight enjoyed by people of various cultures around the globe.`,
        rating: {
            stars: 4.5,
            count: 140,
        },
    },
    {
        id: '002',
        image: 'kaju-katli.jpg',
        item_name: 'Kaju-Katli',
        alt:'Kaju-Katli',
        original_price: 1200,
        current_price: 1104,
        discount_percentage: 8,
        description:`Kaju Katli is a traditional Indian sweet delicacy known for its rich taste and smooth texture. It is made primarily from cashew nuts (kaju), which are ground into a fine paste and then mixed with sugar and ghee (clarified butter). The mixture is cooked until it reaches a dough-like consistency, then flattened and cut into diamond-shaped pieces.
                     Kaju Katli has a distinctively nutty flavor with a hint of sweetness from the sugar. It is often garnished with silver varq (thin sheets of silver) or chopped nuts such as pistachios or almonds. This sweet treat is popular during festive occasions and celebrations, often served as a dessert or gifted to friends and family as a token of goodwill and celebration.
                    Its soft, melt-in-your-mouth texture and rich, indulgent taste make Kaju Katli a beloved and cherished sweet in Indian cuisine, enjoyed by people of all ages.`,
        rating: {
            stars: 4.3,
            count: 240,
        },
    },
    {
        id: '003',
        image: 'jalebi.jpg',
        item_name: 'Jalebi',
        alt:'Jalebi',
        original_price: 300,
        current_price: 285,
        discount_percentage: 5,
        description:`Jalebi is a popular Indian sweet treat known for its spiral shape, crisp texture, and syrupy sweetness. To prepare jalebi, a batter made from fermented flour, often wheat flour or maida (all-purpose flour), is piped into hot oil in circular shapes to form coils or pretzel-like shapes. These shapes are then deep-fried until they turn golden brown and crispy.
        Once fried, the jalebis are immediately soaked in a sugar syrup flavored with saffron, rose water, or cardamom, which imparts a rich and aromatic sweetness to the treat. This syrupy coating gives jalebi its characteristic sticky and syrupy texture, making it indulgently sweet and flavorful.
        Jalebi is often enjoyed as a dessert or snack, served hot or at room temperature. It is commonly found in sweet shops, roadside stalls, and during festive occasions and celebrations throughout India and other South Asian countries. Its vibrant orange color and irresistible sweetness make jalebi a beloved treat cherished by people of all ages.`,
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'kachori.jpg',
        item_name: 'Kachori',
        alt:'Kachori',
        original_price: 25,
        current_price: 25,
        discount_percentage: 0,
        description:`Kachori is a popular Indian snack known for its crispy, flaky crust and flavorful filling. It is typically made by stuffing a mixture of spiced lentils, peas, or potatoes into a wheat flour dough, which is then deep-fried until golden brown and crispy.The filling of kachori can vary widely depending on regional preferences and personal taste. Common variations include dal kachori, which is filled with a mixture of seasoned lentils, and potato kachori, which features a spiced potato filling. Other variations may include peas, onions, or even minced meat. 
                    Kachori is often served as a snack or appetizer, either on its own or accompanied by various chutneys or sauces for dipping. It is also a popular street food in many parts of India, where it is enjoyed fresh and hot from roadside stalls.        
                    Due to its crispy texture and flavorful filling, kachori is a beloved snack enjoyed by people of all ages throughout India and beyond. Its versatility and delicious taste make it a favorite choice for special occasions, festivals, and everyday indulgence.`,
        rating: {
            stars: 4.7,
            count: 110,
        },
    },
    {
        id: '005',
        image: 'khaman-dhokla.jpg',
        item_name: 'Khaman Dhokla',
        alt:'Khaman Dhokla',
        original_price: 200,
        current_price: 180,
        discount_percentage: 10,
        description:`Khaman Dhokla is a popular snack known for its soft and spongy texture, tangy flavor, and vibrant appearance. It is made from fermented chickpea flour (besan) batter, flavored with green chilies, ginger, and sometimes tempered with mustard seeds and curry leaves. The batter is steamed until it rises and sets, resulting in a fluffy and porous texture. Khaman Dhokla is typically served with a drizzle of tempered mustard seeds, fresh coriander leaves, and grated coconut. It is enjoyed as a breakfast dish, snack, or appetizer and is loved for its lightness, tanginess, and delicious taste.`,
        rating: {
            stars: 4.2,
            count: 350,
        },
    },
    {
        id: '006',
        image: 'soanpapdi.jpg',
        item_name: 'Soan papdi',
        alt:'Soan papdi',
        original_price: 700,
        current_price: 630,
        discount_percentage: 10,
        description:`Soan Papdi is a popular Indian sweet renowned for its flaky texture and melt-in-your-mouth consistency. Made from a mixture of gram flour (besan), sugar, ghee (clarified butter), and cardamom, it's cooked to a precise temperature to achieve its unique texture. The mixture is then spread out thinly and cut into small, rectangular pieces. Soan Papdi is often garnished with chopped nuts such as almonds or pistachios. It's enjoyed as a delightful dessert or snack, especially during festivals and special occasions, and its delicate sweetness and airy texture make it a favorite among sweet lovers.`,
        rating: {
            stars: 4.0,
            count: 140,
        },
    },
    {
        id: '007',
        image: 'ras-malai.jpg',
        item_name: 'Ras Malai',
        alt:'Ras Malai',
        original_price: 1000,
        current_price: 950,
        discount_percentage: 5,
        description:`Ras Malai is a delightful Indian dessert known for its creamy texture and delicate flavor. It consists of soft, spongy cheese dumplings (chenna or paneer) immersed in a sweetened, flavored milk syrup. The dumplings are made by curdling milk and then kneading it into a dough, which is shaped into small rounds and cooked in a mixture of milk, sugar, and cardamom until they become soft and spongy. The dumplings are then chilled and served cold, garnished with chopped nuts and saffron strands. Ras Malai is a popular dessert enjoyed during special occasions and festivals in India, offering a refreshing and indulgent treat to satisfy the sweet tooth.`,
        rating: {
            stars: 4.2,
            count: 38,
        },
    },
    {
        id: '008',
        image: 'gulab-jamun.jpg',
        item_name: 'Gulab Jamun',
        alt:'Gulab Jamun',
        original_price: 450,
        current_price: 396,
        discount_percentage: 12,
        description:`Gulab Jamun is a beloved Indian dessert renowned for its sweet and syrupy indulgence. These soft, spongy balls are made from milk solids (khoya or mawa), flour, and a hint of cardamom, shaped into small balls, and deep-fried until golden brown. Once fried, they are soaked in a fragrant sugar syrup infused with rose water, saffron, and cardamom, giving them their characteristic aroma and flavor. Gulab Jamun is often served warm and enjoyed on festive occasions, weddings, and celebrations across the Indian subcontinent. Its irresistible sweetness and melt-in-your-mouth texture make it a favorite dessert for many.`,
        rating: {
            stars: 4.2,
            count: 50,
        },
    },
    {
        id: '009',
        image: 'besan ladoo.jpg',
        item_name: 'Besan Ladoo',
        alt:'Besan Ladoo',
        original_price: 600,
        current_price: 558,
        discount_percentage: 7,
        description:`Besan Ladoo is a popular Indian sweet made from gram flour (besan), sugar, ghee (clarified butter), and flavored with cardamom powder. The gram flour is roasted in ghee until aromatic, then mixed with sugar and shaped into round balls. Besan Ladoo has a rich, nutty flavor with a crumbly texture. It's often enjoyed during festivals, weddings, and special occasions as a delicious and traditional treat that symbolizes joy and celebration in Indian culture.`,
        rating: {
            stars: 4.2,
            count: 52,
        },
    }
];