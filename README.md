[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_e9whi2b)

# How To Set Up & Run The Project
---
## Set Up Visual Code Studio
1. Open code Visual Code Studio.
   
2. Open folder.
![open-folder-vs-code](assets/image/open-folder-vscode.png)

3. After the folder opens, create a new file or folder. Example: I create file index.html in the root folder, style.css inside the new folder "CSS" and script.JS inside the "JS" Folder.
![create-file-folder](assets/image/create-new-file-folder.png)

4. Connect file style.css to HTML.
```
<link rel="stylesheet" href="CSS/style.css">
```
![link-css](assets/image/link-css.png)

5. Connect file script.js to HTML.
```
<script src="JS/script.js"></script>
```
![link-js](assets/image/link-js.png)

6. Now you can start writing code in HTML, CSS, and JS.

---
## Explain The Design
1. This is for example, I will explain the navbar and header design.
![header-design](assets/image/header-design.png)

2. This is my HTML for the design.
![header-html-1](assets/image/header-html-1.png)
![header-html-2](assets/image/header-html-2.png)
In this HTML I use several classes in tag elements for styling in CSS. I use tag div to wrap an element for styling in CSS.

3. This is my CSS for the design.
![header-nav-CSS](assets/image/header-nav-css.png)
![header-css](assets/image/header-css.png)
In this picture above, for example, I use the property:
* display: flex; to adjust the position of several elements in a container or wrapper to make them in row position or column position.
* justify-content and align-item property is for making them in the center of the container or space-evenly etc.
  
![header-button-css](assets/image/header-button-css.png)
In this picture above, for example, I use the property:
* cursor: pointer; This is for making the cursor change to the pointer when the cursor hovers on an element like Button.
* Transition: all .5s ease-in-out; This is to make an element have a transition like changing color from blue and then when the cursor hovers on the button, the button changes color to white.
  
![header-keyframe-css](assets/image/keyframe-header-css.png)
In this picture above, for example, I use a keyframe to make an animation to change color from white-blue-white like flashing on the button. This can run automatically without hovering over the cursor, It can be run infinite.
![header-certification-css](assets/image/header-certification-css.png)

4. For further information about HTML and CSS, you can visit the link https://www.w3schools.com/
---
## How To Use External Font

1. I use Google font, you can open https://fonts.google.com/
   
2. I use the font "Inter" for my project.
![font-inter](assets/image/font-inter.png)

3. Click Download Family.
   
4. After downloading the font, you can extract and you will see folder static.
![extract-font](assets/image/extract-font.png)

5. In this project, I moved the static folder to folder assets inside folder milestone-1-gustitreshana.
![move-folder-static](assets/image/move-folder-static.png)

6. In file style.css you can use @font-face.
![font-faces-css](assets/image/fontface-css.png)

---
# Netlify Registration and Deployment with Cloudflare Domain Connection

---

## Introduction

This tutorial guides you through the process of registering on Netlify and the steps for deploying a project. Netlify is a platform that simplifies hosting and automation for web-based sites and applications.

---

## Table of Content
- Introduction
- Table of content
- Netlify Registration
- Creating a New Project
- Deploying Your Project
- Connecting Netlify with Cloudflare
- Conclusion

---

## Netlify Registration

Follow these steps to register on Netlify:

1. Visit the Netlify website (https://www.netlify.com)
![Netlify-website](assets/image/web-netlify.png)

2. Click the **Sign-up** button in the top right corner.
![SignUp-Button](assets/image/SignUp-Button.png)

3. You can register using your e-mail or through a GitHub, GitLab, or Bitbucket account, or Sign Up with e-mail.

![Register-Options](assets/image/Register-options.png)
4. Follow the provided registration process, including e-mail verification if required.

---

## Creating a New Project

To create a new project on Netlify, follow these steps:

1. After logging in, on the Netlify dashboard, click **Site** and choose **Import from Git**.
![select-site](assets/image/Select-site.png)
![Import-from-git](assets/image/Select-import-from-git.png)

2. Choose the Git provider where your repository is located (Github, GitLab, Bitbucket).
![Select-Provider](assets/image/select-provider.png)

3. Select the repository you want to deploy.
![Select-Repository](assets/image/Select-repository.png)

4. Configure your build settings as needed for your project (for example, Base directory and publish directory).
![Configure-Build](assets/image/Configure-Build.png)

5. Click **Deploy**
![Click-Deploy](assets/image/Click-Deploy.png)

---

## Deploying Your Project

Once your project is set up, each time you push change to your repository, Netlify will automatically deploy the latest version of your site. You can also manually trigger a deployment from the dashboard if needed.

---

## Connecting Netlify with Cloudflare

1. Go to [Cloudflare](https://www.cloudflare.com/) and log in to your account.
![login-Cloudflare](assets/image/Login-Cloudflare.png)

2. In Cloudflare, add the domain you want to connect to your Netlify site.
![add-domain](assets/image/add-domain.png)

3. Select your plan.
![select-plan](/assets/image/select-plan.png)

4. To continue follow the instructions.
![Add-DNS-Record](assets/image/DNS-Record.png)
![Update-Name-Server](assets/image/Change-Name-server.png)

5. Update Nameservers from Cloudflare at Niagahoster.
![update-name-server](assets/image/Update-Name-Server-Niagahoster.png)

6. Wait until Nameservers updates.
![wait-pending](assets/image/Wait-Update-Server.png)

7. Netlify DNS and Cloudflare Nameservers are updated!
![Netlify-done](assets/image/Netlify-done.png)
![Cloudflare-done](assets/image/Cloudflare-Done.png)

---

## Conclusion

Using Netlify, the process of hosting and deploying websites becomes more straightforward and efficient. The platform is very useful for web developers to speed up deployment processes and integration with various VCS (Version Control System) Services.

Congratulations! You have successfully registered on Netlify, deployed a site, and connected your domain with Cloudflare. Your website should now be accessible via your custom domain, with the added performance and security benefits of Cloudflare.

---

This tutorial was compiled by [Gusti Treshana Herman]. For more information and detailed guides, visit the Netlify Website (https://www.netlify.com).



