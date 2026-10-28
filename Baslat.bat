@echo off
chcp 65001 > nul
echo =======================================================
echo   🌷 Mehtap'a Doğum Günü Hediyesi Başlatılıyor...
echo =======================================================
echo.
echo Tarayıcınız açılıyor, lütfen bekleyiniz...
echo.
start http://localhost:3000
call npm.cmd run dev
pause
