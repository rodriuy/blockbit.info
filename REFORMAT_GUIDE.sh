#!/bin/bash

# Script para reformar todas las páginas de Blockbit con tema Apple Dark Mode
# Uso: bash reformat_all_pages.sh

echo "=== Blockbit Site Reformat - Apple Dark Mode Theme ==="
echo ""

# Archivos a procesar
FILES=(
    "index.html"
    "proyecto2021.html"
    "proyecto2022-23.html"
    "trayectoria_2021.html"
    "trayectoria_2223.html"
    "trayectoria_2324.html"
    "memora_prototipo.html"
    "sumate.html"
)

# Reemplazos de colores antiguos por nuevos
declare -A COLOR_MAP=(
    ["celeste-uruguayo"]="#0071e3"
    ["celeste-claro"]="var(--primary)"
    ["dorado"]="var(--text-secondary)"
    ["55d6ff"]="var(--primary)"
    ["0038a8"]="#0071e3"
    ["ffd700"]="var(--primary)"
    ["rgba(85, 214, 255,"]="rgba(0, 113, 227,"
    ["rgba(0, 56, 168,"]="rgba(0, 113, 227,"
)

echo "Archivos a reformar:"
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (no encontrado)"
    fi
done

echo ""
echo "Colores a reemplazar:"
echo "  • celeste-uruguayo (#0038a8) → primary (#0071e3)"
echo "  • celeste-claro (#55d6ff) → primary (#0071e3)"
echo "  • dorado (#ffd700) → text-secondary (#a1a1a6)"
echo "  • gradient effects → Apple minimal style"
echo "  • dark mode → Apple Dark Mode palette"
echo ""
echo "Nota: Este script proporciona la guía. Los reemplazos se harán manualmente"
echo "      en el código para asegurar precisión y mantener funcionalidad."
echo ""
