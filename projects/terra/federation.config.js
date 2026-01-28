const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  // Uygulamanın kimliği
  name: 'terra',

  // Dış dünyaya açtığımız "yerçekimsiz" bileşenler
  exposes: {
    './LandingPad': './projects/terra/src/app/app.ts',
  },

  // Ortak kullanılan yakıtlar (Angular çekirdek kütüphaneleri)
  // shareAll: "Eğer diğer tarafta aynısı varsa, tekrar yükleme, ortak olanı kullan" der.
  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' 
    }),
  },
});
