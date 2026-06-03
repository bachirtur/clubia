/* ═══ DONNÉES DES 5 MODULES ═══ */
var M=[
{id:1,t:"Découvrir Gemini Chat",ic:"fa-solid fa-comments",cl:"#0D9488",tool:"Gemini",
pres:{obj:["Comprendre ce qu'est un chatbot IA","Poser de bonnes questions (prompts)","Utiliser des prompts simples","Découvrir les possibilités créatives"],comp:["Communication numérique","Esprit critique","Formulation","Créativité"],dur:"2 semaines (~4 séances de 45 min)"},
disc:{desc:"Gemini est un assistant intelligent créé par Google. Tu peux lui poser des questions, lui demander de créer des textes, résumer des informations ou t'aider à réfléchir. Il répond en quelques secondes.",fonc:"Tu écris un message (un <b>prompt</b>) dans la barre de discussion, et Gemini te répond. Plus ta question est précise, meilleure sera la réponse. Tu peux continuer la conversation pour affiner les résultats.",cas:["Créer une histoire fantastique","Résumer un texte long","Obtenir des explications simples","Générer des idées pour un projet","Traduire du texte","Trouver des arguments pour un débat"],con:["Sois précis dans tes demandes","Précise le niveau de langage","Demande plusieurs propositions","Itère : affine ta demande"],bp:["Toujours vérifier les informations","Ne pas partager de données personnelles","Utiliser Gemini comme aide, pas comme substitut","Citer Gemini si tu utilises ses textes"],err:["Poser des questions trop vagues","Croire aveuglément les réponses","Copier-coller sans relire","Donner des informations personnelles"]},
tutos:[{t:"Créer une histoire avec Gemini",s:["Ouvre Gemini à l'adresse gemini.google.com","Tape : « Raconte-moi une histoire courte et amusante sur un chat qui voyage dans l'espace, pour un lecteur de 12 ans »","Observe la réponse générée","Demande une modification : « Change le chat en hamster et ajoute un ami extraterrestre »","Relis le résultat et note ce que tu aurais pu préciser"]},{t:"Résumer un texte",s:["Choisis un texte d'au moins 10 lignes","Tape : « Résume ce texte en 3 phrases clés : [colle le texte] »","Compare le résumé avec le texte original","Essaie : « Résume en un titre et 5 mots-clés »","Note la différence entre les deux résumés"]},{t:"Expliquer une leçon simplement",s:["Identifie un sujet que tu ne comprends pas bien","Tape : « Explique-moi [sujet] simplement, comme si j'avais 11 ans, avec des exemples concrets »","Lis l'explication et vérifie si tu comprends mieux","Pose une question de suivi pour approfondir","Essaie : « Donne-moi 3 questions pour vérifier que j'ai compris »"]},{t:"Générer des idées créatives",s:["Tape : « Donne-moi 10 idées originales pour un journal de classe sur le thème de l'écologie »","Choisis les 3 meilleures idées","Pour chaque idée, demande un plan détaillé","Sélectionne ton idée préférée et demande un début de rédaction","Note comment le prompt influence la créativité"]}],
exos:{deb:[{t:"Première conversation",d:"Demande à Gemini de se présenter. Pose 3 questions différentes.",c:"Exemple : « Bonjour ! Que sais-tu faire ? » puis « Ton domaine de prédilection ? » et « Donne un exemple de création. »"},{t:"Histoire à thème",d:"Demande une histoire de 5 lignes sur un animal dans un lieu imaginaire.",c:"« Raconte une histoire de 5 lignes sur un [animal] dans [lieu imaginaire]. Drôle, fin heureuse. »"},{t:"Résumé d'article",d:"Colle un article court et demande un résumé en une phrase.",c:"« Résume ce texte en une phrase : [texte] » Vérifie que la phrase capture l'essentiel."},{t:"Traduction simple",d:"Demande de traduire 3 phrases du français vers l'anglais.",c:"« Traduis en anglais : Le chat dort. J'aime les pizzas. Il fait beau. » Vérifie avec un dictionnaire."},{t:"Questions quiz",d:"Demande 5 questions de quiz sur un sujet étudié en classe.",c:"« Crée 5 questions quiz (avec réponses) sur [sujet] pour un élève de 4ème. »"}],int:[{t:"Prompt optimisé",d:"Reformule un prompt vague en précis sur les volcans. Compare.",c:"Vague : « Parle-moi des volcans » → Précis : « Comment se forme un volcan, 3 exemples célèbres, risques pour les populations. Niveau collège. »"},{t:"Débat contradictoire",d:"3 arguments pour et contre : « Les devoirs devraient être supprimés ».",c:"« 3 arguments pour et 3 contre : les devoirs supprimés au collège. Équilibré et factuel. »"},{t:"Guide étape par étape",d:"Crée un guide pour un origami avec étapes numérotées.",c:"« Guide étape par étape pour réaliser une grue en origami. Conseils pour les étapes difficiles. »"}],adv:[{t:"Chaîne de prompts",d:"3 prompts successifs : idée de jeu → règles → description boîte.",c:"1) « Jeu de société éducatif sur l'écologie pour 2-4 joueurs de 12 ans. » 2) « Règles complètes. » 3) « Texte de la boîte. »"},{t:"Audit de réponse",d:"Question factuelle, vérifie avec 2 sources.",c:"« 5 plus grands déserts avec superficie ? » Vérifie sur Wikipédia et une encyclopédie. Note les différences."]}]},
quiz:[{q:"Qu'est-ce que Gemini ?",o:["Un jeu vidéo","Un assistant IA créé par Google","Un réseau social","Un moteur de recherche"],a:1},{q:"Comment s'appelle le texte envoyé à Gemini ?",o:["Un email","Un prompt","Un code","Un lien"],a:1},{q:"Comment obtenir une bonne réponse ?",o:["Question très vague","Écrire en majuscules","Être précis et contextuel","Demander plusieurs fois"],a:2},{q:"Que peut faire Gemini ?",o:["Seulement traduire","Seulement chercher","Créer des textes, résumer, expliquer, générer des idées","Seulement oui/non"],a:2},{q:"Que faut-il TOUJOURS faire ?",o:["Copier sans lire","Vérifier avec d'autres sources","Effacer immédiatement","Partager sur les réseaux"],a:1},{q:"Quelle info ne faut-il JAMAIS donner ?",o:["Son prénom","Des données personnelles","Son âge approximatif","Son sujet préféré"],a:1},{q:"Comment améliorer une réponse ?",o:["Reposer plus fort","Affiner le prompt avec des détails","Changer de couleur","Fermer la discussion"],a:1},{q:"Risque principal sans vérification ?",o:["Payer des frais","Obtenir des informations incorrectes","Ne plus savoir écrire","Être piraté"],a:1},{q:"Une réponse fausse de l'IA s'appelle :",o:["Un bug","Une hallucination","Un piratage","Une blague"],a:1},{q:"Pourquoi citer Gemini ?",o:["C'est la loi","C'est honnête et transparent","Gemini le demande","Pas nécessaire"],a:1}],
proj:{t:"Créer un assistant scolaire",obj:["Créer des prompts utiles pour les devoirs","Organiser les prompts par matière","Tester et améliorer chaque prompt"],mat:["Accès à Gemini","Carnet de notes","Liste de tes matières"],et:["Liste tes 5 matières principales","Pour chaque matière, crée 2 prompts utiles","Teste chaque prompt et note la qualité (1-5 étoiles)","Améliore les prompts < 4 étoiles","Crée un document « Mon Assistant Scolaire IA » avec 10 prompts optimisés","Ajoute un conseil d'utilisation pour chaque"],cr:["10 prompts couvrant 5 matières","Chaque prompt testé et évalué","Prompts faibles améliorés","Document propre et organisé","Conseils d'utilisation pertinents"]}},

