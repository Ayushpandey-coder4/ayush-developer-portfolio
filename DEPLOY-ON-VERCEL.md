# Deploy Ayush's portfolio on Vercel (Android)

1. Extract this ZIP on your phone, then upload the project folder to a new GitHub repository (recommended name: `ayush-developer-portfolio`).
2. Open https://vercel.com/dashboard and sign in with GitHub.
3. Tap **Add New → Project**, choose the repository and import it.
4. Keep the detected Create React App settings. The included `vercel.json` sets:
   - Build command: `npm run build`
   - Output directory: `build`
5. Tap **Deploy**. No GitHub API token or environment variables are required for this customized version.
6. When deployment completes, open the Vercel URL and test the navigation, GitHub, LinkedIn, email and project links on your phone.

## Personal details to review
- The LinkedIn icon currently opens the LinkedIn post link previously shared. Replace it with your public LinkedIn profile URL if you want the icon to open your profile.
- The education entry says BSc Information Technology without inventing a college name or dates.
- Add a real PDF at `src/containers/greeting/resume.pdf` and set `resumeLink` in `src/portfolio.js` to a non-empty value before enabling the resume button.
