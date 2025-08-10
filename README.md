## Project Overview
A React + TailwindCSS single-page application that simulates Caprae Capital’s platform for connecting business buyers and sellers. The app includes:
- Separate buyer & seller onboarding flows
- Buyer discovery cards (Accept / Reject)
- Matched workflow with a 4-step acquisition process
- AI-like Financial Document Analyzer UI (simulated)
- Clean, approachable UI and routing (Signup → Onboarding → Discovery → Matched)

This codebase demonstrates front-end engineering skills, UI/UX design, and product thinking for M&A workflows.

---

## Live / Demo
> (If you deploy, add the demo URL here. Example: `https://your-deploy-url`)

---

## Getting started (local)

**Prerequisites**
- Node.js (>=16) and npm or yarn

**Install**
```bash
npm install
# or
yarn
```

**Run (dev)**
```bash
npm start


**Build**
```bash
npm run build


---

## Project Structure
```
src/
├─ components/       # Reusable UI components (BuyerCard, Workflow, Analyzer)
├─ pages/            # Route pages (Home, Signup, Onboarding, Discovery, Matched)
├─ App.jsx
└─ index.jsx
docs/
└─ Caprae_Capital_Assignment.pdf  # Submission-ready PDF with documentation
```

---

## How to use / test
1. Open the app.
2. Signup (email + password) — data is stored to `localStorage`.
3. Complete Onboarding (choose Buyer or Seller).
4. Sellers reach Buyer Discovery, accept a buyer to proceed to the matched workflow.

---

## Professional Submissions (Optional)
Include any of the following if you want to strengthen your application:
- Link to GitHub or zipped prior code
- Screenshots or Figma links for design work
- Financial model spreadsheets (Excel / Google Sheets)
- Market research PDFs or docs
- Links to blog posts, social media, or recommendation letters

If you want, place these files in the `docs/` folder for an easy single ZIP to attach.

---

## Answers for Caprae Submission (copy into your email or include in the PDF)

**What do you think Caprae’s culture is like?**  
Caprae appears to value independent thinkers and entrepreneurial energy — a founder/operator culture that prizes curiosity, resilience, and the ability to build practical solutions. They seek people with character, courage, and creativity who are willing to iterate quickly and learn on the job while contributing to a high-performance, mission-driven team.

**Availability / Work-hours (Answer to: “Is 9AM–6PM EST during training OK?”)**  
Yes — I confirm that I can be available for the 3-month probationary/training period with 9 AM–6 PM EST work hours and the occasional short off-hours availability for urgent issues. After the training period, I’m open to a more flexible schedule in accordance with team needs.

**Expected salary**  
(Provide a local, realistic figure here. Example below is illustrative — replace with your expected amount in INR.)  
My expected salary is **₹X,XX,XXX per month** (or **₹X,XX,XXX per year**) based on my location and market rates. I am open to discussing compensation in more detail during the interview.

---

## Notes for submission
- Attach this `README.md`, your updated resume, `docs/Caprae_Capital_Assignment.pdf`, and any optional professional materials to the email to partners@capraecapital.com and kevinhshong@gmail.com.
- Subject line suggestion: `Rupesh Kumar Sahu — Frontend Developer Application`

---

## Contributing / Extending
- Add backend endpoints to replace mock data (Signup, Onboarding, Buyers)
- Replace the simulated FinancialDocumentAnalyzer with an API (e.g., file upload → server → AI analysis)
- Add tests (Jest + React Testing Library) and CI (GitHub Actions)