{id:2,t:"Rechercher et apprendre avec Gemini",ic:"fa-solid fa-magnifying-glass",cl:"#0891B2",tool:"Deep Research",
pres:{obj:["Comprendre la recherche intelligente","Vérifier les sources","Comparer et croiser les informations","Créer des fiches documentaires fiables"],comp:["Recherche documentaire","Esprit critique","Vérification des sources","Synthèse"],dur:"2 semaines (~4 séances de 45 min)"},
disc:{desc:"Gemini Deep Research permet de mener une recherche approfondie automatiquement. Au lieu d'une réponse rapide, Gemini explore de nombreuses sources et produit un rapport détaillé avec des références.",fonc:"Tu poses une question de recherche, Gemini explore le web, consulte de multiples sources, analyse les convergences et divergences, puis présente un rapport structuré avec citations.",cas:["Préparer un exposé avec sources fiables","Approfondir un sujet scientifique","Comparer différentes théories","Créer une bibliographie commentée"],con:["Formule ta question clairement","Demande explicitement les sources","Compare avec d'autres outils","Note les divergences entre sources"],bp:["Croiser avec au moins 2 sources externes","Vérifier la date des informations","Préférer les sources institutionnelles","Citer les sources utilisées"],err:["Se fier à une seule source","Ignorer les dates","Confondre opinion et fait","Ne pas vérifier les citations de l'IA"]},
tutos:[{t:"Recherche sur les animaux",s:["Ouvre Gemini et active Deep Research","Tape : « Recherche approfondie sur les loups : habitat, comportement, conservation. Sources. »","Observe le processus","Lis le rapport attentivement","Vérifie 2 infos sur Wikipédia"]},{t:"Recherche sur l'espace",s:["Tape : « Dernières découvertes sur Mars ? Sources scientifiques. »","Note les sources citées","Vérifie l'actualité","Compare avec CNES ou NASA","Crée une fiche synthèse de 10 lignes"]},{t:"Recherche sur l'environnement",s:["Tape : « Réchauffement climatique : causes, conséquences, solutions. Rapports officiels. »","Identifie les sources institutionnelles","Note les données chiffrées","Compare avec un manuel scolaire","Rédige un paragraphe de synthèse"]},{t:"Vérifier une information",s:["Choisis une affirmation lue en ligne","Demande : « Vérifie : [affirmation]. Données, sources, contexte. »","Compare avec ta croyance initiale","Identifie si vrai, partiellement vrai ou faux","Note comment le contexte change la compréhension"]}],
exos:{deb:[{t:"Recherche animalière",d:"5 faits sur un animal avec Deep Research.",c:"« Recherche approfondie sur [animal] : 5 faits vérifiés avec sources. »"},{t:"Fiche planète",d:"Fiche d'information sur une planète.",c:"« Fiche planète [nom] : taille, distance, particularités, lunes. Sources. »"},{t:"Actualité scientifique",d:"Résume une découverte récente en 5 lignes.",c:"« Découverte scientifique récente ? Explique simplement avec sources. »"},{t:"Dictionnaire vivant",d:"Définition + étymologie d'un mot scientifique.",c:"« Définis [mot] + étymologie + exemple concret. »"},{t:"Comparaison simple",d:"Compare loup et chien.",c:"« Compare loup et chien : origine, comportement, alimentation. Tableau avec sources. »"}],int:[{t:"Vérification d'affirmation",d:"Vérifie 3 affirmations internet.",c:"Pour chaque : « Vérifie : [affirmation]. Vraie, partiellement vraie ou fausse ? Preuves. »"},{t:"Fiche documentaire",d:"Fiche structurée avec 3+ sources.",c:"Titre, intro, 3 sections, conclusion, bibliographie. Cite 3+ sources."},{t:"Débat factuel",d:"Arguments pour et contre un sujet environnemental.",c:"« Arguments POUR [sujet] avec données. » puis « Arguments CONTRE avec données. » Conclusion personnelle."}],adv:[{t:"Audit de sources",d:"Vérifie chaque source d'un rapport Deep Research.",c:"Pour chaque source : existe-t-elle ? Dit-elle ce qui est rapporté ? Actuelle ? Fiable ?"},{t:"Méta-recherche",d:"Compare Deep Research avec recherche manuelle.",c:"Fais les deux. Compare : couverture, précision, sources, temps. Bilan comparatif."]}]},
quiz:[{q:"Qu'est-ce que Deep Research ?",o:["Un jeu","Une recherche approfondie automatique multi-sources","Un dictionnaire","Un réseau social"],a:1},{q:"Pourquoi croiser les sources ?",o:["Pour aller plus vite","Détecter erreurs et biais","Pour faire joli","Pas nécessaire"],a:1},{q:"Source fiable ?",o:["Un blog personnel","Un site institutionnel ou scientifique","Un réseau social","Un forum anonyme"],a:1},{q:"Que vérifier en priorité ?",o:["La longueur","La date et l'origine","La police","Les likes"],a:1},{q:"Croiser les sources = ?",o:["Les mélanger","Vérifier la même info dans plusieurs sources","Les supprimer","Les classer"],a:1},{q:"Comment citer une source ?",o:["Juste le nom du site","Auteur, titre, date, URL","Le lien uniquement","Trouvé sur internet"],a:1},{q:"Un biais c'est ?",o:["Une faute d'orthographe","Une tendance qui fausse l'objectivité","Une image floue","Un lien cassé"],a:1},{q:"Pourquoi la date est importante ?",o:["Pour le style","Les connaissances évoluent","Elle ne l'est pas","Pour trier"],a:1},{q:"Infos contradictoires ?",o:["Choisir la plus récente sans réfléchir","Vérifier sources et contexte","Les ignorer","Toujours la première"],a:1},{q:"Avantage principal ?",o:["Plus rapide","Analyse en profondeur multi-sources automatiquement","Ne se trompe jamais","Remplace la lecture"],a:1}],
proj:{t:"Créer une fiche documentaire",obj:["Recherche approfondie","Vérifier et citer les sources","Synthétiser de manière structurée"],mat:["Accès à Deep Research","Accès internet","Modèle de fiche"],et:["Choisis un sujet","Question principale + 3 sous-questions","Utilise Deep Research","Vérifie avec 2+ sources","Organise : intro, 3 parties, conclusion","Rédige avec bibliographie"],cr:["Sujet bien défini","3+ sources vérifiées","Infos exactes","Structure claire","Synthèse personnelle","Bibliographie"]}},

{id:3,t:"Créer des contenus avec Gemini",ic:"fa-solid fa-pen-fancy",cl:"#059669",tool:"Canvas & Docs",
pres:{obj:["Maîtriser les outils de création","Organiser ses idées avec Canvas","Créer des présentations structurées","Rédiger et améliorer des textes"],comp:["Rédaction numérique","Organisation","Présentation orale","Relecture"],dur:"2 semaines (~4 séances de 45 min)"},
disc:{desc:"Gemini Canvas est un espace où tu peux rédiger, organiser et modifier du contenu en direct avec l'aide de Gemini. Gemini Docs permet de créer des documents structurés.",fonc:"Tu écris ou demandes à Gemini de générer du contenu dans Canvas. Tu peux modifier, déplacer des sections, demander des améliorations ciblées, et exporter le résultat.",cas:["Rédiger un exposé structuré","Créer un plan détaillé","Transformer des notes en texte rédigé","Préparer une présentation orale","Créer un résumé de leçon"],con:["Commence par un plan avant de rédiger","Améliore section par section","Relis toujours à voix haute","Garde ton propre style"],bp:["Relire et personnaliser le texte","Structurer avant de rédiger","Varier le vocabulaire","Ajouter des exemples personnels"],err:["Accepter le premier jet sans modification","Ne pas structurer","Copier sans adapter","Oublier la relecture finale"]},
tutos:[{t:"Créer un plan d'exposé",s:["Demande : « Plan détaillé pour un exposé sur [sujet] pour collégiens. »","Examine et identifie les modifications","Demande des ajustements ciblés","Valide le plan final","Utilise-le comme base"]},{t:"Rédiger avec Canvas",s:["Colle ton plan dans Canvas","Demande : « Rédige la partie 1 en respectant ce plan »","Relis et surligne les passages à améliorer","Demande des modifications ciblées","Continue partie par partie"]},{t:"Créer une présentation",s:["Demande : « Transforme cet exposé en 8 diapos : titre + points clés »","Vérifie chaque diapo","Demande des suggestions d'images","Ajoute diapo de titre et conclusion","Exporte dans ton outil"]},{t:"Améliorer un texte",s:["Colle ton texte dans Canvas","Demande : « Améliore : correction, vocabulaire, fluidité. Conserve mon style. »","Compare les deux versions","Note et comprends chaque modification","Accepte ce qui te convient"]}],
exos:{deb:[{t:"Plan simple",d:"Plan en 3 parties sur un sujet libre.",c:"« Plan en 3 parties sur [sujet]. 2-3 sous-parties chacune. »"},{t:"Rédaction courte",d:"5 lignes sur ton loisir préféré.",c:"« Aide-moi à rédiger 5 lignes sur [mon loisir]. Ton enthousiaste. » Relis et personnalise."},{t:"Résumé de leçon",d:"Résume une leçon en 5 points clés.",c:"« 5 points clés de cette leçon : [notes]. Vocabulaire simple. »"},{t:"Liste de vocabulaire",d:"10 mots de vocabulaire avec définitions.",c:"« 10 mots sur [thème] + définition + exemple chacun. »"},{t:"Titres accrocheurs",d:"5 titres pour un article sur le sport.",c:"« 5 titres accrocheurs : sport au collège. » Choisis le meilleur."}],int:[{t:"Exposé structuré",d:"Exposé complet (intro, 3 parties, conclusion).",c:"D'abord le plan, puis rédige partie par partie. Vérifie la cohérence."},{t:"Transformation de style",d:"Un texte en 3 styles : formel, humoristique, poétique.",c:"« Réécris en 3 versions : formel, humoristique, poétique : [texte] »"},{t:"Présentation diapos",d:"200 mots en 6 diapos structurées.",c:"« 6 diapos : titre court + 3-5 points clés : [texte] »"}],adv:[{t:"Magazine numérique",d:"Structure d'un magazine de 4 pages.",c:"P1 : Couverture. P2 : Article. P3 : Interview. P4 : Quiz + édito."},{t:"Relecture critique",d:"Texte de 300 mots, puis analyse critique.",c:"« Analyse ce texte : structure, style, vocabulaire. 5 points forts, 5 améliorations. »"}]}},
quiz:[{q:"Qu'est-ce que Gemini Canvas ?",o:["Un tableau de dessin","Un espace de création interactif","Un jeu de société","Un filtre photo"],a:1},{q:"Gemini Docs sert à ?",o:["Stocker des photos","Créer des documents structurés avec l'IA","Envoyer des emails","Coder"],a:1},{q:"Bonne méthode pour un exposé ?",o:["Tout demander d'un coup","Plan d'abord, puis rédiger section par section","Seulement la conclusion","Sans plan"],a:1},{q:"Après une génération de texte ?",o:["Publier immédiatement","Relire et personnaliser","Supprimer","Partager telle quelle"],a:1},{q:"Texte plus vivant ?",o:["Majuscules partout","Exemples concrets et vocabulaire varié","Plus long","Seulement des verbes"],a:1},{q:"Avantage de Canvas ?",o:["Remplace l'écriture","Modifier en direct avec l'IA","Plus rapide que la pensée","Pas d'erreurs"],a:1},{q:"Créer un plan ?",o:["Au hasard","Demander explicitement un plan structuré","Copier un plan existant","Demander la réponse finale"],a:1},{q:"Garder son style ?",o:["Pas important","Authenticité et personnalité","Pour aller plus vite","Impressionner"],a:1},{q:"Formats Gemini ?",o:["Texte brut uniquement","Texte, tableau, liste, code, présentation","Images uniquement","Vidéos uniquement"],a:1},{q:"Itérer = ?",o:["Abandonner","Affiner progressivement en plusieurs étapes","Effacer tout","Changer de sujet"],a:1}],
proj:{t:"Créer un exposé complet",obj:["Exposé structuré de A à Z","Utiliser Canvas","Créer des supports de présentation"],mat:["Accès à Gemini Canvas","Sujet choisi","Outil de présentation"],et:["Choisis ton sujet","Demande un plan détaillé","Fais valider le plan","Rédige chaque partie avec Canvas","Relis et personnalise","Transforme en 6-8 diapositives","Prépare des notes pour l'oral"],cr:["Plan validé","Vocabulaire adapté","Style personnel","Aucune faute","Diapos claires","Prêt pour l'oral"]}},

