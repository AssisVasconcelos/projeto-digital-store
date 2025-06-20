// Dados objetos do Site
const SiteData = {
  // Dados do Site
  siteinfo: {
    name: "Digital Store",
    icon: "ti ti-brand-tabler-filled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    address:
      "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    phone: "(85) 3051-3411",
    menu: [
      { name: "Home", link: "/", style: "" },
      { name: "Produtos", link: "/produtos", style: "" },
      { name: "Categorias", link: "/categorias", style: "" },
      { name: "Meus Pedidos", link: "/meus-pedidos", style: "" },
      { name: "Contato", link: "/contato", style: "" },
      { name: "Sobre Digital Store", link: "/sobre", style: "" },
      { name: "Segurança", link: "/seguranca", style: "" },
      { name: "Wishlist", link: "/wishlist", style: "" },
      { name: "Blog", link: "/blog", style: "" },
      { name: "Trabalhe conosco", link: "/trabalhe-conosco", style: "" },
      { name: "Contato", link: "/contato", style: "" },
      {
        name: "Cadastre-se",
        link: "/cadastrar",
        style: "underline hover:text-pink-700",
      },
      {
        name: "Entrar",
        link: "/entrar",
        style: "p-button py-2 px-4 bg-pink-600 text-white hover:bg-pink-700",
      },
      { name: "Carrinho", link: "/carrinho", style: "" },
      { name: "Camisetas", link: "/produtos/camisetas", style: "" },
      { name: "Calças", link: "/produtos/calcas", style: "" },
      { name: "Bonés", link: "/produtos/bones", style: "" },
      { name: "Headphones", link: "/produtos/headphones", style: "" },
      { name: "Tênis", link: "/produtos/tenis", style: "" },
    ],
    menusections: {
      menuheader: [
        {
          title: "",
          items: [0, 1, 2, 3],
          class: "font-semibold py-3 pb-1 border-bottom-3 border-0",
          active: "text-pink-600 border-pink-600",
          hover: "hover:text-pink-600 hover:border-pink-600",
        },
      ],
      menufooter: [
        {
          title: "Informação",
          items: [5, 6, 7, 8, 9, 3],
          class: "mb-2",
          active: "text-pink-600",
          hover: "hover:text-pink-600",
        },
        {
          title: "Categorias",
          items: [14, 15, 16, 17, 18],
          class: "mb-2",
          active: "text-pink-600",
          hover: "hover:text-pink-600",
        },
      ],
    },
    social: {
      title: "Redes Sociais",
      tblank: true,
      redes: [
        {
          icon: "fa-brands fa-facebook-f",
          label: "Facebook",
          link: "https://facebook.com/",
        },
        {
          icon: "fa-brands fa-instagram",
          label: "Instagram",
          link: "https://instagram.com/",
        },
        {
          icon: "fa-brands fa-twitter",
          label: "Twitter",
          link: "https://x.com/",
        },
      ],
    },
  },

  // Dados da Página Home
  home: {
    slider: {
      items: [
        {
          title: "Queima de Estoque Nike 🔥",
          subtitle: "Melhores ofertas personalizadas",
          description:
            "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
          image: "/images/tenis-nike.png",
          label: "Ver Ofertas",
          link: "/produtos/ofertas",
          rotate: 335,
        },
        {
          title: "Sinal Vermelho K-Swiss V8 🔴",
          subtitle: "Edição limitada",
          description:
            "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
          image: "/images/tenis-kswis.png",
          label: "Ver Ofertas",
          link: "/produtos/ofertas",
          rotate: 335,
        },
        {
          title: "Coleção Tênis Adidas 2025 🏃",
          subtitle: "Novidades imperdíveis",
          description:
            "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
          image: "/images/tenis-adidas.png",
          label: "Ver Coleção",
          link: "/produtos/colecao",
          rotate: 335,
        },
        {
          title: "Promoção Air Jordans 1 🥾",
          subtitle: "Edição Colecionador",
          description:
            "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
          image: "/images/tenis-air-jordan.png",
          label: "Ver Promoção",
          link: "/produtos/promocao",
          //width: 20,
          rotate: 335,
        },
      ],
    },
    collections: {
      title: "Coleções em destaque",
      items: [
        {
          badge: "30% OFF",
          name: "Novo drop Supreme",
          label: "Comprar",
          link: "/produtos",
          image: "/images/camisa.png",
          width: 90,
          rotate: 335,
          top: 3,
          left: 10,
        },
        {
          badge: "30% OFF",
          name: "Coleção Adidas",
          label: "Comprar",
          link: "/produtos",
          image: "/images/tenis-origine.png",
          width: 72,
          rotate: 325,
          top: 4.7,
          left: 9.2,
        },
        {
          badge: "30% OFF",
          name: "Novo Beats Bass",
          label: "Comprar",
          link: "/produtos",
          image: "/images/fone.png",
          width: 55,
          rotate: 30,
          top: 1.5,
          left: 13,
        },
      ],
    },

    categories: {
      title: "Coleções em destaque",
      items: [
        {
          name: "Camisetas",
          link: "/produtos/camisetas",
          image: "/images/icon-camisa.png",
        },
        {
          name: "Calças",
          link: "/produtos/calcas",
          image: "/images/icon-calca.png",
        },
        {
          name: "Bonés",
          link: "/produtos/bones",
          image: "/images/icon-bone.png",
        },
        {
          name: "Headphones",
          link: "/produtos/headphones",
          image: "/images/icon-fones.png",
        },
        {
          name: "Tênis",
          link: "/produtos/tenis",
          image: "/images/icon-tenis.png",
        },
      ],
    },
    offers: {
      image: "/images/oferta-air-jordan.png",
      title: "Oferta especial",
      subtitle: "Air Jordan edição de colecionador",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      label: "Ver Oferta",
      link: "/produtos/tenis",
    },
  },

  // Dados dos Produtos
  products: {
    bgcolors: ["#e2e3ff", "#ffe8bc", "#ffc0bc", "#dec699", "#e8dfcf"],
    sizes: [39, 40, 41, 42, 43],
    colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
    items: [
      {
        id: 1,
        badge: "50% OFF",
        category: { name: "Tênis", value: "tenis" },
        brand: { name: "K-Swiss", value: "k-swiss" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Novo", value: "novo" },
        name: "K-Swiss V8 - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/1",
        image: "/images/tenis-kswis.png",
        price: 200,
        price2: 100,
        photos: [
          { image: "/images/tenis-kswis.png", bgcolor: "#e2e3ff" },
          { image: "/images/tenis-kswis.png", bgcolor: "#ffe8bc" },
          { image: "/images/tenis-kswis.png", bgcolor: "#ffc0bc" },
          { image: "/images/tenis-kswis.png", bgcolor: "#dec699" },
          { image: "/images/tenis-kswis.png", bgcolor: "#e8dfcf" },
        ],
        code: 38416711,
        rating: 4.7,
        reviews: 120,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 2,
        badge: "25% OFF",
        category: { name: "Casual", value: "casual" },
        brand: { name: "Nike", value: "nike" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Novo", value: "novo" },
        name: "Nike Air Force One - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/2",
        image: "/images/tenis-nike.png",
        price: 200,
        price2: 150,
        photos: [
          { image: "/images/tenis-nike.png", bgcolor: "#e2e3ff" },
          { image: "/images/tenis-nike.png", bgcolor: "#ffe8bc" },
          { image: "/images/tenis-nike.png", bgcolor: "#ffc0bc" },
          { image: "/images/tenis-nike.png", bgcolor: "#dec699" },
          { image: "/images/tenis-nike.png", bgcolor: "#e8dfcf" },
        ],
        code: 38416712,
        rating: 2.9,
        reviews: 70,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 3,
        badge: "20% OFF",
        category: { name: "Utilitário", value: "utilitario" },
        brand: { name: "Adidas", value: "adidas" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Novo", value: "novo" },
        name: "Adidas Tensaur Run - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/3",
        image: "/images/tenis-adidas.png",
        price: 250,
        price2: 300,
        photos: [
          { image: "/images/tenis-adidas.png", bgcolor: "#e2e3ff" },
          { image: "/images/tenis-adidas.png", bgcolor: "#ffe8bc" },
          { image: "/images/tenis-adidas.png", bgcolor: "#ffc0bc" },
          { image: "/images/tenis-adidas.png", bgcolor: "#dec699" },
          { image: "/images/tenis-adidas.png", bgcolor: "#e8dfcf" },
        ],
        code: 384167123,
        rating: 2.7,
        reviews: 80,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 4,
        badge: "22% OFF",
        category: { name: "Corrida", value: "corrida" },
        brand: { name: "Adidas", value: "adidas" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Usado", value: "usado" },
        name: "Adidas Own The Game - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/4",
        image: "/images/tenis-own-the-game.png",
        price: 480,
        price2: 370,
        photos: [
          {
            image: "/images/tenis-own-the-game.png",
            bgcolor: "#e2e3ff",
          },
          {
            image: "/images/tenis-own-the-game.png",
            bgcolor: "#ffe8bc",
          },
          {
            image: "/images/tenis-own-the-game.png",
            bgcolor: "#ffc0bc",
          },
          {
            image: "/images/tenis-own-the-game.png",
            bgcolor: "#dec699",
          },
          {
            image: "/images/tenis-own-the-game.png",
            bgcolor: "#e8dfcf",
          },
        ],
        code: 384167124,
        rating: 3.0,
        reviews: 110,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 5,
        badge: "50% OFF",
        category: { name: "Esporte e lazer", value: "esporte-lazer" },
        brand: { name: "Puma", value: "puma" },
        gender: { name: "Unissex", value: "unissex" },
        condition: { name: "Novo", value: "novo" },
        name: "Puma Runner - Unissex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/5",
        image: "/images/tenis-puma.png",
        price: 220,
        price2: 110,
        photos: [
          { image: "/images/tenis-puma.png", bgcolor: "#e2e3ff" },
          { image: "/images/tenis-puma.png", bgcolor: "#ffe8bc" },
          { image: "/images/tenis-puma.png", bgcolor: "#ffc0bc" },
          { image: "/images/tenis-puma.png", bgcolor: "#dec699" },
          { image: "/images/tenis-puma.png", bgcolor: "#e8dfcf" },
        ],
        code: 384167125,
        rating: 5.0,
        reviews: 180,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 6,
        badge: "24% OFF",
        category: { name: "Casual", value: "casual" },
        brand: { name: "Nike", value: "nike" },
        gender: { name: "Feminino", value: "feminino" },
        condition: { name: "Novo", value: "novo" },
        name: "Nike Air Max - Feminino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/6",
        image: "/images/tenis-nike-feminino.png",
        price: 210,
        price2: 160,
        photos: [
          {
            image: "/images/tenis-nike-feminino.png",
            bgcolor: "#e2e3ff",
          },
          {
            image: "/images/tenis-nike-feminino.png",
            bgcolor: "#ffe8bc",
          },
          {
            image: "/images/tenis-nike-feminino.png",
            bgcolor: "#ffc0bc",
          },
          {
            image: "/images/tenis-nike-feminino.png",
            bgcolor: "#dec699",
          },
          {
            image: "/images/tenis-nike-feminino.png",
            bgcolor: "#e8dfcf",
          },
        ],
        code: 384167126,
        rating: 2.8,
        reviews: 240,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 7,
        badge: "26% OFF",
        category: { name: "Utilitário", value: "utilitario" },
        brand: { name: "K-Swiss", value: "k-swiss" },
        gender: { name: "Unissex", value: "unissex" },
        condition: { name: "Novo", value: "novo" },
        name: "K-Swiss Speedster - Unissex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/7",
        image: "/images/tenis-kswis-speedster.png",
        price: 190,
        price2: 140,
        photos: [
          {
            image: "/images/tenis-kswis-speedster.png",
            bgcolor: "#e2e3ff",
          },
          {
            image: "/images/tenis-kswis-speedster.png",
            bgcolor: "#ffe8bc",
          },
          {
            image: "/images/tenis-kswis-speedster.png",
            bgcolor: "#ffc0bc",
          },
          {
            image: "/images/tenis-kswis-speedster.png",
            bgcolor: "#dec699",
          },
          {
            image: "/images/tenis-kswis-speedster.png",
            bgcolor: "#e8dfcf",
          },
        ],
        code: 384167127,
        rating: 3.2,
        reviews: 120,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 8,
        badge: "35% OFF",
        category: { name: "Corrida", value: "corrida" },
        brand: { name: "Nike", value: "nike" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Usado", value: "usado" },
        name: " Origine Vibram RGS - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/8",
        image: "/images/tenis-origine.png",
        price: 150,
        price2: 100,
        photos: [
          { image: "/images/tenis-origine.png", bgcolor: "#e2e3ff" },
          { image: "/images/tenis-origine.png", bgcolor: "#ffe8bc" },
          { image: "/images/tenis-origine.png", bgcolor: "#ffc0bc" },
          { image: "/images/tenis-origine.png", bgcolor: "#dec699" },
          { image: "/images/tenis-origine.png", bgcolor: "#e8dfcf" },
        ],
        code: 384167128,
        rating: 3.8,
        reviews: 80,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
      {
        id: 9,
        badge: "18% OFF",
        category: { name: "Corrida", value: "corrida" },
        brand: { name: "Nike", value: "nike" },
        gender: { name: "Masculino", value: "masculino" },
        condition: { name: "Usado", value: "usado" },
        name: "Nike Air Jordan - Masculino",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        link: "/produto/9",
        image: "/images/tenis-air-jordan.png",
        price: 900,
        price2: 750,
        photos: [
          {
            image: "/images/tenis-air-jordan.png",
            bgcolor: "#e2e3ff",
          },
          {
            image: "/images/tenis-air-jordan.png",
            bgcolor: "#ffe8bc",
          },
          {
            image: "/images/tenis-air-jordan.png",
            bgcolor: "#ffc0bc",
          },
          {
            image: "/images/tenis-air-jordan.png",
            bgcolor: "#dec699",
          },
          {
            image: "/images/tenis-air-jordan.png",
            bgcolor: "#e8dfcf",
          },
        ],
        code: 384167129,
        rating: 4.2,
        reviews: 150,
        sizes: [39, 40, 41, 42, 43],
        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
      },
    ],
    filter: {
      brand: [
        { name: "Adidas", value: "adidas" },
        { name: "Calenciaga", value: "calenciaga" },
        { name: "K-Swiss", value: "k-swiss" },
        { name: "Nike", value: "nike" },
        { name: "Puma", value: "puma" },
      ],
      category: [
        { name: "Esporte e lazer", value: "esporte-lazer" },
        { name: "Casual", value: "casual" },
        { name: "Utilitário", value: "utilitario" },
        { name: "Corrida", value: "corrida" },
      ],
      gender: [
        { name: "Masculino", value: "masculino" },
        { name: "Feminino", value: "feminino" },
        { name: "Unissex", value: "unissex" },
      ],
      condition: [
        { name: "Novo", value: "novo" },
        { name: "Usado", value: "usado" },
      ],
    },
  },

  // Dados da Página Contato
  contact: {
    title: "Entre em Contato",
    description:
      "Tem alguma dúvida ou sugestão? Preencha o formulário abaixo para que possamos ajudar! Assim que formos contactados, entraremos em contacto consigo em breve.",
    info: {
      address: {
        icon: "pi pi-map-marker",
        name: "Endereço",
        value:
          "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      },
      email: {
        icon: "pi pi-envelope",
        name: "E-mail",
        value: "contato@digitalstore.com.br",
      },
      phone: {
        icon: "pi pi-phone",
        name: "Telefone",
        value: "(85) 3051-3411",
      },
    },
  },

  // Dados da Página não Encontrada
  notfound: {
    title: "Página não Encontrada",
    description:
      "A página que você está procurando não existe ou foi movida. Verifique o URL ou retorne para a página inicial.",
    button: [
      {
        link: "/",
        label: "Voltar para Home",
        icon: "pi pi-arrow-left",
        style: "bg-pink-600 p-button-raised",
      },
      {
        link: "/contato",
        label: "Entre em Contato",
        icon: "pi pi-envelope",
        style: "text-pink-600 hover:text-white p-button-outlined",
      },
    ],
  },

  // Dados da Página em Construção
  underconst: {
    title: "Página em Construção",
    description: "Esta funcionalidade ainda está em desenvolvimento.",
    button: [
      {
        link: "/",
        label: "Ir para Home",
        icon: "pi pi-home",
        severity: "",
        style: "bg-pink-600 p-button-raised",
      },
      {
        link: "/contato",
        label: "Entre em Contato",
        icon: "pi pi-envelope",
        style: "text-pink-600 hover:text-white p-button-outlined",
      },
    ],
  },
};

export default SiteData;
