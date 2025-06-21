# Tutorial: Menjalankan Project Forest Login/Register di VS Code

## 📋 Prerequisites (Yang Harus Disiapkan)

Sebelum memulai, pastikan sudah terinstall:

1. **Visual Studio Code** - [Download di sini](https://code.visualstudio.com/)
2. **Node.js** (versi 16 atau lebih baru) - [Download di sini](https://nodejs.org/)
3. **Git** (opsional) - [Download di sini](https://git-scm.com/)

## 🚀 Langkah-langkah Instalasi

### 1. Buka Project di VS Code

**Opsi A: Jika sudah ada folder project**
- Buka VS Code
- File → Open Folder
- Pilih folder project ini

**Opsi B: Clone dari repository (jika ada)**
```bash
git clone [URL_REPOSITORY]
cd [NAMA_FOLDER]
code .
```

### 2. Buka Terminal di VS Code

Ada beberapa cara:
- **Keyboard shortcut**: `Ctrl + `` (backtick)
- **Menu**: Terminal → New Terminal
- **Command Palette**: `Ctrl + Shift + P` → ketik "Terminal"

### 3. Install Dependencies

Di terminal, jalankan perintah:

```bash
npm install
```

**Tunggu sampai selesai** (biasanya 1-3 menit tergantung koneksi internet)

### 4. Jalankan Development Server

```bash
npm run dev
```

### 5. Buka di Browser

- Setelah server berjalan, akan muncul URL seperti: `http://localhost:5173`
- **Ctrl + Click** pada URL di terminal, atau
- Buka browser dan ketik URL tersebut

## 🎯 Hasil yang Diharapkan

Jika berhasil, Anda akan melihat:
- Halaman dengan background hutan biru
- Navbar dengan menu Home, About, Products, Contact
- Tombol Login di kanan atas
- Judul "Welcome to Nature" di tengah
- Modal login/register yang muncul saat klik tombol

## 🛠️ Commands Berguna

| Command | Fungsi |
|---------|--------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run lint` | Check kualitas kode |

## 📁 Struktur Project

```
project-folder/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Komponen navigasi
│   │   ├── AuthModal.tsx       # Modal login/register
│   │   └── ForestBackground.tsx # Background hutan
│   ├── App.tsx                 # Komponen utama
│   ├── main.tsx               # Entry point
│   └── index.css              # Styles utama
├── public/                    # File statis
├── package.json              # Dependencies & scripts
├── tailwind.config.js        # Konfigurasi Tailwind
├── vite.config.ts           # Konfigurasi Vite
└── tsconfig.json            # Konfigurasi TypeScript
```

## 🔧 Troubleshooting

### Problem: `npm install` gagal
**Solusi:**
```bash
# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json
# Install ulang
npm install
```

### Problem: Port 5173 sudah digunakan
**Solusi:**
- Vite akan otomatis mencari port lain (5174, 5175, dst)
- Atau stop aplikasi lain yang menggunakan port tersebut

### Problem: Hot reload tidak bekerja
**Solusi:**
- Restart development server (`Ctrl + C` lalu `npm run dev`)
- Refresh browser (`F5`)

### Problem: TypeScript errors
**Solusi:**
- Pastikan semua dependencies terinstall
- Restart VS Code
- Check file `tsconfig.json`

## 🎨 Fitur Project

### ✅ Yang Sudah Ada:
- Responsive design (mobile & desktop)
- Beautiful forest-themed background
- Login/Register modal dengan animasi
- Form validation
- Password visibility toggle
- Smooth transitions dan hover effects

### 🔄 Hot Reload
Setiap perubahan kode akan otomatis ter-refresh di browser tanpa perlu reload manual.

### 🎯 Teknologi yang Digunakan:
- **React 18** - UI Library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool & dev server
- **Lucide React** - Icons

## 📝 Tips Development

1. **Install VS Code Extensions yang Berguna:**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Auto Rename Tag
   - Prettier - Code formatter

2. **Keyboard Shortcuts Berguna:**
   - `Ctrl + Shift + P` - Command Palette
   - `Ctrl + `` - Toggle Terminal
   - `Ctrl + B` - Toggle Sidebar
   - `Alt + Shift + F` - Format Document

3. **File Watching:**
   - VS Code akan otomatis detect perubahan file
   - Vite akan hot reload perubahan
   - Tidak perlu restart server untuk perubahan kode

## 🚀 Next Steps

Setelah project berjalan, Anda bisa:
1. Modifikasi komponen di folder `src/components/`
2. Ubah styling dengan Tailwind classes
3. Tambah fitur baru
4. Integrasikan dengan backend API
5. Deploy ke hosting (Netlify, Vercel, dll)

---

**Happy Coding! 🎉**

Jika ada masalah, cek console browser (F12) atau terminal VS Code untuk error messages.