import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-specialskills',
  templateUrl: './specialskills.component.html',
  styleUrls: ['./specialskills.component.css']
})
export class SpecialskillsComponent implements OnInit {

  robotics: string[] = ['Arduino C/C++', 'Raspberry Administration']


  data = {
    "Software Development": {
      "Knowledge": [['Back-end Development', 5], ['Front-end Development', 4], ['Web Security', 4], ['MVC Architecture', 5], ['REST API', 5], ['Distributed System Programming', 3], ['Design Patterns', 4]],
      "Programming Language": [['Java', 5], ['Kotlin', 4], ['JavaScript', 5],['Python',4], ['TypeScript',4], ['C/C++',3], ['Assembly',2]],
      "Libraries":[['OpenMP', 3], ['MPI', 3], ['JavaThread', 4], ['ModbusTCP', 4], ['Java Socket', 5], ['Java Awt / Swing / FX', 4]],
      'Back-end Frameworks': [['Spring Boot',5], ['JEE',4], ['Hibernate/JPA',5], ['Django',3]],
      'Back-end Libraries': [['Spring Modules',5], ['Selenium', 4],['JUnit 5',5]],
      "Front-end Frameworks":[["React Native for Android / IOS",3],["Angular",5],['Bootstrap',5], ['Canvas', 5]],
      'Front-end Libraries and technologies': [["Java Server Pages",5],["JSTL",5],["JQuery", 4], ["AJAX", 4],["HTML5", 5], ["CSS3", 5]],
      'Scripting Languages': [["Bash",5]],
      'IDE': [['Eclipse', 5], ['Intellij', 4], ['STS', 5], ['Webstorm', 5], ['VS Code', 5], ['PyCharm', 4], ['Android Studio', 3], ['Entreprise Architect', 5], ['Postman', 4]],
      'Database Management': [['Oracle DB', 3], ['MySQL', 5], ['PostgreSQL', 4], ['MariaDB', 3],['SQL',4]],
      'Modeling Language': [['UML', 5],['Merise',5]],
      'Automation Tools / Package Manager': [['Maven for Java',5], ['NodeJS npm',4], ['Python PIP',5],['Gradle for Java',1]],
      'Tools And CI/CD': [['Gitlab',3]],
      'Version Control': [['Git',5]],
      'Servers': [['Apache Tomcat',5]]
    },
    'AI Technologies': {
      "Knowledge": [['Machine Learning',4], ['Deep Learning',3], ['Computer Vision',3]],
      "Programming Language": [['Python',4], ['R',2]],
      "Libraries": [['Pandas',4], ['Numpy',4], ['OpenCV',3], ['Seaborn',2], ['Matplotlib',5], ['Gapminder',2]],
      'Frameworks': [['Tensorflow',3], ['Scikit-Learn',4]],
      'IDE': [['Jupyter',5], ['VS Code',3], ['PyCharm',5]]
    }
  }
  /*
  *
  * ,
    'Pentesting Skills / Administrations skills': {
      "Knowledge": [['Create Trojan (DOCx,Exe,py,jsp,jar,java,ps1,...', 4], 'Scan for vulnerabilities using Burpsuite,Nmap,...', 'Secure Authentication Process', 'Network attack using ARPs', 'Cryptography Symetric/Asymetric \\ Hashing',
        'Crack Password'
      ],
      "Software": ['Ettercap', 'Metasploit', 'Burpsuite', 'Wireshark', 'Whatweb', 'Nmap', 'SQLmap', 'Beef XSS', 'Hydra', 'JohnTheRipper', 'Hashcat', 'Armitage', 'Cobaltstrike', 'FatRAT', 'Setoolkit', 'sslstrip']
      ,
      "Programming Language": [['Python', 5], ['Java', 5], ['C/C++', 4]],
      "Scripting Language": [['Bash', 5]]
      ,
      'Frameworks': [['Tensorflow', 4], ['Scikit-Learn', 5]]
      ,
      'Operating Systems': [['Ubuntu', 5], ['Kali Linux', 5], ['Raspberry OS', 3], ['Windows', 4], ['Ubuntu Server', 4]],
      'Virtual Machine Configurations': [['VMware Station', 4], ['Virtual Box', 5]],
      'Server Configuration': [['DNS Server Configuration', 5], ['OpenSSH', 5], ['vsFTPd', 5], ['Routing', 5], ['Apache2', 5]]
    },
  * */

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

  star(shadow: string | number) {
    var stars_string = ""
    for (var i: number = 1; i <= parseInt(typeof shadow === "string" ? shadow : "" + shadow, 10); i++) {
      stars_string += "⭐️"
    }
    return stars_string
  }


}