{id:4,t:"Découvrir NotebookLM",ic:"fa-solid fa-book-open",cl:"#EA580C",tool:"NotebookLM",
pres:{obj:["Comprendre NotebookLM","Importer et analyser des documents","Créer des fiches de révision intelligentes","Interroger ses propres documents"],comp:["Analyse documentaire","Synthèse","Outils de révision","Autonomie"],dur:"2 semaines (~4 séances de 45 min)"},
disc:{desc:"NotebookLM est un outil Google qui permet d'importer tes propres documents et de les analyser avec l'IA. Tu peux poser des questions sur tes documents, générer des résumés, des fiches de révision et des quiz personnalisés.",fonc:"Tu crées un 'carnet', tu importes tes documents, NotebookLM les analyse. Ensuite tu poses des questions dont les réponses sont basées UNIQUEMENT sur tes documents. Tu peux aussi générer résumés, fiches et quiz.",cas:["Réviser un contrôle à partir de tes cours","Créer des flashcards","Poser des questions sur un document long","Générer un quiz personnalisé","Comparer plusieurs documents"],con:["Importe des documents bien structurés","Pose des questions précises","Utilise les résumés comme base de révision","Vérifie la correspondance avec tes docs"],bp:["Organiser un carnet par matière","Utiliser des documents complets","Croiser résumés avec le document","Créer des quiz réguliers"],err:["Importer des documents incomplets","Questions hors sujet","Se fier au résumé sans vérifier","Négliger l'organisation des carnets"]},
tutos:[{t:"Créer un carnet et importer",s:["Va sur notebooklm.google.com","Clique sur « Créer un carnet »","Nomme-le clairement","Ajoute une source : importe un PDF ou colle un texte","Attends l'analyse","Observe le résumé automatique"]},{t:"Poser des questions",s:["Utilise la barre de discussion","Pose : « Événements clés mentionnés dans ce document ? »","Observe la réponse avec citations","Clique sur les citations pour le contexte","Pose une question plus spécifique"]},{t:"Créer des fiches de révision",s:["Demande : « 5 fiches de révision sur les points clés »","Chaque fiche : titre, notions, exemple","Vérifie la correspondance avec le document","Complète avec tes annotations","Organise par ordre d'importance"]},{t:"Générer un quiz",s:["Demande : « Quiz de 10 questions avec réponses et explications »","Vérifie la couverture du document","Réponds sans regarder les réponses","Note ton score et les points faibles","Demande des questions supplémentaires"]}],
exos:{deb:[{t:"Premier carnet",d:"Crée un carnet et importe un document.",c:"Va sur notebooklm.google.com, crée et nomme un carnet, importe un PDF. Vérifie le résumé."},{t:"Questions basiques",d:"Pose 3 questions simples sur ton document.",c:"« Thème principal ? », « 3 points clés ? », « Conclusion ? »"},{t:"Fiche simple",d:"Fiche de révision sur un chapitre.",c:"« Fiche sur [chapitre] : 5 notions clés, définitions, exemples. »"},{t:"Quiz rapide",d:"Génère et réponds à un quiz de 5 questions.",c:"« 5 questions (vrai/faux et QCM) avec réponses. » Note ton score."},{t:"Résumé en bullet points",d:"Résumé en 10 bullet points.",c:"« Résume en 10 bullet points, du plus au moins important. »"}],int:[{t:"Carnet multi-sources",d:"Importe 3 documents et compare.",c:"« Infos communes aux 3 sources ? Contradictions ? »"},{t:"Fiches complètes",d:"5 fiches couvrant tout un chapitre avec questions.",c:"Chaque fiche : titre, notions, définitions, exemples, 1 question."},{t:"Quiz progressif",d:"10 questions avec 3 niveaux de difficulté.",c:"« 10 questions : 4 faciles, 3 moyennes, 3 difficiles. Avec réponses. »"}],adv:[{t:"Carnet de révision intelligent",d:"Carnet organisé par matière avec suivi.",c:"1 carnet/matière, cours + fiches + quiz. Note tes scores. Réessaie les points faibles."},{t:"Synthèse multi-documents",d:"5 documents, synthèse combinant les perspectives.",c:"« Analyse toutes les sources, combine les perspectives, note consensus et débats. »"}]}},
quiz:[{q:"Qu'est-ce que NotebookLM ?",o:["Un traitement de texte","Un carnet de notes intelligent","Un tableur","Un navigateur"],a:1},{q:"Que peut-on importer ?",o:["Seulement des images","PDF, textes, URLs","Seulement des vidéos","Seulement des emails"],a:1},{q:"Comment analyse-t-il ?",o:["Il efface","Il comprend et permet d'interroger","Il traduit","Il imprime"],a:1},{q:"Fiches de révision pour ?",o:["Décorer","Mémoriser l'essentiel","Effacer le document","Partager sur les réseaux"],a:1},{q:"Comment poser une question ?",o:["Crier sur l'écran","Utiliser la barre de discussion","Envoyer un email","Appeler Google"],a:1},{q:"Résumé automatique = ?",o:["Fait par un humain","Synthèse IA à partir du document","Traduction","Plan détaillé"],a:1},{q:"Créer un quiz ?",o:["L'acheter","Demander à NotebookLM de générer des questions","Copier d'internet","Écrire à la main uniquement"],a:1},{q:"Avantage principal ?",o:["Fait les devoirs à ta place","Travaille sur tes propres documents","Remplace les profs","Plus rapide que lire"],a:1},{q:"Que vérifier dans les résumés ?",o:["La couleur","L'exactitude et la complétude","Le nombre de pages","La police"],a:1},{q:"Organiser ses carnets ?",o:["Tout dans un seul","Un carnet par matière bien nommé","Pas besoin","Par ordre alphabétique"],a:1}],
proj:{t:"Créer un carnet de révision intelligent",obj:["Organiser un carnet complet","Importer les documents d'une matière","Créer fiches et quiz"],mat:["Accès à NotebookLM","Documents de cours","Carnet de suivi"],et:["Choisis une matière","Crée un carnet nommé clairement","Importe tous les documents pertinents","Génère un résumé global","Crée 5 fiches de révision","Génère un quiz de 15 questions","Note ton score et identifie les 3 points faibles"],cr:["Carnet bien nommé","3+ documents importés","Résumé vérifié","5 fiches complètes","Quiz de 15 questions","Plan de révision des points faibles"]}},

{id:5,t:"Créer avec l'IA",ic:"fa-solid fa-palette",cl:"#E11D48",tool:"Gemini Images & Imagen",
pres:{obj:["Comprendre la génération d'images par IA","Créer des visuels éducatifs","Maîtriser les prompts visuels","Respecter l'éthique de la création IA"],comp:["Créativité visuelle","Prompts descriptifs","Sens critique","Éthique numérique"],dur:"2 semaines (~4 séances de 45 min)"},
disc:{desc:"Gemini Images et Imagen permettent de générer des images à partir de descriptions textuelles. Tu décris ce que tu veux voir, et l'IA crée une image correspondante.",fonc:"Tu écris une description détaillée (prompt visuel) : sujet, style, couleurs, ambiance, composition. L'IA analyse et génère une ou plusieurs images. Tu peux affiner ta demande.",cas:["Créer une affiche pour le club","Illustrer un exposé","Générer une mascotte","Créer des cartes pédagogiques","Illustrer une histoire"],con:["Décris précisément sujet, style, couleurs, ambiance","Précise le format souhaité","Mentionne le style (réaliste, cartoon, minimaliste...)","Itère : affine à chaque essai"],bp:["Indiquer que l'image est générée par IA","Ne pas créer d'images trompeuses","Respecter le droit à l'image","Utiliser l'IA comme outil créatif"],err:["Être trop vague","Créer des images trompeuses (deepfakes)","Ne pas mentionner l'usage de l'IA","Copier le style d'un artiste vivant sans autorisation"]},
tutos:[{t:"Générer ta première image",s:["Demande : « Image d'un chaton astronaute, style cartoon coloré, fond étoilé »","Observe l'image","Demande : « Même image, casque rouge et étoile à la main »","Note comment chaque détail influence le résultat","Essaie : « Même scène, style aquarelle douce »"]},{t:"Créer une affiche éducative",s:["Tape : « Affiche éducative sur le cycle de l'eau. Infographie moderne, couleurs vives. »","Vérifie les infos scientifiques","Demande des ajustements","Ajoute titre et légendes","Sauvegarde l'affiche finale"]},{t:"Créer une mascotte",s:["Tape : « Mascotte Club IA : robot amical, style pixar, teal et or, livre et ampoule. »","Identifie les améliorations","Affine : « Lunettes rondes, sourire plus large »","Demande 3 variantes de pose","Choisis la meilleure version"]},{t:"Créer des cartes pédagogiques",s:["Choisis un thème","Tape : « Carte pédagogique sur [thème]. Illustration scientifique, légendes. »","Vérifie la précision","Demande des corrections","Crée une série de 3 cartes"]}],
exos:{deb:[{t:"Image libre",d:"Génère une image en décrivant précisément ce que tu veux.",c:"« Image de [sujet], style [style], couleurs [couleurs], ambiance [ambiance]. »"},{t:"Affiche de club",d:"Affiche pour le Club IA avec titre, visuel et slogan.",c:"« Affiche Club IA collège. Robot amical. Teal et or. Slogan : L'intelligence au bout des doigts. »"},{t:"Illustration d'histoire",d:"Illustre une scène de l'histoire du Module 1.",c:"Décris la scène : personnages, décor, action, ambiance. Précise le style."},{t:"Carte d'animal",d:"Carte pédagogique : animal, nom, habitat, caractéristiques.",c:"« Carte pédagogique [animal]. Illustration réaliste, nom, habitat, particularités. »"},{t:"Emoji géant",d:"Version haute qualité d'un emoji en style 3D.",c:"« [Emoji] en style 3D photoréaliste, textures détaillées, éclairage studio. »"}],int:[{t:"Série d'affiches",d:"3 affiches cohérentes sur l'écologie.",c:"Même style dans chaque prompt : minimaliste, palette vert/bleu."},{t:"Mascotte en action",d:"Mascotte en 3 poses.",c:"« Même mascotte, pose [saluant/réfléchissant/célébrant]. Même style. »"},{t:"Infographie",d:"Infographie scientifique avec données chiffrées.",c:"« Infographie [sujet] : titre, 4 données, icônes. Style moderne. »"}],adv:[{t:"Campagne visuelle",d:"Logo, affiche, bannière, carte de visite.",c:"Définis une charte. Décline chaque support en gardant la cohérence."},{t:"Éthique et création",d:"2 images : responsable et problématique. Explique.",c:"Responsable : affiche éducative. Problématique : photo manipulée. L'éthique : transparence."]}]},
quiz:[{q:"Gemini Images = ?",o:["Un album photo","Un outil de génération d'images par IA","Un filtre","Un jeu de dessin"],a:1},{q:"Imagen = ?",o:["Une app de montage","Le modèle de génération d'images de Google","Un format d'image","Une marque"],a:1},{q:"Bonne description ?",o:["En un mot","Sujet, style, couleurs, ambiance","Copier d'internet","Des émojis"],a:1},{q:"Préciser pour une affiche ?",o:["Rien","Titre, couleurs, style, message, format","Seulement le titre","Seulement la couleur"],a:1},{q:"Modifier une image générée ?",o:["Non, jamais","Oui, en affinant le prompt","Seulement Photoshop","En la supprimant"],a:1},{q:"Règle éthique principale ?",o:["Partager partout","Pas de contenu trompeur + indiquer l'usage IA","Supprimer tout","Ne jamais utiliser l'IA"],a:1},{q:"Mascotte cohérente ?",o:["Changer de style","Même description de base et même style","Copier une existante","Demander à quelqu'un"],a:1},{q:"Carte pédagogique = ?",o:["Carte de jeu","Visuel éducatif avec infos et illustrations","Carte postale","Carte géographique"],a:1},{q:"L'IA ne remplace pas la créativité car ?",o:["Trop lente","L'IA exécute, l'intention vient de l'humain","Ne sait pas dessiner","Coûte trop cher"],a:1},{q:"Toujours mentionner ?",o:["Rien","Que l'image est générée par IA","Le nom de l'ordinateur","La taille du fichier"],a:1}],
proj:{t:"Créer une campagne visuelle pour le Club IA",obj:["Identité visuelle cohérente","Plusieurs visuels complémentaires","Prompts visuels avancés"],mat:["Accès à Gemini Images","Charte graphique","Carnet de croquis"],et:["Définis la charte : 2 couleurs, un style, une mascotte","Crée le logo","Crée l'affiche de recrutement","Crée une bannière web","Crée 3 cartes pédagogiques sur l'IA","Présente ta campagne"],cr:["Charte respectée","Logo clair","Affiche attractive","Bannière adaptée","3 cartes informatives","Ensemble harmonieux","Mention 'Généré par IA'"]}
];

