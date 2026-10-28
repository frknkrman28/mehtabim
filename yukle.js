const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
console.log('===================================================================');
console.log('  🌷 Furkan & Mehtap - GitHub Yukleme Sihirbazi');
console.log('===================================================================\n');
console.log('1. https://github.com/new adresinden actiginiz bos reponun linkini kopyalayin.');
console.log('   Ornek: https://github.com/kullanici-adiniz/mehtabim.git\n');

rl.question('GitHub Repo Linkini yapistirip ENTER\'a basin: ', (repoUrl) => {
  repoUrl = repoUrl.trim();
  if (!repoUrl) {
    console.log('\nHata: Link girmediniz.');
    rl.close();
    return;
  }

  try {
    console.log('\n[1/3] Git ayarlari yapilandiriliyor...');
    try { execSync('git remote remove origin', { stdio: 'ignore' }); } catch(e) {}
    execSync(`git remote add origin "${repoUrl}"`, { stdio: 'inherit' });
    execSync('git branch -M main', { stdio: 'inherit' });

    console.log('\n[2/3] Dosyalar hazirlaniyor...');
    execSync('git add .', { stdio: 'inherit' });
    try {
      execSync('git commit -m "Furkan ve Mehtap - 29 Ekim Dogum Gunu Hediyesi ve Siir"', { stdio: 'inherit' });
    } catch(e) {
      // already committed
    }

    console.log('\n[3/3] GitHub\'a gonderiliyor...');
    console.log('(Eger ekranda tarayici penceresi acilirsa GitHub hesabiniza giris/onay verin)\n');
    execSync('git push -u origin main --force', { stdio: 'inherit' });

    console.log('\n===================================================================');
    console.log('  TEBRIKLER! Projeniz basariyla GitHub\'a yuklendi!');
    console.log('===================================================================\n');
    console.log('Simdi internet sitesi linkinizi aktif etmek icin:');
    console.log('1. GitHub sayfanizda "Settings" (Ayarlar) sekmesine gidin.');
    console.log('2. Soldaki menuden "Pages" secenegine tiklayin.');
    console.log('3. "Build and deployment" -> "Source" secenegini "GitHub Actions" yapin.');
    console.log('1-2 dakika icinde siteniz yayinda olacaktir!\n');
  } catch (error) {
    console.error('\nBir hata olustu:', error.message);
    console.log('\nAlternatif olarak asagidaki komutlari sirayla calistirabilirsiniz:');
    console.log(`git remote add origin ${repoUrl}`);
    console.log('git branch -M main');
    console.log('git push -u origin main');
  }

  rl.close();
});
