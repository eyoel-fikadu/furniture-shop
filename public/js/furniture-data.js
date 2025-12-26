const furnitureData = [
    {
        id: "luxe-sofa",
        name: "Luxury Leather Sofa",
        type: "sofa",
        price: 1250,
        image: "img/sofa.png",
        description: "Experience unparalleled comfort with our signature leather sofa. Designed with a deep seat and plush cushions, it's the perfect centerpiece for a sophisticated living space.",
        material: "Top-grain Italian leather, kiln-dried hardwood frame, high-density foam filling, and solid oak legs.",
        dimensions: "90\"W x 38\"D x 34\"H"
    },
    {
        id: "velvet-loveseat",
        name: "Velvet Emerald Loveseat",
        type: "sofa",
        price: 850,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
        description: "A compact yet striking loveseat that adds a pop of color and luxury to smaller rooms. The velvet finish is incredibly soft to the touch.",
        material: "Performance velvet upholstery, reinforced plywood frame, and brushed brass gold legs.",
        dimensions: "65\"W x 34\"D x 32\"H"
    },
    {
        id: "lounge-chair",
        name: "Designer Lounge Chair",
        type: "chair",
        price: 320,
        image: "img/chair.png",
        description: "A mid-century modern classic reimagined. This lounge chair offers ergonomic support without compromising on artistic flair.",
        material: "Pressed walnut veneer, premium fabric upholstery, and powder-coated steel base.",
        dimensions: "28\"W x 30\"D x 31\"H"
    },
    {
        id: "velvet-accent-chair",
        name: "Azure Accent Chair",
        type: "chair",
        price: 450,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267",
        description: "The perfect companion for your reading nook. Its elegant silhouette and vibrant azure color make it a standout piece.",
        material: "Velvet fabric, solid birch wood frame, and tapered walnut legs.",
        dimensions: "30\"W x 32\"D x 35\"H"
    },
    {
        id: "king-bed",
        name: "Modern King Bed",
        type: "bed",
        price: 2100,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511",
        description: "Transform your bedroom into a sanctuary with this minimalist king-size bed. Featuring a low-profile design and an upholstered headboard.",
        material: "Solid pine wood, linen-blend fabric upholstery, and industrial steel supports.",
        dimensions: "80\"W x 85\"L x 40\"H"
    },
    {
        id: "oak-bedframe",
        name: "Natural Oak Bed",
        type: "bed",
        price: 1850,
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
        description: "Celebrate the beauty of natural materials. This bed frame features clean lines and a beautiful oak grain that matches any decor.",
        material: "Solid European Oak with a matte protective finish.",
        dimensions: "78\"W x 82\"L x 38\"H"
    },
    {
        id: "marble-dining",
        name: "Luxury Dining Table",
        type: "table",
        price: 1800,
        image: "img/dining.png",
        description: "Dine in style on a stunning white marble surface. This table comfortably seats six and is built to withstand generations of use.",
        material: "Genuine Carrara marble top, brushed stainless steel legs with a gold finish.",
        dimensions: "72\"L x 36\"W x 30\"H"
    },
    {
        id: "coffee-table",
        name: "Minimal Coffee Table",
        type: "table",
        price: 280,
        image: "img/coffee.png",
        description: "A masterpiece of simplicity. This coffee table provides ample surface area while maintaining a light, airy presence in your room.",
        material: "Tempered glass top, solid ash wood base with a light oak stain.",
        dimensions: "40\"D x 16\"H"
    },
    {
        id: "wardrobe-sliding",
        name: "Modern Wardrobe",
        type: "storage",
        price: 1450,
        image: "img/wardrobe.png",
        description: "Maximize your storage space with elegance. This wardrobe features smooth-sliding doors and integrated interior lighting.",
        material: "Engineered wood with high-gloss lacquer, aluminum handles, and soft-close mechanisms.",
        dimensions: "60\"W x 24\"D x 80\"H"
    },
    {
        id: "bookshelf-oak",
        name: "Heritage Oak Bookshelf",
        type: "storage",
        price: 920,
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156",
        description: "A tall, sturdy bookshelf designed for the bibliophile. Adjustable shelves allow for customizable organization.",
        material: "Solid oak and oak veneer, mortise and tenon joinery.",
        dimensions: "36\"W x 12\"D x 72\"H"
    },
    {
        id: "scandinavian-sideboard",
        name: "Nordic Oak Sideboard",
        type: "storage",
        price: 1100,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
        description: "A masterclass in Scandinavian utility and grace. This sideboard provides ample storage with a minimalist footprint, featuring hand-carved handles.",
        material: "100% Solid White Oak, finished with organic linseed oil for a natural, low-sheen glow. Features hidden soft-close European hinges and dovetail drawer joints.",
        dimensions: "70\"W x 18\"D x 30\"H"
    },
    {
        id: "industrial-desk",
        name: "Forge Executive Desk",
        type: "table",
        price: 1350,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
        description: "The perfect command center for the modern executive. This desk combines reclaimed wood with industrial steel for a powerful, professional aesthetic.",
        material: "Reclaimed American Pine slab (2-inch thick), hand-forged heavy-duty steel legs with a matte black powder coat. Each top is unique with natural knots and character marks.",
        dimensions: "60\"W x 30\"D x 29\"H"
    },
    {
        id: "plush-ottoman",
        name: "Cloud Velvet Ottoman",
        type: "chair",
        price: 240,
        image: "https://images.unsplash.com/photo-1594913785162-e6786659ca2b",
        description: "Whether used as a footrest or extra seating, this ottoman brings a touch of cloud-like softness to your room. Lightweight but incredibly stable.",
        material: "High-density multi-layer memory foam, wrapped in Italian silk-velvet. Solid pine inner frame for structural integrity.",
        dimensions: "24\"D x 18\"H"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = furnitureData;
}
