import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  robotics: string[] = ['Arduino C/C++', 'Raspberry Administration'];

  data = {
    "Software Development": {
        "Knowledge": [
            ['Back-end Development', 4],
            ['Front-end Development', 3],
            ['Web Security', 2],
            ['REST API', 3]
        ],
        "Programming Languages": [
            ['Java', 3.5],
            ['Kotlin', 2],
            ['JavaScript', 2.5],
            ['TypeScript', 2.5],
            ['Python', 4],
            ['C/C++', 2],
            ['Assembly', 1],
            ['Bash', 2.5]
        ],
        "Frameworks": [
            ['Spring / Spring Cloud', 4],
            ['JEE', 3],
            ['Django', 2],
            ['Angular 13', 3],
            ['Bootstrap', 2.5]
        ],
        "Libraries and Technologies": [
            ['JSP / JSTL', 4],
            ['jQuery', 2],
            ['HTML / CSS', 5],
            ['Canvas Drawing in Code', 2]
        ],
        "Testing Tools": [
            ['JUnit 5', 3.5],
            ['Selenium', 3],
            ['Mockito', 2]
        ],
        "IDE / Tools": [
            ['Eclipse / STS', 4.5],
            ['IntelliJ', 3.5],
            ['WebStorm', 3],
            ['PyCharm', 3],
            ['Postman', 2.5]
        ],
        "Databases": [
            ['MySQL', 3],
            ['Oracle DB', 3],
            ['SQL Syntax', 4]
        ],
        "Modeling Languages": [
            ['UML (Software Enterprise Architect)', 4],
            ['Merise', 3]
        ],
        "DevOps / Tools": [
            ['Git', 4],
            ['GitHub Workflows', 2],
            ['Docker / Docker Compose', 3],
            ['Jenkins (Usage Only)', 1],
            ['Maven', 3],
            ['npm (NodeJS)', 3],
            ['pip (Python)', 2]
        ]
    }
}


  constructor() { }

  ngOnInit(): void { }

  getDomainList(): string[] {
    return Object.keys(this.data);
  }

  getDomainTypes(domain: string) {
    // safer retrieval of keys for a domain
    // @ts-ignore
    return this.data[domain] ? Object.keys(this.data[domain]) : [];
  }

  getElement(domain: string, typeTool: string): string[] {
    // @ts-ignore
    return this.data[domain] && this.data[domain][typeTool] ? this.data[domain][typeTool] : [];
  }

  // convert 1..5 scale -> percentage for progress bar
  skillPercent(score: number | string): number {
    const s = typeof score === "string" ? parseInt(score, 10) : score;
    if (isNaN(s)) { return 0; }
    return Math.max(0, Math.min(100, Math.round((s / 5) * 100)));
  }

  // small label for tooltip or accessibility (e.g., 'Expert', 'Intermediate')
  ratingLabel(score: number | string): string {
    const s = typeof score === "string" ? parseInt(score, 10) : score;
    if (s >= 5) return 'Expert';
    if (s >= 4) return 'Advanced';
    if (s >= 3) return 'Intermediate';
    if (s >= 2) return 'Beginner';
    return 'Novice';
  }

  // keep star fallback if needed
  star(shadow: string | number) {
    var stars_string = "";
    for (var i: number = 1; i <= parseInt(typeof shadow === "string" ? shadow : "" + shadow, 10); i++) {
      stars_string += "⭐️";
    }
    return stars_string;
  }

}
