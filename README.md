# ajeperez.science

> **Discrete φⁿ frequencies in neural networks — and H_φ theoretical framework**
> Personal website of Alexandre Joseph Etienne PEREZ

🌐 **Website online**: [ajeperez.science](https://ajeperez.science) · [ajeperez.github.io](https://ajeperez.github.io)

---

## 🇬🇧 English

This repository contains the personal website gathering the empirical preprint and theoretical corpus of Alexandre Joseph Etienne P.:

- A stand-alone scientific preprint reporting a precision measurement of discrete golden-ratio φⁿ frequencies in spontaneous neural oscillations across seven LFP datasets, two species and three preparation types
- A separately developed theoretical framework (H_φ theory) articulating the appearance of φ across biological and physical systems, in dialogue with the Pauli–Jung intuition of an *Unus Mundus*

The empirical preprint does not depend on the theoretical framework.

### Site content

- **Bilingual landing page (EN/FR)** with English as default, theory presentation and featured preprint
- **Two interactive visualization portals** (theoretical framework):
  - H_φ Portal — R operator, archetypes as eigenmodes, ER=EPR, 4→3 breaking, synthesis
  - Geometry of abstract spaces — 4D torus, attractors, black holes, holography, ER=EPR
- **Corpus of 6 documents** deposited on Zenodo under CC BY 4.0 license

### Featured preprint (English, stand-alone)

| Reference | Title | Zenodo DOI |
|-----------|-------|------------|
| PEREZ 2026d | Discrete frequency convergence in spontaneous oscillations of organized neural networks | [10.5281/zenodo.20184004](https://doi.org/10.5281/zenodo.20184004) |

### Theoretical corpus (French)

| Reference | Title | Zenodo DOI |
|-----------|-------|------------|
| PEREZ 2026a | Axiom, Archetype, Singularity | [10.5281/zenodo.20182573](https://doi.org/10.5281/zenodo.20182573) |
| PEREZ 2026b | Personal reflections on the geometry of abstract spaces | [10.5281/zenodo.20182716](https://doi.org/10.5281/zenodo.20182716) |
| PEREZ 2026c | Unus Mundus as H_φ (main document) | [10.5281/zenodo.20182784](https://doi.org/10.5281/zenodo.20182784) |
| PEREZ 2026e | Analysis Report — Prediction P3 | [10.5281/zenodo.20182873](https://doi.org/10.5281/zenodo.20182873) |
| PEREZ 2026f | Understanding the H_φ theory (popular science) | [10.5281/zenodo.20174647](https://doi.org/10.5281/zenodo.20174647) |

### Disclaimer

> **Exploratory work — research hypotheses — not peer-reviewed.**
> All claims are clearly marked as hypotheses in the documents.

### License

Site content (documents, texts, visualizations) is published under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

### Contact

ajeprz@proton.me

---

## 🇫🇷 Français

Ce dépôt contient le site web personnel rassemblant le preprint empirique et le corpus théorique d'Alexandre Joseph Etienne P. :

- Un preprint scientifique stand-alone rapportant une mesure de précision des fréquences discrètes φⁿ dans les oscillations neuronales spontanées sur sept jeux de données LFP, deux espèces et trois types de préparation
- Un cadre théorique développé séparément (théorie H_φ) articulant l'apparition de φ à travers les systèmes biologiques et physiques, en dialogue avec l'intuition Pauli–Jung d'un *Unus Mundus*

Le preprint empirique ne dépend pas du cadre théorique.

### Contenu du site

- **Page d'accueil bilingue (EN/FR)** avec anglais par défaut, présentation de la théorie et preprint mis en avant
- **Deux portails de visualisations interactives** (cadre théorique) :
  - Portail H_φ — opérateur R, archétypes comme modes propres, ER=EPR, brisure 4→3, synthèse
  - Géométrie des espaces abstraits — tore 4D, attracteurs, trous noirs, holographie, ER=EPR
- **Corpus de 6 documents** déposés sur Zenodo sous licence CC BY 4.0

### Preprint mis à l'honneur (anglais, stand-alone)

| Référence | Titre | DOI Zenodo |
|-----------|-------|------------|
| PEREZ 2026d | Discrete frequency convergence in spontaneous oscillations of organized neural networks | [10.5281/zenodo.20184004](https://doi.org/10.5281/zenodo.20184004) |

### Corpus théorique (français)

| Référence | Titre | DOI Zenodo |
|-----------|-------|------------|
| PEREZ 2026a | Axiome, Archétype, Singularité | [10.5281/zenodo.20182573](https://doi.org/10.5281/zenodo.20182573) |
| PEREZ 2026b | Réflexions personnelles sur la géométrie des espaces abstraits | [10.5281/zenodo.20182716](https://doi.org/10.5281/zenodo.20182716) |
| PEREZ 2026c | Unus Mundus comme H_φ (document principal) | [10.5281/zenodo.20182784](https://doi.org/10.5281/zenodo.20182784) |
| PEREZ 2026e | Rapport d'analyse — Prédiction P3 | [10.5281/zenodo.20182873](https://doi.org/10.5281/zenodo.20182873) |
| PEREZ 2026f | Comprendre la théorie H_φ (vulgarisation) | [10.5281/zenodo.20174647](https://doi.org/10.5281/zenodo.20174647) |

### Avertissement

> **Travail exploratoire — hypothèses de recherche — non soumis à peer review.**
> Toutes les affirmations sont clairement marquées comme hypothèses dans les documents.

### Licence

Le contenu de ce site (documents, textes, visualisations) est publié sous licence [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.fr).

### Contact

ajeprz@proton.me

---

## Repository structure

```
ajeperez.github.io/
├── index.html                       # Bilingual landing page (EN/FR, EN default)
├── visualisations/
│   ├── portail-hphi.html            # H_φ visualization portal
│   └── geometrie-espaces-abstraits.html  # Abstract spaces
├── documents/
│   ├── PEREZ-2026a-*.pdf
│   ├── PEREZ-2026b-*.pdf
│   └── PEREZ-2026e-vulgarisation-hphi.pdf  # (PEREZ 2026f vulgarisation)
├── assets/
│   ├── css/style.css
│   └── img/avatar_fibonacci.jpg
├── 404.html
├── README.md
├── LICENSE
├── CNAME                            # ajeperez.science
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Build & deployment

This site is pure static HTML/CSS/JavaScript. No build step required.

It is deployed automatically via [GitHub Pages](https://pages.github.com/) on push to `main`.

## Citation

To cite the empirical preprint:

```bibtex
@misc{perez2026discrete,
  author       = {Perez, Alexandre Joseph Etienne},
  title        = {Discrete frequency convergence in spontaneous oscillations of organized neural networks: a precision measurement across seven LFP datasets, two species and three preparation types},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.20184004},
  url          = {https://doi.org/10.5281/zenodo.20184004},
  note         = {Stand-alone preprint v1.0.0 --- not peer-reviewed}
}
```

To cite the broader theoretical framework:

```bibtex
@misc{perez2026hphi,
  author       = {Perez, Alexandre Joseph Etienne},
  title        = {Unus Mundus as $H_\varphi$: a unified psycho-cosmological theory},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.20182784},
  url          = {https://doi.org/10.5281/zenodo.20182784},
  note         = {Corpus PEREZ 2026 --- exploratory hypothesis, not peer-reviewed}
}
```

---

© 2026 Alexandre Joseph Etienne PEREZ
