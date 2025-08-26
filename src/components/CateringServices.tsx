'use client';

import { useState } from 'react';
import Image from 'next/image';

// Menu data structure
const menuData = {
  boitesLunch: {
    title: "Boîtes à Lunch & Menu Chaud",
    description: "Pratiques et délicieuses, nos boîtes à lunch sont parfaites pour vos déjeuners d'affaires, réunions ou sorties gourmandes. Une précommande de 48 heures est requise pour garantir votre commande.",
    items: [
      {
        name: "La Boite a Lunch Traditionelle",
        price: "$19.95 p/pers.",
        description: "Choix de Sandwich cocktail, panino ou wrap Avec la garniture de votre choix, fromage provolone et laitue 3 choix de salades(traditionelles) Fromage, Crudités, olives Dessert du jour"
      },
      {
        name: "La Boite a Lunch Deluxe 1",
        price: "$21.95/pers.",
        description: "Choix d'un sandwich parmi notre selection de sandwich deluxe 3 choix de salades gourmets (nicoise, tomates& bocconcini, coeurs palmier) Fromage en cubes, crudités et olives Dessert du jour"
      },
      {
        name: "La Boite a Lunch Deluxe 2",
        price: "$22.95/pers.",
        description: "Choix d'un sandwich escalope de poulet ou veau ou legumes grille 3 choix de salades (nicoise, tomates& bocconcini, coeurs palmier) Fromage en cubes, crudités et olives Dessert du jour"
      },
      {
        name: "La Boite a Lunch Sans Gluten",
        price: "$23.95 p/pers",
        description: "Poulet grille & legumes grille 3 choix de salades(grecque, cœurs de palmiers, quinoa) Fromage en cubes, crudités et olives brochette de fruits"
      },
      {
        name: "La Petite Boite a Lunch",
        price: "$16.95/pers",
        description: "Sandwich cocktail ou Sandwich sur panino Avec la garniture de votre choix, fromage provolone et laitue 2 choix de salades(traditionelles) Crudités Dessert du jour"
      },
      {
        name: "Le Petit Dejeuner Continental",
        price: "$15.95/pers",
        description: "Assortiment de mini viennoiseries Petite coupe de salade de fruits Bouchee de bagel fromage a la creme & saumon fume Biscuits, beurre, confiture Jus D'orange ou cafe"
      },
      {
        name: "La Boite a Lunch Combo",
        price: "$22.95/pers",
        description: "Choix de 2 demi-sandwiches parmi notre selection de sandwich deluxe 3 choix de salades gourmets (nicoise, tomates& bocconcini, coeurs palmier) Fromage en cubes, crudités et olives Dessert du jour"
      }
    ]
  },
  menuChaud: {
    title: "Menu Chaud",
    items: [
      {
        name: "Cavatelli, rapini et saucisses italiennes",
        description: "Pâtes cavatelli typiques du sud de l'Italie, servies avec rapini sautés et saucisses italiennes légèrement épicées."
      },
      {
        name: "Lasagne",
        description: "Lasagne classique à l'italienne, faite de couches de pâtes fraîches, sauce bolognaise riche en viande et fromage fondant."
      },
      {
        name: "Rotolos farcis à la ricotta et aux épinards",
        description: "Pâtes roulées farcies de ricotta crémeuse et d'épinards, cuites doucement dans une sauce tomate légère."
      },
      {
        name: "Cannelloni farcis à la ricotta et aux épinards",
        description: "Pâtes tubulaires généreusement farcies de ricotta et d'épinards, nappées de sauce tomate et gratinées au four."
      },
      {
        name: "Cannelloni farcis à la viande",
        description: "Pâtes cannelloni farcies d'un savoureux mélange de viande hachée, sauce tomate aux herbes et parmesan."
      },
      {
        name: "Pâtes méditerranéennes",
        description: "Un mélange de pâtes et légumes grillés, aux parfums d'huile d'olive, d'ail et de basilic, typique des côtes méditerranéennes italiennes."
      },
      {
        name: "Fazoletti",
        description: "Grandes feuilles de pâtes fraîches, souvent farcies ou roulées, une spécialité artisanale typique des régions du nord de l'Italie."
      },
      {
        name: "Tortellini sauce rosée",
        description: "Petits anneaux de pâte farcis, servis avec une sauce rosée crémeuse à base de tomate et crème, populaire en Émilie-Romagne."
      },
      {
        name: "Escalope de veau ou de poulet à la parmigiana",
        description: "Escalope panée de veau ou de poulet, garnie de sauce tomate maison et de fromage fondant, gratinée au four à l'italienne."
      },
      {
        name: "Rôti de veau à la sauce aux champignons",
        description: "Tranches de rôti de veau tendre nappées d'une sauce aux champignons inspirée des saveurs rustiques d'Italie."
      },
      {
        name: "Médaillon de porc à la sauce porto et aux raisins",
        description: "Médaillons de porc tendre servis avec une sauce au porto et raisins, rappelant les accords sucrés-salés de la cuisine italienne du nord."
      },
      {
        name: "Bœuf bourguignon",
        description: "Bien que d'origine française, ce plat est revisité ici avec une touche italienne : bœuf mijoté au vin rouge avec herbes méditerranéennes."
      },
      {
        name: "Veau scallopini au marsala",
        description: "Tranches fines de veau cuites dans une sauce au vin marsala doux, plat emblématique de la Sicile."
      },
      {
        name: "Ragoût de veau",
        description: "Veau mijoté lentement dans une sauce riche et parfumée, inspirée des traditions italiennes familiales."
      },
      {
        name: "Suprême de volaille farcie à la florentine",
        description: "Poitrine de volaille farcie aux épinards et fromage, une recette inspirée de la cuisine toscane."
      },
      {
        name: "Pain de viande à la sauce aux tomates et aux légumes",
        description: "Pain de viande tendre servi avec une sauce tomate maison et des légumes grillés façon italienne."
      },
      {
        name: "Poulet portefeuille farci avec asperges grillées, fromage et jambon fumé avec sauce demi-glace",
        description: "Poitrine de poulet farcie comme un portefeuille, garnie d'asperges grillées, de fromage fondant et de jambon fumé."
      },
      {
        name: "Spécial poulet avec légumes grillés assortis et fromage de chèvre",
        description: "Poulet rôti accompagné de légumes méditerranéens grillés et d'une touche crémeuse de fromage de chèvre."
      }
    ]
  },
  menuCompose: {
    title: "Menu Composer",
    items: [
      {
        name: "Le Déjeuner",
        price: "17.95$ p/pers.",
        description: "Fromage cheddar en cubes et fruits de saison Viennoiseries (Croissants, chocolatines, danoises) Bouchées de bagel avec fromage à la crème et saumon fumé Confiture et beurre Café"
      },
      {
        name: "La Petite Réunion",
        price: "$27.95/pers.",
        description: "Plateau de Baguette Farcis avec la garniture de votre choix, fromage provolone et laitue (ex. trio Italien,jambon ou Dinde) Sandwichs cocktail Bouchées farcies Salades « choix de traditionnelles et classiques » Pizza Assorties Pâtisseries miniatures"
      },
      {
        name: "Le Gourmet",
        price: "29.95$/pers.",
        description: "Le Délice : Plateau de charcuterie fine Le Connaisseur : Plateau de fromages fins Sandwichs cocktail Crudités avec trempette Salades « choix de classiques et gourmet » Bouchées farcies Pizza Assorties Petits pains croûtés Pâtisseries miniatures ou choix de gâteau pour l'occasion"
      },
      {
        name: "Le Méditerranéen",
        price: "36.95$/pers",
        description: "Pâtes Méditerranéen Tomates cerise fraîche, olives noires ,câpres, tomates séchées noix de pins ,pesto (chaud) Plateau de sandwichs italiens sur pain ciabatta avec escalope de veau ou de poulet ** garnis avec poivrons au four et provolone*** Légumes grillés à l'italienne Salades gourmet Fromages fins Pizzas assorties Petit pains croûté avec beurre Pâtisseries miniatures ou choix de gâteau pour l'occasion"
      },
      {
        name: "Le Saint-Martin",
        price: "$41.95 p/pers",
        description: "Légumes grillés à l'italienne avec fromage bocconcini Prosciutto, melon avec fromage bocconcini Cannelloni à la viande et au fromage ou lasagne Rôti de veau à la sauce aux champignons (Servi avec pommes de terre grillées aux fines herbes et une jardinière de légumes) Petits pains croûtés Pizzas assorties Pâtisseries miniatures ou choix de gâteau pour l'occasion"
      },
      {
        name: "Menu 1 - 30 personnes et plus",
        price: "14.95$/pers",
        description: "Sandwichs cocktail (jambon, poulet, œufs, fromage) Crudités avec trempette Pizza Pâtisseries miniatures (2 par personne)."
      },
      {
        name: "Menu 2 - 30 personnes et plus",
        price: "21.95$/pers",
        description: "Sandwichs cocktail (jambon, poulet, œufs, fromage) Petits pains farcis assortis (jambon, poulet, œufs) Salades (traditionnelle et classique) Crudités avec trempette Pizza Pâtisseries miniatures (2 par personne)"
      },
      {
        name: "Menu 3 - 30 personnes et plus",
        price: "24.95$/pers",
        description: "Sandwichs cocktail (jambon, poulet, œufs, fromage) Baguettes farcies au choix (fromage provolone et laitue) Plateau fromage le classique Salades (traditionnelle et classique) Crudités avec trempette Pizza Pâtisseries miniatures (2 par personne)"
      },
      {
        name: "Menu 4 - 30 personnes et plus",
        price: "29.95$/pers",
        description: "Sandwichs cocktail (jambon, poulet, œufs, fromage) Petits pains farcis assortis (jambon, poulet, œufs) Oeufs Mimosa Plateau de charcuterie traditionnel (jambon, coppa, mortadelle, dinde, salami) Fromaage le classique (fromages à pâte ferme) Salades assorties Crudités avec trempette Pizza Petits pains croutés Pâtisseries miniatures (2 par personne)"
      },
      {
        name: "Menu 5 - 30 personnes et plus",
        price: "30.95$/pers",
        description: "Wraps assortis en bouchées Sandwichs roulés sur pains tortillas garnis (tartinade de poulet, œufs et goberge) Sandwichs deluxe (assortiment de pains ciabatta avec charcuterie au choix, provolone et laitue) Marinades et olives Crudités avec trempette Fromages fins Salades gourmets Pizzas assorties Pâtisseries miniatures (2 par personne)"
      }
    ]
  }
};

