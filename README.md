# ⌨️ Keyboard Key Code Detector

This mini project allows users to press any key on their keyboard and instantly see the **key**, **key code**, and **code value** displayed on the screen.

It's a great beginner project for understanding keyboard events, event objects, and DOM manipulation using **HTML**, **CSS**, and **JavaScript**.

## 🌟 Features

- 🔍 Displays the key pressed by the user
- 🔢 Shows `event.key`, `event.keyCode`, and `event.code`
- ⚡ Instant response to keypresses
- 🎨 Simple and responsive design
- 🧠 Great for learning about keyboard events and event objects
- 🔌 Pure HTML/CSS/JS – no libraries or frameworks

## 🚀 Live Demo

👉 [**Try it Live**](https://nirdhum.github.io/keylogger/)

## 🛠️ Technologies Used

- **HTML5** – Basic layout structure
- **CSS3** – Styling and responsive design
- **JavaScript (ES6)** – Event handling and DOM manipulation

## 📁 Project Structure

```
keylogger/
├── index.html # HTML structure
├── style.css # Styling and layout
├── script.js # JavaScript logic
└── README.md # Project documentation
```

## ⚙️ How It Works

1. Listens for the `keydown` event on the entire document.
2. Extracts key data using the event object properties:
   - `event.key`
   - `event.code`
   - `event.keyCode` (deprecated but commonly used)
3. Dynamically updates the content on the page to display the results.

## 🧩 Educational Value

This project helps you learn:

- JavaScript event handling (keydown)
- Working with the KeyboardEvent object
- Real-time DOM updates
- Keyboard accessibility and key identifiers

## 🔧 Setup & Installation

To run this project locally:

- Clone the repository git clone https://github.com/nirdhum/keylogger.git
- Navigate into the project directory
- Open index.html in your browser Or
- simply double-click the index.html file.

## 🙌 Contributing

Contributions and improvements are welcome!

- Fork the repo
- Create a new branch
- Make your changes
- Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Nirdhum

## ⭐️ Show Your Support

If you found this project helpful or interesting, please consider giving it a ⭐️ on GitHub!
