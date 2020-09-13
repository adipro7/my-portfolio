import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-dev-projects',
  templateUrl: './web-dev-projects.component.html',
  styleUrls: ['./web-dev-projects.component.css']
})
export class WebDevProjectsComponent implements OnInit {
  tech_stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Angular 9",
    "Express JS",
    "Nodejs",
    "AWS EC2 Image Instance"
  ]
  project_info = [
    {
      "github-link": "https://github.com/adipro7/blockbusterlive-angular-expressjs",
      "image": "../../assets/images/msw-preview.png",
      "title": "BlockBusterLive",
      "summary": ["Find everything about your favourite movies and  TV Shows!",
                  "Open Movie Database [OMDB] API is used to get info about the movie.",
                  ],
      "tech-stack": [
        "Angular 9",
        "Expressjs",
        "Nodejs",
        "HTML5",
        "CSS3",
        "AWS EC2 Image Instance"
      ]
    },
    {
      "github-link": "https://github.com/adipro7/my-portfolio",
      "image": "../../assets/images/portfolio-preview.png",
      "title": "Portfolio Website",
      "summary": ["Find everything about me, my projects, skills, interview experiences and much more!",
                  "Why hardcode HTML when you have Angular?"
                  ],
      "tech-stack": [
        "Angular 9",
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
    },
    {
      "github-link": "https://github.com/adipro7/Web-page-with-HTML-CSS",
      "image": "../../assets/images/game-web-preview.png",
      "title": "Destructor-100",
      "summary": ["Find everything about Windows, Android and Play Station Games!",
                  "An entry point into the world of Web Development"
                  ],
      "tech-stack": [
        "HTML5",
        "CSS3"
      ]
    }
  ];
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }
  onClick() {
    this.router.navigate(['/home']);
  }

}
