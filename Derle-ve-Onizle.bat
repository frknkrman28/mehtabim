@echo off
chcp 65001 > nul
echo =======================================================
echo   🌷 Üretim Sürümü Derleniyor ve Önizleniyor...
echo =======================================================
echo.
call npm.cmd run build
echo.
echo Derleme tamamlandı. Önizleme başlatılıyor...
start http://localhost:4173
call npm.cmd run preview
pause
