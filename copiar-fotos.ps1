# Script para copiar las fotos del taller a la carpeta assets
# Ejecutar desde PowerShell en la carpeta del proyecto: .\copiar-fotos.ps1

$src = "C:\Users\Amin\.cursor\projects\c-Users-Amin-OneDrive-Desktop-AutoRepairFSolution\assets"
$dst = Join-Path $PSScriptRoot "assets"

if (-not (Test-Path $src)) {
    Write-Host "No se encuentra la carpeta origen: $src" -ForegroundColor Yellow
    Write-Host "Ajusta la variable `$src en este script si tus fotos estan en otra ruta." -ForegroundColor Gray
    exit 1
}

if (-not (Test-Path $dst)) {
    New-Item -ItemType Directory -Path $dst -Force | Out-Null
}

$map = @{
    "*560862820*" = "logo-gear.png"
    "*571234732*" = "banner-servicios.png"
    "*571959066*" = "tip-sabias-que.png"
    "*489184506*" = "fernando-lara.png"
    "*528296197*" = "equipo.png"
    "*515271237*" = "logo-square.png"
}

$copied = 0
Get-ChildItem $src -Filter "*.png" | ForEach-Object {
    foreach ($pattern in $map.Keys) {
        if ($_.Name -like $pattern) {
            $destName = $map[$pattern]
            Copy-Item $_.FullName (Join-Path $dst $destName) -Force
            Write-Host "Copiado: $($_.Name) -> $destName" -ForegroundColor Green
            $copied++
            break
        }
    }
}

if ($copied -eq 0) {
    Write-Host "No se encontraron imagenes que coincidan. Verifica que existan archivos .png en: $src" -ForegroundColor Yellow
} else {
    Write-Host "`nListo. Se copiaron $copied imagenes a $dst" -ForegroundColor Cyan
}
