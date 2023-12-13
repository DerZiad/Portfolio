import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-specialskills',
  templateUrl: './specialskills.component.html',
  styleUrls: ['./specialskills.component.css']
})
export class SpecialskillsComponent implements OnInit {

  robotics: string[] = ['Arduino C/C++', 'Raspberry Administration']


  data = {
    "Web Development": {
      "Knowledge": ['Software Development', 'Web Design', 'Web Security', 'MVC Architecture', 'REST API', 'Microservices'],
      "Programming Language": ['Java', 'JavaScript', 'SQL', 'JSP', 'Python', 'TypeScript', 'R', 'C/C++', 'Assembly'],
      'Scripting Language': ["HTML", "CSS", "JavaScript", "TypeScript", "XML (XPath)", "AJAX", "JSON", "JQuery", "Bash"],
      'Frameworks': ['Spring', 'JEE', 'JSF', 'Hibernate/JPA', 'EJB', 'Bootstrap', 'Django', 'Angular 12'],
      "Libraries": ['OpenMP', 'MPI', 'JavaThread', 'Selenium', 'Canvas', 'OpenCV', 'ModbusTCP', 'JSTL', 'Java NIO/IO', 'Java Socket', 'Java Swing', 'Java FX'],
      'IDE': ['Eclipse', 'Intellij', 'STS', 'Webstorm', 'VS Code', 'PyCharm', 'Android Studio', 'Entreprise Architect', 'Postman'],
      'Database Management': ['Oracle 11g', 'MySQL', 'PostgreSQL', 'MariaDB'],
      'Modeling Language': ['UML', 'Design Patterns', 'Merise'],
      'packageManagers': ['Maven', 'APT', 'NPM', 'pip'],
      'Tools And CICD': ['Junit', 'Gitlab'],
      'Version Control': ['Git'],
      'Server Knowledge': ['Apache Tomcat'],
    },
    'AI Technologies': {
      "Knowledge": ['Machine Learning (Supervised and Unsupervised Learning)', 'Deep Learning', 'Computer Vision'],
      "Programming Language": ['Python', 'Java'],
      "Libraries": ['Python Multithreading', 'Python Socket', 'JavaThread', 'Pandas', 'Numpy', 'OpenCV', 'Seaborn', 'Matplotlib', 'Gapminder'],
      'Frameworks': ['Tensorflow', 'Scikit-Learn'],
      'IDE': ['Jupyter', 'VS Code', 'PyCharm']
    },
    'Pentesting Skills / Administrations skills': {
      "Knowledge": ['Create Trojan (DOCx,Exe,py,jsp,jar,java,ps1,...', 'Scan for vulnerabilities using Burpsuite,Nmap,...', 'Secure Authentication Process', 'Network attack using ARPs', 'Cryptography Symetric/Asymetric \\ Hashing',
        'Crack Password'
      ],
      "Software": ['Ettercap', 'Metasploit', 'Burpsuite', 'Wireshark', 'Whatweb', 'Nmap', 'SQLmap', 'Beef XSS', 'Hydra', 'JohnTheRipper', 'Hashcat', 'Armitage', 'Cobaltstrike', 'FatRAT', 'Setoolkit', 'sslstrip']
      ,
      "Programming Language": ['Python', 'Java', 'C/C++',],
      "Scripting Language": ['Bash']
      ,
      'Frameworks': ['Tensorflow', 'Scikit-Learn']
      ,
      'Operating Systems': ['Ubuntu', 'Kali Linux', 'Raspberry OS', 'Windows', 'Ubuntu Server'],
      'Virtual Machine Configurations': ['VMware Station', 'Virtual Box'],
      'Server Configuration': ['DNS Server', 'OpenSSH', 'vsFTPd', 'Routing', 'Apache2']
    },
  }


  constructor() {
  }

  ngOnInit()
    :
    void {
  }

  getDomainList(): string[] {
    return Object.keys(this.data)
  }

  getDomainTypes(domain: string) {
    // @ts-ignore
    return Object.keys(this.data).indexOf(domain) != -1 ? Object.keys(this.data[domain]) : null
  }

  getElement(domain: string, typeTool: string): string[] {
    // @ts-ignore
    return this.data[domain][typeTool]
  }


}
