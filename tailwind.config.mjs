/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // `src/app` altındaki dosyaları tarar
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // `components` klasörü
    "./hakkinda/**/*.{js,ts,jsx,tsx,mdx}",   // Özel sayfalar (isteğe bağlı)
    "./iletisim/**/*.{js,ts,jsx,tsx,mdx}",   // Özel sayfalar (isteğe bağlı)
    "./projelerimiz/**/*.{js,ts,jsx,tsx,mdx}", // Özel sayfalar (isteğe bağlı)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};