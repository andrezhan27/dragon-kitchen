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
  { src: menuImage("DSC06013.webp"), category: "starters", pt: "Camarão panado", en: "Breaded prawns" },
  { src: menuImage("DSC06028.webp"), category: "starters", pt: "Rolinhos de primavera", en: "Spring rolls" },
  { src: menuImage("DSC06040.webp"), category: "starters", pt: "Panada de frango", en: "Breaded chicken" },
  { src: menuImage("DSC06048.webp"), category: "starters", pt: "Ravioli de porco", en: "Pork ravioli" },
  { src: menuImage("DSC06052.webp"), category: "starters", pt: "Anéis de frango", en: "Chicken rings" },
  { src: menuImage("DSC06064.webp"), category: "starters", pt: "Nuggets de frango", en: "Chicken nuggets" },
  { src: menuImage("DSC06065.webp"), category: "starters", pt: "Carne crocante frita", en: "Crispy fried meat" },
  { src: menuImage("DSC06094.webp"), category: "starters", pt: "Salada de algas", en: "Seaweed salad" },
  { src: menuImage("DSC06100.webp"), category: "starters", pt: "Pão frito", en: "Fried buns" },
  { src: menuImage("DSC06423.webp"), category: "starters", pt: "Salada mista", en: "Mixed salad" },
  { src: menuImage("DSC06434.webp"), category: "starters", pt: "Salada de pato", en: "Duck salad" },
  { src: menuImage("Dragon Kitchen Maio 2025 (2).webp"), category: "starters", pt: "Wo Wo Tou", en: "Wo Wo Tou" },
  { src: menuImage("Dragon Kitchen Maio 2025 (21).webp"), category: "starters", pt: "Pães ao vapor", en: "Steamed buns" },

  { src: menuImage("DSC06273.webp"), category: "soups", pt: "Sopa de frutos do mar", en: "Seafood soup" },
  { src: menuImage("DSC06279.webp"), category: "soups", pt: "Sopa ácida e picante", en: "Hot and sour soup" },
  { src: menuImage("DSC06284.webp"), category: "soups", pt: "Sopa de massa de arroz com delícias do mar", en: "Rice noodle and seafood soup" },
  { src: menuImage("DSC06293.webp"), category: "soups", pt: "Sopa de vaca com espargos", en: "Beef and asparagus soup" },
  { src: menuImage("DSC06597.webp"), category: "soups", pt: "Sopa de wonton", en: "Wonton soup" },

  { src: menuImage("DSC00156 copiar.webp"), category: "meat", pt: "Vaca com espargos", en: "Beef with asparagus" },
  { src: menuImage("DSC00160 copiar.webp"), category: "meat", pt: "Carne de porco com couve-flor", en: "Pork with cauliflower" },
  { src: menuImage("DSC00171 copiar.webp"), category: "meat", pt: "Carne de porco com couve", en: "Pork with cabbage" },
  { src: menuImage("DSC02543 copiar.webp"), category: "meat", pt: "Frango Kung Pao", en: "Kung Pao chicken" },
  { src: menuImage("DSC06216.webp"), category: "meat", pt: "Tiras de porco com molho à Pequim", en: "Pork strips with Peking sauce" },
  { src: menuImage("DSC06224.webp"), category: "meat", pt: "Pato à Pequim", en: "Peking duck" },
  { src: menuImage("DSC06262.webp"), category: "meat", pt: "Porco Hui Guo", en: "Hui Guo pork" },
  { src: menuImage("DSC06365.webp"), category: "meat", pt: "Carne agridoce", en: "Sweet and sour meat" },
  { src: menuImage("DSC06601.webp"), category: "meat", pt: "Costeletas com batata", en: "Chops with potatoes" },
  { src: menuImage("DSC06609.webp"), category: "meat", pt: "Frango crocante", en: "Crispy chicken" },

  { src: menuImage("DSC06075.webp"), category: "seafood", pt: "Amêijoas à portuguesa", en: "Portuguese-style clams" },
  { src: menuImage("DSC06081.webp"), category: "seafood", pt: "Vieiras com alho", en: "Scallops with garlic" },
  { src: menuImage("DSC06090.webp"), category: "seafood", pt: "Camarão panado", en: "Breaded prawns" },
  { src: menuImage("DSC06109.webp"), category: "seafood", pt: "Peixe frito", en: "Fried fish" },
  { src: menuImage("DSC06162.webp"), category: "seafood", pt: "Camarão com sal e pimenta", en: "Salt and pepper prawns" },
  { src: menuImage("DSC06188.webp"), category: "seafood", pt: "Lagosta com gengibre e cebolinha", en: "Lobster with ginger and spring onion" },
  { src: menuImage("DSC06237.webp"), category: "seafood", pt: "Peixe estilo esquilo", en: "Squirrel-style fish" },
  { src: menuImage("DSC06331.webp"), category: "seafood", pt: "Peixe ao vapor", en: "Steamed fish" },
  { src: menuImage("DSC06337.webp"), category: "seafood", pt: "Camarão com alho", en: "Garlic prawns" },
  { src: menuImage("DSC06478.webp"), category: "seafood", pt: "Caranguejo", en: "Crab" },
  { src: menuImage("Dragon Kitchen Maio 2025 (1).webp"), category: "seafood", pt: "Lulas salteadas", en: "Stir-fried squid" },

  { src: menuImage("DSC06120.webp"), category: "vegetables", pt: "Beringela Yu Xiang", en: "Yu Xiang aubergine" },
  { src: menuImage("DSC06167.webp"), category: "vegetables", pt: "Pak choi salteado", en: "Stir-fried pak choi" },
  { src: menuImage("DSC06245.webp"), category: "vegetables", pt: "Milho com ovo salgado", en: "Corn with salted egg" },
  { src: menuImage("DSC06352.webp"), category: "vegetables", pt: "Tofu caseiro", en: "Homestyle tofu" },
  { src: menuImage("DSC06353.webp"), category: "vegetables", pt: "Quiabo salteado", en: "Stir-fried okra" },
  { src: menuImage("DSC06415.webp"), category: "vegetables", pt: "Batata salteada", en: "Stir-fried potato" },
  { src: menuImage("Dragon Kitchen Maio 2025 (11).webp"), category: "vegetables", pt: "Pepino salteados", en: "Stir-fried cucumber" },
  { src: menuImage("Dragon Kitchen Maio 2025 (5).webp"), category: "vegetables", pt: "Tofu mapo", en: "Mapo tofu" },

  { src: menuImage("DSC06399.webp"), category: "rice", pt: "Arroz crocante", en: "Crispy rice" },
  { src: menuImage("DSC06409.webp"), category: "rice", pt: "Arroz crocante", en: "Crispy rice" },
  { src: menuImage("DSC06450.webp"), category: "rice", pt: "Arroz frito com ovo", en: "Egg fried rice" },
  { src: menuImage("DSC06485.webp"), category: "rice", pt: "Massa de arroz com camarão", en: "Rice noodles with prawns" },
  { src: menuImage("DSC06556.webp"), category: "rice", pt: "Arroz frito com ananás", en: "Pineapple fried rice" },
  { src: menuImage("DSC06569.webp"), category: "rice", pt: "Massa de arroz com vaca", en: "Rice noodles with beef" },
  { src: menuImage("DSC06576.webp"), category: "rice", pt: "Massa salteada com frango", en: "Stir-fried noodles with chicken" },
  { src: menuImage("DSC06588.webp"), category: "rice", pt: "Massa salteada com vaca", en: "Stir-fried noodles with beef" },
  { src: menuImage("Dragon Kitchen Maio 2025 (16).webp"), category: "rice", pt: "Arroz em folha de lótus", en: "Lotus leaf rice" },
  { src: menuImage("Dragon Kitchen Maio 2025 (22).webp"), category: "rice", pt: "Massa salteada", en: "Stir-fried noodles" },

  { src: menuImage("DSC00179 copiar.webp"), category: "starters", pt: "Pão com ovo doce", en: "Sweet egg buns" },
  { src: menuImage("DSC05361 copiar.webp"), category: "desserts", pt: "Cheesecake de pistache", en: "Pistachio cheesecake" },
  { src: menuImage("DSC05371 copiar.webp"), category: "desserts", pt: "Mochi mirtilo", en: "Blueberry mochi" },
  { src: menuImage("DSC05377 copiar.webp"), category: "desserts", pt: "Mochi pistache", en: "Pistachio mochi" },
  { src: menuImage("DSC05380 copiar.webp"), category: "desserts", pt: "Mochi mangar", en: "Mango mochi" },
  { src: menuImage("DSC06634.webp"), category: "desserts", pt: "Gelado frito", en: "Fried ice cream" },
];
