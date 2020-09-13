import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-processing-projects',
  templateUrl: './image-processing-projects.component.html',
  styleUrls: ['./image-processing-projects.component.css']
})
export class ImageProcessingProjectsComponent implements OnInit {
  tech_stack = [
    "Python 3",
    "OpenCV",
    "Numpy",
    "PySerial",
    "Path Planning",
    "Arduino"
  ]
  project_info = [
    {
      "github-link": "https://github.com/adipro7/Pixelate-2019",
      "image": "../../assets/images/pixelate2019.jpg",
      "title": "Autonomous Path Mapping Robot",
      "summary": ["Be autonomous, solve a Ludo for real!",
                  "Let's find shortest paths-BFS.",
      ],
      "tech-stack": [
        "Python",
        "OpenCV",
        "Numpy",
        "PySerial",
        "Arduino"
      ]
    },
    {
      "github-link": "https://github.com/adipro7/Pixelate-2020",
      "image": "../../assets/images/pixelate2020.jpeg",
      "title": "Autonomous Path Mapping Robot with Grabbing Mechanism",
      "summary": ["Let's do autonomous movement and grabbing!",
                  "Dijkstra is what it wants."
      ],
      "tech-stack": [
        "Python",
        "OpenCV",
        "Numpy",
        "PySerial",
        "Arduino"
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