/* ═══ PROJET FINAL ═══ */
var FP={t:"Mon projet IA pour le collège",desc:"Conçois et réalise un projet complet utilisant au moins 3 outils Gemini.",themes:["Assistant scolaire","Guide touristique","Encyclopédie animale","Carnet de révision","Magazine numérique","Projet scientifique"],
et:[{n:"Choix du thème",d:"Sélectionne et fais valider.",dur:"1 séance"},{n:"Cahier des charges",d:"Rédige le cahier des charges complet.",dur:"1 séance"},{n:"Recherche",d:"Deep Research + NotebookLM.",dur:"2 séances"},{n:"Création de contenu",d:"Gemini Chat + Canvas.",dur:"2 séances"},{n:"Création visuelle",d:"Gemini Images.",dur:"1 séance"},{n:"Assemblage",d:"Assemble, révise, finalise.",dur:"1 séance"},{n:"Présentation",d:"Présente au club.",dur:"1 séance"}],
docs:["Cahier des charges","Fiches de recherche","Contenu rédigé","Visuels générés","Présentation finale","Auto-évaluation"],
cr:[{n:"Qualité du cahier des charges",p:15},{n:"Maîtrise des outils Gemini",p:25},{n:"Qualité du contenu",p:20},{n:"Qualité visuelle",p:15},{n:"Présentation orale",p:15},{n:"Auto-évaluation",p:10}]};

/* ═══ BADGES ═══ */
var BD=[
{id:"first",n:"Premiers pas",d:"Ouvre ton premier module",ic:"fa-solid fa-shoe-prints",cl:"#0D9488"},
{id:"m1",n:"Chat Master",d:"Termine le module 1",ic:"fa-solid fa-comments",cl:"#0D9488"},
{id:"m2",n:"Research Pro",d:"Termine le module 2",ic:"fa-solid fa-magnifying-glass",cl:"#0891B2"},
{id:"m3",n:"Content Creator",d:"Termine le module 3",ic:"fa-solid fa-pen-fancy",cl:"#059669"},
{id:"m4",n:"Notebook Expert",d:"Termine le module 4",ic:"fa-solid fa-book-open",cl:"#EA580C"},
{id:"m5",n:"Creative Mind",d:"Termine le module 5",ic:"fa-solid fa-palette",cl:"#E11D48"},
{id:"q10",n:"Quiz Champion",d:"10/10 à un quiz",ic:"fa-solid fa-trophy",cl:"#F59E0B"},
{id:"exs",n:"Exercise Star",d:"Tous les exos d'un module",ic:"fa-solid fa-star",cl:"#8B5CF6"},
{id:"ph",n:"Project Hero",d:"Projet final terminé",ic:"fa-solid fa-rocket",cl:"#EC4899"},
{id:"gr",n:"Diplômé IA",d:"Tous les modules terminés",ic:"fa-solid fa-graduation-cap",cl:"#0D9488"}
];

/* ═══ RESSOURCES ═══ */
var RES={
liens:[{n:"Gemini",u:"https://gemini.google.com",d:"Assistant IA de Google"},{n:"NotebookLM",u:"https://notebooklm.google.com",d:"Carnet de notes intelligent"},{n:"Google Éducation",u:"https://edu.google.com",d:"Ressources éducatives"},{n:"Be Internet Awesome",u:"https://beinternetawesome.withgoogle.com",d:"Citoyenneté numérique"}],
vid:[{t:"Comprendre l'IA en 5 min",d:"Vidéo introductive"},{t:"Comment utiliser Gemini",d:"Tutoriel"},{t:"NotebookLM",d:"Démonstration"},{t:"Éthique de l'IA",d:"Réflexion responsable"}],
doc:[{t:"Guide du prompt efficace",d:"Rédiger de bons prompts"},{t:"Vérifier ses sources",d:"Évaluer la fiabilité"},{t:"Droits et devoirs numériques",d:"Cadre légal et éthique"},{t:"Créer un exposé avec l'IA",d:"Méthodologie complète"}],
faq:[{q:"Gemini peut-il se tromper ?",a:"Oui ! Toujours vérifier les informations importantes avec d'autres sources."},{q:"Mes données sont-elles en sécurité ?",a:"Ne partage jamais d'informations personnelles avec un outil d'IA."},{q:"Puis-je utiliser les textes de Gemini pour mes devoirs ?",a:"Comme aide, mais rédige toi-même et cite l'IA."},{q:"L'IA va-t-elle remplacer les professeurs ?",a:"Non. L'IA est un outil qui aide, elle ne remplace pas l'humain."},{q:"Comment savoir si une image est générée par IA ?",a:"Ce n'est pas toujours facile. D'où l'importance d'indiquer l'usage de l'IA."}]
};

/* ═══ ÉTAT ═══ */
var S={v:'home',m:null,tb:'pres',nm:'',th:'light',pr:{},bdg:[],qs:{}};

function dp(){var p={};for(var i=1;i<=5;i++)p[i]={sd:[],qs:null,qa:{},xd:[],pd:false};p.fp={d:false,st:[]};return p}

function ld(){
  try{var s=JSON.parse(localStorage.getItem('cia'));if(s)S={v:s.v||'home',m:s.m||null,tb:s.tb||'pres',nm:s.nm||'',th:s.th||'light',pr:s.pr||dp(),bdg:s.bdg||[],qs:{}}}catch(e){}
  if(!S.pr||!S.pr[1])S.pr=dp();
  ath(S.th);
  var ni=document.getElementById('nameInp');if(ni)ni.value=S.nm||'';
}

function sv(){
  try{localStorage.setItem('cia',JSON.stringify({v:S.v,m:S.m,tb:S.tb,nm:S.nm,th:S.th,pr:S.pr,bdg:S.bdg}))}catch(e){}
}

/* ═══ HELPERS ═══ */
function mp(i){
  var p=S.pr[i];if(!p)return 0;
  var sc=0,tot=6;
  if(p.sd&&p.sd.indexOf('pres')>=0)sc++;
  if(p.sd&&p.sd.indexOf('disc')>=0)sc++;
  if(p.sd&&p.sd.indexOf('tutos')>=0)sc++;
  if(p.sd&&p.sd.indexOf('exos')>=0)sc++;
  if(p.qs!=null)sc++;
  if(p.pd)sc++;
  return Math.round(sc/tot*100);
}

function ap(){var t=0;for(var i=1;i<=5;i++)t+=mp(i);return Math.round(t/5)}
function bq(){var b=0;for(var i=1;i<=5;i++){var s=S.pr[i]?S.pr[i].qs:null;if(s>b)b=s}return b}
function nm(){for(var i=1;i<=5;i++)if(mp(i)<100)return i;return 1}

function ms(mi,sec){
  if(!S.pr[mi])S.pr[mi]={sd:[],qs:null,qa:{},xd:[],pd:false};
  if(!S.pr[mi].sd)S.pr[mi].sd=[];
  if(S.pr[mi].sd.indexOf(sec)<0){S.pr[mi].sd.push(sec);sv();ckb()}
}

function ath(t){document.documentElement.setAttribute('data-theme',t);S.th=t;sv()}

function tst(msg,tp){
  var c=document.getElementById('toastBox');
  var d=document.createElement('div');
  d.className='toast '+(tp||'inf');
  var ic=tp==='ok'?'check-circle':tp==='er'?'times-circle':'info-circle';
  d.innerHTML='<i class="fa-solid fa-'+ic+'"></i>'+msg;
  c.appendChild(d);
  setTimeout(function(){d.remove()},3500);
}

function cft(){
  var cls=['#0D9488','#F59E0B','#10B981','#E11D48','#8B5CF6','#0891B2'];
  for(var i=0;i<35;i++){
    var d=document.createElement('div');d.className='cft-p';
    d.style.left=Math.random()*100+'vw';
    d.style.background=cls[Math.floor(Math.random()*cls.length)];
    d.style.animationDelay=Math.random()*2+'s';
    d.style.borderRadius=Math.random()>.5?'50%':'0';
    document.body.appendChild(d);
    setTimeout(function(el){el.remove()},4000,d);
  }
}

