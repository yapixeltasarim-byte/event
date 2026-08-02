export const weatherCodeMap: Record<number, { label: string; icon: string }> = {
  0: { label: "Açık", icon: "☀️" },
  1: { label: "Az Bulutlu", icon: "🌤️" },
  2: { label: "Parçalı Bulutlu", icon: "⛅" },
  3: { label: "Kapalı", icon: "☁️" },
  45: { label: "Sisli", icon: "🌫️" },
  48: { label: "Kırağı Sisi", icon: "🌫️" },
  51: { label: "Hafif Çisenti", icon: "🌦️" },
  53: { label: "Çisenti", icon: "🌦️" },
  55: { label: "Yoğun Çisenti", icon: "🌦️" },
  61: { label: "Hafif Yağmur", icon: "🌧️" },
  63: { label: "Yağmur", icon: "🌧️" },
  65: { label: "Kuvvetli Yağmur", icon: "🌧️" },
  71: { label: "Hafif Kar", icon: "🌨️" },
  73: { label: "Kar", icon: "🌨️" },
  75: { label: "Kuvvetli Kar", icon: "🌨️" },
  80: { label: "Sağanak", icon: "🌦️" },
  81: { label: "Kuvvetli Sağanak", icon: "🌧️" },
  82: { label: "Şiddetli Sağanak", icon: "⛈️" },
  95: { label: "Gök Gürültülü Fırtına", icon: "⛈️" },
  96: { label: "Dolulu Fırtına", icon: "⛈️" },
  99: { label: "Şiddetli Dolulu Fırtına", icon: "⛈️" },
};

export function describeWeatherCode(code: number) {
  return weatherCodeMap[code] ?? { label: "Bilinmiyor", icon: "🌡️" };
}
