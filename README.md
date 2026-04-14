# Physics Blog — Setup Guide

A minimal physics blog with inline expandable proofs. Click dashed underlines to reveal proofs in place.

## Files
```
physics-blog/
├── index.html              ← homepage (list of posts)
├── about.html              ← about page
├── style.css               ← all styling (edit colours/fonts here)
├── proofs.js               ← the expandable proof logic (don't touch)
├── README.md               ← this file
└── posts/
    └── simple-harmonic-motion.html   ← example post
```

---

## How to put it online (GitHub Pages — free)

1. Go to https://github.com and create a free account if you don't have one.

2. Click the green **New** button to create a new repository.
   - Name it anything, e.g. `physics-blog`
   - Set it to **Public**
   - Click **Create repository**

3. On the next screen, click **uploading an existing file**.

4. Drag ALL the files from this folder into the upload box.
   (Make sure the `posts/` folder and its contents are included.)

5. Click **Commit changes**.

6. Go to **Settings → Pages** (in the left sidebar).
   - Under "Branch", select `main` and click **Save**.

7. After a minute, your site will be live at:
   `https://YOUR-USERNAME.github.io/physics-blog/`

---

## How to write a new post

1. Copy `posts/simple-harmonic-motion.html` and rename it, e.g. `posts/entropy.html`.

2. Edit the title, category, date, and body text.

3. To add an expandable proof, use this pattern anywhere in the body:

   **In the paragraph:**
   ```html
   <span class="thm" data-proof="my-id">the theorem text</span><span class="thm-marker">▸</span>
   ```

   **Right after the paragraph:**
   ```html
   <div class="proof" id="proof-my-id">
     <div class="proof-inner"><div class="proof-content">
       <div class="proof-label">Your label <span class="close" data-close="my-id">close ✕</span></div>
       <p>Your explanation here.</p>
       <pre>equations in monospace if needed</pre>
     </div></div>
   </div>
   ```

   Replace `my-id` with any unique short name (no spaces), e.g. `euler-formula`, `noether-1`, `energy-cons`.

4. Add the post to `index.html` by copying one of the `<li>` entries in the post list.

5. Upload the new file to GitHub (drag and drop onto the repository page).

---

## Customisation

- **Blog name**: search for "Physics Notes" in `index.html`, `about.html`, and `style.css` and replace it.
- **Accent colour**: in `style.css`, change `--accent: #b5500a` to any hex colour you like.
- **Fonts**: the Google Fonts import at the top of `style.css` loads Lora + DM Sans. You can swap these at https://fonts.google.com.