function smhtml(h){document.getElementById('modalC').innerHTML=h;document.getElementById('modalOv').classList.add('show')}
function cm(){document.getElementById('modalOv').classList.remove('show')}

/* ═══ NAVIGATION ═══ */
function go(v,m,tb){
  S.v=v;if(m!=null&&m!==undefined)S.m=m;if(tb)S.tb=tb;S.qs={};sv();ren();csb();window.scrollTo(0,0);
}

function ren(){rsb();rc();ut();ckb();uc()}

function rsb(){
  var n=document.getElementById('sNav');
  var items=[
    {v:'home',i:'fa-solid fa-house',l:'Accueil',c:null,mi:null},
    {v:'mod',i:M[0].ic,l:'M1 : Gemini Chat',c:M[0].cl,mi:1},
    {v:'mod',i:M[1].ic,l:'M2 : Deep Research',c:M[1].cl,mi:2},
    {v:'mod',i:M[2].ic,l:'M3 : Canvas & Docs',c:M[2].cl,mi:3},
    {v:'mod',i:M[3].ic,l:'M4 : NotebookLM',c:M[3].cl,mi:4},
    {v:'mod',i:M[4].ic,l:'M5 : Créer avec l\'IA',c:M[4].cl,mi:5},
    {v:'fp',i:'fa-solid fa-flag-checkered',l:'Projet Final',c:null,mi:null},
    {v:'res',i:'fa-solid fa-book',l:'Ressources',c:null,mi:null},
    {v:'bdg',i:'fa-solid fa-medal',l:'Badges',c:null,mi:null}
  ];
  var h='<div class="nav-st">Navigation</div>';
  for(var k=0;k<items.length;k++){
    var it=items[k];
    var act=(it.v==='home'&&S.v==='home')||(it.v==='mod'&&S.v==='mod'&&S.m===it.mi)||(it.v==='fp'&&S.v==='fp')||(it.v==='res'&&S.v==='res')||(it.v==='bdg'&&S.v==='bdg');
    var dot=it.c?'<span class="ndot" style="background:'+it.c+'"></span>':'';
    var pr='';
    if(it.mi)pr='<span class="nprog">'+mp(it.mi)+'%</span>';
    h+='<div class="ni'+(act?' act':'')+'" onclick="go(\''+it.v+'\''+(it.mi?','+it.mi:'')+',\''+(it.mi?'pres':'')+'\')">'+dot+'<i class="'+it.i+' ic"></i><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+it.l+'</span>'+pr+'</div>';
  }
  n.innerHTML=h;
}

function ut(){
  var ts={home:'Tableau de bord',mod:S.m?M[S.m-1].t:'',fp:'Projet Final',res:'Ressources',bdg:'Mes Badges'};
  document.getElementById('topTitle').textContent=ts[S.v]||'Club IA';
}

function osb(){document.getElementById('sidebar').classList.add('open')}
function csb(){document.getElementById('sidebar').classList.remove('open')}

/* ═══ RENDU CONTENU ═══ */
function rc(){
  var el=document.getElementById('content');
  switch(S.v){
    case'home':el.innerHTML=rh();break;
    case'mod':el.innerHTML=rm();break;
    case'fp':el.innerHTML=rf();break;
    case'res':el.innerHTML=rr();break;
    case'bdg':el.innerHTML=rb();break;
    default:el.innerHTML=rh();
  }
  setTimeout(function(){ia();iq()},50);
}

/* ═══ ACCUEIL ═══ */
function rh(){
  var nm=S.nm||'jeune explorateur';
  var tp=ap();
  var cm=0;for(var i=1;i<=5;i++)if(mp(i)===100)cm++;
  var te=0,ce=0;for(var i=0;i<5;i++){te+=M[i].exos.deb.length+M[i].exos.int.length+M[i].exos.adv.length;ce+=(S.pr[i+1]&&S.pr[i+1].xd)?S.pr[i+1].xd.length:0;}
  var h='<div class="anim">';
  h+='<div class="hg" style="border-radius:var(--rd);padding:32px 24px;margin-bottom:24px;color:#fff;position:relative;overflow:hidden">';
  h+='<div style="position:absolute;top:-40px;right:-40px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.08)"></div>';
  h+='<div style="position:relative;z-index:1">';
  h+='<p style="font-size:12px;opacity:.85;font-weight:500;margin-bottom:4px">Club Intelligence Artificielle</p>';
  h+='<h2 style="font-size:26px;font-weight:900;margin-bottom:8px;font-family:var(--fd)">Bienvenue, '+nm+' !</h2>';
  h+='<p style="font-size:14px;opacity:.9;max-width:460px;margin-bottom:16px">Découvre les outils Gemini de Google et deviens un expert de l\'IA.</p>';
  h+='<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">';
  h+='<div style="background:rgba(255,255,255,.2);border-radius:var(--rds);padding:5px 12px;backdrop-filter:blur(10px)"><span style="font-weight:800;font-size:16px">'+tp+'%</span><span style="font-size:11px;opacity:.85;margin-left:4px">progression</span></div>';
  h+='<button class="btn" style="background:rgba(255,255,255,.2);color:#fff;backdrop-filter:blur(10px)" onclick="go(\'mod\','+nm()+',\'pres\')">'+(tp===0?'Commencer le parcours':'Continuer')+' <i class="fa-solid fa-arrow-right"></i></button>';
  h+='</div></div></div>';

  h+='<div class="g2" style="margin-bottom:24px">';
  h+='<div class="crd" style="display:flex;align-items:center;gap:12px;padding:14px"><div style="width:40px;height:40px;border-radius:var(--rds);background:var(--prbg);color:var(--pr);display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fa-solid fa-book"></i></div><div><div style="font-size:22px;font-weight:800;font-family:var(--fd)">'+cm+'/5</div><div style="font-size:11px;color:var(--mt)">Modules terminés</div></div></div>';
  h+='<div class="crd" style="display:flex;align-items:center;gap:12px;padding:14px"><div style="width:40px;height:40px;border-radius:var(--rds);background:var(--acbg);color:var(--ac);display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fa-solid fa-dumbbell"></i></div><div><div style="font-size:22px;font-weight:800;font-family:var(--fd)">'+ce+'/'+te+'</div><div style="font-size:11px;color:var(--mt)">Exercices</div></div></div>';
  h+='<div class="crd" style="display:flex;align-items:center;gap:12px;padding:14px"><div style="width:40px;height:40px;border-radius:var(--rds);background:var(--okbg);color:var(--ok);display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fa-solid fa-medal"></i></div><div><div style="font-size:22px;font-weight:800;font-family:var(--fd)">'+S.bdg.length+'/'+BD.length+'</div><div style="font-size:11px;color:var(--mt)">Badges</div></div></div>';
  h+='<div class="crd" style="display:flex;align-items:center;gap:12px;padding:14px"><div style="width:40px;height:40px;border-radius:var(--rds);background:var(--erbg);color:var(--er);display:flex;align-items:center;justify-content:center;font-size:16px"><i class="fa-solid fa-bullseye"></i></div><div><div style="font-size:22px;font-weight:800;font-family:var(--fd)">'+bq()+'/10</div><div style="font-size:11px;color:var(--mt)">Meilleur quiz</div></div></div>';
  h+='</div>';

  h+='<div class="crd" style="margin-bottom:24px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><h3 style="font-size:14px">Progression globale</h3><span class="badge bdg-p">'+tp+'%</span></div><div class="pbar" style="height:10px"><div class="fill" style="width:'+tp+'%"></div></div></div>';

  h+='<h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Les 5 modules</h3>';
  h+='<div class="g2" style="margin-bottom:24px">';
  for(var i=0;i<5;i++){
    var m=M[i];var p=mp(i+1);
    h+='<div class="crd crd-c" onclick="go(\'mod\','+(i+1)+',\'pres\')">';
    h+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
    h+='<div style="width:36px;height:36px;border-radius:var(--rds);background:'+m.cl+';display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px"><i class="'+m.ic+'"></i></div>';
    h+='<div><h3 style="font-size:13px">'+m.t+'</h3><p style="font-size:10px;color:var(--mt)">'+m.tool+'</p></div></div>';
    h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span class="badge '+(p===100?'bdg-ok':'bdg-m')+'">'+(p===100?'Terminé':p+'%')+'</span></div>';
    h+='<div class="pbar"><div class="fill" style="width:'+p+'%;background:linear-gradient(90deg,'+m.cl+','+m.cl+'dd)"></div></div></div>';
  }
  h+='</div>';

  h+='<div class="crd crd-c crd-a" onclick="go(\'fp\')" style="display:flex;align-items:center;gap:14px">';
  h+='<div style="width:44px;height:44px;border-radius:var(--rds);background:linear-gradient(135deg,var(--pr),var(--ac));display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;flex-shrink:0"><i class="fa-solid fa-flag-checkered"></i></div>';
  h+='<div style="flex:1"><h3 style="font-size:14px;margin-bottom:2px">Projet Final : '+FP.t+'</h3><p style="font-size:11px;color:var(--mt)">Valide tes compétences avec un projet complet</p></div>';
  h+='<i class="fa-solid fa-chevron-right" style="color:var(--mt)"></i></div>';

  h+='</div>';
  return h;
}

/* ═══ MODULE ═══ */
function rm(){
  var m=M[S.m-1];if(!m)return '<p>Module introuvable</p>';
  var tbs=['Présentation','Découverte','Tutoriels','Exercices','Quiz','Mini-projet'];
  var ks=['pres','disc','tutos','exos','quiz','proj'];
  var ct='';
  switch(S.tb){
    case'pres':ct=rp(m);break;case'disc':ct=rd(m);break;case'tutos':ct=rt(m);break;case'exos':ct=re(m);break;case'quiz':ct=rq(m);break;case'proj':ct=rj(m);break;default:ct=rp(m);
  }
  var h='<div class="anim">';
  h+='<div class="mhdr" style="background:linear-gradient(135deg,'+m.cl+','+m.cl+'cc)">';
  h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><i class="'+m.ic+'" style="font-size:18px"></i><span class="badge" style="background:rgba(255,255,255,.2);color:#fff">Module '+m.id+'</span></div>';
  h+='<h2>'+m.t+'</h2><p>Outil : '+m.tool+' — '+m.pres.dur+'</p>';
  h+='<div class="pbar" style="margin-top:8px;max-width:260px"><div class="fill" style="width:'+mp(m.id)+'%"></div></div></div>';

  h+='<div class="tabs" style="margin-bottom:18px">';
  for(var i=0;i<tbs.length;i++){
    h+='<div class="tab'+(S.tb===ks[i]?' on':'')+'" onclick="stb(\''+ks[i]+'\')">'+tbs[i]+'</div>';
  }
  h+='</div><div>'+ct+'</div></div>';
  return h;
}

