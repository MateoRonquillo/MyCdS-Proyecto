"""Validate the basic catalog data shape."""

import json
from pathlib import Path


catalog_path = Path(__file__).parents[1] / "data" / "catalog.json"
with catalog_path.open(encoding="utf-8") as catalog_file:
    catalog = json.load(catalog_file)

if not isinstance(catalog.get("items"), list):
    raise SystemExit("catalog.json must contain an items list")

print(f"Catalogo valido: {len(catalog['items'])} elementos")
