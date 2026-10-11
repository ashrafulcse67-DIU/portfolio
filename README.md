# Md. Ashraful Islam — Personal Portfolio

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
- **Contact form** connected to a Netlify Function
- **Smooth scrolling, animated cards, and interactive UI details**

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts
- Netlify Functions (for contact-form handling)

## 📁 Project Structure

```text
Portfolio/
├── index.html
├── .gitignore
├── netlify.toml
├── netlify/
│   └── functions/
│       └── send-message.js
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

This is primarily a static website, so no frontend build step is required.

1. Download or clone this repository.
2. Open the `Portfolio` folder.
3. Open `index.html` in your browser.

For a more realistic local web-server experience, use the **Live Server** extension in Visual Studio Code and select **Open with Live Server**.

> The contact form uses a Netlify Function. It will not work when `index.html` is opened directly as a local file unless the function is served through a compatible environment.

## 📬 Contact Form Deployment

The contact form sends requests to:

```text
/.netlify/functions/send-message
```

To use it in production:

1. Deploy the project to Netlify.
2. Keep the function inside `netlify/functions/`.
3. Configure any required secrets or environment variables in Netlify's site settings, based on the implementation in `netlify/functions/send-message.js`.
4. Test the form after deployment.

**Security note:** Never commit API tokens, bot tokens, passwords, or other secrets to GitHub. Store them as environment variables in your hosting provider.

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

You can host the static portfolio using **GitHub Pages**, **Netlify**, or another static hosting service.

- **GitHub Pages:** suitable for the static frontend; the Netlify contact function will not run on GitHub Pages.
- **Netlify:** suitable for the static frontend and the included Netlify Function.

## 👨‍💻 Author

**Md. Ashraful Islam**  
CSE Undergraduate | Web Developer | Digital Marketing | Creative Design

- GitHub: [ashrafulcse67-DIU](https://github.com/ashrafulcse67-DIU)
- LinkedIn: [md-ashraful120](https://www.linkedin.com/in/md-ashraful120)
- Facebook: [ashraful120official](https://www.facebook.com/ashraful120official)

---

If you find this project useful, feel free to ⭐ the repository.