function stb(tb){S.tb=tb;S.qs={};sv();rc();window.scrollTo(0,0)}

function rp(m){
  var h='<div class="g2" style="margin-bottom:18px">';
  h+='<div class="crd crd-a" style="border-left-color:'+m.cl+'"><h3 style="font-size:14px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-bullseye" style="color:'+m.cl+'"></i> Objectifs</h3><ul style="list-style:none;padding:0">';
  for(var i=0;i<m.pres.obj.length;i++)h+='<li style="padding:3px 0;display:flex;gap:6px;align-items:flex-start"><i class="fa-solid fa-check-circle" style="color:var(--ok);margin-top:3px;flex-shrink:0;font-size:12px"></i><span style="font-size:12px">'+m.pres.obj[i]+'</span></li>';
  h+='</ul></div>';
  h+='<div class="crd"><h3 style="font-size:14px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-star" style="color:var(--ac)"></i> Compétences visées</h3><div style="display:flex;flex-wrap:wrap;gap:6px">';
  for(var i=0;i<m.pres.comp.length;i++)h+='<span class="badge bdg-a">'+m.pres.comp[i]+'</span>';
  h+='</div><div style="margin-top:14px;padding-top:10px;border-top:1px solid var(--bd)"><div style="display:flex;align-items:center;gap:6px"><i class="fa-regular fa-clock" style="color:var(--mt);font-size:12px"></i><span style="font-size:12px;color:var(--tx2)">'+m.pres.dur+'</span></div></div></div></div>';
  h+='<button class="btn btn-p btn-lg" style="width:100%" onclick="ms('+m.id+',\'pres\');stb(\'disc\')">Commencer la découverte <i class="fa-solid fa-arrow-right"></i></button>';
  return h;
}

function rd(m){
  var d=m.disc;
  var h='<div class="crd" style="margin-bottom:12px"><h3 style="font-size:15px;margin-bottom:8px">Qu\'est-ce que '+m.tool+' ?</h3><p style="color:var(--tx2);line-height:1.8;font-size:13px">'+d.desc+'</p></div>';
  h+='<div class="crd" style="margin-bottom:12px"><h3 style="font-size:14px;margin-bottom:8px"><i class="fa-solid fa-gears" style="color:'+m.cl+'"></i> Comment ça fonctionne ?</h3><p style="color:var(--tx2);line-height:1.8;font-size:13px">'+d.fonc+'</p></div>';
  h+='<div class="crd" style="margin-bottom:12px"><h3 style="font-size:14px;margin-bottom:8px"><i class="fa-solid fa-lightbulb" style="color:var(--ac)"></i> Cas d\'utilisation</h3><div class="g2">';
  for(var i=0;i<d.cas.length;i++)h+='<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;background:var(--bg);border-radius:var(--rds);font-size:12px"><i class="fa-solid fa-check" style="color:var(--ok);font-size:10px"></i>'+d.cas[i]+'</div>';
  h+='</div></div>';
  h+='<div class="g2" style="margin-bottom:12px">';
  h+='<div class="ib tip"><i class="fa-solid fa-thumbs-up"></i><div><strong>Conseils :</strong><ul style="margin-top:4px;padding-left:14px">';
  for(var i=0;i<d.con.length;i++)h+='<li style="margin-bottom:2px;font-size:12px">'+d.con[i]+'</li>';
  h+='</ul></div></div>';
  h+='<div class="ib warn"><i class="fa-solid fa-triangle-exclamation"></i><div><strong>Erreurs à éviter :</strong><ul style="margin-top:4px;padding-left:14px">';
  for(var i=0;i<d.err.length;i++)h+='<li style="margin-bottom:2px;font-size:12px">'+d.err[i]+'</li>';
  h+='</ul></div></div></div>';
  h+='<div class="ib tip" style="margin-bottom:16px"><i class="fa-solid fa-shield-halved"></i><div><strong>Bonnes pratiques :</strong> '+d.bp.join(' — ')+'</div></div>';
  h+='<button class="btn btn-p btn-lg" style="width:100%" onclick="ms('+m.id+',\'disc\');stb(\'tutos\')">Passer aux tutoriels <i class="fa-solid fa-arrow-right"></i></button>';
  return h;
}

function rt(m){
  var h='<h3 style="font-size:15px;margin-bottom:12px">Tutoriels guidés</h3>';
  for(var ti=0;ti<m.tutos.length;ti++){
    var t=m.tutos[ti];
    h+='<div class="acc'+(ti===0?' open':'')+'"><div class="acc-h"><span><i class="fa-solid fa-play-circle" style="color:'+m.cl+';margin-right:6px"></i>'+t.t+'</span><i class="fa-solid fa-chevron-down chev"></i></div><div class="acc-b"><div style="padding:12px 14px"><div class="sl">';
    for(var si=0;si<t.s.length;si++){
      h+='<div class="si"><div><strong style="font-size:12px">Étape '+(si+1)+'</strong><p style="font-size:12px;color:var(--tx2);margin-top:2px">'+t.s[si]+'</p></div></div>';
    }
    h+='</div></div></div></div>';
  }
  h+='<button class="btn btn-p" style="margin-top:14px;width:100%" onclick="ms('+m.id+',\'tutos\');stb(\'exos\')">Passer aux exercices <i class="fa-solid fa-arrow-right"></i></button>';
  return h;
}

function re(m){
  var pr=S.pr[m.id];if(!pr)pr={sd:[],qs:null,qa:{},xd:[],pd:false};
  var all=[];
  for(var i=0;i<m.exos.deb.length;i++)all.push({t:m.exos.deb[i].t,d:m.exos.deb[i].d,c:m.exos.deb[i].c,l:'deb'});
  for(var i=0;i<m.exos.int.length;i++)all.push({t:m.exos.int[i].t,d:m.exos.int[i].d,c:m.exos.int[i].c,l:'int'});
  for(var i=0;i<m.exos.adv.length;i++)all.push({t:m.exos.adv[i].t,d:m.exos.adv[i].d,c:m.exos.adv[i].c,l:'adv'});
  var ln={deb:'Débutant',int:'Intermédiaire',adv:'Avancé'};
  var h='<h3 style="font-size:15px;margin-bottom:12px">Exercices pratiques</h3>';
  var cl='';
  for(var ei=0;ei<all.length;ei++){
    var ex=all[ei];
    if(ex.l!==cl){cl=ex.l;h+='<div class="exl '+ex.l+'"><span class="d"></span>'+ln[ex.l]+'</div>'}
    var key=m.id+'_'+ei;
    var done=pr.xd&&pr.xd.indexOf(key)>=0;
    h+='<div class="acc"><div class="acc-h"><span style="display:flex;align-items:center;gap:6px">'+(done?'<i class="fa-solid fa-check-circle" style="color:var(--ok)"></i>':'<i class="fa-regular fa-circle" style="color:var(--mt)"></i>')+' '+ex.t+'</span><i class="fa-solid fa-chevron-down chev"></i></div><div class="acc-b"><div style="padding:12px 14px"><p style="font-size:12px;color:var(--tx2);margin-bottom:10px">'+ex.d+'</p><div class="ib tip"><i class="fa-solid fa-lightbulb"></i><div><strong>Correction :</strong> '+ex.c+'</div></div>';
    if(!done)h+='<button class="btn btn-p btn-sm" style="margin-top:8px" onclick="dex('+m.id+','+ei+')">Marquer comme terminé</button>';
    h+='</div></div></div>';
  }
  h+='<button class="btn btn-p" style="margin-top:14px;width:100%" onclick="ms('+m.id+',\'exos\');stb(\'quiz\')">Passer au quiz <i class="fa-solid fa-arrow-right"></i></button>';
  return h;
}

function dex(mi,ei){
  var key=mi+'_'+ei;
  if(!S.pr[mi].xd)S.pr[mi].xd=[];
  if(S.pr[mi].xd.indexOf(key)<0){S.pr[mi].xd.push(key);sv();tst('Exercice terminé !','ok');ckb();rc()}
}

/* ═══ QUIZ ═══ */
function rq(m){
  var pr=S.pr[m.id];
  var sub=pr&&pr.qs!=null;
  var qs=m.quiz;
  var lt=['A','B','C','D'];
  var h='<h3 style="font-size:15px;margin-bottom:4px">Quiz : '+m.t+'</h3><p style="font-size:12px;color:var(--mt);margin-bottom:14px">10 questions — Sélectionne ta réponse puis valide.</p>';
  if(sub){
    var sc=pr.qs;
    var col=sc>=8?'var(--ok)':sc>=5?'var(--ac)':'var(--er)';
    var msg=sc>=8?'Excellent travail !':sc>=5?'Pas mal, tu peux faire mieux !':'Continue de réviser !';
    h+='<div class="crd" style="margin-bottom:14px;text-align:center;padding:20px"><div style="font-size:42px;font-weight:900;font-family:var(--fd);color:'+col+'">'+sc+'/10</div><p style="font-size:13px;color:var(--tx2);margin-top:4px">'+msg+'</p>'+(sc===10?'<p style="color:var(--ac);font-weight:700;margin-top:4px"><i class="fa-solid fa-trophy"></i> Score parfait !</p>':'')+'</div>';
  }
  for(var qi=0;qi<qs.length;qi++){
    var q=qs[qi];
    var uAns=S.qs[qi]!=null?S.qs[qi]:(sub&&pr.qa?pr.qa[qi]:null);
    h+='<div class="qq"><p style="font-weight:600;margin-bottom:8px;font-size:13px">'+(qi+1)+'. '+q.q+'</p>';
    for(var oi=0;oi<q.o.length;oi++){
      var cls='';
      if(sub){if(oi===q.a)cls='ok';else if(oi===uAns&&oi!==q.a)cls='ko'}
      else if(uAns===oi)cls='sel';
      h+='<div class="qo '+cls+'" onclick="sa('+qi+','+oi+')"><span class="qol">'+lt[oi]+'</span><span>'+q.o[oi]+'</span></div>';
    }
    if(sub&&uAns!==q.a)h+='<p style="font-size:11px;color:var(--ok);margin-top:4px"><i class="fa-solid fa-check"></i> Bonne réponse : '+q.o[q.a]+'</p>';
    h+='</div>';
  }
  if(!sub)h+='<button class="btn btn-p btn-lg" style="width:100%;margin-top:6px" onclick="sq('+m.id+')">Valider mes réponses</button>';
  else h+='<button class="btn btn-o" style="width:100%;margin-top:6px" onclick="rqz('+m.id+')">Refaire le quiz</button>';
  return h;
}

