## Md. Ashraful Islam — Personal Portfolio

A modern, responsive personal portfolio website showcasing my background, technical skills, projects, professional experience, certificates, creative work, and contact information.

## ✨ Features

- **Responsive design** for desktop, tablet, and mobile screens
- **Dark and light themes** with a theme toggle
- **English and Bangla language support**
- **Animated introduction** with rotating professional roles
- **About section** for education and personal information
- **Skills section** covering development, marketing, design, video editing, and CS fundamentals
- **Project showcase** with technology tags, status labels, and project links
- **Experience and certificate sections**
- **Creative gallery** for design work and promotional content
- **Video portfolio** with embedded Google Drive or other supported video sources
- **Contact form** powered by Cloudflare Workers
- **Smooth scrolling, animated cards, and interactive UI details**

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts
- **Cloudflare Workers** (`_worker.js`) for backend contact-form handling and API requests

## 📁 Project Structure
```
Portfolio/
├── index.html
├── .gitignore
├── _worker.js
├── images/
│   ├── announcement/
│   ├── content/
│   └── portfolio images
├── certificates/
│   ├── diu/
│   ├── hp/
│   └── microsoft/
├── videos/
└── cv-ashraful.pdf
```

## 🚀 Run Locally

This is primarily a static website, so no frontend build step is required for local viewing.

1. Download or clone this repository.
2. Open the `Portfolio` folder.
3. Open `index.html` in your browser.

For a more realistic local web-server experience, use the **Live Server** extension in Visual Studio Code and select **Open with Live Server**.

> The contact form submissions handled via `_worker.js` require a compatible worker environment (such as Wrangler local development) to test full form functionality locally.

## 📬 Contact Form & Backend (_worker.js)

The contact form sends requests directly to the Cloudflare Worker script (`_worker.js`), which processes the form data and forwards messages (e.g., to your Telegram bot or email).

To use it in production:

1. Connect your repository to **Cloudflare Pages**.
2. Ensure `_worker.js` is in the root directory so Cloudflare automatically detects it as a module worker.
3. Configure any required environment variables or secrets in your **Cloudflare Pages Dashboard under Settings > Environment Variables**.
4. Test the contact form after deployment.

**Security note:** Never commit API tokens, bot tokens, passwords, or other secrets to GitHub. Always store them securely as environment variables in Cloudflare's project settings.

## 🎨 Customization

The main website content is configured in the JavaScript data object inside `index.html`.

You can update:

- Name, email, phone, location, and profile image
- Social profile links
- Skills and technology tags
- Projects and their live/demo/source links
- Experience and certificates
- Gallery items and video embeds
- English and Bangla text

Place images in the appropriate folders and make sure the paths in `index.html` match the actual filenames.

## 🌐 Deployment

This project is optimized for deployment on **Cloudflare Pages**:

- **Cloudflare Pages:** Fully supports both the static frontend assets and the backend logic inside `_worker.js` for handling contact form submissions seamlessly.

## 👨‍💻 Author

**Md. Ashraful Islam**  
CSE Undergraduate | Web Developer | Digital Marketing | Creative Design

- GitHub: [ashrafulcse67-DIU](https://github.com/ashrafulcse67-DIU)
- LinkedIn: [md-ashraful120](https://www.linkedin.com/in/md-ashraful120)
- Facebook: [ashraful120official](https://www.facebook.com/ashraful120official)

---

If you find this project useful, feel free to ⭐ the repository.
