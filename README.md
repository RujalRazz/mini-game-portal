<div align = "center">
<h1> 🎮 ASOBI </h1>
  A mini game portal
  <br>
  <img width="1280" height="608" alt="image" src="https://github.com/user-attachments/assets/fbee498a-66a7-405e-91ae-2bfd2f16e3b3" />
<img width="1280" height="606" alt="image" src="https://github.com/user-attachments/assets/6a2bfcf6-c69b-42a9-934e-d6a27a5f1da9" />


ASOBI" (遊び) means "play" in Japanese — and that's exactly what we're here for.
</div>

### 📖About 
ASOBI is a browser-based mini game portal built as part of a web development event. 
It features a sleek purple-dark aesthetic with a sticky navbar, animated landing page, and a carousel-style game browser — all wrapped in pure 
HTML, CSS, and JavaScript with zero dependencies.


### 🗂️ Project Structure
```
mini-game-portal/
|--about.html                        # meet the team page
|--explore.html                      # Explore page (Market place and social hub)
|--games.html                        # games carousel browser
|--index.html                        # landing page (animated ASOBI title)
|--CSS/
|   |--explore.css                   # explore page style
|   |--styles.css                    # global styles (navbar, footer, layout)
|   |--ticktactoe.css                # tic-tac-toe specific styles
|--js/
|   |--about.js                      # team card renderer
|   |--gamesCard.js                  # games carousel logic
|   |--main.js
|   |--tictactoe.js                  # tic-tac-toe game logic
|--games/
|   |--rock_paper_scissors/
|   |  |--rock_paper_scissors.css
|   |  |--rock_paper_scissors.html
|   |  |--rock_paper_scissors.js
|   |--titactoe.html
|   |--snake_game/
|   |  |--snake_game.css
|   |  |--snake_game.html
|   |  |--snake_hame.js             
|--assets/
|   |--fonts/                         # minecrafty font
|   |--images/                        # game images, logo and pictures
|--.github/workflows/                 # GitHub Actions (static deployment)
```

### 🕹️ Games
#### ✊ Rock Paper Scissors
| classic hand game. You VS the computer
- Choose Rock, Paper, or Scissors
- Animated "shake" reveal before showing choices
- Live score tracking: Won / Lost / Draw
- Fully responsive with purple-glow themed UI
- "Play Again" to reset the round without losing scores

#### ❌⭕ Tic-Tac-Toe
| The timeless 3×3 grid game with a twist.
- VS Computer — play against an AI opponent
- VS Player — local 2-player mode
- Persistent scoreboard across rounds
- Highlighted winning cells
- "Back to Menu" and "Reset Game" controls

#### 🐍 The Snake Game
| The classic snake experience with levels and dynamic difficulty.
- White food — worth 100 points; Blue food — worth 200 points (30% spawn chance)
- Speed increases with every food eaten, keeping the challenge alive
- Level 2 unlocks at 500 points — random wall obstacles appear on the board
- Pause anytime with Space or the overlay button; resume right where you left off
- "Replay" restarts the game • "Exit" returns to the Games menu

### ✨ Features
- 🎨 Retro-purple dark theme with glowing neon effects throughout
- 🏠 Animated landing page — each letter of "ASOBI" bounces independently
- 🎠 Carousel game browser — center-focus card with blur/scale effects on inactive cards
- 🧭 Explore page — with Marketplace and Social Hub cards (in development)
- 👥 About / Team page — dynamically rendered member cards with avatars, roles, skills & social links
- 📱 Responsive design — mobile-friendly layouts across all pages
- 🔡 Custom Minecraft font + Press Start 2P for that classic game feel


### 🛠️ Tech Stack
|     Technology     |     Usage    |
|--------------------|---------------|
| HTML5| Page structure and game layout|
|  CSS3 | Animations, gradients, responsice design |
| JavaScript | Game logic, DOM manipulation, dynamic renbdering |
| Google Fonts | Press Start 2P (titles) |
| Custom Font | Minecraft TTF (UI Text) |
| GitHub Actions | Static site deployment |

### 🚀 Getting Started
No build tools. No installs. Just open and play.
```bash
# Clone the repo
git clone https://github.com/RujalRazz/mini-game-portal.git

# Navigate into the project
cd mini-game-portal


# Open in your browser
open index.html
```
Or simply visit the live deployment if available via GitHub Pages.

### 👥 Team
Built with 💜 by the ASOBI team for a web development event.
Check out the About page inside the portal to meet the team!
<img width="1280" height="611" alt="image" src="https://github.com/user-attachments/assets/ae8ee26b-5f83-4c7e-95c7-64d3bf453372" />



<div align="center">
Copyright © 2026 ASOBI. All rights reserved. <br>
Love for the mini games. 🎮
</div>
