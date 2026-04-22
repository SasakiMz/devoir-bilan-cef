USE artisans_db;

INSERT INTO categories (name) VALUES
('Alimentation'),
('Bâtiment'),
('Services'),
('Fabrication');

INSERT INTO specialties (name, category_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronnier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

INSERT INTO artisans (name, specialty_id, rating, location, email, website, top) VALUES
('Boucherie Dumont', 1, 4.5, 'Lyon', 'boucherie.dumont@gmail.com', NULL, FALSE),
('Au pain chaud', 2, 4.8, 'Montélimar', 'aupainchaud@hotmail.com', NULL, TRUE),
('Chocolaterie Labbé', 3, 4.9, 'Lyon', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE),
('Traiteur Truchon', 4, 4.1, 'Lyon', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE),
('Orville Salmons', 5, 5.0, 'Evian', 'o-salmons@live.com', NULL, TRUE),
('Mont Blanc Electricité', 6, 4.5, 'Chamonix', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE),
('Boutot & fils', 7, 4.7, 'Bourg-en-Bresse', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE),
('Vallis Bellemare', 8, 4.0, 'Vienne', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE),
('Claude Quinn', 9, 4.2, 'Aix-les-bains', 'claude.quinn@gmail.com', NULL, FALSE),
('Amitee Lécuyer', 10, 4.5, 'Annecy', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE),
('Ernest Carignan', 11, 5.0, 'Le Puy-en-Velay', 'e.carignan@hotmail.com', NULL, FALSE),
('Royden Charbonneau', 12, 3.8, 'Saint-Priest', 'r.charbonneau@gmail.com', NULL, FALSE),
('Leala Dennis', 12, 3.8, 'Chambéry', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE),
('C\'est sup\'hair', 12, 4.1, 'Romans-sur-Isère', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE),
('Le monde des fleurs', 13, 4.6, 'Annonay', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE),
('Valérie Laderoute', 14, 4.5, 'Valence', 'v-laderoute@gmail.com', NULL, FALSE),
('CM Graphisme', 15, 4.4, 'Valence', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE);