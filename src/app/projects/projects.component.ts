import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  selectedTypeOfProject: string = "Web"

  showData = {}
  showDataActive: boolean = false

  data = [
    {
      "name": "Sound Manager",
      "type": "AI",
      "description": "The project is an innovative artificial intelligence (AI) solution that enables users to adjust the volume of their devices using two fingers. With this project, sound levels can be effortlessly increased or decreased without the need for complicated settings or menus.\n" +
        "\n" +
        "The interface is intuitive and easy to use, allowing users to enjoy uninterrupted audio experiences. The technology utilizes AI algorithms that enable it to learn and adapt to user preferences over time, making it even more effective at predicting desired sound levels.\n" +
        "\n" +
        "The project represents a significant development in the field of AI and user interface design. Its potential for widespread adoption is substantial, and it has the capacity to revolutionize the way we interact with our devices.",
      "link": "https://github.com/DerZiad/SoundManager",
      "image": "/assets/img/project/aisurveillance.webp",
      "data": {
        "Context": "Deployment of AI Models",
        "Date": "Summer 2022",
        "Type": "Personal Project"
      },
      "exist": true,
      "demo_exist": false,
      "technologies": [['Python 🐍',5], ['Mediapipe Library 👁️‍🗨️',5], ['OpenCV 📷',5], ['Numpy 🧮',5],["Pandas 🐼",5]],
    }, {
      "name": "Pentest Me",
      "type": "Security",
      "description": "PentestMe is a website designed for ethical hackers to learn how to exploit and protect themselves from XSS, SQL, Upload Shell, Bruteforce. The site offers a variety of exercises and tutorials aimed at helping users understand the different techniques and tools used in pentesting websites.\n" +
        "\n" +
        "PentestMe is an excellent resource for anyone interested in ethical hacking and improving their security skills. The website offers extensive materials and tutorials to help understand the concepts and apply the techniques in practice. In addition, the website also has tools and resources to help users protect themselves from attacks and make their own websites more secure."
      ,
      "link": "https://github.com/DerZiad/PentestMe",
      "data": {
        "Context": "Web Projects to learn ethical attacks",
        "Date": "Winter 2022",
        "Type": "University Project"
      },
      "image": "/assets/img/project/pentestme.avif",
      "exist": true,
      "demo_exist": false,
      "technologies": [['Java 11 🚀', 5], ['JEE 🔧', 5], ['MySQL 8 🐬', 5], ['HTML 🌐', 5], ["CSS 🌐", 5], ['Javascript 🌐', 5], ['JSTL 🌐', 5], ['Python 🐍', 5], ['Metasploit-MSFVenom 💻', 3], ['Bruteforce 💻', 5], ['SQLMap 💻', 3], ['JSQL 💻', 3], ['Accunetix 💻', 2], ['Git 🔗', 5]]
    },
    {
      "name": "CVE-2022-30190",
      "type": "Security",
      "description": "Follina represents a critical security vulnerability uncovered within Microsoft Office products, exposing them to potential remote code execution (RCE) attacks. Microsoft has issued security updates to address the Follina vulnerability, but numerous unpatched versions of Microsoft Office remain susceptible. Follina has been assigned the Common Vulnerabilities and Exposures (CVE) number CVE-2022-30190 for tracking purposes by NIST.Threat actors exploit Follina through phishing campaigns, tricking targeted users into opening Office documents with malicious web-links leading to attacker-controlled online resources. These embedded links exploit the \"Microsoft Support Diagnostic Tool\" (MSDT) protocol, which is typically used for system crash reporting but can be manipulated to execute attacker-supplied PowerShell commands without user interaction.The Follina exploit can be triggered when a user opens a Microsoft Office document containing malware delivered via email, online channels, or even through USB devices. Notably, the malicious code could execute via the Preview Tab in Explorer if the file is in .rtf format, even without direct user interaction. The malware payload is activated through the MSDT protocol.Follina was first revealed as a zero-day vulnerability on May 27, 2022, in a tweet by @nas_sec. Security researchers detected the first recorded malware sample exploiting Follina on April 7, 2022, though it is believed that the flaw was exploited earlier. Subsequently, cybersecurity researchers noticed a surge in phishing campaigns using Follina in attachments, and the vulnerability continues to pose a significant threat to unpatched systems targeted in phishing attacks."
      ,
      "link": "https://github.com/DerZiad/CVE-2022-30190",
      "data": {
        "Context": "An implementation of CVE-2022-30190",
        "Date": "Summer 2022",
        "Type": "Personal Project"
      },
      "image": "/assets/img/project/follina.png",
      "exist": true,
      "demo_exist": true,
      "video_link": "https://www.youtube.com/watch?v=ngebrUW-MEs&t=826s",
      "technologies": [['Java 17 🚀', 5], ["Spring Boot 🔧", 5], ['Spring Data 🛠️', 5], ['Spring Security 🔒', 5], ['Spring Mail 📧', 5], ['Spring Web / Rest 🌐', 5], ['Java Servlet Pages 📄', 5], ['MySQL 8 🐬', 5], ['HTML 🌐', 5], ["CSS 🌐", 5], ['Javascript 🌐', 5], ['JSTL 🌐', 5], ['Git 🔗', 5]]
    },
    {
      "name": "PVeCarport",
      "type": "Web",
      "description": "The PV-eCarPort project is an innovative initiative that seamlessly integrates and manages the charging infrastructure for electric vehicles (eCars) and electric bikes (eBikes) at the SIJ company. The project’s primary objective is to establish an advanced charging ecosystem that maximizes the utilization of renewable energy sources, with a particular emphasis on solar power generated by photovoltaic (PV) panels. By leveraging cutting-edge technology, real-time monitoring of critical charging parameters is enabled, providing valuable insights for energy management, charging schedules, and operational efficiency. The project also incorporates predictions for PV system power using dymola, ensuring accuracy and reliability. Additionally, user-friendly interfaces and an API integrated with an iOS application enhance user experience, enabling easy registration, login, and convenient access to charging stations. With its focus on renewable energy utilization, real-time monitoring, and user-friendly interfaces, the PV-eCarPort project aims to revolutionize the charging infrastructure for eCars and eBikes, promoting sustainability and environmental responsibility.",
      "link": "",
      "image": "/assets/img/project/ecar.png",
      "exist": false,
      "demo_exist": false,
      "technologies":[['Java 17 🚀', 5], ["Angular 🔧",5],['Typescript 🌐',5],["Spring Boot 🔧", 5], ['Spring Data 🛠️', 5], ['Spring Security 🔒', 5], ['Spring Mail 📧', 5], ['Spring Web / Rest 🌐', 5], ['Java Servlet Pages 📄', 5], ['MySQL 8 🐬', 5], ['HTML 🌐', 5], ["CSS 🌐", 5], ['Javascript 🌐', 5], ['JSTL 🌐', 5], ['Git 🔗', 5]],
      "data": {
        "Context": "Reactive Web interface to control charging stations",
        "Date": "2023.02.01 - 2023.05.31",
        "Type": "Professional Experience With SIJ"
      },
    },
    {
      "name": "E-Learning",
      "type": "Web",
      "description": "During my third semester at the University Moulay Ismail, I collaborated with two other students on a project aimed at helping people learn German more effectively. We developed a platform that offers exercises for reading, listening, grammar, and writing. Users can interact and correct each other's work, making the learning process more engaging and efficient.",
      "link": "https://github.com/DerZiad/elearning",
      "image": "/assets/img/project/elearning.avif",
      "exist": true,
      "demo_exist": false,
      "technologies": [["Django 🌐", 5], ["Python 🐍", 5], ["Java Script 💻", 4], ["Html 🌐", 4], ["CSS 🌐", 3], ["MySQL 🐬", 5], ["Anaconda 🐍", 2], ['Git 🔗', 5]],
      "data": {
        "Context": "Reactive Web interface for German Learning",
        "Date": "Winter 2021",
        "Type": "University Project"
      },
    },
    {
      "name": "Travel Agency",
      "type": "Web",
      "description": "For my 5th semester in Morocco, our professor has assigned a project to us that resembles Booking.com. We are expected to develop a platform that facilitates decision-making for travel and hotel reservations. This will involve implementing features such as travel itineraries, hotel room booking, and reservation management. The aim of this project is to apply our theoretical knowledge in a practical setting and develop skills in project management, software engineering, and problem-solving. Throughout the project, we will be required to conduct market research, develop user interfaces, and perform testing and quality assurance. We look forward to the opportunity to work on this challenging project and gain valuable skills and experience in the process.",
      "link": "https://github.com/DerZiad/TravelAgency",
      "image": "/assets/img/project/travel.avif",
      "exist": true,
      "demo_exist": false,
      "technologies": [['Java 17 🚀', 5], ["Spring Boot 🔧", 5], ['Spring Data 🛠️', 5], ['Spring Security 🔒', 5], ['Spring Mail 📧', 5], ['Spring Web / Rest 🌐', 5], ['Java Servlet Pages 📄', 5]
        , ['HTML5 🌐', 5], ['CSS3 🌐', 5], ['JavaScript 💻', 5], ['JQuery 💻', 5], ['Sonar Cube 🔍', 3], ['Git 🔗', 5], ['Docker 🐳', 5], ['Fasterxml jackson 📄', 4], ['MySQL 🐬', 5]],
      "data": {
        "Context": "Website to control Travels including Hotels, Places, organized travels",
        "Date": "Winter 2022",
        "Type": "University Project"
      },
    },
    {
      "name": "Study Paper of diabetics",
      "type": "AI",
      "description": "In the context of my 5th semester in Morocco, the university proposed an artificial intelligence project to us, aimed at assisting us in the field. The project involves creating machine learning and deep learning models to classify patients as either diabetic or non-diabetic, and making decisions to select the best model among several options.",
      "link": "https://github.com/DerZiad/Diabetic",
      "image": "/assets/img/project/aibrain.jpg",
      "exist": true,
      "demo_exist": false,
      "technologies": [["Tensorflow", 5], ['Scikit-learn', 5],["Pandas 🐼",5], ['Python', 5], ['Jupyter', 5], ["PyQT5", 5], ['Git', 5]],
      "data": {
        "Context": "Perform data science and data analytics of people.",
        "Date": "Winter 2022",
        "Type": "University Project"
      },
    },
    {}


  ]


  constructor() {
  }

  goToLink(dataEntity: any): void {
    document.location.replace(dataEntity.link)
  }

  hover(dataEntity: any, test: boolean): void {
    if (test) {
      var element = document.getElementById(dataEntity.name)
      if (element != null) {
        element.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('" + dataEntity.image + "');"
      }
    } else {
      var element = document.getElementById(dataEntity.name)
      if (element != null) {
        element.style.backgroundImage = "url('" + dataEntity.image + "');"
      }
    }
  }

  ngOnInit(): void {

  }

  isActive(index: number) {
    if (index == 0)
      return "active"
    else
      return ""
  }

  isAreaCurrent(index: number) {
    if (index == 0)
      return true
    else
      return false
  }

  getKeys(dict: any): string[] {
    return Object.keys(dict)
  }

  getValue(dict: any, key: string): string {
    return dict[key]
  }

  filter(dict: any) {
    return dict.filter((element: any) => element.type === this.selectedTypeOfProject)
  }

  showMore(dataEntity: any) {
    this.showDataActive = true
    this.showData = dataEntity

  }

  onChildCloseChanged(close: boolean) {
    this.showDataActive = close;
  }

  isPhone() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
  }
}
