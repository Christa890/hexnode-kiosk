import singleApp from '../assets/images/single-app-kios-image.jpeg';
import multiApp from '../assets/images/multi-app-kiosk-image.jpeg';
import webKios from '../assets/images/web-based-kiosk-image.jpeg';
import digitalKios from '../assets/images/digital-signage-kiosk-image.jpeg';
import asamKios from '../assets/images/asam-kiosk-image.jpeg';

export const  modesData = [
    {
      id: 1,
      name:"Single App Kiosk",
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      description: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices."
      ],
      imgSrc: singleApp
    },
    {
        id: 2,
        name:"Multi App Kiosk",
        heading: "Elevate efficiency with Multi-App Kiosk",
        description: [
            "Limit device access to approved apps, ensuring focus and productivity.",
            "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
            "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
            "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode."
              ],
        imgSrc: multiApp
      },
      {
        id: 3,
        name:"web-based Kiosk",
        heading: "Explore the new way to manage web apps and websites",
        description: [
            "Limit device access to approved apps, ensuring focus and productivity.",
            "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
            "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
            "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode." 
       ],
        imgSrc: webKios
      },
      {
        id: 4,
        name:"Digital signages",
        heading: "Capture attention with Digital Signage Kiosks",
        description: [
            "Transform your devices into captivating digital signage kiosks that grab attention.",
            "Engage your audience with vibrant images and seamless video streaming.",
            "Customize media files with trimming, muting, and background music.",
            "Advertise and show off your brand aesthetics to attract customers in different ways.",
          ],
        imgSrc: digitalKios
      },
      {
        id: 5,
        name:"ASAM kiosk",
        heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
        description: [
            "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
            "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
            "Create focused, efficient and secure digital environments to match your requirements.",
            "Configure ASAM effortlessly and elevate your user experience like never before."
        ],
        imgSrc: asamKios
      }]