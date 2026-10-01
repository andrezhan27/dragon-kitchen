export type MenuGalleryItem = {
  src: string;
  category: "starters" | "soups" | "meat" | "seafood" | "vegetables" | "rice" | "desserts";
  pt: string;
  en: string;
};

const menuImage = (file: string) => `/images/menu/${file}`;

export const MENU_GALLERY: MenuGalleryItem[] = [
  { src: menuImage("DSC05992.webp"), category: "starters", pt: "Edamame", en: "Edamame" },
  { src: menuImage("DSC06002.webp"), category: "starters", pt: "Har gow", en: "Har gow" },
  { src: menuImage("DSC06005.webp"), category: "starters", pt: "Siu mai", en: "Siu mai" },
  { src: menuImage("DSC06008.webp"), category: "starters", pt: "Xiao long bao", en: "Xiao long bao" },
  { src: menuImage("DSC06013.webp"), category: "starters", pt: "Gambas fritas", en: "Fried prawns" },
  { src: menuImage("DSC06028.webp"), category: "starters", pt: "Rolinhos de primavera", en: "Spring rolls" },
  { src: menuImage("DSC06040.webp"), category: "starters", pt: "Rolo de camarão com manga", en: "Prawn and mango roll" },
  { src: menuImage("DSC06048.webp"), category: "starters", pt: "Ravioli de pato aberto", en: "Open duck ravioli" },
  { src: menuImage("DSC06052.webp"), category: "starters", pt: "Anéis de frango", en: "Chicken rings" },
  { src: menuImage("DSC06064.webp"), category: "starters", pt: "Nuggets de frango", en: "Chicken nuggets" },
  { src: menuImage("DSC06065.webp"), category: "starters", pt: "Carne crocante frita", en: "Crispy fried meat" },
  { src: menuImage("DSC06094.webp"), category: "starters", pt: "Salada de algas", en: "Seaweed salad" },
  { src: menuImage("DSC06100.webp"), category: "starters", pt: "Pãozinho doce frito", en: "Fried sweet bun" },
  { src: menuImage("DSC06293.webp"), category: "starters", pt: "Carne de vaca fria com molho leve", en: "Cold beef with mild sauce" },
  { src: menuImage("DSC06423.webp"), category: "starters", pt: "Salada", en: "Salad" },
  { src: menuImage("DSC06434.webp"), category: "starters", pt: "Salada com presunto espanhol", en: "Salad with Spanish ham" },
  { src: menuImage("Dragon Kitchen Maio 2025 (21).webp"), category: "starters", pt: "Xiao long bao de carne de porco", en: "Pork xiao long bao" },

  { src: menuImage("DSC06273.webp"), category: "soups", pt: "Sopa de macarrão de arroz com delícias do mar", en: "Rice noodle and seafood soup" },
  { src: menuImage("DSC06279.webp"), category: "soups", pt: "Sopa ácida e picante com vaca e camarão", en: "Hot and sour soup with beef and prawns" },
  { src: menuImage("DSC06284.webp"), category: "soups", pt: "Sopa de frutos do mar", en: "Seafood soup" },
  { src: menuImage("DSC06597.webp"), category: "soups", pt: "Sopa de wantan", en: "Wantan soup" },

  { src: menuImage("DSC00156 copiar.webp"), category: "meat", pt: "Lombo Black Angus 300 g", en: "300 g Black Angus sirloin" },
  { src: menuImage("DSC00160 copiar.webp"), category: "meat", pt: "Couve-flor salteada com porco", en: "Stir-fried cauliflower with pork" },
  { src: menuImage("DSC00171 copiar.webp"), category: "meat", pt: "Couve salteada com porco", en: "Stir-fried cabbage with pork" },
  { src: menuImage("DSC02543 copiar.webp"), category: "meat", pt: "Frango picante em cubos", en: "Spicy diced chicken" },
  { src: menuImage("DSC06216.webp"), category: "meat", pt: "Tiras de porco com molho à Pequim", en: "Pork strips with Peking sauce" },
  { src: menuImage("DSC06224.webp"), category: "meat", pt: "Pato à Pequim", en: "Peking duck" },
  { src: menuImage("DSC06254.webp"), category: "meat", pt: "Carne de porco empanada agridoce", en: "Sweet and sour breaded pork" },
  { src: menuImage("DSC06262.webp"), category: "meat", pt: "Camarão com alho", en: "Garlic prawns" },
  { src: menuImage("DSC06365.webp"), category: "meat", pt: "Frango agridoce em cubos", en: "Sweet and sour diced chicken" },
  { src: menuImage("DSC06601.webp"), category: "meat", pt: "Costela de cordeiro com batatas", en: "Lamb ribs with potatoes" },
  { src: menuImage("DSC06609.webp"), category: "meat", pt: "Panada de frango", en: "Breaded chicken" },

  { src: menuImage("DSC06075.webp"), category: "seafood", pt: "Amêijoas à portuguesa", en: "Portuguese-style clams" },
  { src: menuImage("DSC06081.webp"), category: "seafood", pt: "Vieira com alho e massa de arroz", en: "Scallop with garlic and rice noodles" },
  { src: menuImage("DSC06090.webp"), category: "seafood", pt: "Camarões empanados em fios de batata", en: "Prawns breaded with potato threads" },
  { src: menuImage("DSC06109.webp"), category: "seafood", pt: "Tofu crocante", en: "Crispy tofu" },
  { src: menuImage("DSC06162.webp"), category: "seafood", pt: "Camarão com sal e pimenta", en: "Salt and pepper prawns" },
  { src: menuImage("DSC06188.webp"), category: "seafood", pt: "Lagosta com gengibre e cebolinha", en: "Lobster with ginger and spring onion" },
  { src: menuImage("DSC06237.webp"), category: "seafood", pt: "Peixe estilo esquilo", en: "Squirrel-style fish" },
  { src: menuImage("DSC06331.webp"), category: "seafood", pt: "Peixe ao vapor", en: "Steamed fish" },
  { src: menuImage("DSC06337.webp"), category: "seafood", pt: "Camarão com alho e massa de arroz", en: "Garlic prawns with rice noodles" },
  { src: menuImage("DSC06439.webp"), category: "seafood", pt: "Camarão recheado com molho de abalone", en: "Stuffed prawns with abalone sauce" },
  { src: menuImage("DSC06478.webp"), category: "seafood", pt: "Sapateira com gengibre e cebolinho", en: "Brown crab with ginger and spring onion" },
  { src: menuImage("Dragon Kitchen Maio 2025 (1).webp"), category: "seafood", pt: "Fatias de abalone com espargos salteados", en: "Sliced abalone with stir-fried asparagus" },

  { src: menuImage("DSC06120.webp"), category: "vegetables", pt: "Beringela Yu Xiang", en: "Yu Xiang aubergine" },
  { src: menuImage("DSC06167.webp"), category: "vegetables", pt: "Verdura conservada salteada", en: "Stir-fried preserved vegetables" },
  { src: menuImage("DSC06352.webp"), category: "vegetables", pt: "Tofu caseiro", en: "Homestyle tofu" },
  { src: menuImage("DSC06353.webp"), category: "vegetables", pt: "Quiabo com molho da casa", en: "Okra with house sauce" },
  { src: menuImage("DSC06415.webp"), category: "vegetables", pt: "Batata em tiras com molho agridoce picante", en: "Potato strips with spicy sweet and sour sauce" },
  { src: menuImage("Dragon Kitchen Maio 2025 (5).webp"), category: "vegetables", pt: "Tofu mapo com vaca", en: "Mapo tofu with beef" },
  { src: menuImage("Dragon Kitchen Maio 2025 (11).webp"), category: "vegetables", pt: "Pepino com molho de soja", en: "Cucumber with soy sauce" },

  { src: menuImage("DSC06399.webp"), category: "rice", pt: "Arroz crocante com frango e vaca", en: "Crispy rice with chicken and beef" },
  { src: menuImage("DSC06409.webp"), category: "rice", pt: "Arroz crocante com frutos do mar", en: "Crispy rice with seafood" },
  { src: menuImage("DSC06450.webp"), category: "rice", pt: "Arroz frito com ovo", en: "Egg fried rice" },
  { src: menuImage("DSC06485.webp"), category: "rice", pt: "Massa de arroz com camarão", en: "Rice noodles with prawns" },
  { src: menuImage("DSC06556.webp"), category: "rice", pt: "Arroz frito tailandês com caril e ananás", en: "Thai fried rice with curry and pineapple" },
  { src: menuImage("DSC06564.webp"), category: "rice", pt: "Arroz frito com trufa preta e vaca", en: "Fried rice with black truffle and beef" },
  { src: menuImage("DSC06569.webp"), category: "rice", pt: "Massa de arroz com vaca", en: "Rice noodles with beef" },
  { src: menuImage("DSC06576.webp"), category: "rice", pt: "Massa de arroz com frango", en: "Rice noodles with chicken" },
  { src: menuImage("DSC06588.webp"), category: "rice", pt: "Massa salteada com frango", en: "Stir-fried noodles with chicken" },
  { src: menuImage("Dragon Kitchen Maio 2025 (16).webp"), category: "rice", pt: "Frango com arroz glutinoso", en: "Chicken with glutinous rice" },
  { src: menuImage("DSC05361 copiar.webp"), category: "desserts", pt: "Cheesecake de pistache", en: "Pistachio cheesecake" },
  { src: menuImage("DSC05371 copiar.webp"), category: "desserts", pt: "Mochi mirtilo", en: "Blueberry mochi" },
  { src: menuImage("DSC05377 copiar.webp"), category: "desserts", pt: "Mochi pistache", en: "Pistachio mochi" },
  { src: menuImage("DSC05380 copiar.webp"), category: "desserts", pt: "Mochi mangar", en: "Mango mochi" },
  { src: menuImage("DSC06634.webp"), category: "desserts", pt: "Gelado frito", en: "Fried ice cream" },
];
