# HighTech IT

The provided template is designed for an IT Solutions website with a clean, professional layout. Its purpose is to introduce the company, highlight its expertise, and showcase services such as web security, UI/UX design, digital marketing, and project development.

## 🚀 Tech Stack
<p> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="50" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" width="50" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="50" /> </p>

## 📸 Project Preview

 ## Table Of Content
 1. Project Title
 2. Project Description
 3. Project Preview
 4. Tech Stack
 5. Installation
 6. Design-to-code Notes
 7. Missing Design Decisions
 8. Available Scripts
 9. Future Improvements



 ## Setup Instructions
1️⃣ Clone the repository -
git clone <your-repo-url>
cd simplifi-ventures

2️⃣ Install dependencies -
npm install

3️⃣ Start development server -
npm start

4️⃣ Build for production -
npm run build

5️⃣ Run tests -
npm test

## 🎨 Design-to-Code Notes

During development, these steps were followed to transform the Figma design into functional UI:

1. Carefully analyzed Figma to identify missing or unclear components.
2. Conceptualized the missing elements using logical UX patterns.
3. Researched UI best practices to refine component structure and aesthetics.
4. Drafted rough sketches/wireframes to visualize the missing sections.
5. Implemented components in React using reusable, modular architecture with Tailwind CSS.

## 🧩 Missing Design Decisions (Components I Added & Why)
1. FAQ Section

Issue:
The original template did not include a FAQ section.
Most likely the developer skipped it or didn’t consider it important.

What I used: Tailwind CSS

My Solution:
I created a fully responsive FAQ section and placed it above the Contact Us section, with proper spacing and animations.

2. Blog Share Button Animation

Issue:
The share button animation existed, but:

-The alignment was off
-The animation speed was too fast
-No breakpoint-specific logic
-Likely because the template was made for practice.

What I used:

Vanilla CSS

My Solution:
-I adjusted the animation timing and alignment.
-On mobile & tablet, only social icons appear
-On ≥1200px screens, both the icon and hover animation appear (same as template behavior but improved)

3. Contact Form Section

Issues Found:

-Layout breaks below 425px
-No form validation
-Informational contact details misaligned
-Again, looks like a rushed practice implementation

What I used: Tailwind CSS, Vanilla CSS and JavaScript

My Solution:
I rebuilt the form layout to be fully responsive and correctly aligned.

Added:
-Form validation
-Thank-you modal popup
-Styling & spacing fixes across all breakpoints.

4. Topbar Marquee Section

Issue:
The marquee animation was too fast and used a cubic-bezier curve that made the motion feel unnatural.
The direction also felt wrong (left → right).

What I used: Tailwind CSS and Vanilla CSS

My Solution:

-Slowed down the animation
-Changed direction to right → left
-Made its motion smooth and subtle
-Kept it in the same position as the original design

5. Projects Section

Issue:
Hover-based project cards are useless on screens below 768px (no cursor = no hover effect).
Original developer didn't optimize this for mobile.

What I used: Tailwind CSS and Vanilla  CSS

My Solution:

-On mobile/tablet, I show project tag names directly (no hover needed)
-On large screens, tag names hide again and appear only on hover (as in the template).

6. 404 Error Page

Issues:

-Placed incorrectly inside the navbar menu
-Button had no hover effect
-Button did not redirect anywhere
-Looked unfinished

What I used: Css and JavaScript

My Solution:

-Removed 404 page from the navbar
-Implemented proper 404 routing: any undefined route now shows the 404 page
-Added working “Go back home” redirect
-Added hover effects to the button for better UX.

## 📚 Available Scripts
Command	Description
npm start	Starts the app in development mode
npm test	Runs the test suite
npm run build	Builds an optimized production version
npm run eject	Exposes configuration files (irreversible)

## 💡 Future Improvements
If you want, these can be added later:
Dark mode,
API integration with backend


  