function sa(qi,oi){S.qs[qi]=oi;var opts=document.querySelectorAll('.qq');if(opts[qi]){var os=opts[qi].querySelectorAll('.qo');for(var i=0;i<os.length;i++){os[i].classList.remove('sel');if(i===oi)os[i].classList.add('sel')}}}

function sq(mi){
  var m=M[mi-1];var sc=0;var ans={};
  for(var qi=0;qi<m.quiz.length;qi++){
    var u=S.qs[qi];ans[qi]=u;
    if(u===m.quiz[qi].a)sc++;
  }
  S.pr[mi].qs=sc;S.pr[mi].qa=ans;sv();
  if(sc===10){tst('Score parfait ! Quiz Champion !','ok');cft()}else if(sc>=7)tst('Bravo ! '+sc+'/10','ok');else tst(sc+'/10 — Continue de réviser !','inf');
  ckb();rc();
}

function rqz(mi){S.pr[mi].qs=null;S.pr[mi].qa={};S.qs={};sv();rc()}

/* ═══ MINI-PROJET ═══ */
function rj(m){
  var pr=S.pr[m.id];var done=pr&&pr.pd;
  var h='<h3 style="font-size:15px;margin-bottom:12px">Mini-projet : '+m.proj.t+'</h3>';
  h+='<div class="crd" style="margin-bottom:12px"><h4 style="font-size:13px;margin-bottom:8px"><i class="fa-solid fa-bullseye" style="color:'+m.cl+'"></i> Objectifs</h4><ul style="list-style:none;padding:0">';
  for(var i=0;i<m.proj.obj.length;i++)h+='<li style="padding:2px 0;display:flex;gap:5px;font-size:12px"><i class="fa-solid fa-check-circle" style="color:var(--ok);margin-top:3px;flex-shrink:0;font-size:11px"></i>'+m.proj.obj[i]+'</li>';
  h+='</ul></div>';
  h+='<div class="crd" style="margin-bottom:12px"><h4 style="font-size:13px;margin-bottom:8px"><i class="fa-solid fa-box-open" style="color:var(--ac)"></i> Matériel</h4><ul style="list-style:none;padding:0">';
  for(var i=0;i<m.proj.mat.length;i++)h+='<li style="padding:2px 0;font-size:12px;display:flex;gap:5px"><i class="fa-solid fa-wrench" style="color:var(--mt);margin-top:3px;flex-shrink:0;font-size:10px"></i>'+m.proj.mat[i]+'</li>';
  h+='</ul></div>';
  h+='<div class="crd" style="margin-bottom:12px"><h4 style="font-size:13px;margin-bottom:8px"><i class="fa-solid fa-list-ol" style="color:'+m.cl+'"></i> Étapes</h4><div class="sl">';
  for(var i=0;i<m.proj.et.length;i++)h+='<div class="si"><div><strong style="font-size:12px">Étape '+(i+1)+'</strong><p style="font-size:12px;color:var(--tx2);margin-top:2px">'+m.proj.et[i]+'</p></div></div>';
  h+='</div></div>';
  h+='<div class="crd" style="margin-bottom:16px"><h4 style="font-size:13px;margin-bottom:8px"><i class="fa-solid fa-clipboard-check" style="color:var(--ok)"></i> Critères de réussite</h4><ul style="list-style:none;padding:0">';
  for(var i=0;i<m.proj.cr.length;i++)h+='<li style="padding:2px 0;display:flex;gap:5px;font-size:12px"><i class="fa-solid fa-star" style="color:var(--ac);margin-top:3px;flex-shrink:0;font-size:10px"></i>'+m.proj.cr[i]+'</li>';
  h+='</ul></div>';
  if(done)h+='<div class="crd" style="text-align:center;padding:18px"><i class="fa-solid fa-check-circle" style="font-size:28px;color:var(--ok);margin-bottom:6px"></i><p style="font-weight:700;color:var(--ok)">Mini-projet terminé !</p></div>';
  else h+='<button class="btn btn-p btn-lg" style="width:100%" onclick="dpr('+m.id+')">Marquer le mini-projet comme terminé</button>';
  return h;
}

function dpr(mi){S.pr[mi].pd=true;sv();tst('Mini-projet terminé !','ok');cft();ckb();rc()}

/* ═══ PROJET FINAL ═══ */
function rf(){
  var fp=S.pr.fp;
  var h='<div class="anim">';
  h+='<div class="mhdr" style="background:linear-gradient(135deg,var(--pr),var(--ac))">';
  h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><i class="fa-solid fa-flag-checkered" style="font-size:18px"></i><span class="badge" style="background:rgba(255,255,255,.2);color:#fff">Projet Final</span></div>';
  h+='<h2>'+FP.t+'</h2><p>Utilise au moins 3 outils Gemini</p></div>';

  h+='<div class="crd" style="margin-bottom:14px"><p style="font-size:13px;color:var(--tx2);line-height:1.8">'+FP.desc+'</p></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-palette" style="color:var(--ac)"></i> Thèmes proposés</h3><div style="display:flex;flex-wrap:wrap;gap:6px">';
  for(var i=0;i<FP.themes.length;i++)h+='<span class="badge bdg-a">'+FP.themes[i]+'</span>';
  h+='</div></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-route" style="color:var(--pr)"></i> Étapes détaillées</h3><div class="sl">';
  for(var i=0;i<FP.et.length;i++){
    var done=fp&&fp.st&&fp.st.indexOf(i)>=0;
    h+='<div class="si"><div><strong style="font-size:12px">Étape '+(i+1)+' : '+FP.et[i].n+' <span style="color:var(--mt);font-weight:400">('+FP.et[i].dur+')</span></strong><p style="font-size:12px;color:var(--tx2);margin-top:2px">'+FP.et[i].d+'</p>';
    if(!done)h+='<button class="btn btn-o btn-sm" style="margin-top:6px" onclick="dfs('+i+')">Valider cette étape</button>';
    else h+='<span class="badge bdg-ok" style="margin-top:4px"><i class="fa-solid fa-check"></i> Validée</span>';
    h+='</div></div>';
  }
  h+='</div></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-file-lines" style="color:var(--pr)"></i> Documents à produire</h3><ul style="list-style:none;padding:0">';
  for(var i=0;i<FP.docs.length;i++)h+='<li style="padding:3px 0;font-size:12px;display:flex;gap:5px"><i class="fa-solid fa-file" style="color:var(--pr);margin-top:3px;flex-shrink:0;font-size:11px"></i>'+FP.docs[i]+'</li>';
  h+='</ul></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-chart-bar" style="color:var(--ac)"></i> Évaluation</h3><div style="display:grid;gap:6px">';
  for(var i=0;i<FP.cr.length;i++)h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 10px;background:var(--bg);border-radius:var(--rds)"><span style="font-size:12px">'+FP.cr[i].n+'</span><span class="badge bdg-p">'+FP.cr[i].p+' pts</span></div>';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--prbg);border-radius:var(--rds);margin-top:2px"><strong style="font-size:13px">Total</strong><span class="badge bdg-p" style="font-size:12px">100 pts</span></div>';
  h+='</div></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-table" style="color:var(--ok)"></i> Grille de compétences</h3>';
  h+='<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr style="background:var(--bg)"><th style="padding:6px 8px;text-align:left;border-bottom:2px solid var(--bd)">Compétence</th><th style="padding:6px 8px;text-align:center;border-bottom:2px solid var(--bd)">Débutant</th><th style="padding:6px 8px;text-align:center;border-bottom:2px solid var(--bd)">Intermédiaire</th><th style="padding:6px 8px;text-align:center;border-bottom:2px solid var(--bd)">Avancé</th></tr></thead><tbody>';
  var comps=[
    ["Outils Gemini","Utilise 1 outil avec aide","2-3 outils en autonomie","Maîtrise 3+ outils et combine"],
    ["Rechercher et vérifier","Trouve des infos","Vérifie avec des sources","Croise et analyse les sources"],
    ["Créer du contenu","Produit un texte simple","Structure et améliore","Contenu original et abouti"],
    ["Analyser des documents","Lit et résume","Crée des fiches de révision","Synthétise plusieurs documents"],
    ["Créer des visuels","Génère une image","Affiche cohérente","Campagne visuelle"],
    ["Présenter un projet","Présente brièvement","Explique clairement","Argumente et répond aux questions"]
  ];
  for(var i=0;i<comps.length;i++){
    h+='<tr><td style="padding:6px 8px;border-bottom:1px solid var(--bd)">'+comps[i][0]+'</td><td style="padding:6px 8px;text-align:center;border-bottom:1px solid var(--bd)">'+comps[i][1]+'</td><td style="padding:6px 8px;text-align:center;border-bottom:1px solid var(--bd)">'+comps[i][2]+'</td><td style="padding:6px 8px;text-align:center;border-bottom:1px solid var(--bd)">'+comps[i][3]+'</td></tr>';
  }
  h+='</tbody></table></div></div>';

  h+='<div class="crd" style="margin-bottom:16px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-pen-to-square" style="color:var(--pr)"></i> Auto-évaluation</h3><div style="display:grid;gap:8px">';
  var aeq=['Utilisation des outils Gemini','Qualité du contenu','Créativité','Présentation','Effort personnel'];
  for(var i=0;i<aeq.length;i++){
    h+='<div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:3px">'+aeq[i]+'</label><div style="display:flex;gap:3px">';
    for(var v=1;v<=5;v++)h+='<button class="btn btn-o btn-sm" style="width:32px;padding:4px 0" onclick="aeval(this)">'+v+'</button>';
    h+='</div></div>';
  }
  h+='</div></div>';

  if(fp&&fp.d)h+='<div class="crd" style="text-align:center;padding:20px"><i class="fa-solid fa-trophy" style="font-size:36px;color:var(--ac);margin-bottom:8px"></i><h3 style="color:var(--ok);margin-bottom:4px">Projet final terminé !</h3><p style="font-size:13px;color:var(--tx2)">Tu peux générer ton certificat depuis la barre en haut.</p></div>';
  else h+='<button class="btn btn-p btn-lg" style="width:100%" onclick="dfp()">Valider le projet final</button>';

  h+='</div>';
  return h;
}

