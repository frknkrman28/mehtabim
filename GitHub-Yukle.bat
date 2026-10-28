@echo off
chcp 65001 > nul
echo ===================================================================
echo   🌷 Furkan ^& Mehtap - GitHub'a Proje ve Şiir Yükleme Sihirbazı
echo ===================================================================
echo.
echo Bu sihirbaz projenizi ve şiirinizi sizin adınıza GitHub'a yükleyecek.
echo.
echo Adım 1: Tarayıcınızda https://github.com/new adresini açıp yeni bir
echo         boş depo (repository) oluşturun (Örn: mehtabim veya hediye).
echo.
echo Adım 2: Oluşan deponun adresini kopyalayın.
echo         (Örn: https://github.com/kullaniciadiniz/mehtabim.git)
echo.
set /p REPO_URL="Depo Linkinizi buraya yapıştırın ve Enter'a basın: "

if "%REPO_URL%"=="" (
    echo.
    echo Hata: Link girmediniz. İşlem iptal edildi.
    pause
    exit /b
)

echo.
echo -------------------------------------------------------------------
echo Git ayarları yapılandırılıyor...
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Dosyalar commit ediliyor...
git add .
git commit -m "Furkan'dan Mehtap'a 29 Ekim Doğum Günü Aşk Mektubu ve MEHTABIM Akrostiş Şiiri" 2>nul

echo.
echo GitHub'a yükleniyor (Açılan tarayıcı penceresinde GitHub hesabınıza onay verin)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================================
    echo   BAŞARILI! Projeniz ve şiiriniz adınıza GitHub'a yüklendi!
    echo ===================================================================
    echo.
    echo Şiirinizin patent / telif zaman damgası hesabınız altında sabitlendi.
    echo.
    echo Şimdi canlı web linkinizi açmak için:
    echo 1. GitHub'da deponuzun "Settings" (Ayarlar) sekmesine gidin.
    echo 2. Soldaki menüden "Pages" seçeneğine tıklayın.
    echo 3. "Build and deployment" altındaki "Source" kısmını "GitHub Actions" yapın.
    echo 4. 1-2 dakika içinde size https://kullaniciadiniz.github.io/depoadi/ linkini verecektir!
) else (
    echo.
    echo Bir hata oluştu veya yetkilendirme iptal edildi. Lütfen linki ve internet bağlantınızı kontrol edip tekrar deneyin.
)

echo.
pause
