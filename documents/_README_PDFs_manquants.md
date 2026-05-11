# Documents PEREZ 2026

Ce dossier contient les PDFs téléchargeables du corpus.

## PDFs déjà présents

- `PEREZ-2026a-axiome-archetype-singularite.pdf` ✓
- `PEREZ-2026b-reflexions-personnelles.pdf` ✓
- `PEREZ-2026e-vulgarisation-hphi.pdf` ✓

## PDFs à ajouter manuellement

Les deux PDFs ci-dessous doivent être téléchargés depuis Zenodo et placés
dans ce dossier avec les noms exacts indiqués :

### PEREZ 2026c — Unus Mundus comme H_φ

1. Aller sur : https://doi.org/10.5281/zenodo.20098274
2. Télécharger le PDF
3. Le renommer en : `PEREZ-2026c-unus-mundus-hphi.pdf`
4. Le placer ici dans `documents/`

### PEREZ 2026d — Rapport d'analyse Prédiction P2

1. Aller sur : https://doi.org/10.5281/zenodo.20113396
2. Télécharger le PDF
3. Le renommer en : `PEREZ-2026d-rapport-p2.pdf`
4. Le placer ici dans `documents/`

## Mise à jour de l'index.html après ajout

Une fois les 2 PDFs ajoutés, modifier `/index.html` pour remplacer les liens
"Consulter sur Zenodo" par des liens de téléchargement direct :

**Section PEREZ 2026c** — remplacer :
```html
<a href="https://doi.org/10.5281/zenodo.20098274" class="btn btn-primary" target="_blank" rel="noopener">
  <span data-fr="Consulter sur Zenodo" data-en="View on Zenodo">Consulter sur Zenodo</span>
</a>
```
par :
```html
<a href="documents/PEREZ-2026c-unus-mundus-hphi.pdf" class="btn btn-primary" download>
  <span data-fr="Télécharger PDF" data-en="Download PDF">Télécharger PDF</span>
</a>
```

**Section PEREZ 2026d** — remplacer :
```html
<a href="https://doi.org/10.5281/zenodo.20113396" class="btn btn-primary" target="_blank" rel="noopener">
  <span data-fr="Consulter sur Zenodo" data-en="View on Zenodo">Consulter sur Zenodo</span>
</a>
```
par :
```html
<a href="documents/PEREZ-2026d-rapport-p2.pdf" class="btn btn-primary" download>
  <span data-fr="Télécharger PDF" data-en="Download PDF">Télécharger PDF</span>
</a>
```

---

**Nota** : si tu préfères garder les liens directs vers Zenodo (recommandé
pour la traçabilité des versions), il suffit de ne rien modifier — le site
fonctionne déjà parfaitement comme ça.
