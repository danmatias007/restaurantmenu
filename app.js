const menu = [
    {
      id: 1,
      title: "Black Coffee",
      category: "drinks",
      price: 1.29,
      img: "img/1cafe_solo.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    

    {
      id: 2,
      title: "capuchino",
      category: "drinks",
      price: 1.49,
      img: "img/2capuchino_cafe.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },

    {
      id: 3,
      title: "Bonbon Coffee",
      category: "drinks",
      price: 1.99,
      img: "img/3cafe_bonbon.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 4,
      title: "Coffee with milk",
      category: "drinks",
      price: 1.29,
      img: "img/4cafe_con_leche.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 5,
      title: "Cut Coffee",
      category: "drinks",
      price: 1.29,
      img: "img/5cafe_cortado.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 6,
      title: "Hot Chocolate",
      category: "drinks",
      price: 2.25,
      img: "img/6chocolate_caliente.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 7,
      title: "Chocolate Milkshake",
      category: "drinks",
      price: 1.29,
      img: "img/7batido_chocolate.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 8,
      title: "Cola Cao",
      category: "drinks",
      price: 1.85,
      img: "img/8cola_cao.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 9,
      title: "Lemon Juice",
      category: "drinks",
      price: 3.29,
      img: "img/9zumo_limon.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 10,
      title: "Red Velvet",
      category: "desserts",
      price: 3.49,
      img: "img/10red_velvet.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id:11 ,
      title: "Brownie ice cream",
      category: "desserts",
      price: 4.19,
      img: "img/11helado_brownie.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id:12 ,
      title: "Waffle",
      category: "desserts",
      price: 12.99,
      img: "img/12gofre.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id:13 ,
      title: "America Pancakes",
      category: "desserts",
      price: 3.99,
      img: "img/13tortitas_americanas.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id:14 ,
      title: "Chocolate Cake",
      category: "desserts",
      price: 2.99,
      img: "img/14tarta_chocolate.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id:15 ,
      title: "Carrot Cake",
      category: "desserts",
      price: 2.99,
      img: "img/15tarta_zanahoria.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id:16 ,
      title: "Wine Liberdad Expresion",
      category: "wines",
      price: 39.99,
      img: "img/16vino_autor_libertad_expresion.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id:17,
      title: "Wine Frontal Cabernet Sauvignon",
      category: "wines",
      price: 59.99,
      img: "img/17vino_frontalcabernetsauvignon.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    
    {
      id:18 ,
      title: "Wine Santa Digna SauvignonChile",
      category: "wines",
      price: 79.99,
      img: "img/18vino_santa_digna_sauvignon_Chile.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    
    {
      id:19 ,
      title: "Charcuterie board",
      category: "foods",
      price: 9.99,
      img: "img/19tabla_embutidos.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    
    {
      id:20,
      title: "Mixed Paella",
      category: "foods",
      price: 8.99,
      img: "img/20Paella_mixta.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
   
    
    {
      id:21 ,
      title: "Gambas Al pil pil",
      category: "foods",
      price: 22.99,
      img: "img/21gambas_al_pilpil.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id:22 ,
      title: "Jamon Serrano",
      category: "foods",
      price: 15.99,
      img: "img/22Plato_de_jamon_Serrano.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id:23 ,
      title: "Tortillitas de Camarones",
      category: "foods",
      price: 19.99,
      img: "img/23tortillitas_camarones.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

    {
      id:24 ,
      title: "Tortillas de Patatas",
      category: "foods",
      price: 89.99,
      img: "img/24tortilla_patata.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },






























  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">€${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
     