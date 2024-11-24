# Hexnode Kiosk Application  

A responsive web application replicating the **Hexnode Kiosk Solution** page, built with **React**, **JavaScript**, and **Tailwind CSS**, following a **mobile-first approach**.  

## Features  

- **Responsive Design**: Optimized for various screen sizes using the mobile-first approach.  
- **Modern Tech Stack**: Built with React for UI, Tailwind CSS for styling, and JavaScript for functionality.  
- **Dynamic Data Management**: Centralized data stored in a `data` folder for easier updates and scalability.  
- **Component-based Architecture**: Reusable, modular components for scalability and maintainability.  
- **Custom Styling**: Tailored UI that matches the Hexnode Kiosk Solution page design.  
- **Accessibility**: Ensures an inclusive user experience with proper semantic elements and ARIA attributes.  
- **Performance Optimization**: Strategies such as lazy-loading images and optimized CSS for faster load times.  

## Project Structure  

```plaintext
src  
├── assets               # Images and icons  
├── components           # React components  
│   ├── Header           # Header section  
│   ├── HeroSection      # Hero section  
│   ├── Modes            # Modes section  
│   ├── Features         # Features section  
│   ├── Testimonial      # Testimonial section  
│   ├── Platform         # Platform section  
│   └── Footer           # Footer section  
├── data                 # Centralized data storage  
│   ├── featuresData.js  # Features data  
│   ├── linksData.js     # Links for navigation  
│   ├── logoData.js      # Logo details  
│   ├── modeData.js      # Modes data  
│   ├── platformData.js  # Platforms data  
│   └── testimonialData.js # Testimonials data  
├── styles               # Tailwind CSS configuration  
├── App.js               # Main application component  
├── index.js             # Application entry point  
└── README.md            # Project documentation  