export default function CateringServices() {
  const [activeTab, setActiveTab] = useState('boitesLunch');

  const handleDownloadMenu = () => {
    // Download the actual PDF menu file
    const link = document.createElement('a');
    link.href = '/Menu PDF/menu a la carte verso juillet 2025.pdf';
    link.download = 'menu-a-la-carte-verso-juillet-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto">
            {/* Download Menu Button */}
      <div className="text-center mb-12">
        <button
          onClick={handleDownloadMenu}
          className="inline-flex items-center gap-3 bg-patisserie-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-patisserie-dark transition-colors shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Téléchargez notre menu
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(menuData).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
              activeTab === key
                ? 'bg-patisserie-dark text-white shadow-lg'
                : 'bg-white text-patisserie-dark border-2 border-patisserie-accent hover:bg-patisserie-accent'
            }`}
          >
            {section.title}
          </button>
        ))}
              </div>

      {/* Menu Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        {activeTab === 'boitesLunch' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-patisserie-dark mb-4">
                {menuData.boitesLunch.title}
        </h2>
              <p className="text-lg text-patisserie-secondary max-w-4xl mx-auto">
                {menuData.boitesLunch.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {menuData.boitesLunch.items.map((item, index) => (
                <div key={index} className="border-b border-patisserie-accent pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-patisserie-dark flex-1">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-patisserie-primary ml-4 whitespace-nowrap">
                      {item.price}
                  </span>
                </div>
                  <p className="text-patisserie-secondary leading-relaxed">
                    {item.description}
                  </p>
          </div>
        ))}
      </div>
                </div>
        )}

        {activeTab === 'menuChaud' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-patisserie-dark mb-4">
                {menuData.menuChaud.title}
        </h2>
                </div>
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.menuChaud.items.map((item, index) => (
                <div key={index} className="border-b border-patisserie-accent pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-patisserie-dark mb-2">
                    {item.name}
                </h3>
                  <p className="text-patisserie-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
            </div>
          ))}
                  </div>
                </div>
        )}

        {activeTab === 'menuCompose' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-patisserie-dark mb-4">
                {menuData.menuCompose.title}
              </h2>
              </div>
              
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {menuData.menuCompose.items.map((item, index) => (
                <div key={index} className="border-b border-patisserie-accent pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-patisserie-dark flex-1">
                      {item.name}
                </h3>
                    {item.price && (
                      <span className="text-lg font-semibold text-patisserie-primary ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="text-patisserie-secondary leading-relaxed">
                    {item.description}
                  </p>
            </div>
          ))}
        </div>
          </div>
        )}
      </div>

      {/* Contact and Quote Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-patisserie-dark mb-4">
            Besoin d'un Devis ?
          </h3>
          <p className="text-lg text-patisserie-secondary max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour votre événement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-patisserie-dark mb-4">
              Informations Utiles
            </h4>
            <ul className="space-y-3 text-patisserie-secondary">

              <li className="flex items-start gap-3">
                <span className="text-patisserie-primary mt-1">✓</span>
                <span>Menus personnalisés selon vos préférences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-patisserie-primary mt-1">✓</span>
                <span>Ingrédients frais et de qualité</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-patisserie-primary mt-1">✓</span>
                <span>Service professionnel et ponctuel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-patisserie-primary mt-1">✓</span>
                <span>Précommande de 48 heures requise</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="bg-patisserie-accent rounded-lg p-6 mb-6">
              <div className="w-16 h-16 bg-patisserie-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-patisserie-dark mb-2">
                Contactez-nous
              </h4>
              <p className="text-sm text-patisserie-secondary mb-4">
                Pour un devis personnalisé et des conseils
              </p>
              <a
                href="tel:+15147226575"
                className="text-patisserie-primary font-semibold hover:text-patisserie-dark transition-colors"
              >
                (514) 722-6575
              </a>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-patisserie-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-patisserie-dark transition-colors"
            >
              Demander un Devis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
