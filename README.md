# Jeux VideoPS

> Automatiser plus pour travailler moins — et livrer plus sûrement.

Projet Epitech DevOps — mise en place de pipelines CI/CD pour des jeux vidéo rétro JavaScript issus de la compétition [js13kGames 2021](https://js13kgames.com/) (thème : space).

---

## Jeux

| Jeux | Description |
|-----|-------------|
| [Two Ships Passing In The Night](jeu_1_two_ships_passing_the_night/) | FPS spatial 3D minimaliste |
| [Space Invaders](jeu_2_Space_Invaders/) | Réinterprétation du classique Space Invaders |

---

## Architecture CI/CD

```
Push / Pull Request
        ↓
┌─────────────────────┐   ┌──────────────────────┐
│   CI — Two Ships    │   │  CI — Space Invaders │
│  - Tests unitaires  │   │  - Tests unitaires   │
│  - Lint (ESLint)    │   │  - Lint (ESLint)     │
│  - npm audit        │   │  - npm audit         │
│  - Tests Cypress    │   │  - Tests Cypress     │
└─────────────────────┘   └──────────────────────┘
        ↓                           ↓
        └───────────┬───────────────┘
                    ↓
            ┌─────────────────┐
            │   CD — Deploy   │
            │  needs: les 2   │
            │  CI au vert     │
            │  → GitHub Pages │
            └─────────────────┘
```

Le déploiement ne se lance que si les deux pipelines CI passent au vert.

---


Le déploiement ne se lance que si les deux pipelines CI passent au vert.

## Lancer un jeu en local

### Two Ships Passing In The Night

```bash
cd jeu_1_two_ships_passing_the_night
npm install
npm run dev
```

Ouvre `http://localhost:3000` dans ton navigateur.

### Space Invaders

```bash
cd jeu_2_Space_Invaders
yarn install
yarn start
```

---

## Lancer avec Docker

### Two Ships

```bash
cd jeu_1_two_ships_passing_the_night

# Builder l'image
docker build -t two-ships .

# Lancer le container
docker run -p 8080:80 two-ships
```

Ouvre `http://localhost:8080`.

---

## Tests

### Tests unitaires

```bash
cd jeu_1_two_ships_passing_the_night
npm run test
```

Les tests couvrent les fonctions mathématiques du jeu (`lerp`, `mapLinear`, `randFloatSpread`, `clamp`, `randFloat`).

### Tests fonctionnels (Cypress)

```bash
cd jeu_1_two_ships_passing_the_night
npm run test:e2e
```

Les tests vérifient le chargement de la page, la présence des éléments UI et le titre du jeu.

---

## Lint

```bash
cd jeu_1_two_ships_passing_the_night
npm run lint
```

Le projet utilise le [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html). Les règles de style appliquées au code legacy du jeu original sont configurées en `warn` pour ne pas bloquer la CI sur du code que nous n'avons pas écrit.

---

## Audit de sécurité

```bash
npm audit --audit-level=high
```

Les vulnérabilités présentes se trouvent uniquement dans les `devDependencies` (outils de build : gulp, rollup, mocha). Elles ne sont pas embarquées dans le jeu final déployé.

---

## Structure du projet

```
.
├── .github/
│   └── workflows/
│       ├── two-ships.yml        # CI pipeline Two Ships
│       └── deploy.yml           # CD pipeline (needs: two CI)
├── jeu_1_two_ships_passing_the_night/
│   ├── src/                     # Code source du jeu
│   ├── tests/                   # Tests unitaires (Mocha)
│   ├── cypress/                 # Tests fonctionnels (Cypress)
│   ├── Dockerfile
│   └── package.json
├── jeu_2_Space_Invaders/
│   ├── src/
│   └── package.json
└── index.html                   # Site de présentation
```

---

## Bonnes pratiques DevSecOps

- Les secrets (tokens, credentials) sont stockés dans les **GitHub Secrets**, jamais dans les fichiers de workflow
- `npm audit` tourne à chaque pipeline pour détecter les vulnérabilités connues
- Le déploiement est conditionné au succès des deux CI (`needs`)

---

## Équipe

Projet réalisé dans le cadre du module **CI/CD** à Epitech.

- [@dalobaminthe](https://github.com/dalobaminthe)
- [@deutchdeutch](https://github.com/deutchdeutch)