function dfs(i){
  if(!S.pr.fp)S.pr.fp={d:false,st:[]};
  if(!S.pr.fp.st)S.pr.fp.st=[];
  if(S.pr.fp.st.indexOf(i)<0){S.pr.fp.st.push(i);sv();tst('Étape validée !','ok');rc()}
}

function dfp(){
  if(!S.pr.fp)S.pr.fp={d:false,st:[]};
  S.pr.fp.d=true;sv();tst('Projet final terminé ! Félicitations !','ok');cft();ckb();rc();
}

function aeval(btn){
  var p=btn.parentElement;var bs=p.querySelectorAll('.btn');
  for(var i=0;i<bs.length;i++){bs[i].classList.remove('btn-p');bs[i].classList.add('btn-o')}
  btn.classList.remove('btn-o');btn.classList.add('btn-p');
}

/* ═══ RESSOURCES ═══ */
function rr(){
  var h='<div class="anim"><h2 style="font-size:18px;margin-bottom:18px">Ressources</h2>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-link" style="color:var(--pr)"></i> Liens officiels</h3><div class="g2">';
  for(var i=0;i<RES.liens.length;i++)h+='<a href="'+RES.liens[i].u+'" target="_blank" rel="noopener" class="crd crd-c" style="padding:12px;text-decoration:none;color:var(--tx)"><strong style="font-size:12px">'+RES.liens[i].n+'</strong><p style="font-size:11px;color:var(--mt);margin-top:2px">'+RES.liens[i].d+'</p></a>';
  h+='</div></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-video" style="color:var(--er)"></i> Vidéos</h3><div class="g2">';
  for(var i=0;i<RES.vid.length;i++)h+='<div class="crd" style="padding:12px"><div style="width:36px;height:36px;border-radius:var(--rds);background:var(--erbg);display:flex;align-items:center;justify-content:center;color:var(--er);margin-bottom:6px"><i class="fa-solid fa-play"></i></div><strong style="font-size:12px">'+RES.vid[i].t+'</strong><p style="font-size:11px;color:var(--mt);margin-top:2px">'+RES.vid[i].d+'</p></div>';
  h+='</div></div>';

  h+='<div class="crd" style="margin-bottom:14px"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-file-alt" style="color:var(--ac)"></i> Documentation</h3><div class="g2">';
  for(var i=0;i<RES.doc.length;i++)h+='<div class="crd" style="padding:12px"><div style="width:36px;height:36px;border-radius:var(--rds);background:var(--acbg);display:flex;align-items:center;justify-content:center;color:var(--ac);margin-bottom:6px"><i class="fa-solid fa-book"></i></div><strong style="font-size:12px">'+RES.doc[i].t+'</strong><p style="font-size:11px;color:var(--mt);margin-top:2px">'+RES.doc[i].d+'</p></div>';
  h+='</div></div>';

  h+='<div class="crd"><h3 style="font-size:14px;margin-bottom:10px"><i class="fa-solid fa-circle-question" style="color:var(--pr)"></i> FAQ</h3>';
  for(var i=0;i<RES.faq.length;i++)h+='<div class="acc"><div class="acc-h"><span>'+RES.faq[i].q+'</span><i class="fa-solid fa-chevron-down chev"></i></div><div class="acc-b"><div style="padding:10px 14px"><p style="font-size:12px;color:var(--tx2)">'+RES.faq[i].a+'</p></div></div></div>';
  h+='</div></div>';
  return h;
}

/* ═══ BADGES ═══ */
function rb(){
  var h='<div class="anim"><h2 style="font-size:18px;margin-bottom:18px">Mes Badges</h2>';
  h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px">';
  for(var i=0;i<BD.length;i++){
    var b=BD[i];var ul=S.bdg.indexOf(b.id)>=0;
    h+='<div class="bi'+(ul?'':' lk')+'"><div class="bico" style="background:'+(ul?b.cl+'20':'var(--bg2)')+';color:'+(ul?b.cl:'var(--mt)')+'"><i class="'+b.ic+'"></i></div><div class="bn">'+b.n+'</div><p style="font-size:9px;color:var(--mt)">'+b.d+'</p></div>';
  }
  h+='</div></div>';
  return h;
}

/* ═══ CERTIFICAT ═══ */
function gc(){
  var name=S.nm||'Élève';
  var d=new Date();var date=d.toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  var c=document.createElement('canvas');c.width=1000;c.height=700;
  var x=c.getContext('2d');
  var grd=x.createLinearGradient(0,0,1000,700);grd.addColorStop(0,'#0D9488');grd.addColorStop(0.5,'#059669');grd.addColorStop(1,'#0891B2');
  x.fillStyle=grd;x.fillRect(0,0,1000,700);
  x.fillStyle='rgba(255,255,255,0.95)';x.fillRect(30,30,940,640);
  x.strokeStyle='#0D9488';x.lineWidth=3;x.strokeRect(40,40,920,620);
  x.strokeStyle='rgba(13,148,136,0.25)';x.lineWidth=1;x.strokeRect(50,50,900,600);
  x.fillStyle='#0D9488';x.font='bold 36px Outfit, sans-serif';x.textAlign='center';
  x.fillText('CERTIFICAT DE RÉUSSITE',500,120);
  x.beginPath();x.moveTo(300,140);x.lineTo(700,140);x.strokeStyle='#0D9488';x.lineWidth=2;x.stroke();
  x.fillStyle='#475569';x.font='18px DM Sans, sans-serif';x.fillText('Club Intelligence Artificielle — Gemini pour collégiens',500,175);
  x.fillStyle='#0F172A';x.font='20px DM Sans, sans-serif';x.fillText('Ce certificat est décerné à',500,240);
  x.fillStyle='#0D9488';x.font='bold 40px Outfit, sans-serif';x.fillText(name,500,300);
  x.fillStyle='#475569';x.font='17px DM Sans, sans-serif';
  x.fillText('Pour avoir complété avec succès le parcours',500,360);
  x.fillText('"Club IA — Gemini pour collégiens"',500,390);
  x.fillText('et démontré ses compétences en intelligence artificielle',500,420);
  x.fillStyle='#0F172A';x.font='bold 14px DM Sans, sans-serif';x.fillText('Modules validés :',500,470);
  x.fillStyle='#475569';x.font='13px DM Sans, sans-serif';
  for(var i=0;i<5;i++){x.fillText('Module '+(i+1)+' — '+M[i].t+(mp(i+1)===100?' ✓':''),500,495+i*18)}
  x.fillStyle='#0D9488';x.font='bold 16px DM Sans, sans-serif';x.fillText('Délivré le '+date,500,610);
  smhtml('<div style="text-align:center"><h3 style="margin-bottom:14px">Ton Certificat</h3><img src="'+c.toDataURL()+'" style="max-width:100%;border-radius:var(--rds);box-shadow:var(--shl)"><div style="margin-top:14px;display:flex;gap:8px;justify-content:center"><a href="'+c.toDataURL()+'" download="certificat-club-ia.png" class="btn btn-p"><i class="fa-solid fa-download"></i> Télécharger</a><button class="btn btn-o" onclick="cm()">Fermer</button></div></div>');
}

/* ═══ BADGES CHECK ═══ */
function ckb(){
  var b=S.bdg;
  if(b.indexOf('first')<0){for(var i=1;i<=5;i++){if(S.pr[i]&&S.pr[i].sd&&S.pr[i].sd.length>0){b.push('first');tst('Badge : Premiers pas !','ok');break}}}
  for(var i=1;i<=5;i++){if(mp(i)===100&&b.indexOf('m'+i)<0){b.push('m'+i);var bn=BD.filter(function(x){return x.id==='m'+i})[0];tst('Badge : '+(bn?bn.n:'')+' !','ok');cft()}}
  if(b.indexOf('q10')<0){for(var i=1;i<=5;i++){if(S.pr[i]&&S.pr[i].qs===10){b.push('q10');tst('Badge : Quiz Champion !','ok');cft();break}}}
  if(b.indexOf('exs')<0){for(var i=1;i<=5;i++){var m=M[i-1];var tot=m.exos.deb.length+m.exos.int.length+m.exos.adv.length;if(S.pr[i]&&S.pr[i].xd&&S.pr[i].xd.length>=tot){b.push('exs');tst('Badge : Exercise Star !','ok');break}}}
  if(S.pr.fp&&S.pr.fp.d&&b.indexOf('ph')<0){b.push('ph');tst('Badge : Project Hero !','ok');cft()}
  if(b.indexOf('gr')<0&&ap()===100){b.push('gr');tst('Badge : Diplômé IA !','ok');cft()}
  sv();
}

function uc(){document.getElementById('certBtn').style.display=ap()>=60?'inline-flex':'none'}

/* ═══ ACCORDÉONS ═══ */
function ia(){
  var hs=document.querySelectorAll('.acc-h');
  for(var i=0;i<hs.length;i++){
    hs[i].onclick=function(){
      this.parentElement.classList.toggle('open');
    }
  }
}
function iq(){}

/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded',function(){
  ld();
  document.getElementById('menuBtn').addEventListener('click',function(){document.getElementById('sidebar').classList.toggle('open')});
  document.getElementById('themeTog').addEventListener('click',function(){ath(S.th==='light'?'dark':'light')});
  document.getElementById('nameInp').addEventListener('input',function(e){S.nm=e.target.value.trim();sv()});
  document.getElementById('certBtn').addEventListener('click',gc);
  document.getElementById('modalOv').addEventListener('click',function(e){if(e.target===document.getElementById('modalOv'))cm()});
  ren();
});
